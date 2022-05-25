package com.mightyjava.service.impl;

import com.mightyjava.service.OTPService;
import com.google.common.cache.LoadingCache;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

@Service
public class OTPServiceImpl implements OTPService {

    private static final Integer EXPIRE_MINS = 5;
    private LoadingCache otpCache;

    public OTPServiceImpl() {
        super();
        otpCache = CacheBuilder.newBuilder().
                expireAfterWrite(EXPIRE_MINS, TimeUnit.MINUTES)
                .build(new CacheLoader<String, Integer>() {
                    public Integer load(String mobileNo) {
                        return 0;
                    }
                });
    }

    @Override
    public boolean generateOTP(String mobileNo) {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        otpCache.put(mobileNo, otp);
        sendOTPSms("VDJ1muqjMtm6puO4",
                otp + " is your One Time Password(OTP) for Merit Access. This OTP is valid till 120 sec - CHARUSAT",
                "CHRUST",
                mobileNo);
        return true;
    }

    @Override
    public boolean validateOTP(String mobileNo, int clientOTP) {
        try {
            if (Integer.getInteger(otpCache.get(mobileNo).toString()) == clientOTP) {
                return true;
            }
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public void clearOTP(String key) {
        otpCache.invalidate(key);
    }

    public static String sendOTPSms(String api, String msg, String snd, String mobileNo) {
        try {
            // Construct data

            String apiKey = "apikey=" + api;
            String message = "&message=" + msg;
            String sender = "&senderid=" + snd;
            String numbers = "&number=" + mobileNo;

            // Send data
            HttpURLConnection conn = (HttpURLConnection) new URL("https://login.smsforyou.biz/V2/http-api.php?").openConnection();
            String data = apiKey + numbers + message + sender;
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
            conn.getOutputStream().write(data.getBytes("UTF-8"));
            final BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            final StringBuffer stringBuffer = new StringBuffer();
            String line;
            while ((line = rd.readLine()) != null) {
                stringBuffer.append(line);
            }
            rd.close();

            return stringBuffer.toString();
        } catch (Exception e) {
            System.out.println("Error SMS "+e);
            return "Error "+e;
        }
    }
}

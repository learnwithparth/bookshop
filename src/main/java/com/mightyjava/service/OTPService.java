package com.mightyjava.service;

public interface OTPService {
    public boolean generateOTP(String key);
    public boolean validateOTP(String key, int clientOTP);
    public void clearOTP(String key);
}

package com.mightyjava.service;

public interface OTPService {
    public boolean generateOTP(String key, String email);
    public boolean validateOTP(String key, int clientOTP);
    public void clearOTP(String key);
}

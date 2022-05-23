package com.mightyjava.service;

import com.mightyjava.domain.Merit;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MeritService {
    List<Merit> findAll();
    Merit findAllByRegisteredEmail(String registeredEmail);
    Merit findAllByRegisteredMobile(String registeredMobile);

}

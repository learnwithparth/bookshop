package com.mightyjava.service;

import com.mightyjava.domain.Merit;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface MeritService {
    List<Merit> findAll();
    Merit findAllByRegisteredEmail(String registeredEmail);
    Merit findById(Long id);
    Merit findAllByRegisteredMobile(String registeredMobile);
    public Merit saveOrUpdate(Merit merit);
    public String deleteById(Long id);
    public List<Merit> saveAll(List<Merit> merits);
}

package com.mightyjava.service.impl;

import com.mightyjava.domain.Merit;
import com.mightyjava.repository.MeritRepository;
import com.mightyjava.service.MeritService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MeritServiceImpl implements MeritService {

    MeritRepository meritRepository;

    @Autowired
    public MeritServiceImpl(MeritRepository meritRepository) {
        this.meritRepository = meritRepository;
    }

    @Override
    public List<Merit> findAll() {
        return meritRepository.findAll();
    }

    @Override
    public Merit findAllByRegisteredEmail(String registeredEmail) {
        return meritRepository.findAllByRegisteredEmail(registeredEmail);
    }

    @Override
    public Merit findAllByRegisteredMobile(String registeredMobile) {
        meritCheckedUpdate(registeredMobile);
        return meritRepository.findAllByRegisteredMobile(registeredMobile);
    }
    @Transactional
    public void meritCheckedUpdate(String registeredMobile){
        Merit merit = meritRepository.findAllByRegisteredMobile(registeredMobile);
        merit.setMeritChecked(true);
        meritRepository.save(merit);
    }
}

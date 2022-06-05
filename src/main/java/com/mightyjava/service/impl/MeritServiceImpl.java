package com.mightyjava.service.impl;

import com.mightyjava.domain.Merit;
import com.mightyjava.repository.MeritRepository;
import com.mightyjava.service.MeritService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.UUID;

@Service
public class MeritServiceImpl implements MeritService {

    private MeritRepository meritRepository;

    @Autowired
    public MeritServiceImpl(MeritRepository meritRepository) {
        this.meritRepository = meritRepository;
    }

    @Override
    public Page<Merit> findAll(Pageable pageable) {
        return meritRepository.findAll(pageable);
    }

    @Override
    public Page<Merit> findAll(Pageable pageable, String searchText) {
        return meritRepository.findAllForSearch(pageable, searchText);
    }

    @Override
    public Merit findAllByRegisteredEmail(String registeredEmail) {
        return meritRepository.findAllByRegisteredEmail(registeredEmail);
    }

    @Override
    public Merit findById(Long id) {
        return meritRepository.findById(id).get();
    }

    @Override
    public Merit findAllByRegisteredMobile(String registeredMobile) {
        Merit merit = meritRepository.findAllByRegisteredMobile(registeredMobile);
        if (merit != null) {
            meritCheckedUpdate(registeredMobile);
        }
        return meritRepository.findAllByRegisteredMobile(registeredMobile);
    }

    @Override
    public Merit saveOrUpdate(Merit merit) {
        return meritRepository.save(merit);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            meritRepository.deleteById(id);
            jsonObject.put("message", "Merit deleted successfully");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }

//    @Override
//    public List<Merit> saveAll(List<Merit> merits) {
//        return meritRepository.saveAll(merits);
//    }

    @Transactional
    public void meritCheckedUpdate(String registeredMobile){
        Merit merit = meritRepository.findAllByRegisteredMobile(registeredMobile);
        merit.setMeritChecked(true);
        meritRepository.save(merit);
    }
}

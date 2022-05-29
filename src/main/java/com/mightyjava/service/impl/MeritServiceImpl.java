package com.mightyjava.service.impl;

import com.mightyjava.domain.Merit;
import com.mightyjava.repository.MeritRepository;
import com.mightyjava.service.MeritService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

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

    @Override
    public Merit saveOrUpdate(Merit merit) {
        return meritRepository.saveAndFlush(merit);
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

    @Override
    public List<Merit> saveAll(List<Merit> merits) {
        return meritRepository.saveAll(merits);
    }

    @Transactional
    public void meritCheckedUpdate(String registeredMobile){
        Merit merit = meritRepository.findAllByRegisteredMobile(registeredMobile);
        merit.setMeritChecked(true);
        meritRepository.save(merit);
    }
}

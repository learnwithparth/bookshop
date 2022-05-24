package com.mightyjava.controller;


import com.mightyjava.domain.Book;
import com.mightyjava.domain.Merit;
import com.mightyjava.exception.BookNotFoundException;
import com.mightyjava.resource.Resource;
import com.mightyjava.resource.impl.BookResourceImpl;
import com.mightyjava.service.MeritService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Path;
import java.util.*;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Slf4j
@RestController
@CrossOrigin(origins="http://localhost:3000")

public class MeritController  {

    MeritService meritService;

    @Autowired
    public MeritController(MeritService meritService) {
        this.meritService = meritService;
    }

    @RequestMapping("/merit")
    public ResponseEntity<Collection<Merit>> findAll() {
        log.info("Merit - findAll");
        List<Merit> merit = meritService.findAll();
//        List<Merit> response = new ArrayList<>();
//        merit.forEach(merit -> {
//            merit.add(linkTo(methodOn(BookResourceImpl.class).findById(merit.getId())).withSelfRel());
//            response.add(merit);
//        });
        return new ResponseEntity<>(merit, HttpStatus.OK);
    }




    @GetMapping("/merit/{mobileOrEmail}")
    public ResponseEntity<Merit> findByRegisteredMobileORRegisteredEmail(@PathVariable("mobileOrEmail") String id) {
        log.info("MeritController - Mobile no. " + id + " has inquired for merit no.");
        Merit meritObject = null;
        Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(id));
        List<Merit> temp = new ArrayList<>();
        temp.add(meritService.findAllByRegisteredMobile(id));
        return new ResponseEntity(temp, HttpStatus.OK);
    }



}

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

public class MeritController implements Resource<Merit> {

    MeritService meritService;

    @Autowired
    public MeritController(MeritService meritService) {
        this.meritService = meritService;
    }

    @RequestMapping("/merit")
    @Override
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

    @Override
    public ResponseEntity<Merit> findById(UUID id) {
        return null;
    }


    @GetMapping("/merit/{mobileOrEmail}")
    public ResponseEntity<Merit> findByRegisteredMobileORRegisteredEmail(@PathVariable("mobileOrEmail") String id) {
        log.info("MeritController - Mobile no. " + id + " has inquired for merit no.");
        Merit meritObject = null;
        Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(id));
        if (!merit.isPresent()) {
            throw new BookNotFoundException("Book not found");
        } else {
            meritObject = merit.get();
            meritObject.add(linkTo(methodOn(MeritController.class).findAll()).withSelfRel());
        }
        System.out.println(meritObject);
        return new ResponseEntity<>(meritObject, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Merit> save(Merit merit) {
        return null;
    }

    @Override
    public ResponseEntity<Merit> update(Merit merit) {
        return null;
    }

    @Override
    public ResponseEntity<Merit> patch(UUID id, Map<Object, Object> fields) {
        return null;
    }

    @Override
    public ResponseEntity<String> deleteById(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<String> invalid() {
        return null;
    }

}

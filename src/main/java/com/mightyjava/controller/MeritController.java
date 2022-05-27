package com.mightyjava.controller;


import com.mightyjava.domain.Book;
import com.mightyjava.domain.Merit;
import com.mightyjava.exception.BookNotFoundException;
import com.mightyjava.resource.Resource;
import com.mightyjava.resource.impl.BookResourceImpl;
import com.mightyjava.service.MeritService;
import com.mightyjava.service.OTPService;
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
    OTPService otpService;

    @Autowired
    public MeritController(MeritService meritService, OTPService otpService) {
        this.meritService = meritService; this.otpService=otpService;
    }

    @GetMapping("/merit/showAll")
    public ResponseEntity<Merit> findAll(){
        log.info("Fetching all merits");
        List<Merit> merit = meritService.findAll();
        return new ResponseEntity(merit, HttpStatus.OK);
    }

    @GetMapping("/merit/validateOTP")
    public ResponseEntity<Merit> validateOTP(@RequestParam("registeredMobile") String mobileNo,
                                                                         @RequestParam("otp") int otp) {
        log.info("MeritController - Mobile no. " + mobileNo + " has inquired for merit no. with OTP " + otp);
        Merit meritObject = null;
        Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(mobileNo));
        if(merit.isPresent() & otpService.validateOTP(mobileNo, otp)) {
            log.info(" Record found!!! " + mobileNo);
            List<Merit> temp = new ArrayList<>();
            temp.add(meritService.findAllByRegisteredMobile(mobileNo));
            log.info("Registered Mobile No is " + temp.get(0).getRegisteredMobile());
            return new ResponseEntity(temp, HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/merit/generateOTP/{mobileOrEmail}")
    public ResponseEntity<Merit> generateOTP(@PathVariable("mobileOrEmail") String mobileNo) {
        log.info("MeritController - Mobile no. " + mobileNo + " has inquired for merit no.");
        //Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(mobileNo));
        Merit merit = meritService.findAllByRegisteredMobile(mobileNo);
        if(merit != null & otpService.generateOTP(mobileNo)) {
            log.info("OTP sent to " + mobileNo);
                return new ResponseEntity("OTP sent to your register Mobile no. or Email address", HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }



}

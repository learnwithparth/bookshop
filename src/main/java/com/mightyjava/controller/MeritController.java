package com.mightyjava.controller;

import com.mightyjava.domain.Merit;
import com.mightyjava.service.MeritService;
import com.mightyjava.service.OTPService;
import com.mightyjava.service.impl.MailServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MeritController {

    MeritService meritService;
    OTPService otpService;


    @Autowired
    public MeritController(MeritService meritService, OTPService otpService) {
        this.meritService = meritService;
        this.otpService = otpService;
    }

    @GetMapping("/manage/merit/search/{searchText}")
    public ResponseEntity<Page<Merit>> findAll(Pageable pageable, @PathVariable("searchText") String searchText) {
        log.info("Fetching all merits");
        return new ResponseEntity(meritService.findAll(pageable, searchText), HttpStatus.OK);
    }

    @GetMapping("/manage/merit/showAll")
    public ResponseEntity<Page<Merit>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
        log.info("Fetching all merits");
        return new ResponseEntity(meritService.findAll(
                PageRequest.of(
                        pageNumber, pageSize,
                        sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
                )
        ), HttpStatus.OK);
    }


    @GetMapping("/student/merit/validateOTP")
    public ResponseEntity<Merit> validateOTP(@RequestParam("registeredMobile") String mobileNo,
                                             @RequestParam("otp") int otp) {
        log.info("MeritController - Mobile no. " + mobileNo + " has inquired for merit no. with OTP " + otp);
        Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(mobileNo));
        if (merit.isPresent() & otpService.validateOTP(mobileNo, otp)) {
            log.info(" Record found!!! " + mobileNo);
            List<Merit> temp = new ArrayList<>();
            temp.add(meritService.findAllByRegisteredMobile(mobileNo));
            log.info("Registered Mobile No is " + temp.get(0).getRegisteredMobile());
            return new ResponseEntity(temp, HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/student/merit/generateOTP/{mobileOrEmail}")
    public ResponseEntity<Merit> generateOTP(@PathVariable("mobileOrEmail") String mobileNo) {
        log.info("MeritController - Mobile no. " + mobileNo + " has inquired for merit no.");
        //Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(mobileNo));
        String emailAddress;
        Merit merit;
        if (mobileNo != null) {
            merit = meritService.findAllByRegisteredMobile(mobileNo);
            if (merit != null) {
                emailAddress = merit.getRegisteredEmail();
                otpService.generateOTP(mobileNo, emailAddress);
                log.info("OTP sent to " + mobileNo + ":" + emailAddress);
                return new ResponseEntity("OTP sent to your register Mobile no. and Email address.", HttpStatus.OK);
            } else {
                return new ResponseEntity("Mobile no. is not registered.", HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity("Input Valid Mobile no.", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/student/merit/{id}")
    public ResponseEntity<Merit> generateOTP(@PathVariable("id") Long id) {
        //log.info("MeritController - Mobile no. " + mobileNo + " has inquired for merit no.");
        //Optional<Merit> merit = Optional.ofNullable(meritService.findAllByRegisteredMobile(mobileNo));
        Merit merit = meritService.findById(id);
        return new ResponseEntity(merit, HttpStatus.OK);

    }

    @PostMapping("/manage/merit")
    public ResponseEntity<Merit> save(@RequestBody Merit merit) {
        //log.info(merit.);
        return new ResponseEntity<>(meritService.saveOrUpdate(merit), HttpStatus.CREATED);
    }

    @PutMapping("/manage/merit")
    public ResponseEntity<Merit> update(@RequestBody Merit merit) {
        log.info("Record no. " + merit.getId() + " is getting updated");
        return new ResponseEntity<>(meritService.saveOrUpdate(merit), HttpStatus.OK);
    }

    @DeleteMapping("/manage/merit/{meritId}")
    public ResponseEntity<String> deleteById(@PathVariable("meritId") Long id) {
        return new ResponseEntity<>(meritService.deleteById(id), HttpStatus.OK);
    }

}

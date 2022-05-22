package com.mightyjava.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class SubErrController implements org.springframework.boot.web.servlet.error.ErrorController {
    public static final String PATH = "/error";
    @Override
    public String getErrorPath() {
        return PATH;
    }

    @RequestMapping(PATH)
    public String error(){
        return "No Mapping Available";
    }
}

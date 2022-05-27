package com.mightyjava.domain;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.RepresentationModel;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Merit extends RepresentationModel<Merit>{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String applicationNo;
    private String registeredName;
    private String charusatMeritMarks;
    private String charusatMeritNo;
    private String acpcMeritNo;
    private String registeredMobile;
    private String registeredEmail;
    private Boolean meritChecked;

    public Merit(String applicationNo, String registeredName, String charusatMeritMarks, String charusatMeritNo, String acpcMeritNo, String registeredMobile, String registeredEmail) {

        this.applicationNo = applicationNo;
        this.registeredName = registeredName;
        this.charusatMeritMarks = charusatMeritMarks;
        this.charusatMeritNo = charusatMeritNo;
        this.acpcMeritNo = acpcMeritNo;
        this.registeredMobile = registeredMobile;
        this.registeredEmail = registeredEmail;
        this.meritChecked = meritChecked;
    }

    @JsonCreator
    public Merit(@JsonProperty("id") Long id, @JsonProperty("applicationNo") String applicationNo, @JsonProperty("registeredName") String registeredName, @JsonProperty("charusatMeritMarks") String charusatMeritMarks, @JsonProperty("charusatMeritNo") String charusatMeritNo, @JsonProperty("acpcMeritNo") String acpcMeritNo, @JsonProperty("registeredMobile") String registeredMobile, @JsonProperty("registeredEmail") String registeredEmail, @JsonProperty("meritChecked") Boolean meritChecked) {
        this.id = id;
        this.applicationNo = applicationNo;
        this.registeredName = registeredName;
        this.charusatMeritMarks = charusatMeritMarks;
        this.charusatMeritNo = charusatMeritNo;
        this.acpcMeritNo = acpcMeritNo;
        this.registeredMobile = registeredMobile;
        this.registeredEmail = registeredEmail;
        this.meritChecked = meritChecked;
    }


}

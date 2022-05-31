package com.mightyjava.repository;

import com.mightyjava.domain.Merit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MeritRepository extends PagingAndSortingRepository<Merit, Long> {
    Merit findAllByRegisteredEmail(@Param("registeredEmail") String registeredEmail);
    Merit findAllByRegisteredMobile(@Param("registeredMobile") String registeredMobile);
    List<Merit> findAll();
}

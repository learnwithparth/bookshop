package com.mightyjava.repository;

import com.mightyjava.domain.Merit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MeritRepository extends PagingAndSortingRepository<Merit, Long> {
    Merit findAllByRegisteredEmail(@Param("registeredEmail") String registeredEmail);
    Merit findAllByRegisteredMobile(@Param("registeredMobile") String registeredMobile);
    List<Merit> findAll();

    @Query("From Merit m where m.applicationNo=:searchText OR m.registeredName=:searchText ORDER BY m.registeredName DESC")
    Page<Merit> findAllForSearch(Pageable pageable, @Param("searchText") String searchText);
}

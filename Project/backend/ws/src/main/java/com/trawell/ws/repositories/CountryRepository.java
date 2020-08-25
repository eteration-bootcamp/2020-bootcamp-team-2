package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {

}

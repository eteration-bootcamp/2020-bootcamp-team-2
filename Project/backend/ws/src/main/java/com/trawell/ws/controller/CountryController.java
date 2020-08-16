package com.trawell.ws.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Country;
import com.trawell.ws.services.CountryService;

@RestController
public class CountryController {
	
	@Autowired
	CountryService countryService;
	
	@GetMapping("api/1.0/countries")
	Page<Country> getCountries(Pageable page){
		return countryService.getCountries(page);
	}
	

}

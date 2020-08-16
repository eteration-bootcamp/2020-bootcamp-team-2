package com.trawell.ws.services;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Country;
import com.trawell.ws.repositories.CountryRepository;

@Service
public class CountryService {
	
	CountryRepository countryRepository;

	public CountryService(CountryRepository countryRepository) {
		this.countryRepository = countryRepository;
	}
	

	public Page<Country> getCountries(Pageable page) {
		return countryRepository.findAll(page);
	}
	
	

}

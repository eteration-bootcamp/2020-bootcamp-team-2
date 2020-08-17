package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Country;
import com.trawell.ws.repositories.CityRepository;
import com.trawell.ws.repositories.CountryRepository;

@Service
public class CityService {
	
	@Autowired
	CityRepository cityRepository;
	@Autowired
	CountryRepository countryRepository;

	public CityService(CityRepository cityRepository) {
		this.cityRepository = cityRepository;
	}
	

	public Page<City> getCities(Pageable page) {
		return cityRepository.findAll(page);
	}
	

	public List<City> findByCountryId(Long countryId) {
		List<City> cityList = new ArrayList<City>();
		Optional<Country> optCountry = countryRepository.findById(countryId);
		if(optCountry.isPresent()) {
			Country country = optCountry.get();
			cityList = cityRepository.findByCountry(country);			
		}
		return cityList;
	}

}

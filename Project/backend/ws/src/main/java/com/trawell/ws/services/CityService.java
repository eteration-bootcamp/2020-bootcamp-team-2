package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.City;
import com.trawell.ws.repositories.CityRepository;

@Service
public class CityService {
	
	CityRepository cityRepository;

	public CityService(CityRepository cityRepository) {
		this.cityRepository = cityRepository;
	}
	

	public Page<City> getCities(Pageable page) {
		return cityRepository.findAll(page);
	}
	
	public Optional<City> getfindById(Long id) {
		return cityRepository.findById(id);
	}

}

package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Bar;
import com.trawell.ws.model.City;
import com.trawell.ws.repositories.BarRepository;
import com.trawell.ws.repositories.CityRepository;

@Service
public class BarService {
	
	@Autowired
	CityRepository cityRepository;
	@Autowired
	BarRepository barRepository;

	public BarService(BarRepository barRepository) {
		this.barRepository = barRepository;
	}
	

	public Page<Bar> getBars(Pageable page) {
		return barRepository.findAll(page);
	}
	
	public List<Bar> findByCityId(Long cityId) {
		List<Bar> barList = new ArrayList<Bar>();
		Optional<City> optCity = cityRepository.findById(cityId);
		if(optCity.isPresent()) {
			City city = optCity.get();
			barList = barRepository.findByCity(city);			
		}
		return barList;
	}

}

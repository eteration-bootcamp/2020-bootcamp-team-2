package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Historical;
import com.trawell.ws.repositories.CityRepository;
import com.trawell.ws.repositories.HistoricalRepository;

@Service
public class HistoricalService {
	
	@Autowired
	CityRepository cityRepository;
	@Autowired
	HistoricalRepository historicalRepository;

	public HistoricalService(HistoricalRepository historicalRepository) {
		this.historicalRepository = historicalRepository;
	}
	

	public Page<Historical> getHistoricals(Pageable page) {
		return historicalRepository.findAll(page);
	}
	
	public List<Historical> findByCityId(Long cityId) {
		List<Historical> historicalList = new ArrayList<Historical>();
		Optional<City> optCity = cityRepository.findById(cityId);
		if(optCity.isPresent()) {
			City city = optCity.get();
			historicalList = historicalRepository.findByCity(city);			
		}
		return historicalList;
	}
}

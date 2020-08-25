package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Cafe;
import com.trawell.ws.model.City;
import com.trawell.ws.repositories.CafeRepository;
import com.trawell.ws.repositories.CityRepository;

@Service
public class CafeService {

	@Autowired
	CityRepository cityRepository;
	@Autowired
	CafeRepository cafeRepository;

	public CafeService(CafeRepository cafeRepository) {
		this.cafeRepository = cafeRepository;
	}

	public Page<Cafe> getCafes(Pageable page) {
		return cafeRepository.findAll(page);
	}

	public List<Cafe> findByCityId(Long cityId) {
		List<Cafe> cafeList = new ArrayList<Cafe>();
		Optional<City> optCity = cityRepository.findById(cityId);
		if (optCity.isPresent()) {
			City city = optCity.get();
			cafeList = cafeRepository.findByCity(city);
		}
		return cafeList;
	}

}

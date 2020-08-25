package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Eat;
import com.trawell.ws.repositories.CityRepository;
import com.trawell.ws.repositories.EatRepository;

@Service
public class EatService {

	@Autowired
	CityRepository cityRepository;
	@Autowired
	EatRepository eatRepository;

	public EatService(EatRepository eatRepository) {
		this.eatRepository = eatRepository;
	}

	public Page<Eat> getEats(Pageable page) {
		return eatRepository.findAll(page);
	}

	public List<Eat> findByCityId(Long cityId) {
		List<Eat> eatList = new ArrayList<Eat>();
		Optional<City> optCity = cityRepository.findById(cityId);
		if (optCity.isPresent()) {
			City city = optCity.get();
			eatList = eatRepository.findByCity(city);
		}
		return eatList;
	}

}

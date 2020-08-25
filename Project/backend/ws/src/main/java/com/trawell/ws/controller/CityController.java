package com.trawell.ws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.City;
import com.trawell.ws.services.CityService;

@RestController
public class CityController {

	@Autowired
	CityService cityService;

	@GetMapping("api/${api.version}/cities")
	Page<City> getCities(Pageable page) {
		return cityService.getCities(page);
	}

	@GetMapping("api/${api.version}/cities/{countryId}")
	List<City> findByCountryId(@PathVariable Long countryId) {
		return cityService.findByCountryId(countryId);
	}

}

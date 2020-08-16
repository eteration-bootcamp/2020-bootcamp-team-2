package com.trawell.ws.controller;

import java.util.Optional;

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
	
	@GetMapping("api/1.0/cities")
	Page<City> getCities(Pageable page){
		return cityService.getCities(page);
	}
	
	@GetMapping("api/1.0/cities/{id}")
	Optional<City> getfindById(@PathVariable Long id){
		return cityService.getfindById(id);
	}
	

}

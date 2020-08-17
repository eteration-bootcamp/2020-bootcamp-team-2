package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.District;
import com.trawell.ws.services.DistrictService;

@RestController
public class DistrictController {
	
	@Autowired
	DistrictService districtService;
	
	@GetMapping("api/1.0/districties")
	Page<District> getCities(Pageable page){
		return districtService.getCities(page);
	}
	
	@GetMapping("api/1.0/districties/{id}")
	Optional<District> getfindById(@PathVariable Long id){
		return districtService.getfindById(id);
	}
	

}

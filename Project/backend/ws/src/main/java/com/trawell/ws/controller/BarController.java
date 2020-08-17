package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Bar;
import com.trawell.ws.services.BarService;

@RestController
public class BarController {
	
	@Autowired
	BarService barService;
	
	@GetMapping("api/1.0/bars")
	Page<Bar> getBars(Pageable page){
		return barService.getBars(page);
	}
	
	@GetMapping("api/1.0/bars/{id}")
	Optional<Bar> getfindById(@PathVariable Long id){
		return barService.getfindById(id);
	}
	

}

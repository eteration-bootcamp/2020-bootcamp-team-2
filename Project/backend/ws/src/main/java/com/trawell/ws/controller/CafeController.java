package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Cafe;
import com.trawell.ws.services.CafeService;

@RestController
public class CafeController {
	
	@Autowired
	CafeService cafeService;
	
	@GetMapping("api/1.0/cafes")
	Page<Cafe> getCafes(Pageable page){
		return cafeService.getCafes(page);
	}
	
	@GetMapping("api/1.0/cafes/{id}")
	Optional<Cafe> getfindById(@PathVariable Long id){
		return cafeService.getfindById(id);
	}
	

}

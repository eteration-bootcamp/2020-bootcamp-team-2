package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Eat;
import com.trawell.ws.services.EatService;

@RestController
public class EatController {
	
	@Autowired
	EatService eatService;
	
	@GetMapping("api/1.0/eats")
	Page<Eat> getEats(Pageable page){
		return eatService.getEats(page);
	}
	
	@GetMapping("api/1.0/eats/{id}")
	Optional<Eat> getfindById(@PathVariable Long id){
		return eatService.getfindById(id);
	}
	

}

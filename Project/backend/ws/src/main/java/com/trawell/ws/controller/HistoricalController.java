package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Historical;
import com.trawell.ws.services.HistoricalService;

@RestController
public class HistoricalController {
	
	@Autowired
	HistoricalService historicalService;
	
	@GetMapping("api/1.0/historicals")
	Page<Historical> getHistoricals(Pageable page){
		return historicalService.getHistoricals(page);
	}
	
	@GetMapping("api/1.0/historicals/{id}")
	Optional<Historical> getfindById(@PathVariable Long id){
		return historicalService.getfindById(id);
	}
	

}

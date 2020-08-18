package com.trawell.ws.controller;

import java.util.List;

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
	
	@GetMapping("api/${api.version}/historicals")
	Page<Historical> getHistoricals(Pageable page){
		return historicalService.getHistoricals(page);
	}
	
	@GetMapping("api/${api.version}/historicals/{cityId}")
	List<Historical> findByCityId(@PathVariable Long cityId){
		return historicalService.findByCityId(cityId);
	}
	

}

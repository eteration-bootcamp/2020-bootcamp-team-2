package com.trawell.ws.controller;

import java.util.List;

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
	
	@GetMapping("api/${api.version}/bars")
	Page<Bar> getBars(Pageable page){
		return barService.getBars(page);
	}
	
	@GetMapping("api/${api.version}/bars/{cityId}")
	List<Bar> findByCityId(@PathVariable Long cityId){
		return barService.findByCityId(cityId);
	}
	

}

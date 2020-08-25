package com.trawell.ws.controller;

import java.util.List;

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

	@GetMapping("api/${api.version}/cafes")
	Page<Cafe> getCafes(Pageable page) {
		return cafeService.getCafes(page);
	}

	@GetMapping("api/${api.version}/cafes/{cityId}")
	List<Cafe> findByCityId(@PathVariable Long cityId) {
		return cafeService.findByCityId(cityId);
	}

}

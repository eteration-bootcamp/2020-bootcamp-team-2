package com.trawell.ws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Hotel;
import com.trawell.ws.services.HotelService;

@RestController
public class HotelController {
	
	@Autowired
	HotelService hotelService;
	
	@GetMapping("api/${api.version}/hotels")
	Page<Hotel> getHotels(Pageable page){
		return hotelService.getHotels(page);
	}
	
	@GetMapping("api/${api.version}/hotels/{cityId}")
	List<Hotel> findByCityId(@PathVariable Long cityId){
		return hotelService.findByCityId(cityId);
	}

}

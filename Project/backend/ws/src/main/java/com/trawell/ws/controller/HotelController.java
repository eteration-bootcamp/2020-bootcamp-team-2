package com.trawell.ws.controller;

import java.util.Optional;

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
	
	@GetMapping("api/1.0/hotels")
	Page<Hotel> getHotels(Pageable page){
		return hotelService.getHotels(page);
	}
	
	@GetMapping("api/1.0/hotels/{id}")
	Optional<Hotel> getfindById(@PathVariable Long id){
		return hotelService.getfindById(id);
	}
	

}

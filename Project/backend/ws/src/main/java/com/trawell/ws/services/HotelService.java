package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Hotel;
import com.trawell.ws.repositories.HotelRepository;

@Service
public class HotelService {
	
	HotelRepository hotelRepository;

	public HotelService(HotelRepository hotelRepository) {
		this.hotelRepository = hotelRepository;
	}
	

	public Page<Hotel> getHotels(Pageable page) {
		return hotelRepository.findAll(page);
	}
	
	public Optional<Hotel> getfindById(Long id) {
		return hotelRepository.findById(id);
	}

}

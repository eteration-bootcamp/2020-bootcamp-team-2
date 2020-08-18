package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Hotel;
import com.trawell.ws.repositories.CityRepository;
import com.trawell.ws.repositories.HotelRepository;

@Service
public class HotelService {
	
	@Autowired
	CityRepository cityRepository;
	@Autowired
	HotelRepository hotelRepository;

	public HotelService(HotelRepository hotelRepository) {
		this.hotelRepository = hotelRepository;
	}
	

	public Page<Hotel> getHotels(Pageable page) {
		return hotelRepository.findAll(page);
	}
	
	public List<Hotel> findByCityId(Long cityId) {
		List<Hotel> hotelList = new ArrayList<Hotel>();
		Optional<City> optCity = cityRepository.findById(cityId);
		if(optCity.isPresent()) {
			City city = optCity.get();
			hotelList = hotelRepository.findByCity(city);			
		}
		return hotelList;
	}

}

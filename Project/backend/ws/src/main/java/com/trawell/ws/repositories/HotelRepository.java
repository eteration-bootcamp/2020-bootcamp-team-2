package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel,Long> {
	List<Hotel> findByCity(City city);
	

}

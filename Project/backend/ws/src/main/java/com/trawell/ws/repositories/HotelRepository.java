package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel,Long> {
	

}

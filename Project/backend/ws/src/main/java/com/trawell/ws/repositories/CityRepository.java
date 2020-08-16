package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.City;

public interface CityRepository extends JpaRepository<City,Long> {
	

}

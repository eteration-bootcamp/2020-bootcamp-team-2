package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Historical;

public interface HistoricalRepository extends JpaRepository<Historical,Long> {
	List<Historical> findByCity(City city);
	

}
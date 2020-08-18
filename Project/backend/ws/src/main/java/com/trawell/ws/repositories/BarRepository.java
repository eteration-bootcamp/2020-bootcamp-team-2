package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Bar;
import com.trawell.ws.model.City;

public interface BarRepository extends JpaRepository<Bar,Long> {
	List<Bar> findByCity(City city);
	

}

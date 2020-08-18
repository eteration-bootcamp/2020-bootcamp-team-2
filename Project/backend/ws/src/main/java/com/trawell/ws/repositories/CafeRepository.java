package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Cafe;
import com.trawell.ws.model.City;

public interface CafeRepository extends JpaRepository<Cafe,Long> {
	List<Cafe> findByCity(City city);
	

}

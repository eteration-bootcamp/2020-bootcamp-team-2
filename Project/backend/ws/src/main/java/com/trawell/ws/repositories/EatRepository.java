package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Eat;

public interface EatRepository extends JpaRepository<Eat,Long> {
	List<Eat> findByCity(City city);
	

}

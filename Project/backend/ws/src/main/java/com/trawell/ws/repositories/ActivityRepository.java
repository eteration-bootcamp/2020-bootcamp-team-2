package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Activity;
import com.trawell.ws.model.City;

public interface ActivityRepository extends JpaRepository<Activity,Long> {
	List<Activity> findByCity(City city);
	

}

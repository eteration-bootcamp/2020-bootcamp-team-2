package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trawell.ws.model.City;
import com.trawell.ws.model.Country;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
	List<City> findByCountry(Country country);

}

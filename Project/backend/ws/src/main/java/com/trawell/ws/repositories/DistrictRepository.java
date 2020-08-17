package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.District;

public interface DistrictRepository extends JpaRepository<District,Long> {
	

}

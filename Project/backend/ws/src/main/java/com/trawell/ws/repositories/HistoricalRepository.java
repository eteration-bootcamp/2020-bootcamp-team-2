package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Historical;

public interface HistoricalRepository extends JpaRepository<Historical,Long> {
	

}
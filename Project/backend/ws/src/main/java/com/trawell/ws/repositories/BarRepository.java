package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Bar;

public interface BarRepository extends JpaRepository<Bar,Long> {
	

}

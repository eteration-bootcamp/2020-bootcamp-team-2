package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Cafe;

public interface CafeRepository extends JpaRepository<Cafe,Long> {
	

}

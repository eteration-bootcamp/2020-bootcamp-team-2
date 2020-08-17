package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Eat;

public interface EatRepository extends JpaRepository<Eat,Long> {
	

}

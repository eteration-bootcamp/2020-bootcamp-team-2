package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity,Long> {
	

}

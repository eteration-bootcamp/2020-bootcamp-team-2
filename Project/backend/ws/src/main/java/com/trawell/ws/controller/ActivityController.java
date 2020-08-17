package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.Activity;
import com.trawell.ws.services.ActivityService;

@RestController
public class ActivityController {
	
	@Autowired
	ActivityService activityService;
	
	@GetMapping("api/1.0/activities")
	Page<Activity> getActivities(Pageable page){
		return activityService.getActivities(page);
	}
	
	@GetMapping("api/1.0/activities/{id}")
	Optional<Activity> getfindById(@PathVariable Long id){
		return activityService.getfindById(id);
	}
	

}

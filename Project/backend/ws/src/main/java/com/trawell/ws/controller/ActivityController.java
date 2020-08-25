package com.trawell.ws.controller;

import java.util.List;

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

	@GetMapping("api/${api.version}/activities")
	Page<Activity> getActivities(Pageable page) {
		return activityService.getActivities(page);
	}

	@GetMapping("api/${api.version}/activities/{cityId}")
	List<Activity> findByCityId(@PathVariable Long cityId) {
		return activityService.findByCityId(cityId);
	}

}

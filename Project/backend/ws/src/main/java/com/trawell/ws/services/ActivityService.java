package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Activity;
import com.trawell.ws.repositories.ActivityRepository;

@Service
public class ActivityService {
	
	ActivityRepository activityRepository;

	public ActivityService(ActivityRepository activityRepository) {
		this.activityRepository = activityRepository;
	}
	

	public Page<Activity> getActivities(Pageable page) {
		return activityRepository.findAll(page);
	}
	
	public Optional<Activity> getfindById(Long id) {
		return activityRepository.findById(id);
	}

}

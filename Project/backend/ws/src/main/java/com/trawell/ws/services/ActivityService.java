package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Activity;
import com.trawell.ws.model.City;
import com.trawell.ws.repositories.ActivityRepository;
import com.trawell.ws.repositories.CityRepository;

@Service
public class ActivityService {

	@Autowired
	CityRepository cityRepository;
	@Autowired
	ActivityRepository activityRepository;

	public ActivityService(ActivityRepository activityRepository) {
		this.activityRepository = activityRepository;
	}

	public Page<Activity> getActivities(Pageable page) {
		return activityRepository.findAll(page);
	}

	public List<Activity> findByCityId(Long cityId) {
		List<Activity> activityList = new ArrayList<Activity>();
		Optional<City> optCity = cityRepository.findById(cityId);
		if (optCity.isPresent()) {
			City city = optCity.get();
			activityList = activityRepository.findByCity(city);
		}
		return activityList;
	}
}

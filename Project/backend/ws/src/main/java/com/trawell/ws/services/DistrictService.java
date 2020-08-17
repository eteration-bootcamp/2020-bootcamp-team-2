package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.District;
import com.trawell.ws.repositories.DistrictRepository;

@Service
public class DistrictService {
	
	DistrictRepository districtRepository;

	public DistrictService(DistrictRepository districtRepository) {
		this.districtRepository = districtRepository;
	}
	

	public Page<District> getCities(Pageable page) {
		return districtRepository.findAll(page);
	}
	
	public Optional<District> getfindById(Long id) {
		return districtRepository.findById(id);
	}

}

package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Bar;
import com.trawell.ws.repositories.BarRepository;

@Service
public class BarService {
	
	BarRepository barRepository;

	public BarService(BarRepository barRepository) {
		this.barRepository = barRepository;
	}
	

	public Page<Bar> getBars(Pageable page) {
		return barRepository.findAll(page);
	}
	
	public Optional<Bar> getfindById(Long id) {
		return barRepository.findById(id);
	}

}

package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Historical;
import com.trawell.ws.repositories.HistoricalRepository;

@Service
public class HistoricalService {
	
	HistoricalRepository historicalRepository;

	public HistoricalService(HistoricalRepository historicalRepository) {
		this.historicalRepository = historicalRepository;
	}
	

	public Page<Historical> getHistoricals(Pageable page) {
		return historicalRepository.findAll(page);
	}
	
	public Optional<Historical> getfindById(Long id) {
		return historicalRepository.findById(id);
	}

}

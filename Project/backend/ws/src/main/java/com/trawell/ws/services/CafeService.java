package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Cafe;
import com.trawell.ws.repositories.CafeRepository;

@Service
public class CafeService {
	
	CafeRepository cafeRepository;

	public CafeService(CafeRepository cafeRepository) {
		this.cafeRepository = cafeRepository;
	}
	

	public Page<Cafe> getCafes(Pageable page) {
		return cafeRepository.findAll(page);
	}
	
	public Optional<Cafe> getfindById(Long id) {
		return cafeRepository.findById(id);
	}

}

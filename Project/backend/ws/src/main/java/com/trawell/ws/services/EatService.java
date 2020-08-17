package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Eat;
import com.trawell.ws.repositories.EatRepository;

@Service
public class EatService {
	
	EatRepository eatRepository;

	public EatService(EatRepository eatRepository) {
		this.eatRepository = eatRepository;
	}
	

	public Page<Eat> getEats(Pageable page) {
		return eatRepository.findAll(page);
	}
	
	public Optional<Eat> getfindById(Long id) {
		return eatRepository.findById(id);
	}

}

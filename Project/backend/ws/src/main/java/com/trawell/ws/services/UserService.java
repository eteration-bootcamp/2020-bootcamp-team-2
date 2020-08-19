package com.trawell.ws.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.User;
import com.trawell.ws.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	PasswordEncoder passwordEncoder;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	public void save(User user) {
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);

	}

	public Optional<User> getfindById(Long id) {
		return userRepository.findById(id);
	}
}

package com.trawell.ws.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.model.User;
import com.trawell.ws.services.UserService;
import com.trawell.ws.shared.GenericResponse;

@RestController
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/api/${api.version}/users")
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@RequestBody User user) {

		userService.save(user);
		return new GenericResponse("User created!");

	}

	@GetMapping("api/1.0/users/{id}")
	Optional<User> getfindById(@PathVariable Long id) {
		return userService.getfindById(id);
	}
}

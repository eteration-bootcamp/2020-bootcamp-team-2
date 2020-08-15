package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	

}

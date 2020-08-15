package com.trawell.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class User {
	
	@Id
	@GeneratedValue
	private long id;
	
	
	private String email;
	private String password;
	private String fullName;
	private String userName;
	
	
	
}

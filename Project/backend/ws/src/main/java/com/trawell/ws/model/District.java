package com.trawell.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;


@Data
@Entity
public class District {
	
	@Id
	@GeneratedValue
	private long id;
	private String districtName;
	
	@ManyToOne
	private City city;
	

}

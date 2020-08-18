package com.trawell.ws.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

import lombok.Data;


@Data
@Entity
public class Hotel {
	
	@Id
	@GeneratedValue
	private long id;
	private String hotelName;
	@Size(min = 250, max=5000)
	@Column(length = 5000)
	private String hotelContent;
	private String imageUrl;
	
	@ManyToOne
	private City city;
	

}

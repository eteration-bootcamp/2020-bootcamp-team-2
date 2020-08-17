package com.trawell.ws.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import lombok.Data;


@Data
@Entity
public class Activity {
	
	@Id
	@GeneratedValue
	private long id;
	private String activityName;
	@Size(min = 250, max=5000)
	@Column(length = 5000)
	private String activityContent;
	

}

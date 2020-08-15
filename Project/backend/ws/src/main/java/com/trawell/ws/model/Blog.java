package com.trawell.ws.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class Blog {
	
	@Id
	@GeneratedValue
	private long id;
	
	@NotNull(message= "{trawell.constraints.blogComment.Notnull.message}")
	@Size(min = 500, max=10000)
	@Column(length = 10000)
	@UniqueInput
	private String blogComment;
	private String blogImage;
	@Temporal(TemporalType.TIMESTAMP)
	private Date timestamp;
	
	@ManyToOne
	private User user;
	

}

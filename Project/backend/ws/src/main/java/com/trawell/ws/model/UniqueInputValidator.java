package com.trawell.ws.model;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.trawell.ws.repositories.BlogRepository;

public class UniqueInputValidator implements ConstraintValidator<UniqueInput, String> {
	
	@Autowired
	BlogRepository blogRepository;
	
	@Override
	public boolean isValid(String blogComment, ConstraintValidatorContext context) {
		Blog blog = blogRepository.findByBlogComment(blogComment);
		if(blog != null) {
			return false;
		}
		
		return true;
	}

}

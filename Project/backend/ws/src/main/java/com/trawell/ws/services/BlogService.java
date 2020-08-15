package com.trawell.ws.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Blog;
import com.trawell.ws.repositories.BlogRepository;

@Service
public class BlogService {
	
	BlogRepository blogRepository;

	public BlogService(BlogRepository blogRepository) {
		this.blogRepository = blogRepository;
	}
	
	public void save(Blog blog) {
		blogRepository.save(blog);
		
	}

	public Page<Blog> getBlogs(Pageable page) {
		return blogRepository.findAll(page);
	}
	

}

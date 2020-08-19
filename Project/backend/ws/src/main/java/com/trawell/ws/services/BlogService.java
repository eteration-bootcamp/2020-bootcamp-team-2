package com.trawell.ws.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trawell.ws.model.Blog;
import com.trawell.ws.model.User;
import com.trawell.ws.repositories.BlogRepository;
import com.trawell.ws.repositories.UserRepository;

@Service
public class BlogService {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	BlogRepository blogRepository;

	public BlogService(BlogRepository blogRepository) {
		this.blogRepository = blogRepository;
	}
	
	public void save(Blog blog) {
		blog.setTimestamp(new Date());
		blogRepository.save(blog);
		
	}

	public Page<Blog> getBlogs(Pageable page) {
		return blogRepository.findAll(page);
	}
	
	public List<Blog> findByUserId(Long userId) {
		List<Blog> blogList = new ArrayList<Blog>();
		Optional<User> optUser = userRepository.findById(userId);
		if(optUser.isPresent()) {
			User user = optUser.get();
			blogList = blogRepository.findByUser(user);			
		}
		return blogList;
	}

}

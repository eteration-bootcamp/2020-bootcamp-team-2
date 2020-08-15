package com.trawell.ws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Blog;

public interface BlogRepository extends JpaRepository<Blog,Long> {
	
	Blog findByBlogComment(String blogComment);

}

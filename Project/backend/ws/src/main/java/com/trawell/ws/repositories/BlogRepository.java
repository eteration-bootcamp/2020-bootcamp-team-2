package com.trawell.ws.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trawell.ws.model.Blog;
import com.trawell.ws.model.User;

public interface BlogRepository extends JpaRepository<Blog,Long> {
	List<Blog> findByUser(User user);
	Blog findByBlogComment(String blogComment);

}

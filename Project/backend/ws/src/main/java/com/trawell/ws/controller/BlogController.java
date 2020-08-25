package com.trawell.ws.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.trawell.ws.error.ApiError;
import com.trawell.ws.model.Blog;
import com.trawell.ws.services.BlogService;
import com.trawell.ws.shared.GenericResponse;

@RestController
public class BlogController {

	@Autowired
	BlogService blogService;

	@PostMapping("/api/${api.version}/blogs")
	public GenericResponse createBlog(@Valid @RequestBody Blog blog) {
		blogService.save(blog);
		return new GenericResponse("Blog created!");

	}

	@GetMapping("api/${api.version}/blogs")
	Page<Blog> getBlogs(@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return blogService.getBlogs(page);
	}

	@GetMapping("api/${api.version}/blogs/{userId}")
	List<Blog> findByUserId(@PathVariable Long userId) {
		return blogService.findByUserId(userId);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ApiError handleValidationException(MethodArgumentNotValidException exception) {
		ApiError error = new ApiError(400, "Validation error", "/api/1.0/blogs");
		Map<String, String> validationErrors = new HashMap<>();
		for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
			validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
		}
		error.setValidationErrors(validationErrors);
		return error;
	}

}

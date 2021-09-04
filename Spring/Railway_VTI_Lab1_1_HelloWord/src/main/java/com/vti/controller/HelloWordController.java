package com.vti.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v1/helloword")
@CrossOrigin("*")
public class HelloWordController {

	@GetMapping()
	public String getHello(@RequestParam(value = "name", defaultValue = "word") String name1) {
		return String.format("Hello %s !!", name1);
	}
}

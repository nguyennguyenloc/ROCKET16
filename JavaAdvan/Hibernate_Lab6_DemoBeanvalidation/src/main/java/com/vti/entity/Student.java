package com.vti.entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;


public class Student {
	@Min(value = 1, message = "ID nhập vào không chính xác")
	private int id;
	@Length(min = 6, max = 12, message = "Tên không hợp lệ")
	private String name;
	@Email(message = "Email nhập vào không hợp lệ")
	private String email;
	@Min(value = 18, message = "Tuổi nhập vào không hợp lệ")
	private int age;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", email=" + email + ", age=" + age + "]";
	}

}

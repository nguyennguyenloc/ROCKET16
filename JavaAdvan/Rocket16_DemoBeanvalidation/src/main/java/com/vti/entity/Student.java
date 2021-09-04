package com.vti.entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;

public class Student {
	@Min(value = 1, message = "ID không hợp lệ")
	private int id;
	@Length(min = 6, max = 12, message = "Tên không hợp lệ")
	private String name;
	@Email(message = "Thông tin email không hợp lệ")
	private String email;
	@Min(value = 18, message = "Tuổi không hợp lệ")
	private int age;

	public Student() {
		super();
	}

	public Student(int id, String name, String email, int age) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.age = age;
	}

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

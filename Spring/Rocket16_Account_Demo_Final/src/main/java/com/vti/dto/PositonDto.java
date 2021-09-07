package com.vti.dto;

public class PositonDto {
	private Short id;
	private String name;

	public PositonDto(Short id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Short getId() {
		return id;
	}

	public void setId(Short id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "PossitonDto [id=" + id + ", name=" + name + "]";
	}

}

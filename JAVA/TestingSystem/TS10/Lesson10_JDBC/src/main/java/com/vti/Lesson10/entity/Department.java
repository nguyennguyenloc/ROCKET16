package com.vti.Lesson10.entity;

public class Department {
	int dpId;
	String dpName;

	public Department(int dpId, String dpName) {
		super();
		this.dpId = dpId;
		this.dpName = dpName;
	}

	public int getDpId() {
		return dpId;
	}

	public void setDpId(int dpId) {
		this.dpId = dpId;
	}

	public String getDpName() {
		return dpName;
	}

	public void setDpName(String dpName) {
		this.dpName = dpName;
	}

	@Override
	public String toString() {
		return dpId + "\t|\t" + dpName;
	}
}

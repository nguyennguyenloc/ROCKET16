package com.vti.form;

public class AccountFormForUpdating {
	private String fullname;
	private short departmentId;
	private short positionId;

	public AccountFormForUpdating() {
		super();
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public short getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(short departmentId) {
		this.departmentId = departmentId;
	}

	public short getPositionId() {
		return positionId;
	}

	public void setPositionId(short positionId) {
		this.positionId = positionId;
	}

	@Override
	public String toString() {
		return "AccountFormForUpdating [fullname=" + fullname + ", departmentId=" + departmentId + ", positionId="
				+ positionId + "]";
	}

}

package com.vti.Lesson10.backend.datalayer;

import java.util.List;

import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public interface IRepository {
	public List<Account> getListAccount();

	public Account getAccount(String accountName);

	public Account getListAccountDepartment(String departmentName);

	public List<Department> getListDepartments();
}

package com.vti.Lesson10.backend.presentationlayer;

import java.util.List;

import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public interface IView {
	public void showError(String errorMsg);

	public void showListAccount(List<Account> list);

	public void showListAccountId(List<Account> list);

	public void showListAccountDepartment(List<Account> list);

	public void showListDepartment(List<Department> list);
}

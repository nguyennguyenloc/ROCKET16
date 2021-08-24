package com.vti.Lesson10.backend.presentationlayer;

import java.util.List;

import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public interface IController {
	public void getListSuccess(List<Account> list);

	public void getListIdSuccess(List<Account> list);

	public void getListAccountDepartmentSuccess(List<Account> list);

	public void getListDepartmentSuccess(List<Department> list);

	public void getListError(String error);
}

package com.vti.Lesson10.backend.businesslayer;

import java.util.List;

import com.vti.Lesson10.backend.presentationlayer.IController;
import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public interface IService {
	public List<Account> getListAccount(int n, IController icontroller);

	public List<Account> getListAccountId(String userName, IController icontroller); 
	
	public List<Account> getListAccountDepartment(String departmentName, IController icontroller); 
	
	public List<Department> getListDepartment(int n, IController icontroller);
}

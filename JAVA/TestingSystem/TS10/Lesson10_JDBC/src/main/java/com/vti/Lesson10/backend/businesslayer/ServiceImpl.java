package com.vti.Lesson10.backend.businesslayer;

import java.util.ArrayList;
import java.util.List;

import com.vti.Lesson10.backend.datalayer.DataRepositoryImpl;
import com.vti.Lesson10.backend.datalayer.IRepository;
import com.vti.Lesson10.backend.presentationlayer.ControllerImpl;
import com.vti.Lesson10.backend.presentationlayer.IController;
import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public class ServiceImpl implements IService {
	IRepository repository;

	public ServiceImpl() {
		repository = new DataRepositoryImpl();
	}

	public List<Account> getListAccount(int n, IController iController) {
		List<Account> list = new ArrayList<Account>();
		try {
			for (int i = 0; i < n; i++) {
				list.add(repository.getListAccount().get(i));
			}
			iController.getListSuccess(list);
		} catch (IndexOutOfBoundsException e) {
			// TODO: handle exception
			iController.getListError("Truyền vào số ngoài phạm vi của mảng");
		}
		return list;
	}

	public List<Department> getListDepartment(int n, IController icontroller) {
		List<Department> list = new ArrayList<Department>();
		try {
			for (int i = 0; i < n; i++) {
				list.add(repository.getListDepartments().get(i));
			}
			icontroller.getListDepartmentSuccess(list);
		} catch (IndexOutOfBoundsException e) {
			icontroller.getListError("Truyền vào số ngoài phạm vi của mảng");
		}
		return list;
	}

	public List<Account> getListAccountId(String userName, IController icontroller) {
		List<Account> list = new ArrayList<Account>();
		// System.out.println(repository.getAccount(userName).toString());
		try {
			list.add(repository.getAccount(userName));
			icontroller.getListIdSuccess(list);
		} catch (IndexOutOfBoundsException e) {
			// TODO: handle exception
			icontroller.getListError("Truyền vào tên ngoài phạm vi của mảng");
		}
		return list;
	}

	public List<Account> getListAccountDepartment(String departmentName, IController icontroller) {
		List<Account> list = new ArrayList<Account>();
		// System.out.println(repository.getAccount(userName).toString());
		try {
			list.add(repository.getListAccountDepartment(departmentName));
			icontroller.getListAccountDepartmentSuccess(list);
		} catch (IndexOutOfBoundsException e) {
			// TODO: handle exception
			icontroller.getListError("Truyền vào tên ngoài phạm vi của mảng");
		}
		return list;
	}

}

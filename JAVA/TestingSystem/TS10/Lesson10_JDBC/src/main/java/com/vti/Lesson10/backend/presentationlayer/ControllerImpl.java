package com.vti.Lesson10.backend.presentationlayer;

import java.util.List;

import com.vti.Lesson10.backend.businesslayer.IService;
import com.vti.Lesson10.backend.businesslayer.ServiceImpl;
import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public class ControllerImpl implements IController {
	IService iService;
	IView iView;

	public ControllerImpl(IView v) {
		iService = new ServiceImpl();
		this.iView = v;
	}

	public void getListAccount(int n) {
		if (n > 0) {
			iService.getListAccount(n, this);
		} else {
			iView.showError("Không được truyền số âm");
		}
	}

	public void getListDepartmentSuccess(int n) {
		if (n > 0) {
			iService.getListDepartment(n, this);
		} else {
			iView.showError("Không được truyền số âm");
		}
	}

	public void getListAccountId(String userName) {
		if (userName != " ") {
			iService.getListAccountId(userName, this);
		} else {
			iView.showError("Không được để giá trị rỗng");
		}
	}

	public void getListAccountDepartment(String departmentName) {
		if (departmentName != " ") {
			iService.getListAccountDepartment(departmentName, this);
		} else {
			iView.showError("Không được để giá trị trống");
		}
	}

	public void getListSuccess(List<Account> list) {
		// TODO Auto-generated method stub
		iView.showListAccount(list);
	}

	public void getListError(String error) {
		// TODO Auto-generated method stub
		iView.showError(error);
	}

	public void getListDepartmentSuccess(List<Department> list) {
		// TODO Auto-generated method stub
		iView.showListDepartment(list);
	}

	public void getListIdSuccess(List<Account> list) {
		// TODO Auto-generated method stub
		iView.showListAccountId(list);
	}

	public void getListAccountDepartmentSuccess(List<Account> list) {
		// TODO Auto-generated method stub
		iView.showListAccountDepartment(list);
	}

}

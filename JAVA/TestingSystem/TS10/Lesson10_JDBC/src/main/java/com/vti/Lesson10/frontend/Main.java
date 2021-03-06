package com.vti.Lesson10.frontend;

import java.sql.SQLException;
import java.util.List;

import com.vti.Lesson10.backend.presentationlayer.ControllerImpl;
import com.vti.Lesson10.backend.presentationlayer.IView;
import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;

public class Main {

	public static void main(String[] args) throws SQLException {
		ControllerImpl controllerImpl = new ControllerImpl(new IView() {

			public void showError(String errorMsg) {
				System.out.println(errorMsg);
			}

			public void showListAccount(List<Account> list) {
				// TODO Auto-generated method stub
				System.out.println("id \t|\t Account \t|\t FullName \t|\t Email");
				for (Account account : list) {
					System.out.println(account.toString());
				}

			}

			public void showListDepartment(List<Department> list) {
				// TODO Auto-generated method stub
				System.out.println("id\t|\t DepartmentName");
				for (Department department : list) {
					System.out.println(department.toString());
				}

			}

			public void showListAccountId(List<Account> list) {
				System.out.println(" Là thông tin của tài khoản:");
				for (Account account : list) {
					System.out.println(account.toString());
				}

			}

			public void showListAccountDepartment(List<Account> list) {
				System.out.println(" Là thông tin của những tài khoản:");
				for (Account account : list) {
					System.out.println(account.toString());
				}

			}
		});
		System.out.println("Câu 1");
		controllerImpl.getListAccount(4);
		System.out.println("Câu 2");
		controllerImpl.getListDepartmentSuccess(3);
		System.out.println("Câu 3");
		controllerImpl.getListAccountId("vti1");
		System.out.println("CÂu 4");
		controllerImpl.getListAccountDepartment("Phong Dev 1");
	}

}

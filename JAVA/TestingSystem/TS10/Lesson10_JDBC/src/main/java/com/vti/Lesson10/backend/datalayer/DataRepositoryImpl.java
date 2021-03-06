package com.vti.Lesson10.backend.datalayer;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JButton;

import com.vti.Lesson10.entity.Account;
import com.vti.Lesson10.entity.Department;
import com.vti.Lesson10.utils.JDBCUtil;

public class DataRepositoryImpl implements IRepository {
	public List<Account> getListAccount() {
		List<Account> list = new ArrayList<Account>();
		try {
			String queryString = "Select*from Account";
			Statement statement = JDBCUtil.getIntance().getStatement();
			ResultSet resultSet = statement.executeQuery(queryString);
			while (resultSet.next()) {
				Account account = new Account(resultSet.getInt("AccountId"), resultSet.getString("userName"),
						resultSet.getString("fullName"), resultSet.getString("email"));
				list.add(account);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}

	public List<Department> getListDepartments() {
		List<Department> list = new ArrayList<Department>();
		try {
			String queryString = "Select*from Department";
			Statement statement = JDBCUtil.getIntance().getStatement();
			ResultSet resultSet = statement.executeQuery(queryString);
			while (resultSet.next()) {
				Department department = new Department(resultSet.getInt("DepartmentId"),
						resultSet.getString("DepartmentName"));
				list.add(department);
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	public Account getAccount(String accountName) {
		Account account = null;
		try {
			String queryString = "Select*from Account Where username = '" + accountName + "'";
			System.out.print(accountName);
			Statement statement = JDBCUtil.getIntance().getStatement();
			ResultSet resultSet = statement.executeQuery(queryString);
			// lấy nhiều Account trùng Username
			// while (resultSet.next()) {
			// account = new Account(resultSet.getInt("AccountId"),
			// resultSet.getString("userName"),
			// resultSet.getString("fullName"), resultSet.getString("email"));
			// }

			// lấy Account chứa Username đầu tiên
			resultSet.next();
			account = new Account(resultSet.getInt("AccountId"), resultSet.getString("userName"),
					resultSet.getString("fullName"), resultSet.getString("email"));
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return account;
	}

	public Account getListAccountDepartment(String departmentName) {

		Account account = null;
		try {
			String queryString = "Select*from Account Join Department On Account.DepartmentId = Department.DepartmentId Where Department.DepartmentName = '"
					+ departmentName + "'";
			System.out.print(departmentName);
			Statement statement = JDBCUtil.getIntance().getStatement();
			ResultSet resultSet = statement.executeQuery(queryString);
			while (resultSet.next()) {
				account = new Account(resultSet.getInt("AccountId"), resultSet.getString("userName"),
						resultSet.getString("fullName"), resultSet.getString("email"));
				account.setDepartmentName(resultSet.getString("DepartmentName"));
				
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return account;
	}
}

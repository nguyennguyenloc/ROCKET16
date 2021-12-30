package com.vti.backend;

import com.vti.dao.AccDAO_Hibernate;
import com.vti.dao.AccDAO_JDBC;
import com.vti.dao.IAccDAO;
import com.vti.entiy.Account;

public class Account_Demo {
	// private IAccDAO accountDAO = new AccDAO_Hibernate();

	// private IAccDAO accountDAO = new AccDAO_JDBC();
	// hoặc

	private IAccDAO accountDAO;

	public Account_Demo(IAccDAO any) {
		accountDAO = any;
	}

	public Boolean createAccount() {
		Account account = new Account(1, "daonq");
		// sử dụng JDBC
		// AccDAO_JDBC accDao = new AccDAO_JDBC();
		// Boolean flag = accDao.createNew_Account(account);

		// sử dụng Hibernate
		// AccDAO_Hibernate accHibernate = new AccDAO_Hibernate();
		// Boolean flag = accHibernate.createNew_Account(account);

		// sử dụng interface IAccDAO
		Boolean flag = accountDAO.createNew_Account(account);
		return flag;
	}
}

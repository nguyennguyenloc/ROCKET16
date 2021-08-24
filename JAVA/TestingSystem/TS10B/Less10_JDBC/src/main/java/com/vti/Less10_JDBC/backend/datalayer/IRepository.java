package com.vti.Less10_JDBC.backend.datalayer;

import java.util.List;

import com.vti.Less10_JDBC.entity.Account;

public interface IRepository {
	public List<Account> getListAccount();
}

package com.vti.Less10_JDBC.backend.businesslayer;

import java.util.List;

import com.vti.Less10_JDBC.entity.Account;

public interface IService {
	public List<Account> getListAccount(int n);
}

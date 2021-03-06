package com.vti.Less10_JDBC.backend.businesslayer;

import java.util.ArrayList;
import java.util.List;

import com.vti.Less10_JDBC.backend.datalayer.DataRepositoryImpl;
import com.vti.Less10_JDBC.backend.datalayer.IRepository;
import com.vti.Less10_JDBC.entity.Account;

public class ServiceImpl implements IService{
	IRepository repository;

	public ServiceImpl() {
		repository = new DataRepositoryImpl();
	}

	public List<Account> getListAccount(int n) {
		List<Account> list = new ArrayList<Account>();

		for (int i = 0; i < n; i++) {
			list.add(repository.getListAccount().get(i));
		}
		return null;
	};
}

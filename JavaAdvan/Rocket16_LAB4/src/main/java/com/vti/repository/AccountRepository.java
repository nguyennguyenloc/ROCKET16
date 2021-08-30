package com.vti.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import com.vti.entity.Account;
import com.vti.utils.HibernateUtils;

public class AccountRepository {
	private HibernateUtils hibernateUtils;

	public AccountRepository() {
		hibernateUtils = HibernateUtils.getInstance();
	}

	public List<Account> getAllAccount() {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			Query<Account> query = session.createQuery("FROM Account order by id");
			return query.list();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}
}

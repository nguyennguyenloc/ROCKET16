package com.vti.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.vti.entity.Account;
import com.vti.utils.HibernateUtils;

public class AccountRepository {
	private HibernateUtils hibernateUtils;

	public AccountRepository() {
		hibernateUtils = HibernateUtils.getInstance();
	}

	public List<Account> get_FROM() {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			Query<Account> query = session.createQuery("FROM Account");
			return query.list();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public Account get_ByID(short id) {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			String hql = "FROM Account where id =:id1";
			Query<Account> query = session.createQuery(hql, Account.class);
			query.setParameter("id1", id);
			Account account = query.uniqueResult();
			return account;
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}
}

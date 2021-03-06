package com.vti.repository;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

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
			CriteriaBuilder builder = session.getCriteriaBuilder();
			CriteriaQuery<Account> query = builder.createQuery(Account.class);
			Root<Account> root = query.from(Account.class);
			query.select(root);
			List<Account> listAccounts = session.createQuery(query).list();
			return listAccounts;
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
			CriteriaBuilder builder = session.getCriteriaBuilder();

			CriteriaQuery<Account> query = builder.createQuery(Account.class);
			Root<Account> root = query.from(Account.class); // FROM Account
			query.select(root); // SELECT
			query.where(builder.equal(root.get("id"), id)); // WHERE id = id
			Account account = session.createQuery(query).uniqueResult();

			return account;

		} finally {
			if (session != null) {
				session.close();
			}
		}
	}
}

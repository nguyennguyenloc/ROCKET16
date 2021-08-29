package com.vti.entity;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.hibernate.service.ServiceRegistry;

public class TestHibernate {
	public static void main(String[] args) {
		Session session = null;
		try {
			session = buildSessionFactory().openSession();
			// Select dữ liệu cơ bản
			Query<TestingCategory> query = session.createQuery("FROM TestingCategory");
			List<TestingCategory> listResult = query.list();
			for (TestingCategory testingCategory : listResult) {
				System.out.println("ID: " + testingCategory.getId() + " Name: " + testingCategory.getName());
			}

		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	private static SessionFactory buildSessionFactory() {
		Configuration configuration = new Configuration();
		configuration.configure("hibernate.cfg.xml");
		configuration.addAnnotatedClass(TestingCategory.class);
		ServiceRegistry serviceRegistry = new

		StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
		return configuration.buildSessionFactory(serviceRegistry);
	}
}

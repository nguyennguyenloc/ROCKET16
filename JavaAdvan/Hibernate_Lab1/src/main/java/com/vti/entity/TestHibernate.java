package com.vti.entity;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class TestHibernate {
	public static void main(String[] args) {
		Session session = null;
		try {
			session = buildSessionFactory().openSession();
			session.beginTransaction();

			// Insert dữ liệu
			TestingCategory ts1 = new TestingCategory();
			ts1.setName("Category Test");
			
			session.save(ts1);
			System.out.println("Create Success!");
			// Select dữ liệu
			Query<TestingCategory> query = session.createQuery("FROM TestingCategory");
			List<TestingCategory> listResult = query.list();
			for (TestingCategory ts2 : listResult) {
				System.out.println(ts2.getId() + " " + ts2.getName());
			}
			session.getTransaction().commit();

		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public static SessionFactory buildSessionFactory() {
		Configuration configuration = new Configuration();
		configuration.configure();
		configuration.addAnnotatedClass(TestingCategory.class);
		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
				.applySettings(configuration.getProperties()).build();
		return configuration.buildSessionFactory(serviceRegistry);
	}
}

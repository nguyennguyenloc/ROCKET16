package com.vti.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import com.vti.entity.Department;
import com.vti.utils.HibernateUtils;

public class DepartmentRepository {
	private HibernateUtils hibernateUtils;
	private SessionFactory sessionFactory;

	public DepartmentRepository() {
		// sessionFactory = buildSessionFactory();
		hibernateUtils = HibernateUtils.getInstance();
	}

//	private SessionFactory buildSessionFactory() {
//		Configuration configuration = new Configuration();
//		configuration.configure("hibernate.cfg.xml");
//		configuration.addAnnotatedClass(Department.class);
//		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
//				.applySettings(configuration.getProperties()).build();
//		return configuration.buildSessionFactory(serviceRegistry);
//	}

	@SuppressWarnings("deprecation")
	public List<Department> getAllDepartments() {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			Query<Department> query = session.createQuery("FROM Department");

			return query.list();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public Department getDepartmentByID(short id) {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			Department department = session.get(Department.class, id);
			return department;
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public Department getDepartmentByName(String name) {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			Query<Department> query = session.createQuery("FROM Department WHERE name =:nameParameter");
			query.setParameter("nameParameter", name);
			Department department = query.uniqueResult();
			return department;
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public void createDepartment(Department department) {
		Session session = null;
		try {
			session = hibernateUtils.openSession();
			session.beginTransaction();

			session.save(department);
			session.getTransaction().commit();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public boolean isDepartmentExistsByID(short id) {
		Department department = getDepartmentByID(id);
		if (department == null) {
			return false;
		}
		return true;
	}

	public boolean isDepartmentExistsByName(String name) {
		Department department = getDepartmentByName(name);
		if (department == null) {
			return false;
		}
		return true;
	}

}

package com.vti.repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;

import com.vti.entity.Account;
import com.vti.entity.Department;
import com.vti.entity.Position;
import com.vti.entity.Position.PositionName;
import com.vti.utils.HibernateUtils;

import javassist.expr.NewArray;

public class AccountRepository {
	private HibernateUtils hibernateUtils;

	public AccountRepository() {
		hibernateUtils = HibernateUtils.getInstance();
	}

	@SuppressWarnings("unchecked")
	// Lấy danh sách tất cả các Account trên hệ thống.
	public List<Account> get_FROM() {

		Session session = null;

		try {

			// get session
			session = hibernateUtils.openSession();

			// create Native query
			// Câu lênh sql như câu lệnh viết trong Workbench
			NativeQuery query = session.createNativeQuery(
					"SELECT a.AccountID, a.Email, a.Username, a.FullName, d.DepartmentName, p.PositionName FROM account a \r\n"
							+ "INNER JOIN department d ON a.DepartmentID = d.DepartmentID\r\n"
							+ "INNER JOIN position p ON a.PositionID = p.PositionID;");
			// Phần query này sẽ tạo ra 1 list các array object, sử dụng vòng
			// lặp foreach để truy vấn tới các phần tử trong array, lấy các giá
			// trị trong DB theo Index của array bắt đầu từ 0.
			List<Account> accountList = new ArrayList<Account>();
			List<Object[]> accounts = query.getResultList();
			for (Object[] objects : accounts) {
				Account account = new Account();
				account.setId(Short.parseShort(objects[0].toString()));
				account.setEmail(objects[1].toString());
				account.setUsername(objects[2].toString());
				account.setFullname(objects[3].toString());
				// Chý ý cần tạo mới hàm tạo 1 tham số cho Department
				account.setDepartment(new Department(objects[4].toString()));
				account.setPosition(new Position(PositionName.valueOf(objects[5].toString())));
				accountList.add(account);
			}
			// Cách khác.
			// NativeQuery query = session.createNativeQuery("SELECT * FROM
			// account", Account.class );
			// List<Account> accountList = query.getResultList();
			return accountList;

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

package com.vti.Less10_JDBC.backend.datalayer;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.vti.Less10_JDBC.entity.Account;
import com.vti.Less10_JDBC.utils.JDBCUtil;

public class DataRepositoryImpl implements IRepository{
	public List<Account> list = new ArrayList<Account>();
	
	String query = "SELECT * FROM Account";
	Statement statement = JDBCUtil.getIntance().getStatement();
	
	ResultSet resultSet = statement.execute(query);
//	return list;
}

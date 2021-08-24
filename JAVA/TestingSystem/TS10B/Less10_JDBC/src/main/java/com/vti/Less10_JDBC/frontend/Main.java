package com.vti.Less10_JDBC.frontend;

import java.sql.SQLException;

import com.vti.Less10_JDBC.utils.JDBCUtil;

public class Main {

	public static void main(String[] args) throws SQLException {
		JDBCUtil.getIntance();
		
		JDBCUtil.getIntance().removeIntance();
		JDBCUtil.getIntance();
	}

}

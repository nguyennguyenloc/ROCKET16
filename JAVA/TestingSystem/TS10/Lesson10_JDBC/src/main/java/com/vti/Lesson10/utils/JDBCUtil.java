package com.vti.Lesson10.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCUtil {
	public final static String Database_Name_String = "Testing_System_1";
	public static final String URL_DB = "jdbc:mysql://localhost:3306/" + Database_Name_String
			+ "?autoReconnect=true&useSSL=false&characterEncoding=latin1";
	public static final String USER_DB = "root";
	public static final String PASSWORD = "root";
	private static JDBCUtil intance;
	private Connection connection;

	public static JDBCUtil getIntance() {
		if (intance == null) {
			intance = new JDBCUtil();
		}
		return intance;
	}

	public void removeIntance() throws SQLException {
		closeConnection();
		intance = null;
	}

	private JDBCUtil() {
		// System.out.println("KHỞI TẠO JDBCUtil");
	}

	public Connection getConnection() throws SQLException {
		if (connection == null) {
			connection = DriverManager.getConnection(URL_DB, USER_DB, PASSWORD);
		}
		return connection;
	}

	public Statement getStatement() throws SQLException {
		// Statement statement = getConnection().createStatement();
		// return statement;
		//
		// hoặc
		return getConnection().createStatement();
	}

	public PreparedStatement getPreparedStatement(String sqlQuery) throws SQLException {
		PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
		return preparedStatement;
	}

	public void closeConnection() throws SQLException {
		if (connection != null) {
			connection.close();
		}
		connection = null;
	}

}

package com.vti.Less10_JDBC.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCUtil {
	public static final String URL_DB = "jdbc:mysql://localhost:3306/Testing_System_1?autoReconnect=true&useSSL=false&characterEncoding=latin1";
	public static final String USER_DB = "root";
	public static final String PASSWORD = "root";
	private static JDBCUtil i;
	private Connection connection;

	public static JDBCUtil getIntance() {
		if (i == null) {
			i = new JDBCUtil();
		}
		return i;
	}

	public void removeIntance() throws SQLException {
		closeConnection();
		i = null;
	}

	private JDBCUtil() {
		System.out.println("hahahahah");
	}

	public Connection getConnection() throws SQLException {
		if (connection == null) {
			connection = DriverManager.getConnection(URL_DB, USER_DB, PASSWORD);
		}
		return connection;
	}

	public Statement getStatement(String sqlQuery) throws SQLException {
		Statement statement = getConnection().createStatement();
		return statement;
	}

	public PreparedStatement getPreparedStatement(String sqlQuery) throws SQLException {
		return getConnection().prepareStatement(sqlQuery);
	}

	public void closeConnection() throws SQLException {
		if (connection != null) {
			connection.close();
		}
		connection = null;
	}

}

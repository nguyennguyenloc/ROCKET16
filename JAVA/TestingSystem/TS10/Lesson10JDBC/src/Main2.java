import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Main2 {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/testing_system";
		String user = "root";
		String password = "root";

		try {
			Connection connection = DriverManager.getConnection(url, user, password);
			Statement statement = connection.createStatement();
//			String queryString = "Select * from Account";
//			ResultSet resultSet = statement.executeQuery(queryString);
//			while (resultSet.next()) {
//				System.out.print(resultSet.getString("username"));
//				System.out.println(resultSet.getString(3));
//			}

//			String queryString1 = "Insert into `Account` (Email, UserName, Fullname, DepartmentID, PositionId)" +
//												"Values  ('NewOne@gmail.com', 'NewOne','New Member One', 2, 2)";
//			int effectedRecordAmount = statement.executeUpdate(queryString1);
//			System.out.println("Effected Record Amount: " + effectedRecordAmount);

			int id = 5;
			String queryString2 = "Select * from Account where AccountID = " + id;
			ResultSet resultSet = statement.executeQuery(queryString2);
			resultSet.next();
			System.out.println(resultSet.getString(3));
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

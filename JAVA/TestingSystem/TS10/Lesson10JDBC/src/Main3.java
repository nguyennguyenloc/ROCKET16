import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Main3 {

	public static void main(String[] args) throws SQLException {
		String url = "jdbc:mysql://localhost:3306/testing_system";
		String user = "root";
		String password = "root";

		Connection connection = DriverManager.getConnection(url, user, password);
		System.out.println("Connect success");

		String queyString = "Insert into `Department` (DepartmentName)" + "Values	(?)";
		PreparedStatement preparedStatement = connection.prepareStatement(queyString);
		
		preparedStatement.setString(1, "Phòng mới");
		
		int effectedRecordAmount = preparedStatement.executeUpdate();
		
		System.out.println("Effected Record Amount: " + effectedRecordAmount);
		
		connection.close();
	}

}

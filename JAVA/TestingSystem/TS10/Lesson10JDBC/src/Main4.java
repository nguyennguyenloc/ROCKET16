import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Main4 {

	public static void main(String[] args) throws SQLException {
		String url = "jdbc:mysql://localhost:3306/testing_system";
		String user = "root";
		String password = "root";

		Connection connection = DriverManager.getConnection(url, user, password);
		System.out.println("Connect success");

		String queyString = "Update `Department`" +
							"Set DepartmentName = ? " + 
							"Where DepartmentId = ? ";
		PreparedStatement preparedStatement = connection.prepareStatement(queyString);
		
		preparedStatement.setString(1, "Phòng mới sửa tên");
		preparedStatement.setInt(2, 12);
		
		int effectedRecordAmount = preparedStatement.executeUpdate();
		
		System.out.println("Effected Record Amount: " + effectedRecordAmount);
		
		connection.close();
	}

}

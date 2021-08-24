package entity;
import java.time.LocalDate;

//import Position.namePosition;

//import Position.namePosition;

public class Program {

	public static void main(String[] args) {
		// Position
		Position pos1 = new Position();
		pos1.positionId = 1;
		pos1.positionName = "Dev";

		Position pos2 = new Position();
		pos2.positionId = 2;
		pos2.positionName = "Scrum_Master";

		Position pos3 = new Position();
		pos3.positionId = 3;
		pos3.positionName = "Pm";

		// Department
		Department dp1 = new Department();
		dp1.departmentId = 1;
		dp1.nameDepartment = "Sale";

		Department dp2 = new Department();
		dp2.departmentId = 2;
		dp2.nameDepartment = "Hr";

		Department dp3 = new Department();
		dp2.departmentId = 3;
		dp2.nameDepartment = "Manager";

		// Group
		Group gp1 = new Group();
		gp1.groupID = 1;
		gp1.createDate = LocalDate.now();
		gp1.groupName = "Sale";

		Group gp2 = new Group();
		gp2.groupID = 2;
		gp2.groupName = "Code";

		Group gp3 = new Group();
		gp3.groupID = 3;
		gp3.groupName = "Br";

		// Account
		Account ac1 = new Account();
		ac1.accountID = 1;
		ac1.createDate = LocalDate.now();
		ac1.departmentID = dp1;
		ac1.email = "nnloc123@gmail.com";
		ac1.fullName = "Nguyen Nguyen Loc";
		ac1.groups = new Group[] { gp1, gp3 };
		ac1.PositionID = pos3;
		ac1.userName = "Alex Lee";
		ac1.gender = Gender.Female;

		Account ac2 = new Account();
		ac2.accountID = 2;
		ac2.createDate = LocalDate.now();
		ac2.departmentID = dp1;
		ac2.email = "nnloc123@gmail.com";
		ac2.fullName = "Nguyen Nguyen Loc";
		Group[] grp2 = { gp2, gp3 };
		ac2.groups = grp2;
		ac2.PositionID = pos1;
		ac2.userName = "Alex Lee";
		ac1.gender = Gender.Male;

		System.out.println("Account 1 : " + ac1.accountID + '\n' + "Group 1: " + ac1.groups[1].groupName + '\n' + "Positinon 1: " + ac1.PositionID.positionName);
	
		System.out.println("Account 2 : " + ac2.accountID + '\n' + "Group 2: " + ac2.groups[0].groupName + '\n' + "Positinon 2: " + ac2.PositionID.positionName);
	}

}

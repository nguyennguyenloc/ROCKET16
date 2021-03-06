import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;

public class Program {
	public static void cau1(Account acc1) {
		if (acc1.department == null) {
			System.out.println("Nhân viên này chưa có phòng ban ");
		} else {
			System.out.println("Phòng ban của nhân viên này là: " + acc1.department.name);
		}
	}

	public static void cau2(Account acc) {
		if (acc.groups.length == 2) {
			System.out.println(acc.groups[0].name + " " + acc.groups[1].name);
		}
	}

	public static void main(String[] args) {
		Department dp1 = new Department();
		dp1.id = 1;
		dp1.name = "Sale";

		Department dp2 = new Department();
		dp2.id = 2;
		dp2.name = "Marketing";

		Department dp3 = new Department();
		dp3.id = 3;
		dp3.name = "Support";

		Position pos1 = new Position();
		pos1.positionId = 1;
		pos1.positionName = "Dev";

		Position pos2 = new Position();
		pos2.positionId = 2;
		pos2.positionName = "Scrum_Master";

		Position pos3 = new Position();
		pos3.positionId = 3;
		pos3.positionName = "PM";

		Group group1 = new Group();
		group1.id = 1;
		group1.name = "Money";
		group1.createDate = LocalDate.of(2021, 1, 1);

		Group group2 = new Group();
		group2.id = 2;
		group2.name = "System";
		group2.createDate = LocalDate.of(2021, 4, 1);

		Group group3 = new Group();
		group3.id = 3;
		group3.name = "Testing";
		group3.createDate = LocalDate.of(2021, 9, 18);

		Account acc1 = new Account();
		acc1.id = 1;
		acc1.email = "nnloc123gmail.com";
		acc1.userName = "Loc";
		acc1.fullName = "Nguyễn Nguyên Lộc";
		acc1.department = dp1;
		acc1.position = pos1;
		Group[] grp1 = { group1, group2 };
		acc1.groups = grp1;
		acc1.createDate = LocalDate.now();

		Account acc2 = new Account();
		acc2.id = 2;
		acc2.email = "hongquan@mail.com";
		acc2.userName = "Quan";
		acc2.fullName = "Hong Quan";
		// acc2.department = dp2;
		acc2.position = pos2;
		Group[] grp2 = { group1, group3 };
		acc2.groups = grp2;
		acc2.createDate = LocalDate.now();

		Account acc3 = new Account();
		acc3.id = 3;
		acc3.email = "longnguyen9x@gmail.com";
		acc3.userName = "Long";
		acc3.fullName = "Hoàng Long";
		acc3.department = dp3;
		acc3.position = pos3;
		acc3.groups = new Group[] { group1, group2, group3 };
		acc3.createDate = LocalDate.now();

		group1.accounts = new Account[] { acc1 };
		group2.accounts = new Account[] { acc2, acc3 };
		group3.accounts = new Account[] { acc1, acc2, acc3 };

		cau1(acc2);
		cau1(acc3);

		cau2(acc2);

		int i1 = 100000000;
		System.out.printf(Locale.US, "%,d%n", i1);

		String pattern = "dd/MM/yyyy HH:mm:ss";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String date = simpleDateFormat.format(new Date());
		System.out.println(date);
		
		int min = 0;
		int max = 99999;
		int a = (int) (Math.random() * max) + min;
		while (a < 10000) {
		a = a * 10;
		}
		System.out.printf("===Question2======\n");
		System.out.println("Số ngẫu nhiên: " + a);
		System.out.println("======Question3=======");
		String b = String.valueOf(a);
		System.out.println("Hai số cuối: " + b.substring(3));
	}

}

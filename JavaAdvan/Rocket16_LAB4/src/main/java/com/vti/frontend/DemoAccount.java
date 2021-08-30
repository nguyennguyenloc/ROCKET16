package com.vti.frontend;

import java.util.List;

import com.vti.entity.Account;
import com.vti.repository.AccountRepository;
import com.vti.utils.ScannerUltis;

public class DemoAccount {
	public static void main(String[] args) {
		while (true) {
			System.out.println("------MỜI BẠN CHỌN CHỨC NĂNG------");
			String leftAlignFormat = "| %-72s |%n";
			System.out.format("+--------------------------------------------------------------------------+%n");
			System.out.format("|                        Choose please                                     |%n");
			System.out.format("+--------------------------------------------------------------------------+%n");
			System.out.format(leftAlignFormat, "1. Danh sách Department trên hệ thống");
			System.out.format(leftAlignFormat, "2. Danh sách Department Theo ID");
			System.out.format(leftAlignFormat, "3. Tạo mới Department");
			System.out.format(leftAlignFormat, "4. Xóa Department");
			System.out.format(leftAlignFormat, "5. Update Department");
			System.out.format(leftAlignFormat, "6. Lấy danh sách nhân viên phòng theo ID Department");
			System.out.format(leftAlignFormat, "7. Exit");
			System.out.format("+--------------------------------------------------------------------------+%n");
			switch (ScannerUltis.inputIntPositive()) {
			case 1:
				getAllDepartment();
				break;
			case 2:
				// getDepartmentByID();

				break;
			case 3:
				// createDepartment();

				break;
			case 4:
				// deleteDepartment();

				break;
			case 5:
				// updateDepartment();

				break;
			case 6:
				// getAccountDepartmentByID();

				break;
			case 7:

				return;
			default:
				System.out.println("Nhập lại:");
				break;
			}
		}

	}

	private static void getAllDepartment() {
		AccountRepository accountRepository = new AccountRepository();
		List<Account> listAccount = accountRepository.getAllAccount();
		for (Account account : listAccount) {
			System.out.println(account.toString());
		}
	}
}

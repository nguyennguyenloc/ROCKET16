package com.vti.frontend;

import java.util.List;

import com.vti.entity.Account;
import com.vti.repository.AccountRepository;
import com.vti.utils.ScannerUltis;

public class DemoHQL {
	public static void main(String[] args) {
		AccountRepository accountRepository = new AccountRepository();

		List<Account> list = accountRepository.get_FROM();
		for (Account account : list) {
			System.out.println("ID: " + account.getId() + " Email:" + account.getEmail() + " Username: "
					+ account.getUsername() + " FullName: " + account.getFullname() + " Department: "
					+ account.getDepartment().getName() + " Possition: " + account.getPosition().getName());

		}
		
//		System.out.println("Nhập vào ID của Account cần tìm kiếm: ");
//		int id = ScannerUltis.inputIntPositive();
//		Account account = accountRepository.get_ByID((short) id);
//		System.out.println("ID: " + account.getId() + " Email:" + account.getEmail() + " Username: "
//				+ account.getUsername() + " FullName: " + account.getFullname() + " Department: "
//				+ account.getDepartment().getName() + " Possition: " + account.getPosition().getName());

	}

}

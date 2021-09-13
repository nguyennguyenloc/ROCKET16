package com.vti.frontend;

import com.vti.backend.Account_Demo;

public class Demo {
	public static void main(String[] args) {
		System.out.println("Chương trình tạo mới Account");
		Account_Demo accountDemo = new Account_Demo();
		Boolean flag = accountDemo.createAccount();
		if (flag) {
			System.out.println("Tạo Account thành công");
		} else {
			System.out.println("Tạo Account không thành công");
		}
	}
}

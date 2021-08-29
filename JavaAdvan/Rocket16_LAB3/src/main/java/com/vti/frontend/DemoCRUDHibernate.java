package com.vti.frontend;

import java.util.List;
import java.util.Scanner;

import com.vti.entity.Department;
import com.vti.repository.DepartmentRepository;



public class DemoCRUDHibernate {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int choose = menu();
		switch (choose) {
		case 1:
			showAllDepartment();
			break;
		case 2:
			System.out.println("Nhập vào ID của phòng ban: ");
			short id = sc.nextShort();
//			showDepartmentById(id);
			break;
		case 3:

			break;
		case 4:

			break;
		default:
			break;
		}
	}

//	private static void showDepartmentById(short id) {
//		DepartmentRepository departmentRepository = new DepartmentRepository();
//		Department department = departmentRepository.getDepartmentById(id);
//		System.out.println("ID: " + department.getId() + " Name: " + department.getName());
//	}

	private static void showAllDepartment() {
		System.out.println("Danh sách phòng ban trên hệ thống");
		DepartmentRepository departmentRepository = new DepartmentRepository();
		List<Department> list = departmentRepository.getAllDepartments();
		for (Department department : list) {
			System.out.println("ID: " + department.getId() + " Name: " + department.getName());
		}
	}

	private static int menu() {
		while (true) {
			System.out.println("CHương trình quản lý phòng ban..");
			System.out.println("Mời bạn nhập vào chức năng muốn sử dụng");
			System.out.println("1. Lấy danh sách tất cả các phòng ban trên hệ thống");
			System.out.println("2. Tìm phòng ban theo ID");
			System.out.println("3. Tìm phòng ban theo Name");
			System.out.println("4. Tạo mới 1 phòng");
			Scanner sc = new Scanner(System.in);
			if (sc.hasNextInt()) {
				int i = sc.nextInt();
				if ((i == 1) || (i == 2) || (i == 3) || (i == 4)) {
					return i;
				} else {
					System.out.println("Nhập lại: ");
				}
			} else {
				System.out.println("Nhập lại: ");
			}
		}
	}
}

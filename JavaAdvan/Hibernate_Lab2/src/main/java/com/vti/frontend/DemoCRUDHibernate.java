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
			System.out.println("Nhập ID phòng ban: ");
			short id = sc.nextShort();
			showDepartmentByID(id);
			break;
		case 3:
			System.out.println("Nhập vào tên phòng ban tìm kiếm: ");
			String nameDep = sc.nextLine();
			showDepartmentName(nameDep);
			break;
		case 4:
			System.out.println("Tạo mới phòng ban");
			System.out.println("Nhập tên phòng cần tạo:");
			String nameDepCreate = sc.nextLine();
			Department dep = new Department();
			dep.setName(nameDepCreate);
			createDep(dep);
			showAllDepartment();
			break;
		case 5:
			System.out.println("Nhập ID cần kiểm tra");
			short idCheck = sc.nextShort();
			checkId(idCheck);
			break;
		default:
			break;
		}
	}

	private static void showAllDepartment() {
		System.out.println("Danh sách các phòng ban trên hệ thống");
		DepartmentRepository departmentRepository = new DepartmentRepository();
		List<Department> listDept = departmentRepository.getAllDepartments();
		for (Department department : listDept) {
			System.out.println("ID: " + department.getId() + " Name: " + department.getName());
		}
	}

	private static void showDepartmentByID(short id) {
		DepartmentRepository departmentRepository = new DepartmentRepository();
		Department department = departmentRepository.getDepartmentByID(id);
		System.out.println(department.toString());
	}

	private static void showDepartmentName(String nameDep) {
		DepartmentRepository departmentRepository = new DepartmentRepository();
		Department department = departmentRepository.getDepartmentByName(nameDep);
		if (department == null) {
			System.out.println("Không có phòng ban này trên hệ thống");
		} else {
			System.out.println(department.toString());
		}
	}

	public static void createDep(Department dep) {
		DepartmentRepository departmentRepository = new DepartmentRepository();
		departmentRepository.createDepartment(dep);
	}

	private static void checkId(short id) {
		DepartmentRepository departmentRepository = new DepartmentRepository();
		boolean department = departmentRepository.isDepartmentExistsByID(id);
		if (department == true) {
			System.out.println("Id đã tồn tại");
		} else {
			System.out.println("Id chưa tồn tại");
		}
	}

	@SuppressWarnings("resource")
	private static int menu() {
		while (true) {
			System.out.println("CHương trình quản lý phòng ban..");
			System.out.println("Mời bạn nhập vào chức năng muốn sử dụng");
			System.out.println("1. Lấy danh sách tất cả các phòng ban trên hệ thống");
			System.out.println("2. Tìm phòng ban theo ID");
			System.out.println("3. Tìm phòng ban theo Name");
			System.out.println("4. Tạo mới 1 phòng");
			System.out.println("5. Kiểm tra id phòng ban");
			Scanner sc = new Scanner(System.in);
			if (sc.hasNextInt()) {
				int i = sc.nextInt();
				if ((i == 1) || (i == 2) || (i == 3) || (i == 4) || (i == 5)) {
					return i;
				} else {
					System.out.println("Nhập lại");
				}
			} else {
				System.out.println("Nhập lại");
			}
		}
	}

}

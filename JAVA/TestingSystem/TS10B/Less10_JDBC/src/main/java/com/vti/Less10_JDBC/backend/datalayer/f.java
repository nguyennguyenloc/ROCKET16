package com.vti.Less10_JDBC.backend.datalayer;

import java.sql.SQLException;
import java.util.Scanner;

import com.vti.Less10_JDBC.utils.JDBCUtil;

public class f {
	public static int findNumbers(int[] nums) {
		int ok = 0;
		for (int i = 0; i < nums.length; i++) {
			int count = 1;
			int num = 1;
			while (num * 10 <= nums[i]) {
				num = num * 10;
				count++;
			}
			if (count % 2 == 0) {
				ok++;
			}
		}
		return ok;
	}

	public static void main(String[] args) {
		int[] nums;
		int result = 0;
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		nums = new int[n];
		for (int i = 0; i < n; i++) {
			nums[i] = sc.nextInt();
		}
		result = findNumbers(nums);
		System.out.println(result);
	}

}

import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		ArrayList<Student> students = new ArrayList<Student>();
		Student.college = "Đại học Bách Khoa";
		Student student1 = new Student(1, "Loc");
		Student student2 = new Student(2, "Minh");
		System.out.println(student1.toString());
		student2.college = "Đại học Kinh Tế";
		Student student3 = new Student(3, "Nam");
		students.add(student1);
		students.add(student2);
		students.add(student3);
		for (Student student : students) {
			// System.out.println(student);
			System.out.println(student.toString());
		}
		student1.nopQL(50);
		student2.nopQL(100);
		student3.nopQL(200);
		System.out.println(Student.money);
		
		student1.tieuQL(10);
		student2.tieuQL(20);
		student3.tieuQL(40);
		System.out.println(Student.money);
	}

}

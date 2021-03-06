import java.io.Serializable;

public class Student implements Serializable {
	int id;
	String name;
	public static String college;
	public static int money;
	public static int lose;

	public Student() {
		super();
	}

	public Student(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", college=" + college + "]";
	}

	public void nopQL(int money) {
		this.money += money;
	}

	public void tieuQL(int lose) {
		this.money -= lose;
		System.out.println("Student: " + name + " tiêu " + lose + " còn " + money);
	}
}

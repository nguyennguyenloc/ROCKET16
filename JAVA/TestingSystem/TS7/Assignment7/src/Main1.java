import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class Main1 {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		File file = new File("C:/Users/Admin/Desktop/lesson7.txt");
		String filePath = "C:/Users/Admin/Desktop/lesson7.txt";
		// cau1
		// File file = new File("C:/Users/Admin/Desktop");

		if (file.exists()) {
			System.out.println("File is exists");
		} else {
			System.out.println("File is no exists");
			try {
				if (file.createNewFile()) {
					System.out.println("Đã tạo file tên là lesson7.txt");
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		// câu1
		// for (String fileName : file.list()) {
		// System.out.println(fileName);
		// }

		// // câu3: thêm nội dung vào file
//		try {
//			FileOutputStream fileOutPutStream = new FileOutputStream(filePath, true);
//			// String iString = "Nguyễn Nguyên Lộc làm được, cố lên yeah";
//			// fileOutPutStream.write(iString.getBytes());
//			// fileOutPutStream.close();
//
//			Student student1 = new Student(10, "hihihihihi");
//			ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutPutStream);
//			objectOutputStream.writeObject(student1);
//			objectOutputStream.close();
//
//			// objectinputStream.readObject(student1);
//			// objectinputStream.close();
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}

		try {
			FileInputStream fileinPutStream = new FileInputStream(filePath);
			ObjectInputStream objectInputStream = new ObjectInputStream(fileinPutStream);

			Object obj = objectInputStream.readObject();
			objectInputStream.close();
			Student student10 = (Student) obj;
			System.out.println(student10.toString());
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

}

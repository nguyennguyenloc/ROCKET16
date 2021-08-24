package entity;
import java.time.LocalDate;

public class Group {
	int groupID;
	String groupName;
	int creatorID;
	LocalDate createDate;
	Account[] accounts;
}

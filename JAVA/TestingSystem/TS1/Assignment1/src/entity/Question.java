package entity;
import java.time.LocalDate;

public class Question {
	byte questionId;
	String content;
	CategoryQuestion categoryId;
	TypeQuestion typeId;
	Account creatorId;
	LocalDate createDate;
}

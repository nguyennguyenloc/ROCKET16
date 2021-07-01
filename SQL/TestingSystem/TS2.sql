DROP DATABASE IF EXISTS `Testing_System_Assignment_2`;
CREATE DATABASE IF NOT EXISTS `Testing_System_Assignment_2`;

USE `Testing_System_Assignment_2`;

DROP TABLE IF EXISTS Department;
CREATE TABLE Department(
	DepartmentID 	TINYINT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName	VARCHAR(30) UNIQUE KEY CHECK(length(DepartmentName) >= 4)
);

INSERT INTO Department (DepartmentID, DepartmentName) 
VALUES		(1, 'Hành chính'),
            (2, 'Kinh doanh'),
            (3, 'Quản trị'),
            (4, 'Tài vụ'),
            (5, 'Kế toán'),
            (6, 'Nhân sự');

SELECT * FROM Department;

DROP TABLE IF EXISTS `Position`;
CREATE TABLE `Position`(
	PositionID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    PositionName	ENUM('DEV', 'TEST', 'SCRUM MASTER', 'PM')
);

iNSERT INTO `Position`(PositionID, PositionName)
VALUES		(1, 'DEV'),
			(2, 'TEST'),
            (3, 'SCRUM MASTER'),
            (4, 'PM');
            
SELECT*FROM `Position`;

DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account`(
	AccountID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    Email			VARCHAR(50) UNIQUE KEY,
    Username		VARCHAR(50) CHECK(length(Username) >= 6),
    FullName		VARCHAR(100) NOT NULL,
    DepartmentID	TINYINT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
    PositionID		TINYINT,
    FOREIGN KEY (PositionID) REFERENCES `Position`(PositionID),
    CreateDate		DATETIME DEFAULT NOW()
);

INSERT INTO `Account`(Email, Username, FullName, DepartmentID, PositionID )
VALUES		('nnloc123@gmail.com','Nguyên Lộc','Nguyễn Nguyên Lộc', 1, 1),
			('hongphuong@gmail.com','Hồng Phương','Trần Hồng Phương', 1, 2),
            ('quocminh@gmail.com','Nguyễn Minh','Nguyễn Quốc Minh', 3, 3),
            ('viethoang@gmail.com','Viết Hoàng','Lê Viết Hoàng', 4, 4),
            ('trang199x@gmail.com','Thái Trang','Thái Thị Trang', 5, 4),
            ('hoaithuong@gmail.com','Hoài Thương','Nguyễn Hoài Thương', 6, 1);

SELECT * FROM `Account`;

DROP TABLE IF EXISTS `Group`;
CREATE TABLE `Group`(
	GroupID			TINYINT PRIMARY KEY AUTO_INCREMENT,
    GroupName		VARCHAR(30) NOT NULL,
    CreatorID		TINYINT,
    FOREIGN KEY (CreatorID) REFERENCES `Account`(AccountID),
    CreateDate		DATETIME DEFAULT NOW()
);

INSERT INTO `Group`(GroupName, CreatorID)
VALUES		('Một', 1),
			('Hai', 2),
            ('Ba', 3),
            ('Bốn', 4),
            ('Năm', 5),
            ('Sáu', 6);
            
SELECT * FROM `Group`;

DROP TABLE IF EXISTS GroupAccount;
CREATE TABLE GroupAccount(
	GroupID		TINYINT,
    AccountID	TINYINT,
    PRIMARY KEY (GroupID, AccountID),
    FOREIGN KEY (GroupID) REFERENCES `Group`(GroupID),
	FOREIGN KEY (AccountID) REFERENCES `Account`(AccountID),
    JoinDate	DATETIME DEFAULT NOW()
);

INSERT INTO GroupAccount(GroupID, AccountID)
VALUES		(1,1), (2,1), (3,2), (4,4), (5,3), (6,6), (1,5), (1,6);

SELECT * FROM GroupAccount;

DROP TABLE IF EXISTS TypeQuestion;
CREATE TABLE TypeQuestion(
	TypeID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    TypeName	ENUM('Essay','Multiple-Choice','Hard','Write')
);

INSERT INTO TypeQuestion(TypeName)
VALUES		('Essay'),
			('Multiple-Choice'),
            ('Hard'),
            ('Write');

SELECT * FROM TypeQuestion;

DROP TABLE IF EXISTS CategoryQuestion;
CREATE TABLE CategoryQuestion(
	CategoryID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    CategoryName	VARCHAR(15) NOT NULL
);

INSERT INTO CategoryQuestion(CategoryName)
VALUES		('Java'),('SQL'),('C#'),('Post man'),('ReactJS');

SELECT * FROM CategoryQuestion;

DROP TABLE IF EXISTS `Question`;
CREATE TABLE `Question`(
	QuestionID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    Content			VARCHAR(50) NOT NULL,
    CategoryID		TINYINT,
    FOREIGN KEY (CategoryID) REFERENCES CategoryQuestion(CategoryID),
    TypeID			TINYINT,
    FOREIGN KEY (TypeID) REFERENCES TypeQuestion(TypeID),
    CreatorID		TINYINT,
    FOREIGN KEY (CreatorID) REFERENCES `Account`(AccountID),
    CreateDate		DATETIME DEFAULT NOW()
);

INSERT INTO `Question`(Content, CategoryID, TypeID, CreatorID)
VALUES		('ahihihi',5,3,1),
			('aloha',2,3,2),
            ('hihihi',2,2,3),
            ('hohoho',3,4,4),
            ('ehehehe',4,1,5),
            ('hohoho',1,3,4);
            
SELECT * FROM `Question`;

DROP TABLE IF EXISTS Answer;
CREATE TABLE Answer(
	AnswerID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    Content			VARCHAR(50) NOT NULL,
    QuestionID		TINYINT,
    FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID) ON DELETE CASCADE,		
    isCorrect		ENUM('TRUE', 'FALSE', 'NG')
);

INSERT INTO Answer(Content, QuestionID, isCorrect)
VALUES		('A', 1, 'TRUE'),
			('B', 2, 'FALSE'),
            ('C', 3, 'FALSE'),
            ('D', 4, 'FALSE'),
            ('D', 5, 'TRUE'),
            ('D', 6, 'NG'),
            ('B', 3, 'TRUE'),
            ('C', 3, 'TRUE'),
            ('D', 3, 'TRUE');

SELECT * FROM Answer;

DROP TABLE IF EXISTS Exam;
CREATE TABLE Exam(
	ExamID			TINYINT PRIMARY KEY AUTO_INCREMENT,
    `Code`			TINYINT NOT NULL,
    Title			VARCHAR(30),
    CategoryID		TINYINT,
    FOREIGN KEY (CategoryID) REFERENCES CategoryQuestion(CategoryID),
    Duration		TINYINT UNSIGNED,
    CreatorID		TINYINT,
	FOREIGN KEY (CreatorID) REFERENCES `Account`(AccountID),		
    CreateDate		DATETIME
);

INSERT INTO Exam(`Code`, Title, CategoryID, Duration, CreatorID, CreateDate)
VALUES 		('001','Tiêu đề A', 5, 60, 6, '2021-05-30'),
			('002','Tiêu đề B', 5, 90, 5, '2018-05-30'),
			('003','Tiêu đề C', 5, 130, 4, '2021-06-30'),
			('004','Tiêu đề D', 4, 100, 3, '2021-07-30'),
			('005','Tiêu đề E', 3, 45, 2, '2021-07-20'),
			('006','Tiêu đề F', 2, 45, 1, '2021-06-10'),
			('007','Tiêu đề G', 1, 180, 6, '2021-04-25');

SELECT * FROM Exam;

DROP TABLE IF EXISTS ExamQuestion;
CREATE TABLE ExamQuestion(
	ExamID			TINYINT, 
    QuestionID		TINYINT,
    PRIMARY KEY (ExamID, QuestionID),
    FOREIGN KEY (ExamID) REFERENCES Exam(ExamID) ON DELETE CASCADE,
    FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID) ON DELETE CASCADE
);

INSERT INTO ExamQuestion(ExamID, QuestionID) 
VALUES (1,1),(1,2),(1,3),(2,4),(3,5),(4,6),(5,6),(6,6),(7,2);

SELECT * FROM ExamQuestion;

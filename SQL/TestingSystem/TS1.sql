DROP DATABASE IF EXISTS `Testing_System_Assignment_1`;
CREATE DATABASE IF NOT EXISTS `Testing_System_Assignment_1`;

USE `Testing_System_Assignment_1`;

DROP TABLE IF EXISTS Department;
CREATE TABLE Department(
	DepartmentID 	TINYINT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName	VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS `Position`;
CREATE TABLE `Position`(
	PositionID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    PositionName	ENUM('DEV', 'TEST', 'SCRUM MASTER', 'PM')
);

DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account`(
	AccountID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    Email			VARCHAR(50) NULL,
    Username		VARCHAR(50) NOT NULL,
    FullName		VARCHAR(100) NOT NULL,
    DepartmentID	TINYINT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
    PositionID		TINYINT,
    FOREIGN KEY (PositionID) REFERENCES `Position`(PositionID),
    CreateDate		DATE NULL
);

DROP TABLE IF EXISTS `Group`;
CREATE TABLE `Group`(
	GroupID			TINYINT PRIMARY KEY AUTO_INCREMENT,
    GroupName		VARCHAR(30) NOT NULL,
    CreatorID		TINYINT,
    FOREIGN KEY (CreatorID) REFERENCES `Account`(AccountID),
    CreateDate		DATE NULL
);

DROP TABLE IF EXISTS GroupAccount;
CREATE TABLE GroupAccount(
	GroupID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    AccountID	TINYINT,
	FOREIGN KEY (AccountID) REFERENCES `Account`(AccountID),
    JoinDate	DATE NULL
);

DROP TABLE IF EXISTS TypeQuestion;
CREATE TABLE TypeQuestion(
	TypeID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    TypeName	ENUM('Essay','Multiple-Choice')
);

DROP TABLE IF EXISTS CategoryQuestion;
CREATE TABLE CategoryQuestion(
	CategoryID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    CategoryName	VARCHAR(15) NOT NULL
);

DROP TABLE IF EXISTS `Question`;
CREATE TABLE `Question`(
	QuestionID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    Content			CHAR NOT NULL,
    CategoryID		TINYINT,
    FOREIGN KEY (CategoryID) REFERENCES CategoryQuestion(CategoryID),
    TypeID			TINYINT,
    FOREIGN KEY (TypeID) REFERENCES TypeQuestion(TypeID),
    CreatorID		TINYINT,
    FOREIGN KEY (CreatorID) REFERENCES `Account`(AccountID),
    CreateDate		DATE NULL
);

DROP TABLE IF EXISTS Answer;
CREATE TABLE Answer(
	AnswerID		TINYINT PRIMARY KEY AUTO_INCREMENT,
    Content			CHAR NOT NULL,
    QuestionID		TINYINT,
    FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID),		
    isCorrect		ENUM('TRUE', 'FALSE')
);

DROP TABLE IF EXISTS Exam;
CREATE TABLE Exam(
	ExamID			TINYINT PRIMARY KEY AUTO_INCREMENT,
    `Code`			TINYINT NOT NULL,
    Title			VARCHAR(30),
    CategoryID		TINYINT,
    FOREIGN KEY (CategoryID) REFERENCES CategoryQuestion(CategoryID),
    Duration		TIME NULL,
    CreatorID		TINYINT,
	FOREIGN KEY (CreatorID) REFERENCES `Account`(AccountID),		
    CreateDate		DATE NULL
);

DROP TABLE IF EXISTS ExamQuestion;
CREATE TABLE ExamQuestion(
	ExamID			TINYINT PRIMARY KEY AUTO_INCREMENT,
    QuestionID		TINYINT,
    FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID)
);


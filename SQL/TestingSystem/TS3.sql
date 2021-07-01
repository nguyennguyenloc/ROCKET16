USE `Testing_System_Assignment_2`;

-- Câu 1
SELECT * FROM Department;
SELECT * FROM `Position`;
SELECT * FROM `Account`;
SELECT * FROM `Group`;
SELECT * FROM GroupAccount;
SELECT * FROM TypeQuestion;
SELECT * FROM CategoryQuestion;
SELECT * FROM `Question`;
SELECT * FROM Answer;
SELECT * FROM Exam;
SELECT * FROM ExamQuestion;

-- Câu 2
SELECT DepartmentName FROM Department;

-- Câu 3
SELECT DepartmentId, DepartmentName FROM Department WHERE DepartmentName = 'Kế toán';

-- Câu 4
SELECT * FROM `Account`;
SELECT MAX(character_length(FullName)) FROM `Account`;
SELECT FullName FROM `Account` WHERE character_length(FullName) = (SELECT MAX(character_length(FullName)) FROM `Account`);

-- Câu 5
SELECT FullName FROM `Account` WHERE character_length(FullName) = (SELECT MAX(character_length(FullName)) FROM `Account` WHERE DepartmentId = 1);

-- Câu 6
SELECT * FROM `Group`;
SELECT GroupName FROM `Group` WHERE CreateDate > '2021-05-30 21:00:11';

-- Câu 7
SELECT * FROM `Question`;
SELECT QuestionID FROM Answer GROUP BY QuestionID HAVING COUNT(*) = 4;

-- Câu 8
SELECT ExamID FROM Exam WHERE Duration > 60 AND CreateDate > 2019-12-20;

-- Câu 9
SELECT GroupName FROM `Group` ORDER BY CreateDate ASC LIMIT 5;

-- Câu 10
SELECT COUNT(*) as 'Số nhân viên' FROM `Account` WHERE DepartmentID = 1;

-- Câu 11
SELECT Username FROM `Account` WHERE Username like 'h%g';

-- Câu 12
SELECT * FROM `Exam`;
DELETE FROM `Exam` WHERE CreateDate = '2021-04-25 00:00:00';

-- Câu 13
SELECT * FROM `Question`;
DELETE FROM `Question` WHERE Content like 'a%';

-- Câu 14
SELECT * FROM `Account`;
UPDATE `Account` SET Username = 'Nguyễn Bá Lộc', Email = 'loc.nguyenba@vti.com.vn' WHERE AccountID = 5;

-- Câu 15
UPDATE `GroupAccount` SET GroupID = 4 WHERE AccountID = 5;
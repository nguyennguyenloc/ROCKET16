-- SELECT  count(DISTINCT isCorrect) FROM Answer;
-- SELECT count(isCorrect)  FROM Answer Group by isCorrect;
-- SET autocommit = 0;
-- DROP TABLE IF EXISTS Department2;
-- CREATE TABLE Department2(
-- 	DepartmentIDNew 	TINYINT ,
--     DepartmentNameNew	VARCHAR(30)
-- );
-- START TRANSACTION;
-- INSERT INTO Department2 
-- SELECT * FROM Department1;
-- select * from Department2;

-- COMMIT;
-- UPDATE Department2 
-- SET 
--     DepartmentNameNew = 'edddđacd',
--     DepartmentIDNew = 34;

-- select * from Department2;
-- ROLLBACK;
-- select * from Department2;

-- alter table Department2
-- add column DepartmentManager VARCHAR(20) null After DepartmentNameNew;
-- insert into Department2(DepartmentIDNew)
-- values (9),(10);
-- -- ifnull --
-- select DepartmentNameNew, ifnull(DepartmentManager, "hihi") as DepartmentManager from Department2;
-- select DepartmentNameNew, ifnull(DepartmentManager, DepartmentNameNew) as DepartmentManager from Department2;
-- -- coalesce --
-- select DepartmentNameNew, coalesce(DepartmentManager, DepartmentNameNew, "hihi") as DepartmentManager from Department2;

-- select DepartmentNameNew, coalesce('cột ảo') as Fake_col from Department2;

-- select ifnull(DepartmentNameNew, 'DepartmentNameNew is null') as DepartmentNameNew,
-- 		ifnull(DepartmentManager, 'DepartmentManager is null') as DepartmentManager,
--         coalesce(DepartmentNameNew, DepartmentManager)
--         from Department2;
-- select*from departments;
-- select*from dept_emp;
-- select*from dept_manager;
-- select*from employees;
-- use employees;
-- DROP TABLE IF EXISTS emp_manager;
-- CREATE TABLE emp_manager (
--     emp_no INT(11) NOT NULL,
--     dept_no CHAR(4) NULL,
--     manager_no INT(11) NOT NULL
-- );
-- select * from emp_manager;
-- insert into emp_manager
-- select u.* 
-- from
-- 	(select a.* 
--     from
-- 		(select 
-- 			e.emp_no, de.dept_no ,
-- 			(select emp_no from employees where emp_no = 110022) as emp_noo
-- 		from dept_emp de
-- 		join employees e
-- 		on e.emp_no = de.emp_no
-- 		where e.emp_no <= 10020
-- 		group by e.emp_no
-- 		order by e.emp_no
-- 		limit 20) as a
-- 	union
-- 	select b.* 
--     from
-- 		(select 
-- 			e.emp_no, de.dept_no ,
-- 			(select emp_no from employees where emp_no = 110039) as emp_noo
-- 		from dept_emp de
-- 		join employees e
-- 		on e.emp_no = de.emp_no
-- 		where e.emp_no > 10020
-- 		group by e.emp_no
-- 		order by e.emp_no
-- 		limit 20) as b
--       union
-- 	select c.* 
--     from
-- 		(select 
-- 			e.emp_no, de.dept_no ,
-- 			(select emp_no from employees where emp_no = 110039) as emp_noo
-- 		from dept_emp de
-- 		join employees e
-- 		on e.emp_no = de.emp_no
-- 		where e.emp_no = 110022
-- 		group by e.emp_no
-- 		order by e.emp_no
-- 		limit 20) as c  
--         union
-- 	select d.* 
--     from
-- 		(select 
-- 			e.emp_no, de.dept_no ,
-- 			(select emp_no from employees where emp_no = 110022) as emp_noo
-- 		from dept_emp de
-- 		join employees e
-- 		on e.emp_no = de.emp_no
-- 		where e.emp_no = 110039
-- 		group by e.emp_no
-- 		order by e.emp_no
-- 		limit 20) as d   
--         ) as u;
use employees;
DELIMITER $$
create PROCEDURE select_employees()
begin
	select * from employees limit 10;
end $$
DELIMITER ;

call select_employees();
call select_employees;

use testing_system;
-- Question 1: Tạo store để người dùng nhập vào tên phòng ban và in ra tất cả các account thuộc phòng ban đó --
DROP PROCEDURE select_question1;
DELIMITER $$
CREATE PROCEDURE select_question1(IN p_DepartmentName VARCHAR(50))
BEGIN
	SELECT 
    a.FullName, d.DepartmentName
FROM
    `Account` a
        JOIN
    Department d ON a.DepartmentID = d.DepartmentID
WHERE
    d.DepartmentName = p_DepartmentName;
END $$
DELIMITER ;

call select_question1('Phòng Dev 2');
call select_question1('Phòng marketing');

-- Question 2: Tạo store để in ra số lượng account trong mỗi group --
drop procedure select_question2;
DELIMITER $$
CREATE PROCEDURE select_question2() 
BEGIN
	SELECT 
		GroupID, COUNT(GroupID)
	FROM
		GroupAccount
	GROUP BY GroupID;
END $$
DELIMITER ;
call select_question2(); 

-- Question 3: Tạo store để thống kê mỗi type question có bao nhiêu question được tạo trong tháng hiện tại--
DROP PROCEDURE select_question3;
DELIMITER $$
CREATE PROCEDURE select_question3 (IN p_CreateDate DATETIME)
BEGIN
SELECT 
    q.TypeID, tq.TypeName, COUNT(q.TypeID)
FROM
    Question q
        JOIN
    TypeQuestion tq ON q.TypeID = tq.TypeID
WHERE
    q.CreateDate = p_CreateDate
GROUP BY q.TypeID;
END $$
DELIMITER ;

call testing_system.select_question3('2020-04-05 00:00:00');

-- Question 4: Tạo store để trả ra id của type question có nhiều câu hỏi nhất--
DROP PROCEDURE select_question4;
DELIMITER $$
CREATE PROCEDURE select_question4 (OUT id INT)
	BEGIN
		SELECT TypeID INTO id FROM Question Group by TypeID having count(*) = (select max(num) from
		(select count(*) as num 
		from Question 
		group by TypeID) as tb1);
	END $$
DELIMITER ;

SET @idOut = 0;
call select_question4(@idOut);
select @idOut as a;

-- Question 5: Sử dụng store ở question 4 để tìm ra tên của type question--
-- C1
DROP FUNCTION select_question5;
SET GLOBAL log_bin_trust_function_creators = 1;
DELIMITER $$
CREATE FUNCTION select_question5 (idQ INTEGER) RETURNS VARCHAR(50) 
BEGIN
    DECLARE p_typeName VARCHAR(50);
		SELECT 
    TypeName
INTO p_typeName FROM
    TypeQuestion
WHERE
    TypeID = idQ;
	RETURN p_typeName;
END $$
DELIMITER ;

SELECT select_question5(@idOut);
-- C2
select TypeName from TypeQuestion where TypeID = @idOut;

-- Question 6: Viết 1 store cho phép người dùng nhập vào 1 chuỗi và trả về group có tên
-- chứa chuỗi của người dùng nhập vào hoặc trả về user có username chứa
-- chuỗi của người dùng nhập vào
DROP PROCEDURE select_question6;
DELIMITER $$
CREATE PROCEDURE select_question6 (IN p_GroupName Varchar(50), IN p_FullName VARCHAR(50))
BEGIN
	select G.GroupName, A.FullName
	from `GroupAccount` GA
	join `Group` G
	on GA.GroupID = G.GroupID
	join `Account` A
	on A.AccountID = GA.AccountID
	Where G.GroupName like concat('%',p_GroupName,'%') or A.FullName like concat('%',p_FullName,'%');
END $$
DELIMITER ;

CALL select_question6('x','m');

-- Question 7: Viết 1 store cho phép người dùng nhập vào thông tin fullName, email và
-- trong store sẽ tự động gán:
-- username sẽ giống email nhưng bỏ phần @..mail đi
-- positionID: sẽ có default là developer
-- departmentID: sẽ được cho vào 1 phòng chờ
-- Sau đó in ra kết quả tạo thành công
DROP PROCEDURE select_question7;
DELIMITER $$
CREATE PROCEDURE select_question7 (IN p_email VARCHAR(50), IN p_FullName VARCHAR(50), IN p_positionId INT, IN p_departmentID INT)
BEGIN
	DECLARE username VARCHAR(50);
	SET username =SUBSTRING_INDEX(p_email,'@',1) ;
	INSERT INTO `Account` (Email, UserName, fullName, DepartmentID, PositionID)
    values (p_email, username, p_FullName, p_departmentID, p_positionID);
END $$
DELIMITER ;

SET @p_positionID = (select PositionID from Position where PositionName = 'Developer');
SET @p_departmentID = 1;
CALL select_question7(@p_email,@p_FullName, @p_positionId, @p_departmentID);

CALL select_question7('nnloc123@gmail.com','Nguyên Lộc 123', @p_positionId, @p_departmentID);
CALL select_question7('vtiRocket16@gmail.com','Rocket16', 3, @p_departmentID);

SELECT * FROM `Account`;

-- Question 8: Viết 1 store cho phép người dùng nhập vào Essay hoặc Multiple-Choice
-- để thống kê câu hỏi essay hoặc multiple-choice nào có content dài nhất --
DROP PROCEDURE select_question8;
DELIMITER $$
CREATE PROCEDURE select_question8 (IN p_TypeName VARCHAR(50))
BEGIN
	select Content, MAX(CHARACTER_LENGTH(Content))from Question Q
	join TypeQuestion TQ
	on Q.TypeID = TQ.TypeID
	WHERE TQ.TypeName = p_TypeName;
END $$
DELIMITER ;

CALL select_question8('Essay');

-- Question 9: Viết 1 store cho phép người dùng xóa exam dựa vào ID;
-- SET autocommit = 0;
-- START TRANSACTION;
-- SELECT * FROM Exam;
-- COMMIT;
-- DELEte FROM Exam where ExamID = 7;
-- ROLLBACK;
DROP PROCEDURE select_question9;
DELIMITER $$
CREATE PROCEDURE select_question9 (IN p_ExamId INT)
BEGIN
	DELEte FROM Exam where ExamID = p_ExamId;
END $$
DELIMITER ;

CALL select_question9(7);

-- Question 10: Tìm ra các exam được tạo từ 3 năm trước và xóa các exam đó đi (sử dụng store ở câu 9 để xóa)
-- Sau đó in số lượng record đã remove từ các table liên quan trong khi removing
SET autocommit = 0;
START TRANSACTION;
SELECT * FROM Exam;
COMMIT;
ROLLBACK;
DELIMITER $$
CREATE PROCEDURE select_question10 (OUT p_count INT)
BEGIN
	SELECT COUNT(*) INTO p_count FROM Exam WHERE year(Createdate) = (year(now())-2);
	DELETE FROM Exam WHERE year(Createdate) = (year(now())-2);
END $$
DELIMITER ;

select @p_count = 0;
CALL select_question10(@p_count );
select @p_count;

SELECT * FROM Exam;
SELECT * FROM TypeQuestion;
select*from Question;
select*from TypeQuestion;
select*from Position;
select*from `Account`;
select*from Department;
select*from `Group`;
select*from `GroupAccount`;
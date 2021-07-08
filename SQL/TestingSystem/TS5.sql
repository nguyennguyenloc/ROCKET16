
use testing_system;
select * from Department;
-- Question 1: Tạo view có chứa danh sách nhân viên thuộc phòng ban sale-- 
CREATE OR REPLACE VIEW Cau1 AS
    SELECT 
        A.*, D.DepartmentName
    FROM
        `account` A
            JOIN
        department D ON A.DepartmentID = D.DepartmentID
    WHERE
        D.DepartmentName = 'Phòng Sale';
        
SELECT 
    *
FROM
    Cau1; 
    
 -- Question 2: Tạo view có chứa thông tin các account tham gia vào nhiều group nhất--    
CREATE OR REPLACE VIEW Cau2 AS
    SELECT 
         A.*, GA.GroupID
    FROM
        GroupAccount GA
            JOIN
        `Account` A ON GA.AccountID = A.AccountID
       GROUP BY GA.AccountID
    HAVING COUNT(GA.AccountID) = (SELECT 
                MAX(Temp)
            FROM
                (SELECT 
                    AccountID, COUNT(AccountID) AS Temp
                FROM
                    GroupAccount
                GROUP BY AccountID) AS Ao);
                
SELECT 
    *
FROM
    Cau2;
    
WITH Cau2_Cach2 AS
 (SELECT 
         A.*, GA.GroupID, count(GA.AccountID) as num
    FROM
        GroupAccount GA
            JOIN
        `Account` A ON GA.AccountID = A.AccountID
       GROUP BY GA.AccountID),
MaxResult AS 
( SELECT max(num) FROM Cau2_Cach2)
   SELECT 
		*
	FROM
		Cau2_Cach2
	WHERE
		Cau2_Cach2.num = (SELECT 
		*
	FROM
		MaxResult);
-- Question 3: Tạo view có chứa câu hỏi có những content quá dài (content quá 300 từ được coi là quá dài) và xóa nó đi --
SELECT 
    *
FROM
    question;
insert into question(QuestionID, Content, CategoryID, TypeID, CreatorID, CreateDate)
values (11,'pppppppppppppppppppppppppppppppppppppppppppppppppppp',5,1,1,'2020-04-05 00:00:00');

CREATE OR REPLACE VIEW Cau3 AS
    SELECT 
        MAX(LENGTH(Content))
    FROM
        Question;

DELETE FROM Question 
WHERE
    LENGTH(Content) = (SELECT 
        *
    FROM
        Cau3);
SELECT 
    *
FROM
    Question;

-- Question 4: Tạo view có chứa danh sách các phòng ban có nhiều nhân viên nhất --
CREATE OR REPLACE VIEW Cau4 AS
    SELECT 
        A.*, GA.GroupID
    FROM
        GroupAccount GA
            JOIN
        `Account` A ON GA.AccountID = A.AccountID
    GROUP BY GA.GroupID
    HAVING COUNT(GA.GroupID) = (SELECT 
            MAX(Temp)
        FROM
            (SELECT 
                GroupID, COUNT(GroupID) AS Temp
            FROM
                GroupAccount
            GROUP BY GroupID) AS Ao);
                
SELECT 
    *
FROM
    Cau4;

-- Question 5: Tạo view có chứa tất các các câu hỏi do user họ Nguyễn tạo --
Select * from Question;
select * from `Account`;
CREATE OR REPLACE VIEW Cau5 AS
    SELECT 
        A.FullName, Q.Content
    FROM
        Question Q
            JOIN
        `Account` A ON A.AccountID = Q.CreatorID
    WHERE
        A.FullName LIKE 'Nguyễn %';
        
SELECT 
    *
FROM
    Cau5;
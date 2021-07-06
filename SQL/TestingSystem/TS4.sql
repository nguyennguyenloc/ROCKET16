
-- Question 1: Viết lệnh để lấy ra danh sách nhân viên và thông tin phòng ban của họ-- 
SELECT 
    A.*, D.DepartmentName
FROM
    `Account` A
        JOIN
    Department D ON A.DepartmentID = D.DepartmentID;
    
-- Question 2: Viết lệnh để lấy ra thông tin các account được tạo sau ngày 20/12/2010 --
SELECT 
    *
FROM
    `Account`
WHERE
    CreateDate > '2010/12/20';
    
-- Question 3: Viết lệnh để lấy ra tất cả các developer --
SELECT 
    A.*, P.PositionName
FROM
    `Account` A
        JOIN
    `Position` P ON A.PositionID = P.PositionID
WHERE
    PositionName LIKE 'Dev%';
    
-- Question 4: Viết lệnh để lấy ra danh sách các phòng ban có >3 nhân viên --

SELECT 
    D.DepartmentName, COUNT(*)
FROM
    Department D
        JOIN
    `Account` A ON D.DepartmentID = A.DepartmentID
GROUP BY D.DepartmentID
HAVING COUNT(*) > 3;

-- Question 5: Viết lệnh để lấy ra danh sách câu hỏi được sử dụng trong đề thi nhiều nhất --
SELECT 
    EQ.QuestionID, Q.Content, COUNT(EQ.QuestionID) AS 'Temp'
FROM
    ExamQuestion EQ
        JOIN
    Question Q ON EQ.QuestionID = Q.QuestionID
GROUP BY EQ.QuestionID
ORDER BY COUNT(EQ.QuestionID) DESC
LIMIT 2;

-- Question 6: Thông kê mỗi category Question được sử dụng trong bao nhiêu Question --
SELECT 
    CategoryID, COUNT(CategoryID)
FROM
    `Question`
GROUP BY CategoryID;

-- Question 7: Thông kê mỗi Question được sử dụng trong bao nhiêu Exam --
SELECT 
    Q.QuestionID, COUNT(Q.QuestionID) AS 'Temp'
FROM
    CategoryQuestion C
        JOIN
    Exam E ON C.CategoryID = E.CategoryID
        JOIN
    Question Q ON Q.CategoryID = C.CategoryID
GROUP BY Q.QuestionID;

-- Question 8: Lấy ra Question có nhiều câu trả lời nhất--
SELECT 
    Q.QuestionID, Q.Content, COUNT(A.QuestionID)
FROM
    Answer A
        JOIN
    Question Q ON A.QuestionID = Q.QuestionID
GROUP BY A.QuestionID;

-- Question 9: Thống kê số lượng account trong mỗi group--
SELECT 
    G.GroupName, COUNT(G.GroupID) AS 'Tổng số Account'
FROM
    `Group` G
        JOIN
    GroupAccount GA ON G.GroupID = GA.GroupID
GROUP BY G.GroupID;

-- Question 10: Tìm chức vụ có ít người nhất --
SELECT 
    P.PositionName, COUNT(A.PositionID)
FROM
    `Position` P
        JOIN
    `Account` A ON P.PositionID = A.PositionID
GROUP BY A.PositionID
HAVING COUNT(A.PositionID) = (SELECT 
        COUNT(PositionID) AS 'maxx'
    FROM
        `Account`
    GROUP BY PositionID
    ORDER BY COUNT(PositionID) ASC
    LIMIT 1);

-- (SELECT 
--         MIN(y.maxx)
--     FROM
--         (SELECT 
--             COUNT(PositionID) AS 'maxx'
--         FROM
--             `Account`
--         GROUP BY PositionID) y);
        
-- Question 11: Thống kê mỗi phòng ban có bao nhiêu dev, test, scrum master, PM --
SELECT 
    D.DepartmentName,
    P.PositionName,
    COUNT(*) AS 'Number of Position'
FROM
    `Account` A
        JOIN
    `Position` P ON A.PositionID = P.PositionID
        JOIN
    Department D ON D.DepartmentID = A.DepartmentID
GROUP BY D.DepartmentName , P.PositionName;

-- Question 12: Lấy thông tin chi tiết của câu hỏi bao gồm: thông tin cơ bản của question, loại câu hỏi, ai là người tạo ra câu hỏi, câu trả lời là gì, ...--
SELECT DISTINCT
    Q.Content, C.CategoryName, AC.FullName, A.isCorrect
FROM
    Question Q
        JOIN
    Answer A ON Q.QuestionID = A.QuestionID
        JOIN
    CategoryQuestion C ON Q.CategoryID = C.CategoryID
        JOIN
    `Account` AC ON AC.AccountID = Q.CreatorID;

-- Question 13: Lấy ra số lượng câu hỏi của mỗi loại tự luận hay trắc nghiệm --
SELECT 
    T.TypeName, COUNT(Q.TypeID) AS 'Số lượng'
FROM
    TypeQuestion T
        JOIN
    Question Q ON T.TypeID = Q.TypeID
GROUP BY Q.TypeID;

-- Question 14, 15:Lấy ra group không có account nào --
SELECT 
    G.GroupName
FROM
    `Group` G
WHERE
    G.GroupID NOT IN (SELECT 
            GroupID
        FROM
            GroupAccount);

-- Question 16: Lấy ra question không có answer nào --
SELECT 
    *
FROM
    `Question`
WHERE
    QuestionID NOT IN (SELECT 
            QuestionID
        FROM
            Answer);
            
-- Question 17:
-- a) Lấy các account thuộc nhóm thứ 1
SELECT 
    *
FROM
    GroupAccount
WHERE
    GroupID = '1';

-- b) Lấy các account thuộc nhóm thứ 3
SELECT 
    *
FROM
    GroupAccount
WHERE
    GroupID = '3';

-- c) Ghép 2 kết quả từ câu a) và câu b) sao cho không có record nào trùng nhau--
SELECT 
    *
FROM
    GroupAccount
WHERE
    GroupID = '1' 
UNION SELECT 
    *
FROM
    GroupAccount
WHERE
    GroupID = '3';

-- Question 18:
-- a) Lấy các group có lớn hơn 5 thành viên
SELECT 
    GroupID, COUNT(*)
FROM
    GroupAccount
GROUP BY GroupID
HAVING COUNT(*) > 5;

-- b) Lấy các group có nhỏ hơn 7 thành viên
SELECT 
    GroupID, COUNT(*)
FROM
    GroupAccount
GROUP BY GroupID
HAVING COUNT(*) < 7;

-- c) Ghép 2 kết quả từ câu a) và câu b) --
SELECT 
    GroupID, COUNT(*)
FROM
    GroupAccount
GROUP BY GroupID
HAVING COUNT(*) > 5 
UNION SELECT 
    GroupID, COUNT(*)
FROM
    GroupAccount
GROUP BY GroupID
HAVING COUNT(*) < 7;

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
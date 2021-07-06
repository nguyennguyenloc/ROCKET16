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
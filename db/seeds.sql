INSERT INTO department (name)
VALUES ('Engineer'),
       ('Web Developer'),
       ('Administrator');

INSERT INTO role (department_id, title, salary)
VALUES (1, 'Sales', 70000),
       (2, 'President', 100000),
       (3, 'Analyst', 90000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Angela', 'Taylor', 2, 3),
       ('Liam', 'Rumgay', 1, 2),
       ('Anthony', 'Cromartie', 3, 1);



SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
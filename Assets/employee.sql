DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    jobtitle_id INTEGER(10) NULL,
    manager_id INTEGER(10) NULL,
    department_id INTEGER(10) NULL,
);

CREATE TABLE jobtitle (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10) NULL,
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30)
);

INSERT INTO employee (firstname, lastname)
VALUES (John, McLane);
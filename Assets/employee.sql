DROP DATABASE IF EXISTS employees_db

CREATE DATABASE employees_db

USE employees_db

CREATE TABLE employee (
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
role_id INTEGER(10),
manager_id INTEGER(10)
)

CREATE TABLE role (
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10),
    department_id INTEGER(10)
)

CREATE TABLE department (
    department_name VARCHAR(30)
)
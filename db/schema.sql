CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int(5) AUTO_INCREMENT,
    burger_name varchar(30),
    devoured BOOLEAN default false,
    PRIMARY KEY(id)
);
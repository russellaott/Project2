CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE hostTrip
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE joinTrip
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

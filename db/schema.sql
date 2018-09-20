<<<<<<< HEAD
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
=======
DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE trip
(
	id int NOT NULL AUTO_INCREMENT,
	departCity varchar(50) NOT NULL,
	departState VARCHAR (10) NOT NULL,
	destinationCity VARCHAR (50) NOT NULL,
	destinationState VARCHAR (10) NOT NULL,
    dt DATE,
    smoking BOOLEAN default false,
    details TEXT(500) CHARACTER SET utf8,
	PRIMARY KEY (id)
);

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (255) NOT NULL,
    name varchar(255) NOT NULL,
	DOB DATE,
>>>>>>> 59cefc45a217673ddaaec501cf06311b4a257242
	PRIMARY KEY (id)
);

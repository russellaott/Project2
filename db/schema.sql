
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
<<<<<<< HEAD
	seats int default 1,
    details TEXT(500) CHARACTER SET utf8,
=======
	seats int NOT NULL,
    details VARCHAR(500) CHARACTER SET utf8,
>>>>>>> 174d20e9af16ce35ba90b7b42868ee603ce1b702
	PRIMARY KEY (id)
);

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (255) NOT NULL,
    name varchar(255) NOT NULL,
	DOB DATE,
	PRIMARY KEY (id)
);

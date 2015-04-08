# MyAngularApp
My AngularJS application


Database - 

1.Create a new database with name "user".


2.Create table "user_info"

 CREATE TABLE
	    user_info
	    (
		        id INT(3) NOT NULL AUTO_INCREMENT,
		        fname VARCHAR(10) NOT NULL,
		        lname VARCHAR(10) NOT NULL,
		        phone DECIMAL(13,0),
		        country VARCHAR(10),
		        PRIMARY KEY (id)
	    )
	    ENGINE=InnoDB DEFAULT CHARSET=utf8;
	
3.Create table "countries"

	  CREATE TABLE
		    countries
		    (
		        countryId INT NOT NULL AUTO_INCREMENT,
		        countryName VARCHAR(255) NOT NULL,
		        PRIMARY KEY (countryId)
		    )
		    ENGINE=InnoDB DEFAULT CHARSET=latin1;

4.Create table "states"

	CREATE TABLE
		states
		(
			stateId bigint NOT NULL AUTO_INCREMENT,
			countryId bigint NOT NULL,
			stateName VARCHAR(255) NOT NULL,
			PRIMARY KEY (stateId)
		)
		ENGINE=InnoDB DEFAULT CHARSET=latin1;

5.Create table cities
  
        CREATE TABLE
		cities
		(
		          cityId bigint NOT NULL AUTO_INCREMENT,
		          stateId bigint NOT NULL,
		          countryId bigint NOT NULL,
		          cityName VARCHAR(100) NOT NULL,
		          PRIMARY KEY (cityId)
	        )
                ENGINE=InnoDB DEFAULT CHARSET=latin1;

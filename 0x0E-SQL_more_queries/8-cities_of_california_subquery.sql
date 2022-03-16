-- Script that lists all the cities of cALIFORNIA registered in the database
SELECT id, name -- Query to list all the cities rom California
FROM cities
WHERE state_id = ( -- Query to get the id of California
		SELECT id
		FROM states
		WHERE name = "California");

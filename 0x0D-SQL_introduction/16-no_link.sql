-- script that list all records of the table second_table
-- show in table
SELECT score,name FROM second_table
WHERE name IS NOT NULL ORDER BY score DESC;

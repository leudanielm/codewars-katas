-- https://www.codewars.com/kata/594a389387a7c6a77a000005

/*  SQL  */
SELECT
  char_length(name) as id,
  char_length(legs::varchar) as name,
  char_length(arms::varchar) as legs,
  char_length(characteristics) as arms,
  char_length(id::varchar) as characteristics
FROM monsters


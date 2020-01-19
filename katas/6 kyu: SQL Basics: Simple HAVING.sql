-- https://www.codewars.com/kata/58164ddf890632ce00000220

SELECT age, count(age) as total_people
FROM people
GROUP BY age
HAVING count(age) >= 10

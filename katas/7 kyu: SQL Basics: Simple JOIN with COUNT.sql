-- https://www.codewars.com/kata/580918e24a85b05ad000010c

SELECT p.id, p.name, count(t.id) as toy_count
FROM people p
LEFT JOIN toys t ON p.id = t.people_id
GROUP BY p.id, p.name;


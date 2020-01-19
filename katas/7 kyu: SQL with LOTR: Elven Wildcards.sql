-- https://www.codewars.com/kata/5ad90fb688a0b74111000055

--but on the land of Lórien no shadow lay--
SELECT CONCAT(INITCAP(firstname), ' ', INITCAP(lastname)) AS shortlist
FROM elves
WHERE (firstname LIKE '%tegil%'
 OR lastname LIKE '%astar%')

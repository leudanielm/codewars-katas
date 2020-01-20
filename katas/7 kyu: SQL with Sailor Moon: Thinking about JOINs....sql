-- https://www.codewars.com/kata/5ab7a736edbcfc8e62000007

SELECT
 s.senshi_name as sailor_senshi,
 s.real_name_jpn as real_name,
 c.name as cat,
 sc.school as school
FROM
 sailorsenshi s
LEFT JOIN cats c
 ON s.cat_id = c.id
LEFT JOIN schools sc
 ON s.school_id = sc.id


-- https://www.codewars.com/kata/5c0ae69d5f72394e130025f6

SELECT
  name,
  greeting,
  (REGEXP_MATCHES(greeting, '#(\d+)'))[1] AS user_id
FROM greetings;

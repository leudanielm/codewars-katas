-- https://www.codewars.com/kata/5994dafcbddc2f116d000024

/* Your Query Here */
SELECT 
  player_name,
  games, 
  CAST(ROUND(CAST(CAST((hits * 10000 / at_bats) as FLOAT) / 10000 as DECIMAL(5,4)), 3) as VARCHAR) as batting_average
FROM yankees
WHERE at_bats >= 100
ORDER BY CAST((hits * 1000 / at_bats) as NUMERIC(3)) DESC


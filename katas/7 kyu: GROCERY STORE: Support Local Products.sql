-- https://www.codewars.com/kata/5a8ed96bfd8c066e7f00011a

SELECT count(id) as products, country
FROM products
WHERE country IN ('United States of America', 'Canada')
GROUP BY country
ORDER BY country

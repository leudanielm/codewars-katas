-- https://www.codewars.com/kata/5a8f00745084d718940000c5

 CREATE FUNCTION ROUND(float, text, int DEFAULT 0) 
 RETURNS FLOAT AS $$
    SELECT CASE WHEN $2='dec'
                THEN ROUND($1::numeric,$3)::float
                -- ... WHEN $2='hex' THEN ... WHEN $2='bin' THEN... complete!
                ELSE 'NaN'::float  -- like an error message 
            END;
 $$ language SQL IMMUTABLE;
 
SELECT
  name,
  weight,
  price as price,
  ROUND((price / weight) * 1000, 'dec', 2) AS price_per_kg
FROM products
ORDER BY price_per_kg, name;

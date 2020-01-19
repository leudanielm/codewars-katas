-- https://www.codewars.com/kata/58112f8004adbbdb500004fe

-- Create your SELECT statement here
select
  id,
  name,
  price,
  card_name,
  card_number,
  transaction_date,
  'US' as location
from ussales
where price > 50
union all
select
  id,
  name,
  price,
  card_name,
  card_number,
  transaction_date,
  'EU' as location
from eusales
where price > 50


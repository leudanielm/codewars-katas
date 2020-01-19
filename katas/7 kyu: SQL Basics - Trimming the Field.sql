-- https://www.codewars.com/kata/59401c25c15cbeb58d000028

/*  SQL  */
select
  id,
  name,
  case
    when strpos(characteristics, ',') > 0
    then left(characteristics, strpos(characteristics, ',') - 1)
    else characteristics
    end as characteristic
from monsters
order by id


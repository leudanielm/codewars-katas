-- https://www.codewars.com/kata/5942b066db68b6f35f000084

/*  SQL  */
select project, commits, contributors, regexp_replace(address, '\d', '!', 'g') as address
from repositories

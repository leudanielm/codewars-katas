-- https://www.codewars.com/kata/58113a64e10b53ec36000293

-- Create your SELECT statement here
select d.id, d.name
from departments d
where exists (
  select *
  from sales s
  where s.department_id = d.id
  and price > 98
)

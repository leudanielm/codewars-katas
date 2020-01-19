-- https://www.codewars.com/kata/581fb63e70ca28d92500000d

select
  e.employee_id,
  e.first_name,
  e.last_name,
  d.department_name,
  e.salary as old_salary,
  e.salary * (1 + d.calculated_percentage) as new_salary
from (select
        department_id,
        department_name,
        pctIncrease(department_id) as calculated_percentage
      from departments) d
join employees e
on d.department_id = e.department_id
order by 1;


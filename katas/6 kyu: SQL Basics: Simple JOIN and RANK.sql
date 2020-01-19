-- https://www.codewars.com/kata/58094559c47d323ebd000035

select 
  p.id, 
  p.name, 
  count(s.sale) as sale_count,
  rank() over (order by COUNT(s.sale) asc) as sale_rank
  from people p
join sales s
on p.id = s.people_id
group by p.id, p.name


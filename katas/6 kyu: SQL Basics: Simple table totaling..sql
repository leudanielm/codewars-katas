-- https://www.codewars.com/kata/5809575e166583acfa000083

-- Create your SELECT statement here
select
  rank() over (order by p.total_points desc) as rank,
  p.clan,
  p.total_points,
  p.total_people
from
  (select distinct
    case 
      when length(clan) = 0
      then '[no clan specified]'
      else clan
    end as clan,
    sum(points) as total_points,
    count(name) as total_people
  from people
  group by clan) p
order by p.total_points desc;

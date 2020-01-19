-- https://www.codewars.com/kata/582001237a3a630ce8000a41

select
  c.id as category_id,
  c.category,
  p.title,
  p.views,
  p.post_id
from
  categories c
left join
  (select
    id as post_id,
    rank() over (
      partition by category_id
      order by sum(views) desc,
               id asc) as rank,
    category_id,
    views,
    title
   from posts po
   group by id, category_id, views, title) p  
  on c.id = p.category_id
  where p.title is null or p.rank <= 2
  order by c.category, p.views desc, p.post_id asc
  

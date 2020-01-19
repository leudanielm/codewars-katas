-- https://www.codewars.com/kata/5811010104adbba24b0002fe

create function agecalculator(date) returns integer as $$
declare
    comparison_date alias for $1;
begin
    return date_part('year', age(now(), comparison_date));
end;
$$ language plpgsql;

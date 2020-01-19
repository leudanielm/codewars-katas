-- https://www.codewars.com/kata/59491429952ac97ad9000106

/*  SQl  */
select
  length(cast(number1 as varchar)) as octnum1,
  length(cast(number2 as varchar)) as octnum2,
  length(cast(number3 as varchar)) as octnum3,
  length(cast(number4 as varchar)) as octnum4,
  length(cast(number5 as varchar)) as octnum5
from numbers

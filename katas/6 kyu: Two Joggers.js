// https://www.codewars.com/kata/5274d9d3ebc3030802000165

var nbrOfLaps = function (x, y) {
 
 var cx, cy,r;
 cx=x;
 cy=y;
 while(r!=0){
  r=x%y;
  x=y;
  y=r;
 }
 var cmmmc;
 cmmmc=(cx*cy)/x;
 return [cmmmc/cx,cmmmc/cy];
}

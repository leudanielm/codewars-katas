// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  var r = [];
  for (var prop in recipe) {
    if (recipe.hasOwnProperty(prop) && !available.hasOwnProperty(prop)) {
      return 0;
    }
    r.push(available[prop] / recipe[prop]);
  }
  return Math.floor(Math.min.apply(Math, r));
}

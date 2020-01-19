// https://www.codewars.com/kata/52ae6b6623b443d9090002c8

function guessGifts(wishlist, presents) {
    return unique(flatten(presents.map(function(present, index) {
      var rp = [];
      for (var i = 0; i < wishlist.length; i++) {
        var wishItem = wishlist[i];
        if ( present.size ===  wishItem.size &&
             present.clatters === wishItem.clatters &&
             present.weight === wishItem.weight ) {
               rp.push(wishItem.name);
             }
      }
      
      return rp;
    })));
}

function flatten(arr) {
  var r = [];
  arr.forEach(function(i) {
    Array.prototype.push.apply(r, i);
  });
  
  return r;
}

function unique(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if ( ret.indexOf(arr[i]) === -1) {
      ret.push(arr[i]);
    }
  }
  
  return ret;
}

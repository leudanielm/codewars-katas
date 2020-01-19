// https://www.codewars.com/kata/529a92d9aba78c356b000353

Cons.fromArray = function(array){
  //TODO provide a convenient method to convert a JavaScript array
  //to an algebraic list.
  array = array.reverse();
	return array.slice(1).reduce((memo, element, index) => {
    return (memo = new Cons(element, memo));
  }, new Cons(array[0], null));
};

function toArray(list) {
    if(list){
        var more = list.tail;
        return [list.head].concat(more? toArray(more) : []);
    }
    return [];
}

Cons.prototype.filter = function(predicate){ return Cons.fromArray(this.toArray().filter(predicate)); };
Cons.prototype.map = function(mapper){ return Cons.fromArray(this.toArray().map(mapper)); };
Cons.prototype.toArray = function(){ return toArray(this); };



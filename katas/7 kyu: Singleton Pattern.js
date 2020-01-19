// https://www.codewars.com/kata/534fcca5edb124cfe6000f60

var Singleton = (function(){
  var __singleInst__ = false;

  function Singleton(){};  
  
  return function() { 
    return __singleInst__ ? __singleInst__ : (__singleInst__ = new Singleton());
  }

})();


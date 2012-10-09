var Object = function(){}
Object.extend = function(proto){
  function f(){};
  function c(){};
  f.prototype = this.prototype;
  c.prototype = new f();
  c.prototype.constructor = this.prototype.constructor;
  for(var p in proto){
    c.prototype[p] = proto[p];
  }
  c.extend = Object.extend;
  return c;
}

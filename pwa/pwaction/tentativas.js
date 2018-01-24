if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  };
}
function stringifyFunction(elemento, indice, array) {
  if (typeof(elemento)=='function') {
    elemento = elemento.toString();
    console.log(indice);
  }
}
function PWAstringfy(obj){
  obj.forEach(stringifyFunction);
}

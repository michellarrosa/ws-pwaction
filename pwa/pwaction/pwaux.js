function isJson(str){
  try {
    JSON.parse(str);
  } catch (e) {
    return false
  }
  return true;
}

function isObject(obj){
  var r = (typeof obj == 'object') ? true : false;
  return r;
}

function teste01(){
  alert("teste01");
  console.log("teste1");
}

function teste02(){
  console.log("teste02");
}

// function cyclicsCleaner() {
//   var seenObjects = [];
//   return function cleanCyclics(key, obj) {
//     if (obj && typeof obj === 'object') {
//       if (seenObjects.indexOf(obj) !== -1) {
//         return null;
//       }
//       seenObjects.push(obj);
//     }
//     return obj;
//   }
// }
// // generate a cyclic object
// var a = {};
// var b = {
//   cyclic: a
// };
// a.b = b;
//
// console.log(JSON.stringify(a, cyclicsCleaner()));

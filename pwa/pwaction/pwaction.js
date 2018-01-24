var global;
function startSimpleWorker(workerPath, display) {
  var w;
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker(workerPath);
   }
   w.onmessage = function(event) {
     if (event.data.answer == "continue") {
       document.getElementById(display).innerHTML = event.data.dado + event.data.answer;
     }else{
       if (event.data == "finished") {
         w.terminate();
         w = undefined;
       }
     }
   };
 } else {
   document.getElementById("print").innerHTML = "Sorry! No Web Worker support.";
 }
}

function setStorage(varname, data, session = false){
  if (typeof(Storage) !== "undefined") {
    if (isObject(data)) {
      // certifique-se de realizar function.toString()
      data = JSON.stringify(data);
    }
    if (session) {
      sessionStorage.setItem(varname, data);
    } else {
      localStorage.setItem(varname, data);
    }
    return true;
  } else {
    return false; // Sorry! No Web Storage support..
  }
}

function getStorage(varname, session=false){
  var r;
  if (session) {
    r = sessionStorage.getItem(varname);
  }else {
    r = localStorage.getItem(varname);;
  }
  if (isJson(r)) {
    r = JSON.parse(r);
  }
  return r;
}

function includeJs(jsFilePath) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.charset = "utf-8";
    js.src = jsFilePath;
    document.head.appendChild(js);
}

function getFileContent(filePath){
  var fileContent;
  var fileRoute = "pwa/pwaction/scriptRepo/"+filePath;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      fileContent = this.responseText;
    }
  }
  xmlhttp.open("GET",fileRoute, false);
  // xmlhttp.setRequestHeader('Content-type', 'text/javascript');
  xmlhttp.send();
  return fileContent;
}

if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
      //verifica se o browser é ou não HTML4|5
     // bootstrap the javascript application
     // codigo da BBC
     // aqui:
     // http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
     }

// includeJs('pwa/pwaction/pwaux.js');
// includeJs('pwa/pwaction/scripts.js');

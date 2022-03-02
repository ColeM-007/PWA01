
function regSW(){  
if('serviceWorker' in navigator) {
    navigator.eserviceWorker.register('./sw.js');
  }
}


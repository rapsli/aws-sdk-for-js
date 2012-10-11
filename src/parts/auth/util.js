var AuthUtil = function(){}
AuthUtil.uksort = function(array,callback){
  if((callback)()){
    
  }
};
AuthUtil.strcmp = function(str1,str2){
  };

AuthUtil.array_marge = function(arr1,arr2){
  var arr;
  for(var i in arr1){
    if(typeof arr1[i] != 'object'){
      arr[i] = arr1[i];
    }
  }
  for(var j in arr2){
    if(typeof arr2[j] != 'object'){
      arr[j] = arr2[j];
    }
  }
  return arr;
};

AuthUtil.get_date_RFC2616 = function(timestamp){
  //D, d M Y H:i:s \G\M\T
  if(timestamp == undefined){
    timestamp = this.time();
  }
  var d = new Date(timestamp);
  return '$D'+', '+'$d' + ' '+d.getUTCDate()+ ' ' + '$M' + d.getUTCFullYear() + ' ' +
  d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds() + " GMT";
};
AuthUtil.get_date_ISO8601 = function(timestamp){
  // Y-m-d\TH:i:s\Z
  if(timestamp == undefined){
    timestamp = this.time();
  }
  var d = new Date(timestamp);
  return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate() + 'T' +
  d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds();
};
AuthUtil.time = function(){
  return  Math.round(new Date().getTime() / 1000);
};
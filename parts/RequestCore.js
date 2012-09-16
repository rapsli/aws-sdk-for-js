function RequestCore(){}
RequestCore.prototype = {
  ENDPOINT:'https://__SERVICE__.__REGION__.amazonaws.com/',
  setparam: function(value,regex,default_value,require){
    if(value != undefined && typeof(value == 'number')){
    //      value = value+"";
    }
    if(value != undefined && typeof(value) != 'number' && value.match(regex)){
      return value;
    }else{
      if(require != undefined && require == true){
        throw 'is require';
      }
      return default_value;
    }
  },
  optimize_params: function(params){
    var param = {};
    for(key in params){
      if(params[key] != undefined && params[key] != 'undefined' ){
        param[key] = params[key];
      }
    }
    return param;
  },
  request: function(method,subdomain,region,params,api_key,secret_key,content_type){
    params = this.optimize_params(params);
    var url = this.buildRequestUrl(method,basepath,action,params,api_key,secret_key);
    var postparam = [];
    if(method != 'GET'){
      for(k in params){
        if( params[k] != undefined){
          postparam.push(k+"="+params[k]);
        // postparam.push(k+"="+encodeURIComponent(params[k]));

        }
      }
    }
    postparam.sort(MushikagoRequest.sortLowerCase);
    if(content_type == undefined){
      content_type = 'application/x-www-form-urlencoded';
    }
    var postdata = postparam.join('&');
    var opt = {};
    opt.type = method;
    opt.url = url;
    opt.dataType='json';
    if(postdata.length > 2){
      opt.data=postdata;
    }
    opt.contentType=content_type;
    opt.async = false;
    
    var response;
    $.ajax($.extend(opt,{
      success: function(msg){
        response = msg;
      },
      
      error: function(XMLHttpRequest,textStatus,errorThrown){
        switch(textStatus){
          case 'error':
            throw "["+XMLHttpRequest.status+"]"+XMLHttpRequest.statusText;
            break;
          case 'notmodified':
          case 'timeout':
          case 'parsererror':
            throw textStatus;
        }
      }
    }));
    return response;
  },
  upload: function(method,basepath,action,params,filepath,api_key,secret_key,content_type){
    
  },
  dateTimeFormat : function(date) {
    if(date == null) date = new Date(); // assume now
    date.setTime(date.getTime());
    var yyyymmdd = [date.getUTCFullYear(),
    this.pad(date.getUTCMonth()+1), // month index starts at 0
    this.pad(date.getUTCDate())].join('-');
    var hhmmss = [this.pad(date.getUTCHours()), this.pad(date.getUTCMinutes()), this.pad(date.getUTCSeconds())].join(':');
    return yyyymmdd+'T'+hhmmss+'Z';
  },
  
  pad : function(to_pad, max_length, pad_with) {
    if(max_length == null) max_length = 2;
    if(pad_with == null)   pad_with = 0;
    var res = to_pad.toString();
    while(res.length < max_length) res = pad_with + res;
    return res;
  },
  
  sortLowerCase : function(s1, s2) {
    return (s1 == s2) ? 0 : (s1.toLowerCase() > s2.toLowerCase() ? 1 : -1);
  },
  
  generateSignedURL: function(actionName, params, accessKeyId, secretKey, endpoint, version) {
    var url = endpoint + "?SignatureVersion=1&Action=" + actionName + "&Version=" + encodeURIComponent(version) + "&";
    for(var i in params){
      var elementName = i;
      var elementValue = params[i];
      url += elementName;
      url += "=";
      url += encodeURIComponent(elementValue);
      url += "&";
    }
    var timestamp = this.getNowTimeStamp();
    url += "Timestamp=" + encodeURIComponent(timestamp);
    url += "&AWSAccessKeyId=" + encodeURIComponent(accessKeyId);
    var signature = this.generateV1Signature(url, secretKey);
    url += "&Signature=" + encodeURIComponent(signature); 
    return url;
  },
  
  getNowTimeStamp: function() {
    return this.dateTimeFormat();
    var time = new Date();
    var gmtTime = new Date(time.getTime() + (time.getTimezoneOffset() * 60000));
    return gmtTime.toISODate() ;
  },
  
  generateV1Signature: function(url, key) {
    var stringToSign = this.getStringToSign(url);
    var signed =   b64_hmac_sha1(key, stringToSign);
    return signed;
  },
  getStringToSign: function(url) {

    var stringToSign = "";
    var query = url.split("?")[1];

    var params = query.split("&");
    params.sort(this.ignoreCaseSort);
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split("=");
      var name =   param[0];
      var value =  param[1];
      if (name == 'Signature' || undefined  == value) continue;
      stringToSign += name;
      stringToSign += decodeURIComponent(value);
    }
    return stringToSign;
  },

  ignoreCaseSort:function(a, b) {
    var ret = 0;
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a > b) ret = 1;
    if(a < b) ret = -1;
    return ret;
  }

}


function XMLToJSON(ajax)
{
  if (window.ActiveXObject)
  {
    var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(ajax.responseText);
  }
  else if (window.DOMParser)
  {
    var xmlDoc = new DOMParser().parseFromString(
      ajax.responseText,
      "application/xml"
      );
  }
  else
  {
    return;
  }
  var loopParse = function(obj)
  {
    var res = {}, cacheTag = {};
    var ob = {}, att = obj.attributes;
    if (att != null && att.length != 0)
    {
      for (var a = 0, lenA = att.length; a < lenA; a++)
      {
        ob[att[a].nodeName.toLowerCase()] = att[a].nodeValue;
      }
      res._attr = ob;
    }
    
    if (obj.childNodes.length > 0)
    {
      for (var i = 0, len = obj.childNodes.length; i < len; i++)
      {
        var ch = obj.childNodes[i];
        if (ch.nodeType == 3)
        {
          if (ch.nodeValue.replace(/[\s|\t|\n]/g, "") == "" ||
            ch.nodeValue == null) continue;
          else return ch.nodeValue;
        }
        else if (ch.nodeType == 1)
        {
          (ch.tagName in cacheTag) ?
          cacheTag[ch.tagName].push(arguments.callee(ch)) :
          cacheTag[ch.tagName] = [arguments.callee(ch)];
        }
      }
    }
    else
    {
      return "";
    }
    for (var p in cacheTag)
    {
      (cacheTag[p].constructor == Array && cacheTag[p].length == 1) ?
      res[p] = cacheTag[p][0] : res[p] = cacheTag[p];
    }
    return res;
  }
  return loopParse(xmlDoc);
}
function urlEncode(url) {
  return encodeURIComponent(url)
  .replace(/!/g, '%21')
  .replace(/'/g, '%27')
  .replace(/\(/g, '%28')
  .replace(/\)/g, '%29')
  .replace(/\*/g, '%2A');
}
function check_authorize(access_key,secret_key){
  var e = new EC2(access_key,secret_key,'ap-northeast-1');
  var result = e.describe_instances();
  if(result == false){
    return false;
  }else{
    return true;
  }
};

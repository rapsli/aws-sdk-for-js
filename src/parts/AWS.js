var AWS = function(){}
AWS.REGION_US_EAST_1 = "us-east-1";
AWS.REGION_US_WEST_1 = "us-west-1";
AWS.REGION_US_WEST_2 = "us-west-2";
AWS.REGION_EU_WEST_1 = "eu-west-1";
AWS.REGION_AP_SOUTHEAST_1 = "ap-southeast-1";
AWS.REGION_AP_NORTHEAST_1 = "ap-northeast-1";
AWS.REGION_SA_EAST_1 = "sa-east-1";

AWS.prototype = {
  endpoint : "",
  access_key:'',
  secret_key:'',
  auth_class:'AuthV4Query',
  region:undefined,
  init:function(access_key,secret_key,service){
    if(access_key == undefined || secret_key == undefined){
      throw "access_key and secret_key have to require.";
    }
    this.access_key = access_key;
    this.secret_key = secret_key;
    this.endpoint = this.get_endpoint();
  },
  set_region:function(region){
    this.region = region;
  },
  get_endpoint:function(){
    // TODO 
    var endpoint = "https://"+this.service+".";
    if(this.region != undefined){
      endpoint += this.region+".";
    }
    endpoint += "amazonaws.com";
    return endpoint;
  },
  request:function(method,action,params,datatype){
    if(datatype == undefined){
      datatype = 'xml';
    }
    var url = this.generateSignedURL(action, params, this.access_key, this.secret_key, this.get_endpoint(), this.version);
    params = this.optimize_params(params);
    var response = {};
    $.ajax({
      url:url,
      data:params,
      type:method,
      async:false,
      dataType:datatype,
      success:function(xhr){
        response = $.xml2json(xhr);
      },
      error:function(xhr){
        response = "error";
      }
    });
    return response;
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
  optimize_params: function(params){
    var param = {};
    for(key in params){
      if(params[key] != undefined && params[key] != 'undefined' ){
        param[key] = params[key];
      }
    }
    return param;
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
  },
  urlEncode:function(url) {
    return encodeURIComponent(url)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
  }
};

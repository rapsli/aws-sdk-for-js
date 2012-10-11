var REGION = {};
REGION.US_EAST_1 = "us-east-1";
REGION.US_WEST_1 = "us-west-1";
REGION.US_WEST_2 = "us-west-2";
REGION.EU_WEST_1 = "eu-west-1";
REGION.AP_SOUTHEAST_1 = "ap-southeast-1";
REGION.AP_NORTHEAST_1 = "ap-northeast-1";
REGION.SA_EAST_1 = "sa-east-1";

var AWS = function(){}

AWS.prototype = {
  VERSION:'0.0.1',
  endpoint : "",
  access_key:'',
  secret_key:'',
  auth_class:'',
  operation_prefix:'',
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
    this.endpoint = this.get_endpoint();
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
  authenticate:function(operation,payload){
    var reg = new RegExp();
    if (substr(operation, 0, strlen(this.operation_prefix)) !== this.operation_prefix)
    {
      operation = this.operation_prefix . operation;
    }
    
    var signer = this.get_signer(this.auth_class);
    signer.key = this.key;
    signer.secret_key = this.secret_key;
    signer.auth_token = this.auth_token;
    signer.api_version = this.api_version;
    signer.utilities_class = this.utilities_class;
    signer.request_class = this.request_class;
    signer.response_class = this.response_class;
    signer.use_ssl = this.use_ssl;
    signer.proxy = this.proxy;
    signer.util = this.util;
    signer.registered_streaming_read_callback = this.registered_streaming_read_callback;
    signer.registered_streaming_write_callback = this.registered_streaming_write_callback;
    
    var request = signer.authenticate();
    request.request_class = this.request_class;
    request.response_class = this.response_class;
    request.ssl_verification = this.ssl_verification;
    
    if (this.use_batch_flow)
    {
      var handle = request.prep_request();
      this.batch_object.add(handle);
      this.use_batch_flow = false;
      return handle;
    }
    
    
    
    request.send_request();
    var headers = request.get_response_header();
    headers['x-aws-stringtosign'] = signer.string_to_sign;
    
    
    
    
    var response;
    return response;
  },
  marge_param:function(param,opt){
    for(var i in opt){
      param[i] = opt[i];
    }
    return param;
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
  },
  get_signer:function(name){
    switch(name){
      case 'AuthV2Query':
        return new AuthV2Query();
      case 'AuthV3Query':
        return new AuthV3Query();
      case 'AuthV3Json':
        return new AuthV3Json();
      case 'AuthV4Query':
        return new AuthV4Query();
      case 'AuthV4Json':
        return new AuthV4Json();
    }
  },
  set_operation_prefix:function(operation_prefix){
    this.operation_prefix = operation_prefix;
  }
};

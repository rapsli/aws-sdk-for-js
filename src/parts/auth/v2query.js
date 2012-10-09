function AuthV2Query(endpoint, operation, payload, access_key, secret_key){
  this.__proto__ = $.extend(this.__proto__,Signer.prototype);
  this.initialize(endpoint, operation, payload, access_key, secret_key);
}
AuthV2Query.prototype = {
  authenticate:function(){
    var current_time = this.time();
    var date = this.get_date_RFC2616(current_time);
    var timestamp = this.get_date_ISO8601(current_time);
    var query = {};
    var headers = {};
    if (this.auth_token != undefined)
    {
      headers['X-Amz-Security-Token'] = this.auth_token;
      query['SecurityToken'] = this.auth_token;
    }
    var request = new Request();
    
    return request;
  }
}
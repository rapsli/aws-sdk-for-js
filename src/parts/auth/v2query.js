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
    if (this.api_version)
    {
      query['Version'] = this.api_version;
    }

    query['Action'] = this.operation;
    query['AWSAccessKeyId'] = this.key;
    query['SignatureMethod'] = 'HmacSHA256';
    query['SignatureVersion'] = 2;
    query['Timestamp'] = timestamp;
    
    // Merge in any options that were passed in
    if (typeof this.payload == 'Object') {
      query = this.array_merge(query, this.payload);
    }

    // Do a case-sensitive, natural order sort on the array keys.
    uksort(query, 'strcmp');







    
    var request = new Request();
    
    return request;
  }
}
function AuthV2Query(endpoint, operation, payload, access_key, secret_key){
  this.__proto__ = $.extend(this.__proto__,Signer.prototype);
  this.initialize(endpoint, operation, payload, access_key, secret_key);
}
AuthV2Query.prototype = {
  authenticate:function(){
  
    
  }
}
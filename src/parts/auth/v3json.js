function AuthV3Json(endpoint, operation, payload, access_key, secret_key){
  this.__proto__ = $.extend(this.__proto__,Signer.prototype);
  this.initialize(endpoint, operation, payload, access_key, secret_key);
}
AuthV3Json.prototype = {
  authenticate:function(){
    
  }
}
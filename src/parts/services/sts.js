function AmazonSTS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSTS.prototype = {
  service:'sts',
  version:'2011-06-15',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonSTS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  get_federation_token: function(name){},
  get_session_token: function(){}
}
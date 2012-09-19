function AmazonSES(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSES.prototype = {
  service:'email',
  version:'2010-12-01',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonSES
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  delete_identity: function(identity){},
  delete_verified_email_address: function(email_address){},
  get_identity_dkim_attributes: function(identities){},
  get_identity_notification_attributes: function(identities){},
  get_identity_verification_attributes: function(identities){},
  get_send_quota: function(){},
  get_send_statistics: function(){},
  list_identities: function(){},
  list_verified_email_addresses: function(){},
  send_email: function(destination,message,source){},
  send_raw_email: function(raw_message){},
  set_identity_dkim_enabled: function(dkim_enabled,identity){},
  set_identity_feedback_forwarding_enabled: function(forwarding_enabled,identity){},
  set_identity_notification_topic: function(identity,notification_type){},
  verify_domain_dkim: function(domain){},
  verify_domain_identity: function(domain){},
  verify_email_address: function(email_address){},
  verify_email_identity: function(email_address){}
}
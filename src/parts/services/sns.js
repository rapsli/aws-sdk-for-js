function AmazonSNS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSNS.prototype = {
  service:'sns',
  version:'2010-03-31',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonSNS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  add_permission: function(action_name,aws_account_id,label,topic_arn){},
  confirm_subscription: function(token,topic_arn){},
  create_topic: function(name){},
  delete_topic: function(topic_arn){},
  get_subscription_attributes: function(subscription_arn){},
  get_topic_attributes: function(topic_arn){},
  list_subscriptions: function(){},
  list_subscriptions_by_topic: function(topic_arn){},
  list_topics: function(){},
  publish: function(message,topic_arn){},
  remove_permission: function(label,topic_arn){},
  set_subscription_attributes: function(attribute_name,attribute_value,subscription_arn){},
  set_topic_attributes: function(attribute_name,attribute_value,topic_arn){},
  subscribe: function(endpoint,protocol,topic_arn){},
  unsubscribe: function(subscription_arn){}
}
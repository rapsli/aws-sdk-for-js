function AmazonSQS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSQS.prototype = {
  service:'sqs',
  version:'2011-10-01',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonSQS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  add_permission: function(action_name,aws_account_id,label,queue_url){},
  change_message_visibility: function(queue_url,receipt_handle,visibility_timeout){},
  change_message_visibility_batch: function(change_message_visibility_batch_request_entry,queue_url){},
  create_queue: function(queue_name){},
  delete_message: function(queue_url,receipt_handle){},
  delete_message_batch: function(delete_message_batch_request_entry,queue_url){},
  delete_queue: function(queue_url){},
  get_queue_attributes: function(queue_url){},
  get_queue_url: function(queue_name){},
  list_queues: function(){},
  receive_message: function(queue_url){},
  remove_permission: function(label,queue_url){},
  send_message: function(message_body,queue_url){},
  send_message_batch: function(queue_url,send_message_batch_request_entry){},
  set_queue_attributes: function(attribute,queue_url){}
}
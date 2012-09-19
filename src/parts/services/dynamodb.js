function AmazonDynamoDB(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonDynamoDB.prototype = {
  service:'dynamodb',
  version:'2011-12-05',
  auth_class:'AuthV4JSON',
  /**
   * @memberOf AmazonDynamoDB
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  batch_get_item: function(){},
  batch_write_item: function(){},
  create_table: function(){},
  delete_item: function(){},
  delete_table: function(){},
  describe_table: function(){},
  get_item: function(){},
  list_tables: function(){},
  put_item: function(){},
  query: function(){},
  scan: function(){},
  update_item: function(){},
  update_table: function(){}
}
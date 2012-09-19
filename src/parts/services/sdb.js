function AmazonSDB(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSDB.prototype = {
  service:'sdb',
  version:'2009-04-15',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonSDB
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
  batch_delete_attributes: function(domain_name,item_keypairs){},
  batch_put_attributes: function(domain_name,item_keypairs,replace){},
  create_domain: function(domain_name){},
  delete_attributes: function(attributes,domain_name,item_name){},
  delete_domain: function(domain_name){},
  domain_metadata: function(domain_name){},
  get_attributes: function(attribute_name,domain_name,item_name){},
  list_domains: function(){},
  put_attributes: function(domain_name,item_name,keypairs,replace){},
  select: function(select_expression){}
}
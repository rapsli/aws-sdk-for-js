function AmazonCloudFront(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudFront.prototype = {
  service:'cloudfront',
  version:'2012-03-15',
  auth_class:'AuthV2REST',
  /**
   * @memberOf AmazonCloudFront
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  create_distribution: function(caller_reference,origin){},
  list_distributions: function(){},
  get_distribution_info: function(distribution_id){},
  delete_distribution: function(distribution_id,etag){},
  get_distribution_config: function(distribution_id){},
  set_distribution_config: function(distribution_id,etag,xml){},
  create_oai: function(caller_reference){},
  list_oais: function(){},
  get_oai: function(identity_id){},
  delete_oai: function(etag,identity_id){},
  get_oai_config: function(identity_id){},
  set_oai_config: function(etag,identity_id,xml){},
  create_invalidation: function(caller_reference,distribution_id,paths){},
  list_invalidations: function(distribution_id){},
  get_invalidation: function(distribution_id,invalidation_id){}
}
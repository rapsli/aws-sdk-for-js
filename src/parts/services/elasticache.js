function AmazonElastiCache(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonElastiCache.prototype = {
  service:'elasticache',
  version:'2012-03-09',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonElastiCache
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  authorize_cache_security_group_ingress: function(cache_security_group_name,ec2_security_group_name,ec2_security_group_owner_id){},
  create_cache_cluster: function(cache_cluster_id,cache_node_type,cache_security_group_names,engine,num_cache_nodes){},
  create_cache_parameter_group: function(cache_parameter_group_family,cache_parameter_group_name,description){},
  create_cache_security_group: function(cache_security_group_name,description){},
  delete_cache_cluster: function(cache_cluster_id){},
  delete_cache_parameter_group: function(cache_parameter_group_name){},
  delete_cache_security_group: function(cache_security_group_name){},
  describe_cache_clusters: function(){},
  describe_cache_parameter_groups: function(){},
  describe_cache_parameters: function(cache_parameter_group_name){},
  describe_cache_security_groups: function(){},
  describe_engine_default_parameters: function(cache_parameter_group_family){},
  describe_events: function(){},
  describe_reserved_cache_nodes: function(){},
  describe_reserved_cache_nodes_offerings: function(){},
  modify_cache_cluster: function(cache_cluster_id){},
  modify_cache_parameter_group: function(cache_parameter_group_name,parameter_name_values){},
  purchase_reserved_cache_nodes_offering: function(reserved_cache_nodes_offering_id){},
  reboot_cache_cluster: function(cache_cluster_id,cache_node_ids_to_reboot){},
  reset_cache_parameter_group: function(cache_parameter_group_name,parameter_name_values){},
  revoke_cache_security_group_ingress: function(cache_security_group_name,ec2_security_group_name,ec2_security_group_owner_id){}
}
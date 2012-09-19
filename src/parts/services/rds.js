function AmazonRDS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonRDS.prototype = {
  service:'rds',
  version:'2012-07-31',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonRDS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  add_tags_to_resource: function(resource_name,tags){},
  authorize_db_security_group_ingress: function(db_security_group_name){},
  copy_db_snapshot: function(source_db_snapshot_identifier,target_db_snapshot_identifier){},
  create_db_instance: function(allocated_storage,db_instance_class,db_instance_identifier,engine,master_user_password,master_username){},
  create_db_instance_read_replica: function(db_instance_identifier,source_db_instance_identifier){},
  create_db_parameter_group: function(db_parameter_group_family,db_parameter_group_name,description){},
  create_db_security_group: function(db_security_group_description,db_security_group_name){},
  create_db_snapshot: function(db_instance_identifier,db_snapshot_identifier){},
  create_db_subnet_group: function(db_subnet_group_description,db_subnet_group_name,subnet_ids){},
  create_option_group: function(engine_name,major_engine_version,option_group_description,option_group_name){},
  delete_db_instance: function(db_instance_identifier){},
  delete_db_parameter_group: function(db_parameter_group_name){},
  delete_db_security_group: function(db_security_group_name){},
  delete_db_snapshot: function(db_snapshot_identifier){},
  delete_db_subnet_group: function(db_subnet_group_name){},
  delete_option_group: function(option_group_name){},
  describe_db_engine_versions: function(){},
  describe_db_instances: function(){},
  describe_db_parameter_groups: function(){},
  describe_db_parameters: function(db_parameter_group_name){},
  describe_db_security_groups: function(){},
  describe_db_snapshots: function(){},
  describe_db_subnet_groups: function(){},
  describe_engine_default_parameters: function(db_parameter_group_family){},
  describe_events: function(){},
  describe_option_group_options: function(engine_name){},
  describe_option_groups: function(){},
  describe_orderable_db_instance_options: function(engine){},
  describe_reserved_db_instances: function(){},
  describe_reserved_db_instances_offerings: function(){},
  list_tags_for_resource: function(resource_name){},
  modify_db_instance: function(db_instance_identifier){},
  modify_db_parameter_group: function(db_parameter_group_name,parameters){},
  modify_db_subnet_group: function(db_subnet_group_name,subnet_ids){},
  modify_option_group: function(option_group_name){},
  purchase_reserved_db_instances_offering: function(reserved_db_instances_offering_id){},
  reboot_db_instance: function(db_instance_identifier){},
  remove_tags_from_resource: function(resource_name,tag_keys){},
  reset_db_parameter_group: function(db_parameter_group_name){},
  restore_db_instance_from_db_snapshot: function(db_instance_identifier,db_snapshot_identifier){},
  restore_db_instance_to_point_in_time: function(source_db_instance_identifier,target_db_instance_identifier){},
  revoke_db_security_group_ingress: function(db_security_group_name){}
}
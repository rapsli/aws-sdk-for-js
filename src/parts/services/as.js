function AmazonAS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonAS.prototype = {
  service:'autoscaling',
  version:'2011-01-01',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonAS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  create_auto_scaling_group: function(auto_scaling_group_name,availability_zones,launch_configuration_name,max_size,min_size){},
  create_launch_configuration: function(image_id,instance_type,launch_configuration_name){},
  create_or_update_tags: function(tags){},
  delete_auto_scaling_group: function(auto_scaling_group_name){},
  delete_launch_configuration: function(launch_configuration_name){},
  delete_notification_configuration: function(auto_scaling_group_name,topic_arn){},
  delete_policy: function(policy_name){},
  delete_scheduled_action: function(scheduled_action_name){},
  delete_tags: function(tags){},
  describe_adjustment_types: function(){},
  describe_auto_scaling_groups: function(){},
  describe_auto_scaling_instances: function(){},
  describe_auto_scaling_notification_types: function(){},
  describe_launch_configurations: function(){},
  describe_metric_collection_types: function(){},
  describe_notification_configurations: function(){},
  describe_policies: function(){},
  describe_scaling_activities: function(){},
  describe_scaling_process_types: function(){},
  describe_scheduled_actions: function(){},
  describe_tags: function(){},
  disable_metrics_collection: function(auto_scaling_group_name){},
  enable_metrics_collection: function(auto_scaling_group_name,granularity){},
  execute_policy: function(policy_name){},
  put_notification_configuration: function(auto_scaling_group_name,notification_types,topic_arn){},
  put_scaling_policy: function(adjustment_type,auto_scaling_group_name,policy_name,scaling_adjustment){},
  put_scheduled_update_group_action: function(auto_scaling_group_name,scheduled_action_name){},
  resume_processes: function(auto_scaling_group_name){},
  set_desired_capacity: function(auto_scaling_group_name,desired_capacity){},
  set_instance_health: function(health_status,instance_id){},
  suspend_processes: function(auto_scaling_group_name){},
  terminate_instance_in_auto_scaling_group: function(instance_id,should_decrement_desired_capacity){},
  update_auto_scaling_group: function(auto_scaling_group_name){}
}
function AmazonELB(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonELB.prototype = {
  service:'elasticloadbalancing',
  version:'2012-06-01',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonELB
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  apply_security_groups_to_load_balancer: function(load_balancer_name,security_groups){},
  attach_load_balancer_to_subnets: function(load_balancer_name,subnets){},
  configure_health_check: function(health_check,load_balancer_name){},
  create_app_cookie_stickiness_policy: function(cookie_name,load_balancer_name,policy_name){},
  create_lb_cookie_stickiness_policy: function(load_balancer_name,policy_name){},
  create_load_balancer: function(listeners,load_balancer_name){},
  create_load_balancer_listeners: function(listeners,load_balancer_name){},
  create_load_balancer_policy: function(load_balancer_name,policy_name,policy_type_name){},
  delete_load_balancer: function(load_balancer_name){},
  delete_load_balancer_listeners: function(load_balancer_name,load_balancer_ports){},
  delete_load_balancer_policy: function(load_balancer_name,policy_name){},
  deregister_instances_from_load_balancer: function(instances,load_balancer_name){},
  describe_instance_health: function(load_balancer_name){},
  describe_load_balancer_policies: function(){},
  describe_load_balancer_policy_types: function(){},
  describe_load_balancers: function(){},
  detach_load_balancer_from_subnets: function(load_balancer_name,subnets){},
  disable_availability_zones_for_load_balancer: function(availability_zones,load_balancer_name){},
  enable_availability_zones_for_load_balancer: function(availability_zones,load_balancer_name){},
  register_instances_with_load_balancer: function(instances,load_balancer_name){},
  set_load_balancer_listener_ssl_certificate: function(load_balancer_name,load_balancer_port,ssl_certificate_id){},
  set_load_balancer_policies_for_backend_server: function(instance_port,load_balancer_name,policy_names){},
  set_load_balancer_policies_of_listener: function(load_balancer_name,load_balancer_port,policy_names){}
}
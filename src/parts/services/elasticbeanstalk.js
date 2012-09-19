function AmazonElasticBeanstalk(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonElasticBeanstalk.prototype = {
  service:'elasticbeanstalk',
  version:'2010-12-01',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonElasticBeanstalk
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  check_dns_availability: function(cnameprefix){},
  create_application: function(application_name){},
  create_application_version: function(application_name,version_label){},
  create_configuration_template: function(application_name,template_name){},
  create_environment: function(application_name,environment_name){},
  create_storage_location: function(){},
  delete_application: function(application_name){},
  delete_application_version: function(application_name,version_label){},
  delete_configuration_template: function(application_name,template_name){},
  delete_environment_configuration: function(application_name,environment_name){},
  describe_application_versions: function(){},
  describe_applications: function(){},
  describe_configuration_options: function(){},
  describe_configuration_settings: function(application_name){},
  describe_environment_resources: function(){},
  describe_environments: function(){},
  describe_events: function(){},
  list_available_solution_stacks: function(){},
  rebuild_environment: function(){},
  request_environment_info: function(info_type){},
  restart_app_server: function(){},
  retrieve_environment_info: function(info_type){},
  swap_environment_cnames: function(){},
  terminate_environment: function(){},
  update_application: function(application_name){},
  update_application_version: function(application_name,version_label){},
  update_configuration_template: function(application_name,template_name){},
  update_environment: function(){},
  validate_configuration_settings: function(application_name,option_settings){}
}
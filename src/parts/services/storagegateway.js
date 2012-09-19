function AmazonStorageGateway(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonStorageGateway.prototype = {
  service:'storagegateway',
  version:'2012-04-30',
  auth_class:'AuthV4JSON',
  /**
   * @memberOf AmazonStorageGateway
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  activate_gateway: function(){},
  add_working_storage: function(){},
  create_snapshot: function(){},
  create_stored_iscsi_volume: function(){},
  delete_bandwidth_rate_limit: function(){},
  delete_chap_credentials: function(){},
  delete_gateway: function(){},
  delete_volume: function(){},
  describe_bandwidth_rate_limit: function(){},
  describe_chap_credentials: function(){},
  describe_gateway_information: function(){},
  describe_maintenance_start_time: function(){},
  describe_snapshot_schedule: function(){},
  describe_stored_iscsi_volumes: function(){},
  describe_working_storage: function(){},
  list_gateways: function(){},
  list_local_disks: function(){},
  list_volumes: function(){},
  shutdown_gateway: function(){},
  start_gateway: function(){},
  update_bandwidth_rate_limit: function(){},
  update_chap_credentials: function(){},
  update_gateway_information: function(){},
  update_gateway_software_now: function(){},
  update_maintenance_start_time: function(){},
  update_snapshot_schedule: function(){}
}
function AmazonEMR(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonEMR.prototype = {
  service:'elasticmapreduce',
  version:'2009-03-31',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonEMR
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  add_instance_groups: function(instance_groups,job_flow_id){},
  add_job_flow_steps: function(job_flow_id,steps){},
  describe_job_flows: function(){},
  modify_instance_groups: function(){},
  run_job_flow: function(instances,name){},
  set_termination_protection: function(job_flow_ids,termination_protected){},
  terminate_job_flows: function(job_flow_ids){}
}
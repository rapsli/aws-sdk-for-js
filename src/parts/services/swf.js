function AmazonSWF(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSWF.prototype = {
  service:'swf',
  version:'2012-01-25',
  auth_class:'AuthV3JSON',
  /**
   * @memberOf AmazonSWF
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  count_closed_workflow_executions: function(){},
  count_open_workflow_executions: function(){},
  count_pending_activity_tasks: function(){},
  count_pending_decision_tasks: function(){},
  deprecate_activity_type: function(){},
  deprecate_domain: function(){},
  deprecate_workflow_type: function(){},
  describe_activity_type: function(){},
  describe_domain: function(){},
  describe_workflow_execution: function(){},
  describe_workflow_type: function(){},
  get_workflow_execution_history: function(){},
  list_activity_types: function(){},
  list_closed_workflow_executions: function(){},
  list_domains: function(){},
  list_open_workflow_executions: function(){},
  list_workflow_types: function(){},
  poll_for_activity_task: function(){},
  poll_for_decision_task: function(){},
  record_activity_task_heartbeat: function(){},
  register_activity_type: function(){},
  register_domain: function(){},
  register_workflow_type: function(){},
  request_cancel_workflow_execution: function(){},
  respond_activity_task_canceled: function(){},
  respond_activity_task_completed: function(){},
  respond_activity_task_failed: function(){},
  respond_decision_task_completed: function(){},
  signal_workflow_execution: function(){},
  start_workflow_execution: function(){},
  terminate_workflow_execution: function(){}
}
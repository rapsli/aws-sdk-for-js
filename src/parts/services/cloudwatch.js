function AmazonCloudWatch(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudWatch.prototype = {
  service:'monitoring',
  version:'2010-08-01',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonCloudWatch
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  delete_alarms: function(alarm_names){},
  describe_alarm_history: function(){},
  describe_alarms: function(){},
  describe_alarms_for_metric: function(metric_name,namespace){},
  disable_alarm_actions: function(alarm_names){},
  enable_alarm_actions: function(alarm_names){},
  get_metric_statistics: function(end_time,metric_name,namespace,period,start_time,statistics,unit){},
  list_metrics: function(){},
  put_metric_alarm: function(alarm_name,comparison_operator,evaluation_periods,metric_name,namespace,period,statistic,threshold){},
  put_metric_data: function(metric_data,namespace){},
  set_alarm_state: function(alarm_name,state_reason,state_value){}
}
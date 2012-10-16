/**
 * @class AmazonCloudWatchClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonCloudWatch(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudWatch.prototype = {
  service:'monitoring',
  api_version:'2010-08-01',
  auth_class: new AuthV4Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonCloudWatch
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Deletes all specified alarms. In the event of an error, no alarms are deleted.
   *
   * @param {String|array} [alarm_names] A list of alarms to be deleted. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_alarms: function(alarm_names,opt){
    var payload = {};
    payload.alarm_names = alarm_names;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteAlarms", payload );
    return response;
  }, 
  /**
   * Retrieves history for the specified alarm. Filter alarms by date range or item type. If an
   * alarm name is not specified, Amazon CloudWatch returns histories for all of the owner's alarms.
   * 
   * <p class="note">
   * Amazon CloudWatch retains the history of an alarm for two weeks, whether or not you delete the
   * alarm.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.AlarmName] The name of the alarm.
   * @param {String} [opt.HistoryItemType] The type of alarm histories to retrieve. [Allowed values: 
   * @param {String} [opt.StartDate] The starting date to retrieve alarm history. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.EndDate] The ending date to retrieve alarm history. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Number} [opt.MaxRecords] The maximum number of alarm history records to retrieve.
   * @param {String} [opt.NextToken] The token returned by a previous call to indicate that there is more data available.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_alarm_history: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeAlarmHistory", payload );
    return response;
  }, 
  /**
   * Retrieves alarms with the specified names. If no name is specified, all alarms for the user are
   * returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state,
   * or a prefix for any action.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String|array} [opt.AlarmNames] A list of alarm names to retrieve information for. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String} [opt.AlarmNamePrefix] The alarm name prefix. 
   * @param {String} [opt.StateValue] The state value to be used in matching alarms. [Allowed values: 
   * @param {String} [opt.ActionPrefix] The action name prefix.
   * @param {Number} [opt.MaxRecords] The maximum number of alarm descriptions to retrieve.
   * @param {String} [opt.NextToken] The token returned by a previous call to indicate that there is more data available.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_alarms: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeAlarms", payload );
    return response;
  }, 
  /**
   * Retrieves all alarms for a single metric. Specify a statistic, period, or unit to filter the
   * set of alarms further.
   *
   * @param {String} [metric_name] The name of the metric.   * @param {String} [namespace] The namespace of the metric. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[^:].*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Statistic] The statistic for the metric. [Allowed values: 
   * @param {Object} [opt.Dimensions] The list of dimensions associated with the metric. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} opt.Name The name of the dimension.
   * @param {String} opt.Value The value representing the dimension measurement
   * @param {Number} [opt.Period] The period in seconds over which the statistic is applied.
   * @param {String} [opt.Unit] The unit for the metric. [Allowed values: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_alarms_for_metric: function(metric_name,namespace,opt){
    var payload = {};
    payload.metric_name = metric_name;
    payload.namespace = namespace;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeAlarmsForMetric", payload );
    return response;
  }, 
  /**
   * Disables actions for the specified alarms. When an alarm's actions are disabled the alarm's
   * state may change, but none of the alarm's actions will execute.
   *
   * @param {String|array} [alarm_names] The names of the alarms to disable actions for. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  disable_alarm_actions: function(alarm_names,opt){
    var payload = {};
    payload.alarm_names = alarm_names;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DisableAlarmActions", payload );
    return response;
  }, 
  /**
   * Enables actions for the specified alarms.
   *
   * @param {String|array} [alarm_names] The names of the alarms to enable actions for. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  enable_alarm_actions: function(alarm_names,opt){
    var payload = {};
    payload.alarm_names = alarm_names;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("EnableAlarmActions", payload );
    return response;
  }, 
  /**
   * Gets statistics for the specified metric.
   * 
   * <p class="note">
   * The maximum number of data points returned from a single <code>GetMetricStatistics</code>
   * request is 1,440. If a request is made that generates more than 1,440 data points, Amazon
   * CloudWatch returns an error. In such a case, alter the request by narrowing the specified time
   * range or increasing the specified period. Alternatively, make multiple requests across adjacent
   * time ranges.
   * </p> 
   * Amazon CloudWatch aggregates data points based on the length of the <code>period</code> that
   * you specify. For example, if you request statistics with a one-minute granularity, Amazon
   * CloudWatch aggregates data points with time stamps that fall within the same one-minute period.
   * In such a case, the data points queried can greatly outnumber the data points returned.
   * 
   * <p class="note">
   * The maximum number of data points that can be queried is 50,850; whereas the maximum number of
   * data points returned is 1,440.
   * </p> 
   * The following examples show various statistics allowed by the data point query maximum of
   * 50,850 when you call <code>GetMetricStatistics</code> on Amazon EC2 instances with detailed
   * (one-minute) monitoring enabled:
   * 
   * <ul>
   *   <li>Statistics for up to 400 instances for a span of one hour</li>
   *   <li>Statistics for up to 35 instances over a span of 24 hours</li>
   *   <li>Statistics for up to 2 instances over a span of 2 weeks</li>
   * </ul>
   *
   * @param {String} [namespace] The namespace of the metric. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[^:].*</code>]   * @param {String} [metric_name] The name of the metric.   * @param {String} [start_time] The time stamp to use for determining the first datapoint to return. The value specified is inclusive; results include datapoints with the time stamp specified. <p class="note">The specified start time is rounded down to the nearest value. Datapoints are returned for start times up to two weeks in the past. Specified start times that are more than two weeks in the past will not return datapoints for metrics that are older than two weeks.</p> May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.   * @param {String} [end_time] The time stamp to use for determining the last datapoint to return. The value specified is exclusive; results will include datapoints up to the time stamp specified. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.   * @param {Number} [period] The granularity, in seconds, of the returned datapoints. <code>Period</code> must be at least 60 seconds and must be a multiple of 60. The default value is 60.   * @param {String|array} [statistics] The metric statistics to return. Pass a string for a single value, or an indexed array for multiple values.   * @param {String} [unit] The unit for the metric. [Allowed values: <code>Seconds</code>, <code>Microseconds</code>, <code>Milliseconds</code>, <code>Bytes</code>, <code>Kilobytes</code>, <code>Megabytes</code>, <code>Gigabytes</code>, <code>Terabytes</code>, <code>Bits</code>, <code>Kilobits</code>, <code>Megabits</code>, <code>Gigabits</code>, <code>Terabits</code>, <code>Percent</code>, <code>Count</code>, <code>Bytes/Second</code>, <code>Kilobytes/Second</code>, <code>Megabytes/Second</code>, <code>Gigabytes/Second</code>, <code>Terabytes/Second</code>, <code>Bits/Second</code>, <code>Kilobits/Second</code>, <code>Megabits/Second</code>, <code>Gigabits/Second</code>, <code>Terabits/Second</code>, <code>Count/Second</code>, <code>None</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.Dimensions] A list of dimensions describing qualities of the metric. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} opt.Name The name of the dimension.
   * @param {String} opt.Value The value representing the dimension measurement
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_metric_statistics: function(namespace,metric_name,start_time,end_time,period,statistics,unit,opt){
    var payload = {};
    payload.namespace = namespace;
    payload.metric_name = metric_name;
    payload.start_time = start_time;
    payload.end_time = end_time;
    payload.period = period;
    payload.statistics = statistics;
    payload.unit = unit;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetMetricStatistics", payload );
    return response;
  }, 
  /**
   * Returns a list of valid metrics stored for the AWS account owner. Returned metrics can be used
   * with <code>GetMetricStatistics</code> to obtain statistical data for a given metric.
   * 
   * <p class="note">
   * Up to 500 results are returned for any one call. To retrieve further results, use returned
   * <code>NextToken</code> values with subsequent <code>ListMetrics</code> operations.
   * </p>
   * <p class="note">
   * If you create a metric with the <code>PutMetricData</code> action, allow up to fifteen minutes
   * for the metric to appear in calls to the <code>ListMetrics</code> action. Statistics about the
   * metric, however, are available sooner using <code>GetMetricStatistics</code>.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Namespace] The namespace to filter against. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.MetricName] The name of the metric to filter against.
   * @param {Object} [opt.Dimensions] A list of dimensions to filter against. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} opt.Name The dimension name to be matched.
   * @param {String} [opt.Value] The value of the dimension to be matched. 
   * @param {String} [opt.NextToken] The token returned by a previous call to indicate that there is more data available.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_metrics: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListMetrics", payload );
    return response;
  }, 
  /**
   * Creates or updates an alarm and associates it with the specified Amazon CloudWatch metric.
   * Optionally, this operation can associate one or more Amazon Simple Notification Service
   * resources with the alarm.
   *  
   * When this operation creates an alarm, the alarm state is immediately set to
   * <code>INSUFFICIENT_DATA</code>. The alarm is evaluated and its <code>StateValue</code> is set
   * appropriately. Any actions associated with the <code>StateValue</code> is then executed.
   * 
   * <p class="note">
   * When updating an existing alarm, its <code>StateValue</code> is left unchanged.
   * </p>
   *
   * @param {String} [alarm_name] The descriptive name for the alarm. This name must be unique within the user's AWS account   * @param {String} [metric_name] The name for the alarm's associated metric.   * @param {String} [namespace] The namespace for the alarm's associated metric. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[^:].*</code>]   * @param {String} [statistic] The statistic to apply to the alarm's associated metric. [Allowed values: <code>SampleCount</code>, <code>Average</code>, <code>Sum</code>, <code>Minimum</code>, <code>Maximum</code>]   * @param {Number} [period] The period in seconds over which the specified statistic is applied.   * @param {Number} [evaluation_periods] The number of periods over which data is compared to the specified threshold.   * @param {Double} [threshold] The value against which the specified statistic is compared.   * @param {String} [comparison_operator] The arithmetic operation to use when comparing the specified <code>Statistic</code> and <code>Threshold</code>. The specified <code>Statistic</code> value is used as the first operand. [Allowed values: <code>GreaterThanOrEqualToThreshold</code>, <code>GreaterThanThreshold</code>, <code>LessThanThreshold</code>, <code>LessThanOrEqualToThreshold</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.AlarmDescription] The description for the alarm.
   * @param {Boolean} [opt.ActionsEnabled] Indicates whether or not actions should be executed during any changes to the alarm's state.
   * @param {String|array} [opt.OKActions] The list of actions to execute when this alarm transitions into an 
   * @param {String|array} [opt.AlarmActions] The list of actions to execute when this alarm transitions into an 
   * @param {String|array} [opt.InsufficientDataActions] The list of actions to execute when this alarm transitions into an 
   * @param {Object} [opt.Dimensions] The dimensions for the alarm's associated metric. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} opt.Name The name of the dimension.
   * @param {String} opt.Value The value representing the dimension measurement
   * @param {String} [opt.Unit] The unit for the alarm's associated metric. [Allowed values: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_metric_alarm: function(alarm_name,metric_name,namespace,statistic,period,evaluation_periods,threshold,comparison_operator,opt){
    var payload = {};
    payload.alarm_name = alarm_name;
    payload.metric_name = metric_name;
    payload.namespace = namespace;
    payload.statistic = statistic;
    payload.period = period;
    payload.evaluation_periods = evaluation_periods;
    payload.threshold = threshold;
    payload.comparison_operator = comparison_operator;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutMetricAlarm", payload );
    return response;
  }, 
  /**
   * Publishes metric data points to Amazon CloudWatch. Amazon Cloudwatch associates the data points
   * with the specified metric. If the specified metric does not exist, Amazon CloudWatch creates
   * the metric.
   * 
   * <p class="note">
   * If you create a metric with the <code>PutMetricData</code> action, allow up to fifteen minutes
   * for the metric to appear in calls to the <code>ListMetrics</code> action.
   * </p> 
   * The size of aPutMetricDatarequest is limited to 8 KB for HTTP GET requests and 40 KB for HTTP
   * POST requests.
   * 
   * <p class="important">
   * Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, Amazon
   * CloudWatch truncates values with very large exponents. Values with base-10 exponents greater
   * than 126 (1 x 10^126) are truncated. Likewise, values with base-10 exponents less than -130 (1
   * x 10^-130) are also truncated.
   * </p>
   *
   * @param {String} [namespace] The namespace for the metric data. <p class="note">You cannot specify a namespace that begins with "AWS/". Namespaces that begin with "AWS/" are reserved for other Amazon Web Services products that send metrics to Amazon CloudWatch.</p> [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[^:].*</code>]   * @param {Object} [metric_data] A list of data describing the metric. <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>MetricName</code> - <code>string</code> - Required - The name of the metric.</li>
   *     <li><code>Dimensions</code> - <code>array</code> - Optional - A list of dimensions associated with the metric. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>Name</code> - <code>string</code> - Required - The name of the dimension.</li>
   *         <li><code>Value</code> - <code>string</code> - Required - The value representing the dimension measurement</li>
   *     <li><code>Timestamp</code> - <code>string</code> - Optional - The time stamp used for the metric. If not specified, the default value is set to the time the metric data was received. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *     <li><code>Value</code> - <code>double</code> - Optional - The value for the metric. <p class="important">Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, Amazon CloudWatch truncates values with very large exponents. Values with base-10 exponents greater than 126 (1 x 10^126) are truncated. Likewise, values with base-10 exponents less than -130 (1 x 10^-130) are also truncated.</p></li>
   *     <li><code>StatisticValues</code> - <code>array</code> - Optional - A set of statistical values describing the metric. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>SampleCount</code> - <code>double</code> - Required - The number of samples used for the statistic set.</li>
   *         <li><code>Sum</code> - <code>double</code> - Required - The sum of values for the sample set.</li>
   *         <li><code>Minimum</code> - <code>double</code> - Required - The minimum value of the sample set.</li>
   *         <li><code>Maximum</code> - <code>double</code> - Required - The maximum value of the sample set.</li>
   *     <li><code>Unit</code> - <code>string</code> - Optional - The unit of the metric. [Allowed values: <code>Seconds</code>, <code>Microseconds</code>, <code>Milliseconds</code>, <code>Bytes</code>, <code>Kilobytes</code>, <code>Megabytes</code>, <code>Gigabytes</code>, <code>Terabytes</code>, <code>Bits</code>, <code>Kilobits</code>, <code>Megabits</code>, <code>Gigabits</code>, <code>Terabits</code>, <code>Percent</code>, <code>Count</code>, <code>Bytes/Second</code>, <code>Kilobytes/Second</code>, <code>Megabytes/Second</code>, <code>Gigabytes/Second</code>, <code>Terabytes/Second</code>, <code>Bits/Second</code>, <code>Kilobits/Second</code>, <code>Megabits/Second</code>, <code>Gigabits/Second</code>, <code>Terabits/Second</code>, <code>Count/Second</code>, <code>None</code>]</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_metric_data: function(namespace,metric_data,opt){
    var payload = {};
    payload.namespace = namespace;
    payload.metric_data = metric_data;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutMetricData", payload );
    return response;
  }, 
  /**
   * Temporarily sets the state of an alarm. When the updated <code>StateValue</code> differs from
   * the previous value, the action configured for the appropriate state is invoked. This is not a
   * permanent change. The next periodic alarm check (in about a minute) will set the alarm to its
   * actual state.
   *
   * @param {String} [alarm_name] The descriptive name for the alarm. This name must be unique within the user's AWS account. The maximum length is 255 characters.   * @param {String} [state_value] The value of the state. [Allowed values: <code>OK</code>, <code>ALARM</code>, <code>INSUFFICIENT_DATA</code>]   * @param {String} [state_reason] The reason that this alarm is set to this specific state (in human-readable text format)   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.StateReasonData] The reason that this alarm is set to this specific state (in machine-readable JSON format)
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  set_alarm_state: function(alarm_name,state_value,state_reason,opt){
    var payload = {};
    payload.alarm_name = alarm_name;
    payload.state_value = state_value;
    payload.state_reason = state_reason;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetAlarmState", payload );
    return response;
  }
}
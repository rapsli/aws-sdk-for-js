/**
 * @class AmazonSWFClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonSWF(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSWF.prototype = {
  service:'swf',
  api_version:'2012-01-25',
  auth_class: new AuthV3JSON(),
  operation_prefix: 'x-amz-target:SimpleWorkflowService.',
  /**
   * @memberOf AmazonSWF
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Returns the number of closed workflow executions within the given domain that meet the
   * specified filtering criteria.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the workflow executions to count.
   * @param {Object} [opt.startTimeFilter] If specified, only workflow executions that meet the start time criteria of the filter are counted. 
   * @param {String} opt.oldestDate Specifies the oldest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.latestDate] Specifies the latest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Object} [opt.closeTimeFilter] If specified, only workflow executions that meet the close time criteria of the filter are counted. 
   * @param {String} opt.oldestDate Specifies the oldest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.latestDate] Specifies the latest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Object} [opt.executionFilter] If specified, only workflow executions matching the 
   * @param {String} opt.workflowId The workflowId to pass of match the criteria of this filter.
   * @param {Object} [opt.typeFilter] If specified, indicates the type of the workflow executions to be counted. 
   * @param {String} opt.name Name of the workflow type. This field is required.
   * @param {String} [opt.version] Version of the workflow type.
   * @param {Object} [opt.tagFilter] If specified, only executions that have a tag that matches the filter are counted. 
   * @param {String} opt.tag Specifies the tag that must be associated with the execution for it to meet the filter criteria. This field is required.
   * @param {Object} [opt.closeStatusFilter] If specified, only workflow executions that match this close status are counted. This filter has an affect only if 
   * @param {String} opt.status The close status that must match the close status of an execution for it to meet the criteria of this filter. This field is required. [Allowed values: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  count_closed_workflow_executions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CountClosedWorkflowExecutions", payload );
    return response;
  }, 
  /**
   * Returns the number of open workflow executions within the given domain that meet the specified
   * filtering criteria.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the workflow executions to count.
   * @param {Object} opt.startTimeFilter Specifies the start time criteria that workflow executions must meet in order to be counted. 
   * @param {String} opt.oldestDate Specifies the oldest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.latestDate] Specifies the latest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Object} [opt.typeFilter] Specifies the type of the workflow executions to be counted. 
   * @param {String} opt.name Name of the workflow type. This field is required.
   * @param {String} [opt.version] Version of the workflow type.
   * @param {Object} [opt.tagFilter] If specified, only executions that have a tag that matches the filter are counted. 
   * @param {String} opt.tag Specifies the tag that must be associated with the execution for it to meet the filter criteria. This field is required.
   * @param {Object} [opt.executionFilter] If specified, only workflow executions matching the 
   * @param {String} opt.workflowId The workflowId to pass of match the criteria of this filter.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  count_open_workflow_executions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CountOpenWorkflowExecutions", payload );
    return response;
  }, 
  /**
   * Returns the estimated number of activity tasks in the specified task list. The count returned
   * is an approximation and is not guaranteed to be exact. If you specify a task list that no
   * activity task was ever scheduled in then 0 will be returned.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain that contains the task list.
   * @param {Object} opt.taskList The name of the task list. 
   * @param {String} opt.name The name of the task list.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  count_pending_activity_tasks: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CountPendingActivityTasks", payload );
    return response;
  }, 
  /**
   * Returns the estimated number of decision tasks in the specified task list. The count returned
   * is an approximation and is not guaranteed to be exact. If you specify a task list that no
   * decision task was ever scheduled in then 0 will be returned.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain that contains the task list.
   * @param {Object} opt.taskList The name of the task list. 
   * @param {String} opt.name The name of the task list.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  count_pending_decision_tasks: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CountPendingDecisionTasks", payload );
    return response;
  }, 
  /**
   * Deprecates the specified <em>activity type</em>. After an activity type has been deprecated,
   * you cannot create new tasks of that activity type. Tasks of this type that were scheduled
   * before the type was deprecated will continue to run.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which the activity type is registered.
   * @param {Object} opt.activityType The activity type to deprecate. 
   * @param {String} opt.name The name of this activity. 
   * @param {String} opt.version The version of this activity. 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  deprecate_activity_type: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeprecateActivityType", payload );
    return response;
  }, 
  /**
   * Deprecates the specified domain. After a domain has been deprecated it cannot be used to create
   * new workflow executions or register new types. However, you can still use visibility actions on
   * this domain. Deprecating a domain also deprecates all activity and workflow types registered in
   * the domain. Executions that were started before the domain was deprecated will continue to run.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.name The name of the domain to deprecate.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  deprecate_domain: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeprecateDomain", payload );
    return response;
  }, 
  /**
   * Deprecates the specified <em>workflow type</em>. After a workflow type has been deprecated, you
   * cannot create new executions of that type. Executions that were started before the type was
   * deprecated will continue to run. A deprecated workflow type may still be used when calling
   * visibility actions.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which the workflow type is registered.
   * @param {Object} opt.workflowType The workflow type to deprecate. 
   * @param {String} opt.name The name of the workflow type. This field is required. 
   * @param {String} opt.version The version of the workflow type. This field is required. 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  deprecate_workflow_type: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeprecateWorkflowType", payload );
    return response;
  }, 
  /**
   * Returns information about the specified activity type. This includes configuration settings
   * provided at registration time as well as other general information about the type.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which the activity type is registered.
   * @param {Object} opt.activityType The activity type to describe. 
   * @param {String} opt.name The name of this activity. 
   * @param {String} opt.version The version of this activity. 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_activity_type: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeActivityType", payload );
    return response;
  }, 
  /**
   * Returns information about the specified domain including description and status.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.name The name of the domain to describe.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_domain: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDomain", payload );
    return response;
  }, 
  /**
   * Returns information about the specified workflow execution including its type and some
   * statistics.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the workflow execution.
   * @param {Object} opt.execution The workflow execution to describe. 
   * @param {String} opt.workflowId The user defined identifier associated with the workflow execution.
   * @param {String} opt.runId A system generated unique identifier for the workflow execution.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_workflow_execution: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeWorkflowExecution", payload );
    return response;
  }, 
  /**
   * Returns information about the specified <em>workflow type</em>. This includes configuration
   * settings specified when the type was registered and other information such as creation date,
   * current status, etc.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which this workflow type is registered.
   * @param {Object} opt.workflowType The workflow type to describe. 
   * @param {String} opt.name The name of the workflow type. This field is required. 
   * @param {String} opt.version The version of the workflow type. This field is required. 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_workflow_type: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeWorkflowType", payload );
    return response;
  }, 
  /**
   * Returns the history of the specified workflow execution. The results may be split into multiple
   * pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code>
   * returned by the initial call.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the workflow execution.
   * @param {Object} opt.execution Specifies the workflow execution for which to return the history. 
   * @param {String} opt.workflowId The user defined identifier associated with the workflow execution.
   * @param {String} opt.runId A system generated unique identifier for the workflow execution.
   * @param {String} [opt.nextPageToken] If a 
   * @param {Number} [opt.maximumPageSize] Specifies the maximum number of history events returned in one page. The next page in the result is identified by the 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_workflow_execution_history: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetWorkflowExecutionHistory", payload );
    return response;
  }, 
  /**
   * Returns information about all activities registered in the specified domain that match the
   * specified name and registration status. The result includes information like creation date,
   * current status of the activity, etc. The results may be split into multiple pages. To retrieve
   * subsequent pages, make the call again using the <code>nextPageToken</code> returned by the
   * initial call.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which the activity types have been registered.
   * @param {String} [opt.name] If specified, only lists the activity types that have this name.
   * @param {String} opt.registrationStatus Specifies the registration status of the activity types to list. [Allowed values: 
   * @param {String} [opt.nextPageToken] If on a previous call to this method a 
   * @param {Number} [opt.maximumPageSize] The maximum number of results returned in each page. The default is 100, but the caller can override this value to a page size 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_activity_types: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListActivityTypes", payload );
    return response;
  }, 
  /**
   * Returns a list of closed workflow executions in the specified domain that meet the filtering
   * criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the
   * call again using the nextPageToken returned by the initial call.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain that contains the workflow executions to list.
   * @param {Object} [opt.startTimeFilter] If specified, the workflow executions are included in the returned results based on whether their start times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their start times. 
   * @param {String} opt.oldestDate Specifies the oldest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.latestDate] Specifies the latest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Object} [opt.closeTimeFilter] If specified, the workflow executions are included in the returned results based on whether their close times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their close times. 
   * @param {String} opt.oldestDate Specifies the oldest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.latestDate] Specifies the latest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Object} [opt.executionFilter] If specified, only workflow executions matching the workflow id specified in the filter are returned. 
   * @param {String} opt.workflowId The workflowId to pass of match the criteria of this filter.
   * @param {Object} [opt.closeStatusFilter] If specified, only workflow executions that match this 
   * @param {String} opt.status The close status that must match the close status of an execution for it to meet the criteria of this filter. This field is required. [Allowed values: 
   * @param {Object} [opt.typeFilter] If specified, only executions of the type specified in the filter are returned. 
   * @param {String} opt.name Name of the workflow type. This field is required.
   * @param {String} [opt.version] Version of the workflow type.
   * @param {Object} [opt.tagFilter] If specified, only executions that have the matching tag are listed. 
   * @param {String} opt.tag Specifies the tag that must be associated with the execution for it to meet the filter criteria. This field is required.
   * @param {String} [opt.nextPageToken] If on a previous call to this method a 
   * @param {Number} [opt.maximumPageSize] The maximum number of results returned in each page. The default is 100, but the caller can override this value to a page size 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_closed_workflow_executions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListClosedWorkflowExecutions", payload );
    return response;
  }, 
  /**
   * Returns the list of domains registered in the account. The results may be split into multiple
   * pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by
   * the initial call.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.nextPageToken] If on a previous call to this method a 
   * @param {String} opt.registrationStatus Specifies the registration status of the domains to list. [Allowed values: 
   * @param {Number} [opt.maximumPageSize] The maximum number of results returned in each page. The default is 100, but the caller can override this value to a page size 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_domains: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListDomains", payload );
    return response;
  }, 
  /**
   * Returns a list of open workflow executions in the specified domain that meet the filtering
   * criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the
   * call again using the nextPageToken returned by the initial call.
   * 
   * <p class="note">
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain that contains the workflow executions to list.
   * @param {Object} opt.startTimeFilter Workflow executions are included in the returned results based on whether their start times are within the range specified by this filter. 
   * @param {String} opt.oldestDate Specifies the oldest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.latestDate] Specifies the latest start or close date and time to return. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {Object} [opt.typeFilter] If specified, only executions of the type specified in the filter are returned. 
   * @param {String} opt.name Name of the workflow type. This field is required.
   * @param {String} [opt.version] Version of the workflow type.
   * @param {Object} [opt.tagFilter] If specified, only executions that have the matching tag are listed. 
   * @param {String} opt.tag Specifies the tag that must be associated with the execution for it to meet the filter criteria. This field is required.
   * @param {String} [opt.nextPageToken] If on a previous call to this method a 
   * @param {Number} [opt.maximumPageSize] The maximum number of results returned in each page. The default is 100, but the caller can override this value to a page size 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.executionFilter] If specified, only workflow executions matching the workflow id specified in the filter are returned. 
   * @param {String} opt.workflowId The workflowId to pass of match the criteria of this filter.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_open_workflow_executions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListOpenWorkflowExecutions", payload );
    return response;
  }, 
  /**
   * Returns information about workflow types in the specified domain. The results may be split into
   * multiple pages that can be retrieved by making the call repeatedly.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which the workflow types have been registered.
   * @param {String} [opt.name] If specified, lists the workflow type with this name.
   * @param {String} opt.registrationStatus Specifies the registration status of the workflow types to list. [Allowed values: 
   * @param {String} [opt.nextPageToken] If on a previous call to this method a 
   * @param {Number} [opt.maximumPageSize] The maximum number of results returned in each page. The default is 100, but the caller can override this value to a page size 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_workflow_types: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListWorkflowTypes", payload );
    return response;
  }, 
  /**
   * Used by workers to get an <code>ActivityTask</code> from the specified activity
   * <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection
   * open and responds as soon as a task becomes available. The maximum time the service holds on to
   * the request before responding is 60 seconds. If no task is available within 60 seconds, the
   * poll will return an empty result. An empty result, in this context, means that an ActivityTask
   * is returned, but that the value of taskToken is an empty string. If a task is returned, the
   * worker should use its type to identify and process it correctly.
   * 
   * <p class="important">
   * Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher
   * than the maximum time service may hold the poll request).
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain that contains the task lists being polled.
   * @param {Object} opt.taskList Specifies the task list to poll for activity tasks. The specified string must not start or end with whitespace. It must not contain a 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.identity] Identity of the worker making the request, which is recorded in the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  poll_for_activity_task: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PollForActivityTask", payload );
    return response;
  }, 
  /**
   * Used by deciders to get a <code>DecisionTask</code> from the specified decision
   * <code>taskList</code>. A decision task may be returned for any open workflow execution that is
   * using the specified task list. The task includes a paginated view of the history of the
   * workflow execution. The decider should use the workflow type and the history to determine how
   * to properly handle the task.
   *  
   * This action initiates a long poll, where the service holds the HTTP connection open and
   * responds as soon a task becomes available. If no decision task is available in the specified
   * task list before the timeout of 60 seconds expires, an empty result is returned. An empty
   * result, in this context, means that a DecisionTask is returned, but that the value of taskToken
   * is an empty string.
   * 
   * <p class="important">
   * Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher
   * than the timeout).
   * </p>
   * <p class="important">
   * Because the number of workflow history events for a single workflow execution might be very
   * large, the result returned might be split up across a number of pages. To retrieve subsequent
   * pages, make additional calls to <code>PollForDecisionTask</code> using the
   * <code>nextPageToken</code> returned by the initial call. Note that you do <strong>not</strong>
   * call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead,
   * call <code>PollForDecisionTask</code> again.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the task lists to poll.
   * @param {Object} opt.taskList Specifies the task list to poll for decision tasks. The specified string must not start or end with whitespace. It must not contain a 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.identity] Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
   * @param {String} [opt.nextPageToken] If on a previous call to this method a 
   * @param {Number} [opt.maximumPageSize] The maximum number of history events returned in each page. The default is 100, but the caller can override this value to a page size 
   * @param {Boolean} [opt.reverseOrder] When set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  poll_for_decision_task: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PollForDecisionTask", payload );
    return response;
  }, 
  /**
   * Used by activity workers to report to the service that the <code>ActivityTask</code>
   * represented by the specified <code>taskToken</code> is still making progress. The worker can
   * also (optionally) specify details of the progress, for example percent complete, using the
   * <code>details</code> parameter. This action can also be used by the worker as a mechanism to
   * check if cancellation is being requested for the activity task. If a cancellation is being
   * attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned
   * by the service is set to <code>true</code>.
   *  
   * This action resets the <code>taskHeartbeatTimeout</code> clock. The
   * <code>taskHeartbeatTimeout</code> is specified in <code>RegisterActivityType</code>.
   *  
   * This action does not in itself create an event in the workflow execution history. However, if
   * the task times out, the workflow execution history will contain a
   * <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat
   * generated by the activity worker.
   * 
   * <p class="note">
   * The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an
   * activity task, regardless of the number of <code>RecordActivityTaskHeartbeat</code> requests
   * received. The <code>taskStartToCloseTimeout</code> is also specified in
   * <code>RegisterActivityType</code>.
   * </p>
   * <p class="note">
   * This operation is only useful for long-lived activities to report liveliness of the task and to
   * determine if a cancellation is being attempted.
   * </p>
   * <p class="important">
   * If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being
   * attempted. If the worker can cancel the activity, it should respond with
   * <code>RespondActivityTaskCanceled</code>. Otherwise, it should ignore the cancellation request.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.taskToken The 
   * @param {String} [opt.details] If specified, contains details about the progress of the task.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  record_activity_task_heartbeat: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RecordActivityTaskHeartbeat", payload );
    return response;
  }, 
  /**
   * Registers a new <em>activity type</em> along with its configuration settings in the specified
   * domain.
   * 
   * <p class="important">
   * A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain.
   * You cannot change any configuration settings of the type after its registration, and it must be
   * registered as a new version.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which this activity is to be registered.
   * @param {String} opt.name The name of the activity type within the domain. The specified string must not start or end with whitespace. It must not contain a 
   * @param {String} opt.version The version of the activity type. 
   * @param {String} [opt.description] A textual description of the activity type.
   * @param {String} [opt.defaultTaskStartToCloseTimeout] If set, specifies the default maximum duration that a worker can take to process tasks of this activity type. This default can be overridden when scheduling an activity task using the 
   * @param {String} [opt.defaultTaskHeartbeatTimeout] If set, specifies the default maximum time before which a worker processing a task of this type must report progress by calling 
   * @param {Object} [opt.defaultTaskList] If set, specifies the default task list to use for scheduling tasks of this activity type. This default task list is used if a task list is not provided when a task is scheduled through the 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.defaultTaskScheduleToStartTimeout] If set, specifies the default maximum duration that a task of this activity type can wait before being assigned to a worker. This default can be overridden when scheduling an activity task using the 
   * @param {String} [opt.defaultTaskScheduleToCloseTimeout] If set, specifies the default maximum duration for a task of this activity type. This default can be overridden when scheduling an activity task using the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  register_activity_type: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RegisterActivityType", payload );
    return response;
  }, 
  /**
   * Registers a new domain.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.name Name of the domain to register. The name must be unique. The specified string must not start or end with whitespace. It must not contain a 
   * @param {String} [opt.description] Textual description of the domain.
   * @param {String} opt.workflowExecutionRetentionPeriodInDays Specifies the duration-- 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  register_domain: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RegisterDomain", payload );
    return response;
  }, 
  /**
   * Registers a new <em>workflow type</em> and its configuration settings in the specified domain.
   * 
   * <p class="important">
   * If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot
   * change the configuration settings of a workflow type once it is registered and it must be
   * registered as a new version.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which to register the workflow type.
   * @param {String} opt.name The name of the workflow type. The specified string must not start or end with whitespace. It must not contain a 
   * @param {String} opt.version The version of the workflow type. 
   * @param {String} [opt.description] Textual description of the workflow type.
   * @param {String} [opt.defaultTaskStartToCloseTimeout] If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be overridden when starting a workflow execution using the 
   * @param {String} [opt.defaultExecutionStartToCloseTimeout] If set, specifies the default maximum duration for executions of this workflow type. You can override this default when starting an execution through the 
   * @param {Object} [opt.defaultTaskList] If set, specifies the default task list to use for scheduling decision tasks for executions of this workflow type. This default is used only if a task list is not provided when starting the execution through the 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.defaultChildPolicy] If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  register_workflow_type: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RegisterWorkflowType", payload );
    return response;
  }, 
  /**
   * Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow
   * execution identified by the given domain, workflowId, and runId. This logically requests the
   * cancellation of the workflow execution as a whole. It is up to the decider to take appropriate
   * actions when it receives an execution history with this event.
   * 
   * <p class="note">
   * If the runId is not specified, the <code>WorkflowExecutionCancelRequested</code> event is
   * recorded in the history of the current open workflow execution with the specified workflowId in
   * the domain.
   * </p>
   * <p class="note">
   * Because this action allows the workflow to properly clean up and gracefully close, it should be
   * used instead of <code>TerminateWorkflowExecution</code> when possible.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the workflow execution to cancel.
   * @param {String} opt.workflowId The workflowId of the workflow execution to cancel.
   * @param {String} [opt.runId] The runId of the workflow execution to cancel.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  request_cancel_workflow_execution: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RequestCancelWorkflowExecution", payload );
    return response;
  }, 
  /**
   * Used by workers to tell the service that the <code>ActivityTask</code> identified by the
   * <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be
   * optionally provided using the <code>details</code> argument.
   *  
   * These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event
   * added to the workflow history.
   * 
   * <p class="important">
   * Only use this operation if the <code>canceled</code> flag of a
   * <code>RecordActivityTaskHeartbeat</code> request returns <code>true</code> and if the activity
   * can be safely undone or abandoned.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.taskToken The 
   * @param {String} [opt.details] Optional information about the cancellation.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  respond_activity_task_canceled: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RespondActivityTaskCanceled", payload );
    return response;
  }, 
  /**
   * Used by workers to tell the service that the <code>ActivityTask</code> identified by the
   * <code>taskToken</code> completed successfully with a <code>result</code> (if provided).
   *  
   * The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow
   * history.
   * 
   * <p class="important">
   * If the requested task does not complete successfully, use
   * <code>RespondActivityTaskFailed</code> instead. If the worker finds that the task is canceled
   * through the <code>canceled</code> flag returned by <code>RecordActivityTaskHeartbeat</code>, it
   * should cancel the task, clean up and then call <code>RespondActivityTaskCanceled</code>.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.taskToken The 
   * @param {String} [opt.result] The result of the activity task. It is a free form string that is implementation specific.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  respond_activity_task_completed: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RespondActivityTaskCompleted", payload );
    return response;
  }, 
  /**
   * Used by workers to tell the service that the <code>ActivityTask</code> identified by the
   * <code>taskToken</code> has failed with <code>reason</code> (if specified).
   *  
   * The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code>
   * event added to the workflow history.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.taskToken The 
   * @param {String} [opt.reason] Description of the error that may assist in diagnostics.
   * @param {String} [opt.details] Optional detailed information about the failure.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  respond_activity_task_failed: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RespondActivityTaskFailed", payload );
    return response;
  }, 
  /**
   * Used by deciders to tell the service that the <code>DecisionTask</code> identified by the
   * <code>taskToken</code> has successfully completed. The <code>decisions</code> argument
   * specifies the list of decisions made while processing the task.
   *  
   * A <code>DecisionTaskCompleted</code> event is added to the workflow history. The
   * <code>executionContext</code> specified is attached to the event in the workflow execution
   * history.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.taskToken The 
   * @param {Object} [opt.decisions] The list of decisions (possibly empty) made by the decider while processing this decision task. See the docs for the 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} opt.decisionType Specifies the type of the decision. [Allowed values: 
   * @param {Object} [opt.scheduleActivityTaskDecisionAttributes] Provides details of the 
   * @param {Object} opt.activityType The type of the activity task to schedule. This field is required. 
   * @param {String} opt.name The name of this activity. 
   * @param {String} opt.version The version of this activity. 
   * @param {String} opt.activityId The 
   * @param {String} [opt.control] Optional data attached to the event that can be used by the decider in subsequent workflow tasks. This data is not sent to the activity.
   * @param {String} [opt.input] The input provided to the activity task.
   * @param {String} [opt.scheduleToCloseTimeout] The maximum duration for this activity task. The valid values are integers greater than or equal to 
   * @param {Object} [opt.taskList] If set, specifies the name of the task list in which to schedule the activity task. If not specified, the 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.scheduleToStartTimeout] If set, specifies the maximum duration the activity task can wait to be assigned to a worker. This overrides the default schedule-to-start timeout specified when registering the activity type using 
   * @param {String} [opt.startToCloseTimeout] If set, specifies the maximum duration a worker may take to process this activity task. This overrides the default start-to-close timeout specified when registering the activity type using 
   * @param {String} [opt.heartbeatTimeout] If set, specifies the maximum time before which a worker processing a task of this type must report progress by calling 
   * @param {Object} [opt.requestCancelActivityTaskDecisionAttributes] Provides details of the 
   * @param {String} opt.activityId The 
   * @param {Object} [opt.completeWorkflowExecutionDecisionAttributes] Provides details of the 
   * @param {String} [opt.result] The result of the workflow execution. The form of the result is implementation defined.
   * @param {Object} [opt.failWorkflowExecutionDecisionAttributes] Provides details of the 
   * @param {String} [opt.reason] A descriptive reason for the failure that may help in diagnostics.
   * @param {String} [opt.details] Optional details of the failure.
   * @param {Object} [opt.cancelWorkflowExecutionDecisionAttributes] Provides details of the 
   * @param {String} [opt.details] Optional details of the cancellation.
   * @param {Object} [opt.continueAsNewWorkflowExecutionDecisionAttributes] Provides details of the 
   * @param {String} [opt.input] The input provided to the new workflow execution.
   * @param {String} [opt.executionStartToCloseTimeout] If set, specifies the total duration for this workflow execution. This overrides the 
   * @param {Object} [opt.taskList] Represents a task list. 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.taskStartToCloseTimeout] Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the 
   * @param {String} [opt.childPolicy] If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by calling the 
   * @param {String|array} [opt.tagList] The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling 
   *       <li><code>recordMarkerDecisionAttributes</code> - <code>array</code> - Optional - Provides details of the <code>RecordMarker</code> decision. It is not set for other decision types. <ul>
   *         <li><code>markerName</code> - <code>string</code> - Required - The name of the marker. This filed is required.</li>
   *         <li><code>details</code> - <code>string</code> - Optional - Optional details of the marker.</li>
   *       <li><code>startTimerDecisionAttributes</code> - <code>array</code> - Optional - Provides details of the <code>StartTimer</code> decision. It is not set for other decision types. <ul>
   *         <li><code>timerId</code> - <code>string</code> - Required - The unique Id of the timer. This field is required. The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string "arn".</li>
   *         <li><code>control</code> - <code>string</code> - Optional - Optional data attached to the event that can be used by the decider in subsequent workflow tasks.</li>
   *         <li><code>startToFireTimeout</code> - <code>string</code> - Required - The duration to wait before firing the timer. This field is required. The duration is specified in seconds. The valid values are integers greater than or equal to 0.</li>
   *       <li><code>cancelTimerDecisionAttributes</code> - <code>array</code> - Optional - Provides details of the <code>CancelTimer</code> decision. It is not set for other decision types. <ul>
   *         <li><code>timerId</code> - <code>string</code> - Required - The unique Id of the timer to cancel. This field is required.</li>
   *       <li><code>signalExternalWorkflowExecutionDecisionAttributes</code> - <code>array</code> - Optional - Provides details of the <code>SignalExternalWorkflowExecution</code> decision. It is not set for other decision types. <ul>
   *         <li><code>workflowId</code> - <code>string</code> - Required - The <code>workflowId</code> of the workflow execution to be signaled. This field is required.</li>
   *         <li><code>runId</code> - <code>string</code> - Optional - The <code>runId</code> of the workflow execution to be signaled.</li>
   *         <li><code>signalName</code> - <code>string</code> - Required - The name of the signal.The target workflow execution will use the signal name and input to process the signal. This field is required.</li>
   *         <li><code>input</code> - <code>string</code> - Optional - Optional input to be provided with the signal.The target workflow execution will use the signal name and input to process the signal.</li>
   *         <li><code>control</code> - <code>string</code> - Optional - Optional data attached to the event that can be used by the decider in subsequent decision tasks.</li>
   *       <li><code>requestCancelExternalWorkflowExecutionDecisionAttributes</code> - <code>array</code> - Optional - Provides details of the <code>RequestCancelExternalWorkflowExecution</code> decision. It is not set for other decision types. <ul>
   *         <li><code>workflowId</code> - <code>string</code> - Required - The <code>workflowId</code> of the external workflow execution to cancel. This field is required.</li>
   *         <li><code>runId</code> - <code>string</code> - Optional - The <code>runId</code> of the external workflow execution to cancel.</li>
   *         <li><code>control</code> - <code>string</code> - Optional - Optional data attached to the event that can be used by the decider in subsequent workflow tasks.</li>
   *       <li><code>startChildWorkflowExecutionDecisionAttributes</code> - <code>array</code> - Optional - Provides details of the <code>StartChildWorkflowExecution</code> decision. It is not set for other decision types. <ul>
   *         <li><code>workflowType</code> - <code>array</code> - Required - The type of the workflow execution to be started. This field is required. <ul>
   *           <li><code>name</code> - <code>string</code> - Required - The name of the workflow type. This field is required. <p class="note">The combination of workflow type name and version must be unique with in a domain.</p></li>
   *           <li><code>version</code> - <code>string</code> - Required - The version of the workflow type. This field is required. <p class="note">The combination of workflow type name and version must be unique with in a domain.</p></li>
   *         <li><code>workflowId</code> - <code>string</code> - Required - The <code>workflowId</code> of the workflow execution. This field is required. The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string "arn".</li>
   *         <li><code>control</code> - <code>string</code> - Optional - Optional data attached to the event that can be used by the decider in subsequent workflow tasks. This data is not sent to the child workflow execution.</li>
   *         <li><code>input</code> - <code>string</code> - Optional - The input to be provided to the workflow execution.</li>
   *         <li><code>executionStartToCloseTimeout</code> - <code>string</code> - Optional - The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The valid values are integers greater than or equal to <code>0</code>. An integer value can be used to specify the duration in seconds while <code>NONE</code> can be used to specify unlimited duration. <p class="note">An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default execution start-to-close timeout was specified at registration time then a fault will be returned.</p></li>
   *         <li><code>taskList</code> - <code>array</code> - Optional - The name of the task list to be used for decision tasks of the child workflow execution. <p class="note">A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault will be returned.</p> The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string "arn". <ul>
   *           <li><code>name</code> - <code>string</code> - Required - The name of the task list.</li>
   *         <li><code>taskStartToCloseTimeout</code> - <code>string</code> - Optional - Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the <code>defaultTaskStartToCloseTimout</code> specified when registering the workflow type using <code>RegisterWorkflowType</code>. The valid values are integers greater than or equal to <code>0</code>. An integer value can be used to specify the duration in seconds while <code>NONE</code> can be used to specify unlimited duration. <p class="note">A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault will be returned.</p></li>
   *         <li><code>childPolicy</code> - <code>string</code> - Optional - If set, specifies the policy to use for the child workflow executions if the workflow execution being started is terminated by calling the <code>TerminateWorkflowExecution</code> action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using <code>RegisterWorkflowType</code>. The supported child policies are:<ul><li> <strong>TERMINATE:</strong> the child executions will be terminated.</li><li> <strong>REQUEST_CANCEL:</strong> a request to cancel will be attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</li><li> <strong>ABANDON:</strong> no action will be taken. The child executions will continue to run.</li></ul> <p class="note">A child policy for the workflow execution being started must be specified either as a default registered for its workflow type or through this field. If neither this field is set nor a default child policy was specified at registration time then a fault will be returned.</p> [Allowed values: <code>TERMINATE</code>, <code>REQUEST_CANCEL</code>, <code>ABANDON</code>]</li>
   *         <li><code>tagList</code> - <code>string|array</code> - Optional - The list of tags to associate with the child workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling <code>ListOpenWorkflowExecutions</code> or <code>ListClosedWorkflowExecutions</code> and specifying a <code>TagFilter</code>. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>executionContext</code> - <code>string</code> - Optional - User defined context to add to workflow execution.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  respond_decision_task_completed: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RespondDecisionTaskCompleted", payload );
    return response;
  }, 
  /**
   * Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and
   * creates a decision task for the workflow execution identified by the given domain, workflowId
   * and runId. The event is recorded with the specified user defined signalName and input (if
   * provided).
   * 
   * <p class="note">
   * If a runId is not specified, then the <code>WorkflowExecutionSignaled</code> event is recorded
   * in the history of the current open workflow with the matching workflowId in the domain.
   * </p>
   * <p class="note">
   * If the specified workflow execution is not open, this method fails with
   * <code>UnknownResource</code>.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain containing the workflow execution to signal.
   * @param {String} opt.workflowId The workflowId of the workflow execution to signal.
   * @param {String} [opt.runId] The runId of the workflow execution to signal.
   * @param {String} opt.signalName The name of the signal. This name must be meaningful to the target workflow.
   * @param {String} [opt.input] Data to attach to the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  signal_workflow_execution: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SignalWorkflowExecution", payload );
    return response;
  }, 
  /**
   * Starts an execution of the workflow type in the specified domain using the provided
   * <code>workflowId</code> and input data.
   *  
   * This action returns the newly started workflow execution.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The name of the domain in which the workflow execution is created.
   * @param {String} opt.workflowId The user defined identifier associated with the workflow execution. You can use this to associate a custom identifier with the workflow execution. You may specify the same identifier if a workflow execution is logically a 
   * @param {Object} opt.workflowType The type of the workflow to start. 
   * @param {String} opt.name The name of the workflow type. This field is required. 
   * @param {String} opt.version The version of the workflow type. This field is required. 
   * @param {Object} [opt.taskList] The task list to use for the decision tasks generated for this workflow execution. This overrides the 
   * @param {String} opt.name The name of the task list.
   * @param {String} [opt.input] The input for the workflow execution. This is a free form string which should be meaningful to the workflow you are starting. This 
   * @param {String} [opt.executionStartToCloseTimeout] The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in seconds. The valid values are integers greater than or equal to 0. Exceeding this limit will cause the workflow execution to time out. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this timeout; there is a one-year max limit on the time that a workflow execution can run. 
   * @param {String|array} [opt.tagList] The list of tags to associate with the workflow execution. You can specify a maximum of 5 tags. You can list workflow executions with a specific tag by calling 
   * @param {String} [opt.taskStartToCloseTimeout] Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the 
   * @param {String} [opt.childPolicy] If set, specifies the policy to use for the child workflow executions of this workflow execution if it is terminated, by calling the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  start_workflow_execution: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("StartWorkflowExecution", payload );
    return response;
  }, 
  /**
   * Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow
   * execution identified by the given domain, runId, and workflowId. The child policy, registered
   * with the workflow type or specified when starting this execution, is applied to any open child
   * workflow executions of this workflow execution.
   * 
   * <p class="important">
   * If the identified workflow execution was in progress, it is terminated immediately.
   * </p>
   * <p class="note">
   * If a runId is not specified, then the <code>WorkflowExecutionTerminated</code> event is
   * recorded in the history of the current open workflow with the matching workflowId in the
   * domain.
   * </p>
   * <p class="note">
   * You should consider using <code>RequestCancelWorkflowExecution</code> action instead because it
   * allows the workflow to gracefully close while <code>TerminateWorkflowExecution</code> does not.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.domain The domain of the workflow execution to terminate.
   * @param {String} opt.workflowId The workflowId of the workflow execution to terminate.
   * @param {String} [opt.runId] The runId of the workflow execution to terminate.
   * @param {String} [opt.reason] An optional descriptive reason for terminating the workflow execution.
   * @param {String} [opt.details] Optional details for terminating the workflow execution.
   * @param {String} [opt.childPolicy] If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution. The supported child policies are:
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  terminate_workflow_execution: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("TerminateWorkflowExecution", payload );
    return response;
  }
}
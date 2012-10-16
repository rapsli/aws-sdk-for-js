/**
 * @class AmazonCloudFormationClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonCloudFormation(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudFormation.prototype = {
  service:'cloudformation',
  api_version:'2010-05-15',
  auth_class: new AuthV4Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonCloudFormation
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Creates a stack as specified in the template. After the call completes successfully, the stack
   * creation starts. You can check the status of the stack via the <code>DescribeStacks</code> API.
   * 
   * <p class="note">
   * Currently, the limit for stacks is 20 stacks per account per region.
   * </p>
   *
   * @param {String} [stack_name] The name associated with the stack. The name must be unique within your AWS account. <p class="note">Must contain only alphanumeric characters (case sensitive) and start with an alpha character. Maximum length of the name is 255 characters.</p>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.TemplateBody] Structure containing the template body. (For more information, go to the 
   * @param {String} [opt.TemplateURL] Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the 
   * @param {Object} [opt.Parameters] A list of 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.ParameterKey] The key associated with the parameter.
   * @param {String} [opt.ParameterValue] The value associated with the parameter.
   * @param {Boolean} [opt.DisableRollback] Set to 
   * @param {Number} [opt.TimeoutInMinutes] The amount of time that can pass before the stack status becomes CREATE_FAILED; if 
   * @param {String|array} [opt.NotificationARNs] The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the 
   * @param {String|array} [opt.Capabilities] The list of capabilities that you want to allow in the stack. If your template contains IAM resources, you must specify the CAPABILITY_IAM value for this parameter; otherwise, this action returns an InsufficientCapabilities error. IAM resources are the following: 
   * @param {String} [opt.OnFailure] Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either 
   * @param {Object} [opt.Tags] A set of user-defined 
   * @param {Object} [opt.x] This represents a simple array index. 
   *       <li><code>Value</code> - <code>string</code> - Optional - <em>Required</em>. A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_stack: function(stack_name,opt){
    var payload = {};
    payload.stack_name = stack_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateStack", payload );
    return response;
  }, 
  /**
   * Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted
   * stacks do not show up in the <code>DescribeStacks</code> API if the deletion has been completed
   * successfully.
   *
   * @param {String} [stack_name] The name or the unique identifier associated with the stack.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_stack: function(stack_name,opt){
    var payload = {};
    payload.stack_name = stack_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteStack", payload );
    return response;
  }, 
  /**
   * Returns all the stack related events for the AWS account. If <code>StackName</code> is
   * specified, returns events related to all the stacks with the given name. If
   * <code>StackName</code> is not specified, returns all the events for the account. For more
   * information about a stack's event history, go to the <a href=
   * "http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User
   * Guide</a>.
   * 
   * <p class="note">
   * Events are returned, even if the stack never existed or has been successfully deleted.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.StackName] The name or the unique identifier associated with the stack. Default: There is no default value.
   * @param {String} [opt.NextToken] String that identifies the start of the next list of events, if there is one. Default: There is no default value.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_stack_events: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeStackEvents", payload );
    return response;
  }, 
  /**
   * Returns a description of the specified resource in the specified stack.
   *  
   * For deleted stacks, DescribeStackResource returns resource information for up to 90 days after
   * the stack has been deleted.
   *
   * @param {String} [stack_name] The name or the unique identifier associated with the stack. Default: There is no default value.   * @param {String} [logical_resource_id] The logical name of the resource as specified in the template. Default: There is no default value.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_stack_resource: function(stack_name,logical_resource_id,opt){
    var payload = {};
    payload.stack_name = stack_name;
    payload.logical_resource_id = logical_resource_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeStackResource", payload );
    return response;
  }, 
  /**
   * Returns AWS resource descriptions for running and deleted stacks. If <code>StackName</code> is
   * specified, all the associated resources that are part of the stack are returned. If
   * <code>PhysicalResourceId</code> is specified, all the associated resources of the stack the
   * resource belongs to are returned.
   *  
   * For deleted stacks, DescribeStackResources returns resource information for up to 90 days after
   * the stack has been deleted.
   *  
   * If you do not provide either a stack or resource id, information for all stacks and resources
   * will be returned, up to a limit of 100 records.
   * 
   * <p class="note"></p> 
   * To list more than 100 resources use <code>ListStackResources</code> instead.
   *  
   * You can specify either <code>StackName</code> or <code>PhysicalResourceId.</code>, but not
   * both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned
   * result. For more information about resources, the <code>LogicalResourceId</code> and
   * <code>PhysicalResourceId</code>, go to the <a href=
   * "http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User
   * Guide</a>.
   * 
   * <p class="note">
   * A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and
   * <code>PhysicalResourceId</code> in the same request.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.StackName] The name or the unique identifier associated with the stack. Default: There is no default value.
   * @param {String} [opt.LogicalResourceId] The logical name of the resource as specified in the template. Default: There is no default value.
   * @param {String} [opt.PhysicalResourceId] The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation. For example, for an Amazon Elastic Compute Cloud (EC2) instance, 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_stack_resources: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeStackResources", payload );
    return response;
  }, 
  /**
   * Returns the description for the specified stack; if no stack name was specified, then it
   * returns the description for all the stacks created.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.StackName] The name or the unique identifier associated with the stack. Default: There is no default value.
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_stacks: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeStacks", payload );
    return response;
  }, 
  /**
   * Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly
   * Calculator URL with a query string that describes the resources required to run the template.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.TemplateBody] Structure containing the template body. (For more information, go to the 
   * @param {String} [opt.TemplateURL] Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the 
   * @param {Object} [opt.Parameters] A list of 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.ParameterKey] The key associated with the parameter.
   * @param {String} [opt.ParameterValue] The value associated with the parameter.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  estimate_template_cost: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("EstimateTemplateCost", payload );
    return response;
  }, 
  /**
   * Returns the template body for a specified stack name. You can get the template for running or
   * deleted stacks.
   *  
   * For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been
   * deleted.
   * 
   * <p class="note">
   * If the template does not exist, a <code>ValidationError</code> is returned.
   * </p>
   *
   * @param {String} [stack_name] The name or the unique identifier associated with the stack.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_template: function(stack_name,opt){
    var payload = {};
    payload.stack_name = stack_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetTemplate", payload );
    return response;
  }, 
  /**
   * Returns descriptions of all resources of the specified stack.
   *  
   * For deleted stacks, ListStackResources returns resource information for up to 90 days after the
   * stack has been deleted.
   *
   * @param {String} [stack_name] The name or the unique identifier associated with the stack. Default: There is no default value.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.NextToken] String that identifies the start of the next list of stack resource summaries, if there is one. Default: There is no default value.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_stack_resources: function(stack_name,opt){
    var payload = {};
    payload.stack_name = stack_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListStackResources", payload );
    return response;
  }, 
  /**
   * Returns the summary information for stacks whose status matches the specified
   * StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days
   * after the stack is deleted. If no StackStatusFilter is specified, summary information for all
   * stacks is returned (including existing stacks and stacks that have been deleted).
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.NextToken] String that identifies the start of the next list of stacks, if there is one. Default: There is no default value.
   * @param {String|array} [opt.StackStatusFilter] Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_stacks: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListStacks", payload );
    return response;
  }, 
  /**
   * Updates a stack as specified in the template. After the call completes successfully, the stack
   * update starts. You can check the status of the stack via the <code>DescribeStacks</code>
   * action.
   *  
   * To get a copy of the template for an existing stack, you can use the <code>GetTemplate</code>
   * action.
   *  
   * Tags that were associated with this stack during creation time will still be associated with
   * the stack after an <code>UpdateStack</code> operation.
   *  
   * For more information about creating an update template, updating a stack, and monitoring the
   * progress of the update, see <a href=
   * "http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">
   * Updating a Stack</a>.
   *
   * @param {String} [stack_name] The name or stack ID of the stack to update. <p class="note">Must contain only alphanumeric characters (case sensitive) and start with an alpha character. Maximum length of the name is 255 characters.</p>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.TemplateBody] Structure containing the template body. (For more information, go to the 
   * @param {String} [opt.TemplateURL] Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the 
   * @param {Object} [opt.Parameters] A list of 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.ParameterKey] The key associated with the parameter.
   * @param {String} [opt.ParameterValue] The value associated with the parameter.
   * @param {String|array} [opt.Capabilities] The list of capabilities that you want to allow in the stack. If your stack contains IAM resources, you must specify the CAPABILITY_IAM value for this parameter; otherwise, this action returns an InsufficientCapabilities error. IAM resources are the following: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_stack: function(stack_name,opt){
    var payload = {};
    payload.stack_name = stack_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateStack", payload );
    return response;
  }, 
  /**
   * Validates a specified template.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.TemplateBody] String containing the template body. (For more information, go to the 
   * @param {String} [opt.TemplateURL] Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  validate_template: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ValidateTemplate", payload );
    return response;
  }
}
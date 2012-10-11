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
	 * @param {String} [stack_name] The name associated with the stack. The name must be unique within your AWS account. <p class="note">Must contain only alphanumeric characters (case sensitive) and start with an alpha character. Maximum length of the name is 255 characters.</p>
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>TemplateBody</code> - <code>string</code> - Optional - Structure containing the template body. (For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>.) Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>TemplateURL</code> - <code>string</code> - Optional - Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>. Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>Parameters</code> - <code>array</code> - Optional - A list of <code>Parameter</code> structures that specify input parameters for the stack. <ul>
	 * 		<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 			<li><code>ParameterKey</code> - <code>string</code> - Optional - The key associated with the parameter.</li>
	 * 			<li><code>ParameterValue</code> - <code>string</code> - Optional - The value associated with the parameter.</li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * 	<li><code>DisableRollback</code> - <code>boolean</code> - Optional - Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not both. Default: <code>false</code></li>
	 * 	<li><code>TimeoutInMinutes</code> - <code>integer</code> - Optional - The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will be rolled back.</li>
	 * 	<li><code>NotificationARNs</code> - <code>string|array</code> - Optional - The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the <a href="http://console.aws.amazon.com/sns">SNS console</a> or your Command Line Interface (CLI). Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	<li><code>Capabilities</code> - <code>string|array</code> - Optional - The list of capabilities that you want to allow in the stack. If your template contains IAM resources, you must specify the CAPABILITY_IAM value for this parameter; otherwise, this action returns an InsufficientCapabilities error. IAM resources are the following: <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">AWS::IAM::AccessKey</a>, <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>, <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">AWS::IAM::Policy</a>, <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">AWS::IAM::User</a>, and <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a>. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	<li><code>OnFailure</code> - <code>string</code> - Optional - Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either <code>OnFailure</code> or <code>DisableRollback</code>, but not both. Default: <code>ROLLBACK</code> [Allowed values: <code>DO_NOTHING</code>, <code>ROLLBACK</code>, <code>DELETE</code>]</li>
	 * 	<li><code>Tags</code> - <code>array</code> - Optional - A set of user-defined <code>Tags</code> to associate with this stack, represented by key/value pairs. Tags defined for the stack are propogated to EC2 resources that are created as part of the stack. A maximum number of 10 tags can be specified. <ul>
	 * 		<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 			<li><code>Key</code> - <code>string</code> - Optional - <em>Required</em>. A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the reserved prefix: <code>aws:</code>.</li>
	 * 			<li><code>Value</code> - <code>string</code> - Optional - <em>Required</em>. A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.</li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {String} [stack_name] The name or the unique identifier associated with the stack.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>StackName</code> - <code>string</code> - Optional - The name or the unique identifier associated with the stack. Default: There is no default value.</li>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - String that identifies the start of the next list of events, if there is one. Default: There is no default value.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {String} [stack_name] The name or the unique identifier associated with the stack. Default: There is no default value.
	 * @param {String} [logical_resource_id] The logical name of the resource as specified in the template. Default: There is no default value.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>StackName</code> - <code>string</code> - Optional - The name or the unique identifier associated with the stack. Default: There is no default value.</li>
	 * 	<li><code>LogicalResourceId</code> - <code>string</code> - Optional - The logical name of the resource as specified in the template. Default: There is no default value.</li>
	 * 	<li><code>PhysicalResourceId</code> - <code>string</code> - Optional - The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation. For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack. Default: There is no default value.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>StackName</code> - <code>string</code> - Optional - The name or the unique identifier associated with the stack. Default: There is no default value.</li>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - </li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>TemplateBody</code> - <code>string</code> - Optional - Structure containing the template body. (For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>.) Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>TemplateURL</code> - <code>string</code> - Optional - Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>. Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>Parameters</code> - <code>array</code> - Optional - A list of <code>Parameter</code> structures that specify input parameters. <ul>
	 * 		<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 			<li><code>ParameterKey</code> - <code>string</code> - Optional - The key associated with the parameter.</li>
	 * 			<li><code>ParameterValue</code> - <code>string</code> - Optional - The value associated with the parameter.</li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {String} [stack_name] The name or the unique identifier associated with the stack.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {String} [stack_name] The name or the unique identifier associated with the stack. Default: There is no default value.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - String that identifies the start of the next list of stack resource summaries, if there is one. Default: There is no default value.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - String that identifies the start of the next list of stacks, if there is one. Default: There is no default value.</li>
	 * 	<li><code>StackStatusFilter</code> - <code>string|array</code> - Optional - Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <code>Stack</code> data type. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {String} [stack_name] The name or stack ID of the stack to update. <p class="note">Must contain only alphanumeric characters (case sensitive) and start with an alpha character. Maximum length of the name is 255 characters.</p>
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>TemplateBody</code> - <code>string</code> - Optional - Structure containing the template body. (For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>.) Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>TemplateURL</code> - <code>string</code> - Optional - Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>. Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>Parameters</code> - <code>array</code> - Optional - A list of <code>Parameter</code> structures that specify input parameters for the stack. <ul>
	 * 		<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 			<li><code>ParameterKey</code> - <code>string</code> - Optional - The key associated with the parameter.</li>
	 * 			<li><code>ParameterValue</code> - <code>string</code> - Optional - The value associated with the parameter.</li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * 	<li><code>Capabilities</code> - <code>string|array</code> - Optional - The list of capabilities that you want to allow in the stack. If your stack contains IAM resources, you must specify the CAPABILITY_IAM value for this parameter; otherwise, this action returns an InsufficientCapabilities error. IAM resources are the following: <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">AWS::IAM::AccessKey</a>, <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>, <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">AWS::IAM::Policy</a>, <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">AWS::IAM::User</a>, and <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a>. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
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
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>TemplateBody</code> - <code>string</code> - Optional - String containing the template body. (For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>.) Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>TemplateURL</code> - <code>string</code> - Optional - Location of file containing the template body. The URL must point to a template located in an S3 bucket in the same region as the stack. For more information, go to the <a href="http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide">AWS CloudFormation User Guide</a>. Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  validate_template: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ValidateTemplate", payload );
    return response;
  }
}
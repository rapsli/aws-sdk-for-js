/**
 * @class AmazonEMRClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
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
 
  /**
   * AddInstanceGroups adds an instance group to a running cluster.
   *
   * @param array $instance_groups (Required) Instance Groups to add. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Name</code> - <code>string</code> - Optional - Friendly name given to the instance group. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Market</code> - <code>string</code> - Optional - Market type of the Amazon EC2 instances used to create a cluster node. [Allowed values: <code>ON_DEMAND</code>, <code>SPOT</code>]</li>
   *     <li><code>InstanceRole</code> - <code>string</code> - Required - The role of the instance group in the cluster. [Allowed values: <code>MASTER</code>, <code>CORE</code>, <code>TASK</code>]</li>
   *     <li><code>BidPrice</code> - <code>string</code> - Optional - Bid price for each Amazon EC2 instance in the instance group when launching nodes as Spot Instances, expressed in USD. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>InstanceType</code> - <code>string</code> - Required - The Amazon EC2 instance type for all instances in the instance group. [Constraints: The value must be between 1 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>InstanceCount</code> - <code>integer</code> - Required - Target number of instances for the instance group.</li>
   *   </ul></li>
   * </ul>
   * @param {String} job_flow_id (Required) Job flow in which to add the instance groups. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  add_instance_groups: function(instance_groups,job_flow_id,opt){
    var param = {};
    param.instance_groups = instance_groups;
    param.job_flow_id = job_flow_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AddInstanceGroups", param );
    return resposne;
  }, 
  /**
   * AddJobFlowSteps adds new steps to a running job flow. A maximum of 256 steps are allowed in
   * each job flow.
   *  
   * If your job flow is long-running (such as a Hive data warehouse) or complex, you may require
   * more than 256 steps to process your data. You can bypass the 256-step limitation in various
   * ways, including using the SSH shell to connect to the master node and submitting queries
   * directly to the software running on the master node, such as Hive and Hadoop. For more
   * information on how to do this, go to <a href=
   * "http://docs.amazonwebservices.com/ElasticMapReduce/latest/DeveloperGuide/AddMoreThan256Steps.html">
   * Add More than 256 Steps to a Job Flow</a> in the <em>Amazon Elastic MapReduce Developer's
   * Guide</em>.
   *  
   * A step specifies the location of a JAR file stored either on the master node of the job flow or
   * in Amazon S3. Each step is performed by the main function of the main class of the JAR file.
   * The main class can be specified either in the manifest of the JAR or by using the MainFunction
   * parameter of the step.
   *  
   * Elastic MapReduce executes each step in the order listed. For a step to be considered complete,
   * the main function must exit with a zero exit code and all Hadoop jobs started while the step
   * was running must have completed and run successfully.
   *  
   * You can only add steps to a job flow that is in one of the following states: STARTING,
   * BOOTSTRAPPING, RUNNING, or WAITING.
   *
   * @param {String} job_flow_id (Required) A string that uniquely identifies the job flow. This identifier is returned by <code>RunJobFlow</code> and can also be obtained from <code>DescribeJobFlows</code>. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param array $steps (Required) A list of <code>StepConfig</code> to be executed by the job flow. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Name</code> - <code>string</code> - Required - The name of the job flow step. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>ActionOnFailure</code> - <code>string</code> - Optional - Specifies the action to take if the job flow step fails. [Allowed values: <code>TERMINATE_JOB_FLOW</code>, <code>CANCEL_AND_WAIT</code>, <code>CONTINUE</code>]</li>
   *     <li><code>HadoopJarStep</code> - <code>array</code> - Required - Specifies the JAR file used for the job flow step. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>Properties</code> - <code>array</code> - Optional - A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function. <ul>
   *           <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *             <li><code>Key</code> - <code>string</code> - Optional - The unique identifier of a key value pair. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *             <li><code>Value</code> - <code>string</code> - Optional - The value part of the identified key. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           </ul></li>
   *         </ul></li>
   *         <li><code>Jar</code> - <code>string</code> - Required - A path to a JAR file run during the step. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>MainClass</code> - <code>string</code> - Optional - The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>Args</code> - <code>string|array</code> - Optional - A list of command line arguments passed to the JAR file's main function when executed. Pass a string for a single value, or an indexed array for multiple values.</li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  add_job_flow_steps: function(job_flow_id,steps,opt){
    var param = {};
    param.job_flow_id = job_flow_id;
    param.steps = steps;

    param = this.marge_param(param,opt);
    var response = this.request(, "AddJobFlowSteps", param );
    return resposne;
  }, 
  /**
   * DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The
   * parameters can include a list of job flow IDs, job flow states, and restrictions on job flow
   * creation date and time.
   *  
   * Regardless of supplied parameters, only job flows created within the last two months are
   * returned.
   *  
   * If no parameters are supplied, then job flows matching either of the following criteria are
   * returned:
   * 
   * <ul>
   *   <li>Job flows created and completed in the last two weeks</li>
   *   <li>Job flows created within the last two months that are in one of the following states:
   * <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code></li>
   * </ul>
   * 
   * Amazon Elastic MapReduce can return a maximum of 512 job flow descriptions.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CreatedAfter</code> - <code>string</code> - Optional - Return only job flows created after this date and time. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>CreatedBefore</code> - <code>string</code> - Optional - Return only job flows created before this date and time. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>JobFlowIds</code> - <code>string|array</code> - Optional - Return only job flows whose job flow ID is contained in this list. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>JobFlowStates</code> - <code>string|array</code> - Optional - Return only job flows whose state is contained in this list. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_job_flows: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeJobFlows", param );
    return resposne;
  }, 
  /**
   * ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance
   * group. The input parameters include the new target instance count for the group and the
   * instance group ID. The call will either succeed or fail atomically.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceGroups</code> - <code>array</code> - Optional - Instance groups to change. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>InstanceGroupId</code> - <code>string</code> - Required - Unique ID of the instance group to expand or shrink. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>InstanceCount</code> - <code>integer</code> - Required - Target size for the instance group.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_instance_groups: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ModifyInstanceGroups", param );
    return resposne;
  }, 
  /**
   * RunJobFlow creates and starts running a new job flow. The job flow will run the steps
   * specified. Once the job flow completes, the cluster is stopped and the HDFS partition is lost.
   * To prevent loss of data, configure the last step of the job flow to store results in Amazon S3.
   * If the <code>JobFlowInstancesConfig</code> <code>KeepJobFlowAliveWhenNoSteps</code> parameter
   * is set to <code>TRUE</code>, the job flow will transition to the WAITING state rather than
   * shutting down once the steps have completed.
   *  
   * For additional protection, you can set the <code>JobFlowInstancesConfig</code>
   * <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the job flow and
   * prevent it from being terminated by API call, user intervention, or in the event of a job flow
   * error.
   *  
   * A maximum of 256 steps are allowed in each job flow.
   *  
   * If your job flow is long-running (such as a Hive data warehouse) or complex, you may require
   * more than 256 steps to process your data. You can bypass the 256-step limitation in various
   * ways, including using the SSH shell to connect to the master node and submitting queries
   * directly to the software running on the master node, such as Hive and Hadoop. For more
   * information on how to do this, go to <a href=
   * "http://docs.amazonwebservices.com/ElasticMapReduce/latest/DeveloperGuide/AddMoreThan256Steps.html">
   * Add More than 256 Steps to a Job Flow</a> in the <em>Amazon Elastic MapReduce Developer's
   * Guide</em>.
   *  
   * For long running job flows, we recommend that you periodically store your results.
   *
   * @param {String} name (Required) The name of the job flow. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param array $instances (Required) A specification of the number and type of Amazon EC2 instances on which to run the job flow. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>MasterInstanceType</code> - <code>string</code> - Optional - The EC2 instance type of the master node. [Constraints: The value must be between 1 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>SlaveInstanceType</code> - <code>string</code> - Optional - The EC2 instance type of the slave nodes. [Constraints: The value must be between 1 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>InstanceCount</code> - <code>integer</code> - Optional - The number of Amazon EC2 instances used to execute the job flow.</li>
   *     <li><code>InstanceGroups</code> - <code>array</code> - Optional - Configuration for the job flow's instance groups. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>Name</code> - <code>string</code> - Optional - Friendly name given to the instance group. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>Market</code> - <code>string</code> - Optional - Market type of the Amazon EC2 instances used to create a cluster node. [Allowed values: <code>ON_DEMAND</code>, <code>SPOT</code>]</li>
   *         <li><code>InstanceRole</code> - <code>string</code> - Required - The role of the instance group in the cluster. [Allowed values: <code>MASTER</code>, <code>CORE</code>, <code>TASK</code>]</li>
   *         <li><code>BidPrice</code> - <code>string</code> - Optional - Bid price for each Amazon EC2 instance in the instance group when launching nodes as Spot Instances, expressed in USD. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>InstanceType</code> - <code>string</code> - Required - The Amazon EC2 instance type for all instances in the instance group. [Constraints: The value must be between 1 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>InstanceCount</code> - <code>integer</code> - Required - Target number of instances for the instance group.</li>
   *       </ul></li>
   *     </ul></li>
   *     <li><code>Ec2KeyName</code> - <code>string</code> - Optional - Specifies the name of the Amazon EC2 key pair that can be used to ssh to the master node as the user called "hadoop." [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Placement</code> - <code>array</code> - Optional - Specifies the Availability Zone the job flow will run in. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>AvailabilityZone</code> - <code>string</code> - Required - The Amazon EC2 Availability Zone for the job flow. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       </ul></li>
   *     </ul></li>
   *     <li><code>KeepJobFlowAliveWhenNoSteps</code> - <code>boolean</code> - Optional - Specifies whether the job flow should terminate after completing all steps.</li>
   *     <li><code>TerminationProtected</code> - <code>boolean</code> - Optional - Specifies whether to lock the job flow to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job flow error.</li>
   *     <li><code>HadoopVersion</code> - <code>string</code> - Optional - Specifies the Hadoop version for the job flow. Valid inputs are "0.18", "0.20", or "0.20.205". If you do not set this value, the default of 0.18 is used, unless the AmiVersion parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Ec2SubnetId</code> - <code>string</code> - Optional - To launch the job flow in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the job flow to launch. If you do not specify this value, the job flow is launched in the normal Amazon Web Services cloud, outside of an Amazon VPC. Amazon VPC currently does not support cluster compute quadruple extra large (cc1.4xlarge) instances. Thus you cannot specify the cc1.4xlarge instance type for nodes of a job flow launched in a Amazon VPC. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>LogUri</code> - <code>string</code> - Optional - Specifies the location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>AdditionalInfo</code> - <code>string</code> - Optional - A JSON string for selecting additional features. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>AmiVersion</code> - <code>string</code> - Optional - The version of the Amazon Machine Image (AMI) to use when launching Amazon EC2 instances in the job flow. The following values ane valid:<ul><li>"latest" (latest AMI version; currently AMI 2.0, Hadoop 0.20.205)</li><li>"2.0" (AMI 2.0, Hadoop 0.20.205)</li><li>"1.0" (AMI 1.0, Hadoop 0.18)</li></ul>If this value is not specified, the job flow uses the default of (AMI 1.0, Hadoop 0.18). If the AMI supports multiple versions of Hadoop (for example, AMI 1.0 supports both Hadoop 0.18 and 0.20) you can use the <code>JobFlowInstancesConfig</code> <code>HadoopVersion</code> parameter to modify the version of Hadoop from the defaults shown above. For details about the AMI versions currently supported by Amazon ElasticMapReduce, go to <a href="http://docs.amazonwebservices.com/ElasticMapReduce/latest/DeveloperGuide/EnvironmentConfig_AMIVersion.html#ami-versions-supported">AMI Versions Supported in Elastic MapReduce</a> in the <em>Amazon Elastic MapReduce Developer's Guide.</em> [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>Steps</code> - <code>array</code> - Optional - A list of steps to be executed by the job flow. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Required - The name of the job flow step. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>ActionOnFailure</code> - <code>string</code> - Optional - Specifies the action to take if the job flow step fails. [Allowed values: <code>TERMINATE_JOB_FLOW</code>, <code>CANCEL_AND_WAIT</code>, <code>CONTINUE</code>]</li>
   *       <li><code>HadoopJarStep</code> - <code>array</code> - Required - Specifies the JAR file used for the job flow step. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>Properties</code> - <code>array</code> - Optional - A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function. <ul>
   *             <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *               <li><code>Key</code> - <code>string</code> - Optional - The unique identifier of a key value pair. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *               <li><code>Value</code> - <code>string</code> - Optional - The value part of the identified key. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *             </ul></li>
   *           </ul></li>
   *           <li><code>Jar</code> - <code>string</code> - Required - A path to a JAR file run during the step. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>MainClass</code> - <code>string</code> - Optional - The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>Args</code> - <code>string|array</code> - Optional - A list of command line arguments passed to the JAR file's main function when executed. Pass a string for a single value, or an indexed array for multiple values.</li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>BootstrapActions</code> - <code>array</code> - Optional - A list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Required - The name of the bootstrap action. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>ScriptBootstrapAction</code> - <code>array</code> - Required - The script run by the bootstrap action. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>Path</code> - <code>string</code> - Required - Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>Args</code> - <code>string|array</code> - Optional - A list of command line arguments to pass to the bootstrap action script. Pass a string for a single value, or an indexed array for multiple values.</li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>SupportedProducts</code> - <code>string|array</code> - Optional - A list of strings used by third-party software to tag the job flow. Currently the only valid value is "karmasphere-enterprise-utility", which tags the job flow for management by <a href="http://aws.amazon.com/elasticmapreduce/karmasphere/">Karmasphere.</a> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  run_job_flow: function(name,instances,opt){
    var param = {};
    param.name = name;
    param.instances = instances;

    param = this.marge_param(param,opt);
    var response = this.request(, "RunJobFlow", param );
    return resposne;
  }, 
  /**
   * SetTerminationProtection locks a job flow so the Amazon EC2 instances in the cluster cannot be
   * terminated by user intervention, an API call, or in the event of a job-flow error. The cluster
   * still terminates upon successful completion of the job flow. Calling SetTerminationProtection
   * on a job flow is analogous to calling the Amazon EC2 DisableAPITermination API on all of the
   * EC2 instances in a cluster.
   *  
   * SetTerminationProtection is used to prevent accidental termination of a job flow and to ensure
   * that in the event of an error, the instances will persist so you can recover any data stored in
   * their ephemeral instance storage.
   *  
   * To terminate a job flow that has been locked by setting SetTerminationProtection to
   * <code>true</code>, you must first unlock the job flow by a subsequent call to
   * SetTerminationProtection in which you set the value to <code>false</code>.
   *  
   * For more information, go to <a href=
   * "http://docs.amazonwebservices.com/ElasticMapReduce/latest/DeveloperGuide/UsingEMR_TerminationProtection.html">
   * Protecting a Job Flow from Termination</a> in the <em>Amazon Elastic MapReduce Developer's
   * Guide.</em>
   *
   * @param string|array $job_flow_ids (Required) A list of strings that uniquely identify the job flows to protect. This identifier is returned by <code>RunJobFlow</code> and can also be obtained from <code>DescribeJobFlows</code>. Pass a string for a single value, or an indexed array for multiple values.
   * @param boolean $termination_protected (Required) A Boolean that indicates whether to protect the job flow and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_termination_protection: function(job_flow_ids,termination_protected,opt){
    var param = {};
    param.job_flow_ids = job_flow_ids;
    param.termination_protected = termination_protected;

    param = this.marge_param(param,opt);
    var response = this.request(, "SetTerminationProtection", param );
    return resposne;
  }, 
  /**
   * TerminateJobFlows shuts a list of job flows down. When a job flow is shut down, any step not
   * yet completed is canceled and the EC2 instances on which the job flow is running are stopped.
   * Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the
   * job flow was created.
   *
   * @param string|array $job_flow_ids (Required) A list of job flows to be shutdown. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  terminate_job_flows: function(job_flow_ids,opt){
    var param = {};
    param.job_flow_ids = job_flow_ids;

    param = this.marge_param(param,opt);
    var response = this.request(, "TerminateJobFlows", param );
    return resposne;
  }
}
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
  api_version:'2009-03-31',
  auth_class: new AuthV2Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonEMR
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * AddInstanceGroups adds an instance group to a running cluster.
   *
   * @param {Object} [instance_groups] Instance Groups to add. <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Name</code> - <code>string</code> - Optional - Friendly name given to the instance group. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Market</code> - <code>string</code> - Optional - Market type of the Amazon EC2 instances used to create a cluster node. [Allowed values: <code>ON_DEMAND</code>, <code>SPOT</code>]</li>
   *     <li><code>InstanceRole</code> - <code>string</code> - Required - The role of the instance group in the cluster. [Allowed values: <code>MASTER</code>, <code>CORE</code>, <code>TASK</code>]</li>
   *     <li><code>BidPrice</code> - <code>string</code> - Optional - Bid price for each Amazon EC2 instance in the instance group when launching nodes as Spot Instances, expressed in USD. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>InstanceType</code> - <code>string</code> - Required - The Amazon EC2 instance type for all instances in the instance group. [Constraints: The value must be between 1 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>InstanceCount</code> - <code>integer</code> - Required - Target number of instances for the instance group.</li>
   * </ul>
   * @param {String} [job_flow_id] Job flow in which to add the instance groups. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  add_instance_groups: function(instance_groups,job_flow_id,opt){
    var payload = {};
    payload.instance_groups = instance_groups;
    payload.job_flow_id = job_flow_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddInstanceGroups", payload );
    return response;
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
   * @param {String} [job_flow_id] A string that uniquely identifies the job flow. This identifier is returned by <code>RunJobFlow</code> and can also be obtained from <code>DescribeJobFlows</code>. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]   * @param {Object} [steps] A list of <code>StepConfig</code> to be executed by the job flow. <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Name</code> - <code>string</code> - Required - The name of the job flow step. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>ActionOnFailure</code> - <code>string</code> - Optional - Specifies the action to take if the job flow step fails. [Allowed values: <code>TERMINATE_JOB_FLOW</code>, <code>CANCEL_AND_WAIT</code>, <code>CONTINUE</code>]</li>
   *     <li><code>HadoopJarStep</code> - <code>array</code> - Required - Specifies the JAR file used for the job flow step. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>Properties</code> - <code>array</code> - Optional - A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function. <ul>
   *           <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *             <li><code>Key</code> - <code>string</code> - Optional - The unique identifier of a key value pair. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *             <li><code>Value</code> - <code>string</code> - Optional - The value part of the identified key. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>Jar</code> - <code>string</code> - Required - A path to a JAR file run during the step. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>MainClass</code> - <code>string</code> - Optional - The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *         <li><code>Args</code> - <code>string|array</code> - Optional - A list of command line arguments passed to the JAR file's main function when executed. Pass a string for a single value, or an indexed array for multiple values.</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  add_job_flow_steps: function(job_flow_id,steps,opt){
    var payload = {};
    payload.job_flow_id = job_flow_id;
    payload.steps = steps;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddJobFlowSteps", payload );
    return response;
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
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.CreatedAfter] Return only job flows created after this date and time. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.CreatedBefore] Return only job flows created before this date and time. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String|array} [opt.JobFlowIds] Return only job flows whose job flow ID is contained in this list. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.JobFlowStates] Return only job flows whose state is contained in this list. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_job_flows: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeJobFlows", payload );
    return response;
  }, 
  /**
   * ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance
   * group. The input parameters include the new target instance count for the group and the
   * instance group ID. The call will either succeed or fail atomically.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.InstanceGroups] Instance groups to change. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} opt.InstanceGroupId Unique ID of the instance group to expand or shrink. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: 
   * @param {Number} opt.InstanceCount Target size for the instance group.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  modify_instance_groups: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ModifyInstanceGroups", payload );
    return response;
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
   * @param {String} [name] The name of the job flow. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]   * @param {Object} [instances] A specification of the number and type of Amazon EC2 instances on which to run the job flow. <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
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
   *     <li><code>Ec2KeyName</code> - <code>string</code> - Optional - Specifies the name of the Amazon EC2 key pair that can be used to ssh to the master node as the user called "hadoop." [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Placement</code> - <code>array</code> - Optional - Specifies the Availability Zone the job flow will run in. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>AvailabilityZone</code> - <code>string</code> - Required - The Amazon EC2 Availability Zone for the job flow. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>KeepJobFlowAliveWhenNoSteps</code> - <code>boolean</code> - Optional - Specifies whether the job flow should terminate after completing all steps.</li>
   *     <li><code>TerminationProtected</code> - <code>boolean</code> - Optional - Specifies whether to lock the job flow to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job flow error.</li>
   *     <li><code>HadoopVersion</code> - <code>string</code> - Optional - Specifies the Hadoop version for the job flow. Valid inputs are "0.18", "0.20", or "0.20.205". If you do not set this value, the default of 0.18 is used, unless the AmiVersion parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Ec2SubnetId</code> - <code>string</code> - Optional - To launch the job flow in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the job flow to launch. If you do not specify this value, the job flow is launched in the normal Amazon Web Services cloud, outside of an Amazon VPC. Amazon VPC currently does not support cluster compute quadruple extra large (cc1.4xlarge) instances. Thus you cannot specify the cc1.4xlarge instance type for nodes of a job flow launched in a Amazon VPC. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>LogUri</code> - <code>string</code> - Optional - Specifies the location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
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
   *           <li><code>Jar</code> - <code>string</code> - Required - A path to a JAR file run during the step. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>MainClass</code> - <code>string</code> - Optional - The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>Args</code> - <code>string|array</code> - Optional - A list of command line arguments passed to the JAR file's main function when executed. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>BootstrapActions</code> - <code>array</code> - Optional - A list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Required - The name of the bootstrap action. [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>ScriptBootstrapAction</code> - <code>array</code> - Required - The script run by the bootstrap action. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>Path</code> - <code>string</code> - Required - Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system. [Constraints: The value must be between 0 and 10280 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>Args</code> - <code>string|array</code> - Optional - A list of command line arguments to pass to the bootstrap action script. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>SupportedProducts</code> - <code>string|array</code> - Optional - A list of strings used by third-party software to tag the job flow. Currently the only valid value is "karmasphere-enterprise-utility", which tags the job flow for management by <a href="http://aws.amazon.com/elasticmapreduce/karmasphere/">Karmasphere.</a> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  run_job_flow: function(name,instances,opt){
    var payload = {};
    payload.name = name;
    payload.instances = instances;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RunJobFlow", payload );
    return response;
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
   * @param {String|array} [job_flow_ids] A list of strings that uniquely identify the job flows to protect. This identifier is returned by <code>RunJobFlow</code> and can also be obtained from <code>DescribeJobFlows</code>. Pass a string for a single value, or an indexed array for multiple values.   * @param {Boolean} [termination_protected] A Boolean that indicates whether to protect the job flow and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  set_termination_protection: function(job_flow_ids,termination_protected,opt){
    var payload = {};
    payload.job_flow_ids = job_flow_ids;
    payload.termination_protected = termination_protected;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetTerminationProtection", payload );
    return response;
  }, 
  /**
   * TerminateJobFlows shuts a list of job flows down. When a job flow is shut down, any step not
   * yet completed is canceled and the EC2 instances on which the job flow is running are stopped.
   * Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the
   * job flow was created.
   *
   * @param {String|array} [job_flow_ids] A list of job flows to be shutdown. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  terminate_job_flows: function(job_flow_ids,opt){
    var payload = {};
    payload.job_flow_ids = job_flow_ids;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("TerminateJobFlows", payload );
    return response;
  }
}
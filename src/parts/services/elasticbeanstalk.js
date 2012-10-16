/**
 * @class AmazonElasticBeanstalkClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonElasticBeanstalk(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonElasticBeanstalk.prototype = {
  service:'elasticbeanstalk',
  api_version:'2010-12-01',
  auth_class: new AuthV2Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonElasticBeanstalk
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Checks if the specified CNAME is available.
   *
   * @param {String} [cnameprefix] The prefix used when this CNAME is reserved.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  check_dns_availability: function(cnameprefix,opt){
    var payload = {};
    payload.cnameprefix = cnameprefix;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CheckDnsAvailability", payload );
    return response;
  }, 
  /**
   * Creates an application that has one configuration template named <code>default</code> and no
   * application versions.
   * 
   * <p class="note">
   * The <code>default</code> configuration template is for a 32-bit version of the Amazon Linux
   * operating system running the Tomcat 6 application container.
   * </p>
   *
   * @param {String} [application_name] The name of the application. Constraint: This name must be unique within your account. If the specified name already exists, the action returns an <code>InvalidParameterValue</code> error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Description] Describes the application.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_application: function(application_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateApplication", payload );
    return response;
  }, 
  /**
   * Creates an application version for the specified application.
   * 
   * <p class="note">
   * Once you create an application version with a specified Amazon S3 bucket and key location, you
   * cannot change that Amazon S3 location. If you change the Amazon S3 location, you receive an
   * exception when you attempt to launch an environment from the application version.
   * </p>
   *
   * @param {String} [application_name] The name of the application. If no application is found with this name, and <code>AutoCreateApplication</code> is <code>false</code>, returns an <code>InvalidParameterValue</code> error.   * @param {String} [version_label] A label identifying this version. Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Description] Describes this version.
   * @param {Object} [opt.SourceBundle] The Amazon S3 bucket and key that identify the location of the source bundle for this version. If data found at the Amazon S3 location exceeds the maximum allowed source bundle size, AWS Elastic Beanstalk returns an 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.S3Bucket] The Amazon S3 bucket where the data is located.
   * @param {String} [opt.S3Key] The Amazon S3 key where the data is located.
   * @param {Boolean} [opt.AutoCreateApplication] Determines how the system behaves if the specified application for this version does not already exist:
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_application_version: function(application_name,version_label,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.version_label = version_label;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateApplicationVersion", payload );
    return response;
  }, 
  /**
   * Creates a configuration template. Templates are associated with a specific application and are
   * used to deploy different versions of the application with the same configuration settings.
   *  
   * Related Topics
   * 
   * <ul>
   *   <li><code>DescribeConfigurationOptions</code></li>
   *   <li><code>DescribeConfigurationSettings</code></li>
   *   <li><code>ListAvailableSolutionStacks</code></li>
   * </ul>
   *
   * @param {String} [application_name] The name of the application to associate with this configuration template. If no application is found with this name, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.   * @param {String} [template_name] The name of the configuration template. Constraint: This name must be unique per application. Default: If a configuration template already exists with this name, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.SolutionStackName] The name of the solution stack used by this configuration. The solution stack specifies the operating system, architecture, and application server for a configuration template. It determines the set of configuration options as well as the possible and default values. Use 
   * @param {Object} [opt.SourceConfiguration] If specified, AWS Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration. Values specified in the 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.ApplicationName] The name of the application associated with the configuration.
   * @param {String} [opt.TemplateName] The name of the configuration template.
   * @param {String} [opt.EnvironmentId] The ID of the environment used with this configuration template.
   * @param {String} [opt.Description] Describes this configuration.
   * @param {Object} [opt.OptionSettings] If specified, AWS Elastic Beanstalk sets the specified configuration option to the requested value. The new value overrides the value obtained from the solution stack or the source configuration template. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {String} [opt.Value] The current value for the configuration option.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_configuration_template: function(application_name,template_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.template_name = template_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateConfigurationTemplate", payload );
    return response;
  }, 
  /**
   * Launches an environment for the specified application using the specified configuration.
   *
   * @param {String} [application_name] The name of the application that contains the version to be deployed. If no application is found with this name, <code>CreateEnvironment</code> returns an <code>InvalidParameterValue</code> error.   * @param {String} [environment_name] A unique name for the deployment environment. Used in the application URL. Constraint: Must be from 4 to 23 characters in length. The name can contain only letters, numbers, and hyphens. It cannot start or end with a hyphen. This name must be unique in your account. If the specified name already exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. Default: If the CNAME parameter is not specified, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.VersionLabel] The name of the application version to deploy. If the specified application has no associated application versions, AWS Elastic Beanstalk 
   * @param {String} [opt.TemplateName] The name of the configuration template to use in deployment. If no configuration template is found with this name, AWS Elastic Beanstalk returns an 
   * @param {String} [opt.SolutionStackName] This is an alternative to specifying a configuration name. If specified, AWS Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. Condition: You must specify either this or a 
   * @param {String} [opt.CNAMEPrefix] If specified, the environment attempts to use this value as the prefix for the CNAME. If not specified, the environment uses the environment name.
   * @param {String} [opt.Description] Describes this environment.
   * @param {Object} [opt.OptionSettings] If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {String} [opt.Value] The current value for the configuration option.
   * @param {Object} [opt.OptionsToRemove] A list of custom user-defined configuration options to remove from the configuration set for this new environment. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_environment: function(application_name,environment_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.environment_name = environment_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateEnvironment", payload );
    return response;
  }, 
  /**
   * Creates the Amazon S3 storage location for the account.
   *  
   * This location is used to store user log files.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_storage_location: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateStorageLocation", payload );
    return response;
  }, 
  /**
   * Deletes the specified application along with all associated versions and configurations.
   * 
   * <p class="note">
   * You cannot delete an application that has a running environment.
   * </p>
   *
   * @param {String} [application_name] The name of the application to delete.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_application: function(application_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteApplication", payload );
    return response;
  }, 
  /**
   * Deletes the specified version from the specified application.
   * 
   * <p class="note">
   * You cannot delete an application version that is associated with a running environment.
   * </p>
   *
   * @param {String} [application_name] The name of the application to delete releases from.   * @param {String} [version_label] The label of the version to delete.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Boolean} [opt.DeleteSourceBundle] Indicates whether to delete the associated source bundle from Amazon S3:
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_application_version: function(application_name,version_label,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.version_label = version_label;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteApplicationVersion", payload );
    return response;
  }, 
  /**
   * Deletes the specified configuration template.
   * 
   * <p class="note">
   * When you launch an environment using a configuration template, the environment gets a copy of
   * the template. You can delete or modify the environment's copy of the template without affecting
   * the running environment.
   * </p>
   *
   * @param {String} [application_name] The name of the application to delete the configuration template from.   * @param {String} [template_name] The name of the configuration template to delete.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_configuration_template: function(application_name,template_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.template_name = template_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteConfigurationTemplate", payload );
    return response;
  }, 
  /**
   * Deletes the draft configuration associated with the running environment.
   *  
   * Updating a running environment with any configuration changes creates a draft configuration
   * set. You can get the draft configuration using <code>DescribeConfigurationSettings</code> while
   * the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the
   * draft configuration indicates whether the deployment is in process or has failed. The draft
   * configuration remains in existence until it is deleted with this action.
   *
   * @param {String} [application_name] The name of the application the environment is associated with.   * @param {String} [environment_name] The name of the environment to delete the draft configuration from.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_environment_configuration: function(application_name,environment_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.environment_name = environment_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteEnvironmentConfiguration", payload );
    return response;
  }, 
  /**
   * Returns descriptions for existing application versions.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ApplicationName] If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include ones that are associated with the specified application.
   * @param {String|array} [opt.VersionLabels] If specified, restricts the returned descriptions to only include ones that have the specified version labels. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_application_versions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeApplicationVersions", payload );
    return response;
  }, 
  /**
   * Returns the descriptions of existing applications.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String|array} [opt.ApplicationNames] If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_applications: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeApplications", payload );
    return response;
  }, 
  /**
   * Describes the configuration options that are used in a particular configuration template or
   * environment, or that a specified solution stack defines. The description includes the values
   * the options, their default values, and an indication of the required action on a running
   * environment if an option value is changed.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ApplicationName] The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.
   * @param {String} [opt.TemplateName] The name of the configuration template whose configuration options you want to describe.
   * @param {String} [opt.EnvironmentName] The name of the environment whose configuration options you want to describe.
   * @param {String} [opt.SolutionStackName] The name of the solution stack whose configuration options you want to describe.
   * @param {Object} [opt.Options] If specified, restricts the descriptions to only the specified options. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_configuration_options: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeConfigurationOptions", payload );
    return response;
  }, 
  /**
   * Returns a description of the settings for the specified configuration set, that is, either a
   * configuration template or the configuration set associated with a running environment.
   *  
   * When describing the settings for the configuration set associated with a running environment,
   * it is possible to receive two sets of setting descriptions. One is the deployed configuration
   * set, and the other is a draft configuration of an environment that is either in the process of
   * deployment or that failed to deploy.
   *  
   * Related Topics
   * 
   * <ul>
   *   <li><code>DeleteEnvironmentConfiguration</code></li>
   * </ul>
   *
   * @param {String} [application_name] The application for the environment or configuration template.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.TemplateName] The name of the configuration template to describe. Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an 
   * @param {String} [opt.EnvironmentName] The name of the environment to describe. Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_configuration_settings: function(application_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeConfigurationSettings", payload );
    return response;
  }, 
  /**
   * Returns AWS resources for this environment.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the environment to retrieve AWS resource usage data. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {String} [opt.EnvironmentName] The name of the environment to retrieve AWS resource usage data. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_environment_resources: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeEnvironmentResources", payload );
    return response;
  }, 
  /**
   * Returns descriptions for existing environments.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ApplicationName] If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.
   * @param {String} [opt.VersionLabel] If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.
   * @param {String|array} [opt.EnvironmentIds] If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.EnvironmentNames] If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Boolean} [opt.IncludeDeleted] Indicates whether to include deleted environments: 
   * @param {String} [opt.IncludedDeletedBackTo] If specified when 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_environments: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeEnvironments", payload );
    return response;
  }, 
  /**
   * Returns list of event descriptions matching criteria up to the last 6 weeks.
   * 
   * <p class="note">
   * This action returns the most recent 1,000 events from the specified <code>NextToken</code>.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ApplicationName] If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.
   * @param {String} [opt.VersionLabel] If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.
   * @param {String} [opt.TemplateName] If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.
   * @param {String} [opt.EnvironmentId] If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
   * @param {String} [opt.EnvironmentName] If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
   * @param {String} [opt.RequestId] If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.
   * @param {String} [opt.Severity] If specified, limits the events returned from this call to include only those with the specified severity or higher. [Allowed values: 
   * @param {String} [opt.StartTime] If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time. May be passed as a number of seconds since UNIX Epoch, or any string compatible with 
   * @param {String} [opt.EndTime] If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the 
   * @param {Number} [opt.MaxRecords] Specifies the maximum number of events that can be returned, beginning with the most recent event.
   * @param {String} [opt.NextToken] Pagination token. If specified, the events return the next batch of results.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_events: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeEvents", payload );
    return response;
  }, 
  /**
   * Returns a list of the available solution stack names.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_available_solution_stacks: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListAvailableSolutionStacks", payload );
    return response;
  }, 
  /**
   * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load
   * balancer, etc.) for a specified environment and forces a restart.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the environment to rebuild. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {String} [opt.EnvironmentName] The name of the environment to rebuild. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  rebuild_environment: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RebuildEnvironment", payload );
    return response;
  }, 
  /**
   * Initiates a request to compile the specified type of information of the deployed environment.
   *  
   * Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the
   * application server log files of every Amazon EC2 instance in your environment. Use
   * <code>RetrieveEnvironmentInfo</code> to access the compiled information.
   *  
   * Related Topics
   * 
   * <ul>
   *   <li><code>RetrieveEnvironmentInfo</code></li>
   * </ul>
   *
   * @param {String} [info_type] The type of information to request. [Allowed values: <code>tail</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the environment of the requested data. If no such environment is found, 
   * @param {String} [opt.EnvironmentName] The name of the environment of the requested data. If no such environment is found, 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  request_environment_info: function(info_type,opt){
    var payload = {};
    payload.info_type = info_type;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RequestEnvironmentInfo", payload );
    return response;
  }, 
  /**
   * Causes the environment to restart the application container server running on each Amazon EC2
   * instance.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the environment to restart the server for. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {String} [opt.EnvironmentName] The name of the environment to restart the server for. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  restart_app_server: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RestartAppServer", payload );
    return response;
  }, 
  /**
   * Retrieves the compiled information from a <code>RequestEnvironmentInfo</code> request.
   *  
   * Related Topics
   * 
   * <ul>
   *   <li><code>RequestEnvironmentInfo</code></li>
   * </ul>
   *
   * @param {String} [info_type] The type of information to retrieve. [Allowed values: <code>tail</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the data's environment. If no such environment is found, returns an 
   * @param {String} [opt.EnvironmentName] The name of the data's environment. If no such environment is found, returns an 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  retrieve_environment_info: function(info_type,opt){
    var payload = {};
    payload.info_type = info_type;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RetrieveEnvironmentInfo", payload );
    return response;
  }, 
  /**
   * Swaps the CNAMEs of two environments.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.SourceEnvironmentId] The ID of the source environment. Condition: You must specify at least the 
   * @param {String} [opt.SourceEnvironmentName] The name of the source environment. Condition: You must specify at least the 
   * @param {String} [opt.DestinationEnvironmentId] The ID of the destination environment. Condition: You must specify at least the 
   * @param {String} [opt.DestinationEnvironmentName] The name of the destination environment. Condition: You must specify at least the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  swap_environment_cnames: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SwapEnvironmentCnames", payload );
    return response;
  }, 
  /**
   * Terminates the specified environment.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the environment to terminate. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {String} [opt.EnvironmentName] The name of the environment to terminate. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns 
   * @param {Boolean} [opt.TerminateResources] Indicates whether the associated AWS resources should shut down when the environment is terminated:
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  terminate_environment: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("TerminateEnvironment", payload );
    return response;
  }, 
  /**
   * Updates the specified application to have the specified properties.
   * 
   * <p class="note">
   * If a property (for example, <code>description</code>) is not provided, the value remains
   * unchanged. To clear these properties, specify an empty string.
   * </p>
   *
   * @param {String} [application_name] The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Description] A new description for the application. Default: If not specified, AWS Elastic Beanstalk does not update the description.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_application: function(application_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateApplication", payload );
    return response;
  }, 
  /**
   * Updates the specified application version to have the specified properties.
   * 
   * <p class="note">
   * If a property (for example, <code>description</code>) is not provided, the value remains
   * unchanged. To clear properties, specify an empty string.
   * </p>
   *
   * @param {String} [application_name] The name of the application associated with this version. If no application is found with this name, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.   * @param {String} [version_label] The name of the version to update. If no application version is found with this label, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Description] A new description for this release.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_application_version: function(application_name,version_label,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.version_label = version_label;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateApplicationVersion", payload );
    return response;
  }, 
  /**
   * Updates the specified configuration template to have the specified properties or configuration
   * option values.
   * 
   * <p class="note">
   * If a property (for example, <code>ApplicationName</code>) is not provided, its value remains
   * unchanged. To clear such properties, specify an empty string.
   * </p> 
   * Related Topics
   * 
   * <ul>
   *   <li><code>DescribeConfigurationOptions</code></li>
   * </ul>
   *
   * @param {String} [application_name] The name of the application associated with the configuration template to update. If no application is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error.   * @param {String} [template_name] The name of the configuration template to update. If no configuration template is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Description] A new description for the configuration.
   * @param {Object} [opt.OptionSettings] A list of configuration option settings to update with the new specified option value. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {String} [opt.Value] The current value for the configuration option.
   * @param {Object} [opt.OptionsToRemove] A list of configuration options to remove from the configuration set. Constraint: You can remove only 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_configuration_template: function(application_name,template_name,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.template_name = template_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateConfigurationTemplate", payload );
    return response;
  }, 
  /**
   * Updates the environment description, deploys a new application version, updates the
   * configuration settings to an entirely new configuration template, or updates select
   * configuration option values in the running environment.
   *  
   * Attempting to update both the release and configuration is not allowed and AWS Elastic
   * Beanstalk returns an <code>InvalidParameterCombination</code> error.
   *  
   * When updating the configuration settings to a new template or individual settings, a draft
   * configuration is created and <code>DescribeConfigurationSettings</code> for this environment
   * returns two setting descriptions with different <code>DeploymentStatus</code> values.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EnvironmentId] The ID of the environment to update. If no environment with this ID exists, AWS Elastic Beanstalk returns an 
   * @param {String} [opt.EnvironmentName] The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an 
   * @param {String} [opt.VersionLabel] If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an 
   * @param {String} [opt.TemplateName] If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an 
   * @param {String} [opt.Description] If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.
   * @param {Object} [opt.OptionSettings] If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {String} [opt.Value] The current value for the configuration option.
   * @param {Object} [opt.OptionsToRemove] A list of custom user-defined configuration options to remove from the configuration set for this environment. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.Namespace] A unique namespace identifying the option's associated AWS resource.
   * @param {String} [opt.OptionName] The name of the configuration option.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_environment: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateEnvironment", payload );
    return response;
  }, 
  /**
   * Takes a set of configuration settings and either a configuration template or environment, and
   * determines whether those values are valid.
   *  
   * This action returns a list of messages indicating any errors or warnings associated with the
   * selection of option values.
   *
   * @param {String} [application_name] The name of the application that the configuration template or environment belongs to.   * @param {Object} [option_settings] A list of the options and desired values to evaluate. <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Namespace</code> - <code>string</code> - Optional - A unique namespace identifying the option's associated AWS resource.</li>
   *     <li><code>OptionName</code> - <code>string</code> - Optional - The name of the configuration option.</li>
   *     <li><code>Value</code> - <code>string</code> - Optional - The current value for the configuration option.</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>TemplateName</code> - <code>string</code> - Optional - The name of the configuration template to validate the settings against. Condition: You cannot specify both this and an environment name.</li>
   *   <li><code>EnvironmentName</code> - <code>string</code> - Optional - The name of the environment to validate the settings against. Condition: You cannot specify both this and a configuration template name.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  validate_configuration_settings: function(application_name,option_settings,opt){
    var payload = {};
    payload.application_name = application_name;
    payload.option_settings = option_settings;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ValidateConfigurationSettings", payload );
    return response;
  }
}
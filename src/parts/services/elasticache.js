/**
 * @class AmazonElastiCacheClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonElastiCache(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonElastiCache.prototype = {
  service:'elasticache',
  version:'2012-03-09',
  auth_class: new AuthV2Query(),
  /**
   * @memberOf AmazonElastiCache
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Authorizes ingress to a CacheSecurityGroup using EC2 Security Groups as authorization
   * (therefore the application using the cache must be running on EC2 clusters). This API requires
   * the following parameters: EC2SecurityGroupName and EC2SecurityGroupOwnerId.
   * 
   * <p class="note">
   * You cannot authorize ingress from an EC2 security group in one Region to an Amazon Cache
   * Cluster in another.
   * </p>
   *
   * @param {String} cache_security_group_name (Required) The name of the Cache Security Group to authorize.
   * @param {String} ec2_security_group_name (Required) Name of the EC2 Security Group to include in the authorization.
   * @param {String} ec2_security_group_owner_id (Required) AWS Account Number of the owner of the security group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  authorize_cache_security_group_ingress: function(cache_security_group_name,ec2_security_group_name,ec2_security_group_owner_id,opt){
    var payload = {};
    param.cache_security_group_name = cache_security_group_name;
    param.ec2_security_group_name = ec2_security_group_name;
    param.ec2_security_group_owner_id = ec2_security_group_owner_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"AuthorizeCacheSecurityGroupIngress", payload );
    return resposne;
  }, 
  /**
   * Creates a new Cache Cluster.
   *
   * @param {String} cache_cluster_id (Required) The Cache Cluster identifier. This parameter is stored as a lowercase string. Constraints:<ul><li>Must contain from 1 to 20 alphanumeric characters or hyphens.</li><li>First character must be a letter.</li><li>Cannot end with a hyphen or contain two consecutive hyphens.</li></ul>Example: <code>mycachecluster</code>
   * @param {Number} num_cache_nodes (Required) The number of Cache Nodes the Cache Cluster should have.
   * @param {String} cache_node_type (Required) The compute and memory capacity of nodes in a Cache Cluster. Valid values: <code>cache.m1.large | cache.m1.xlarge | cache.m2.xlarge | cache.m2.2xlarge | cache.m2.4xlarge | cache.c1.xlarge</code>
   * @param {String} engine (Required) The name of the cache engine to be used for this Cache Cluster. <p class="note">Currently, <em>memcached</em> is the only cache engine supported by the service.</p>
   * @param string|array $cache_security_group_names (Required) A list of Cache Security Group Names to associate with this Cache Cluster. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>EngineVersion</code> - <code>string</code> - Optional - The version of the cache engine to be used for this cluster.</li>
   *   <li><code>CacheParameterGroupName</code> - <code>string</code> - Optional - The name of the cache parameter group to associate with this Cache cluster. If this argument is omitted, the default CacheParameterGroup for the specified engine will be used.</li>
   *   <li><code>PreferredAvailabilityZone</code> - <code>string</code> - Optional - The EC2 Availability Zone that the Cache Cluster will be created in. In normal use, all CacheNodes belonging to a CacheCluster are placed in the preferred availability zone. In rare circumstances, some of the CacheNodes might temporarily be in a different availability zone. Default: System chosen (random) availability zone.</li>
   *   <li><code>PreferredMaintenanceWindow</code> - <code>string</code> - Optional - The weekly time range (in UTC) during which system maintenance can occur. Example: <code>sun:05:00-sun:09:00</code></li>
   *   <li><code>Port</code> - <code>integer</code> - Optional - The port number on which each of the Cache Nodes will accept connections.</li>
   *   <li><code>NotificationTopicArn</code> - <code>string</code> - Optional - The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent. <p class="note">The Amazon SNS topic owner must be the same as the Cache Cluster owner.</p></li>
   *   <li><code>AutoMinorVersionUpgrade</code> - <code>boolean</code> - Optional - Indicates that minor engine upgrades will be applied automatically to the Cache Cluster during the maintenance window. Default: <code>true</code></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_cache_cluster: function(cache_cluster_id,num_cache_nodes,cache_node_type,engine,cache_security_group_names,opt){
    var payload = {};
    param.cache_cluster_id = cache_cluster_id;
    param.num_cache_nodes = num_cache_nodes;
    param.cache_node_type = cache_node_type;
    param.engine = engine;
    param.cache_security_group_names = cache_security_group_names;

    payload = this.marge_param(payload,opt);
    var response = this.request({"CreateCacheCluster", payload );
    return resposne;
  }, 
  /**
   * Creates a new Cache Parameter Group. Cache Parameter groups control the parameters for a Cache
   * Cluster.
   *
   * @param {String} cache_parameter_group_name (Required) The name of the Cache Parameter Group.
   * @param {String} cache_parameter_group_family (Required) The name of the Cache Parameter Group Family the Cache Parameter Group can be used with. <p class="note">Currently, <em>memcached1.4</em> is the only cache parameter group family supported by the service.</p>
   * @param {String} description (Required) The description for the Cache Parameter Group.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_cache_parameter_group: function(cache_parameter_group_name,cache_parameter_group_family,description,opt){
    var payload = {};
    param.cache_parameter_group_name = cache_parameter_group_name;
    param.cache_parameter_group_family = cache_parameter_group_family;
    param.description = description;

    payload = this.marge_param(payload,opt);
    var response = this.request({"CreateCacheParameterGroup", payload );
    return resposne;
  }, 
  /**
   * Creates a new Cache Security Group. Cache Security groups control access to one or more Cache
   * Clusters.
   *
   * @param {String} cache_security_group_name (Required) The name for the Cache Security Group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default". Example: <code>mysecuritygroup</code>
   * @param {String} description (Required) The description for the Cache Security Group.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_cache_security_group: function(cache_security_group_name,description,opt){
    var payload = {};
    param.cache_security_group_name = cache_security_group_name;
    param.description = description;

    payload = this.marge_param(payload,opt);
    var response = this.request({"CreateCacheSecurityGroup", payload );
    return resposne;
  }, 
  /**
   * Deletes a previously provisioned Cache Cluster. A successful response from the web service
   * indicates the request was received correctly. This action cannot be canceled or reverted.
   * DeleteCacheCluster deletes all associated Cache Nodes, node endpoints and the Cache Cluster
   * itself.
   *
   * @param {String} cache_cluster_id (Required) The Cache Cluster identifier for the Cache Cluster to be deleted. This parameter isn't case sensitive.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_cache_cluster: function(cache_cluster_id,opt){
    var payload = {};
    param.cache_cluster_id = cache_cluster_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"DeleteCacheCluster", payload );
    return resposne;
  }, 
  /**
   * Deletes the specified CacheParameterGroup. The CacheParameterGroup cannot be deleted if it is
   * associated with any cache clusters.
   *
   * @param {String} cache_parameter_group_name (Required) The name of the Cache Parameter Group to delete. <p class="note">The specified cache security group must not be associated with any Cache clusters.</p>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_cache_parameter_group: function(cache_parameter_group_name,opt){
    var payload = {};
    param.cache_parameter_group_name = cache_parameter_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request({"DeleteCacheParameterGroup", payload );
    return resposne;
  }, 
  /**
   * Deletes a Cache Security Group.
   * 
   * <p class="note">
   * The specified Cache Security Group must not be associated with any Cache Clusters.
   * </p>
   *
   * @param {String} cache_security_group_name (Required) The name of the Cache Security Group to delete. <p class="note">You cannot delete the default security group.</p>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_cache_security_group: function(cache_security_group_name,opt){
    var payload = {};
    param.cache_security_group_name = cache_security_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request({"DeleteCacheSecurityGroup", payload );
    return resposne;
  }, 
  /**
   * Returns information about all provisioned Cache Clusters if no Cache Cluster identifier is
   * specified, or about a specific Cache Cluster if a Cache Cluster identifier is supplied.
   *  
   * Cluster information will be returned by default. An optional <em>ShowDetails</em> flag can be
   * used to retrieve detailed information about the Cache Nodes associated with the Cache Cluster.
   * Details include the DNS address and port for the Cache Node endpoint.
   *  
   * If the cluster is in the CREATING state, only cluster level information will be displayed until
   * all of the nodes are successfully provisioned.
   *  
   * If the cluster is in the DELETING state, only cluster level information will be displayed.
   *  
   * While adding Cache Nodes, node endpoint information and creation time for the additional nodes
   * will not be displayed until they are completely provisioned. The cluster lifecycle tells the
   * customer when new nodes are AVAILABLE.
   *  
   * While removing existing Cache Nodes from an cluster, endpoint information for the removed nodes
   * will not be displayed.
   *  
   * DescribeCacheClusters supports pagination.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CacheClusterId</code> - <code>string</code> - Optional - The user-supplied cluster identifier. If this parameter is specified, only information about that specific Cache Cluster is returned. This parameter isn't case sensitive.</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more records exist than the specified <em>MaxRecords</em> value, a marker is included in the response so that the remaining results may be retrieved. Default: 100 Constraints: minimum 20, maximum 100</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional marker provided in the previous DescribeCacheClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <em>MaxRecords</em>.</li>
   *   <li><code>ShowCacheNodeInfo</code> - <code>boolean</code> - Optional - An optional flag that can be included in the DescribeCacheCluster request to retrieve Cache Nodes information.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_cache_clusters: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeCacheClusters", payload );
    return resposne;
  }, 
  /**
   * Returns a list of CacheParameterGroup descriptions. If a CacheParameterGroupName is specified,
   * the list will contain only the descriptions of the specified CacheParameterGroup.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CacheParameterGroupName</code> - <code>string</code> - Optional - The name of a specific cache parameter group to return details for.</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more records exist than the specified <em>MaxRecords</em> value, a marker is included in the response so that the remaining results may be retrieved.</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional marker provided in the previous DescribeCacheParameterGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <em>MaxRecords</em>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_cache_parameter_groups: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeCacheParameterGroups", payload );
    return resposne;
  }, 
  /**
   * Returns the detailed parameter list for a particular CacheParameterGroup.
   *
   * @param {String} cache_parameter_group_name (Required) The name of a specific cache parameter group to return details for.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Source</code> - <code>string</code> - Optional - The parameter types to return. Valid values: <code>user</code> | <code>system</code> | <code>engine-default</code></li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more records exist than the specified <em>MaxRecords</em> value, a marker is included in the response so that the remaining results may be retrieved.</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional marker provided in the previous DescribeCacheClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <em>MaxRecords</em>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_cache_parameters: function(cache_parameter_group_name,opt){
    var payload = {};
    param.cache_parameter_group_name = cache_parameter_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeCacheParameters", payload );
    return resposne;
  }, 
  /**
   * Returns a list of CacheSecurityGroup descriptions. If a CacheSecurityGroupName is specified,
   * the list will contain only the description of the specified CacheSecurityGroup.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CacheSecurityGroupName</code> - <code>string</code> - Optional - The name of the Cache Security Group to return details for.</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more records exist than the specified <em>MaxRecords</em> value, a marker is included in the response so that the remaining results may be retrieved. Default: 100 Constraints: minimum 20, maximum 100</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional marker provided in the previous DescribeCacheClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <em>MaxRecords</em>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_cache_security_groups: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeCacheSecurityGroups", payload );
    return resposne;
  }, 
  /**
   * Returns the default engine and system parameter information for the specified cache engine.
   *
   * @param {String} cache_parameter_group_family (Required) The name of the Cache Parameter Group Family. <p class="note">Currently, <em>memcached1.4</em> is the only cache parameter group family supported by the service.</p>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more records exist than the specified <em>MaxRecords</em> value, a marker is included in the response so that the remaining results may be retrieved.</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional marker provided in the previous DescribeCacheClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <em>MaxRecords</em>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_engine_default_parameters: function(cache_parameter_group_family,opt){
    var payload = {};
    param.cache_parameter_group_family = cache_parameter_group_family;

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeEngineDefaultParameters", payload );
    return resposne;
  }, 
  /**
   * Returns events related to Cache Clusters, Cache Security Groups, and Cache Parameter Groups for
   * the past 14 days. Events specific to a particular Cache Cluster, Cache Security Group, or Cache
   * Parameter Group can be obtained by providing the name as a parameter. By default, the past hour
   * of events are returned.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>SourceIdentifier</code> - <code>string</code> - Optional - The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.</li>
   *   <li><code>SourceType</code> - <code>string</code> - Optional - The event source to retrieve events for. If no value is specified, all events are returned. [Allowed values: <code>cache-cluster</code>, <code>cache-parameter-group</code>, <code>cache-security-group</code>]</li>
   *   <li><code>StartTime</code> - <code>string</code> - Optional - The beginning of the time interval to retrieve events for, specified in ISO 8601 format. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>EndTime</code> - <code>string</code> - Optional - The end of the time interval for which to retrieve events, specified in ISO 8601 format. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>Duration</code> - <code>integer</code> - Optional - The number of minutes to retrieve events for.</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more records exist than the specified <em>MaxRecords</em> value, a marker is included in the response so that the remaining results may be retrieved.</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional marker provided in the previous DescribeCacheClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <em>MaxRecords</em>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_events: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeEvents", payload );
    return resposne;
  }, 
  /**
   * Returns information about reserved Cache Nodes for this account, or about a specified reserved
   * Cache Node.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ReservedCacheNodeId</code> - <code>string</code> - Optional - The reserved Cache Node identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.</li>
   *   <li><code>ReservedCacheNodesOfferingId</code> - <code>string</code> - Optional - The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.</li>
   *   <li><code>CacheNodeType</code> - <code>string</code> - Optional - The Cache Node type filter value. Specify this parameter to show only those reservations matching the specified Cache Nodes type.</li>
   *   <li><code>Duration</code> - <code>string</code> - Optional - The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: <code>1 | 3 | 31536000 | 94608000</code></li>
   *   <li><code>ProductDescription</code> - <code>string</code> - Optional - The product description filter value. Specify this parameter to show only those reservations matching the specified product description.</li>
   *   <li><code>OfferingType</code> - <code>string</code> - Optional - The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: <code>"Light Utilization" | "Medium Utilization" | "Heavy Utilization"</code></li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a marker is included in the response so that the following results can be retrieved. Default: 100 Constraints: minimum 20, maximum 100</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - The marker provided in the previous request. If this parameter is specified, the response includes records beyond the marker only, up to <code>MaxRecords</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_reserved_cache_nodes: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeReservedCacheNodes", payload );
    return resposne;
  }, 
  /**
   * Lists available reserved Cache Node offerings.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ReservedCacheNodesOfferingId</code> - <code>string</code> - Optional - The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier. Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code></li>
   *   <li><code>CacheNodeType</code> - <code>string</code> - Optional - The Cache Node type filter value. Specify this parameter to show only the available offerings matching the specified Cache Node type.</li>
   *   <li><code>Duration</code> - <code>string</code> - Optional - Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: <code>1 | 3 | 31536000 | 94608000</code></li>
   *   <li><code>ProductDescription</code> - <code>string</code> - Optional - Product description filter value. Specify this parameter to show only the available offerings matching the specified product description.</li>
   *   <li><code>OfferingType</code> - <code>string</code> - Optional - The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: <code>"Light Utilization" | "Medium Utilization" | "Heavy Utilization"</code></li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a marker is included in the response so that the following results can be retrieved. Default: 100 Constraints: minimum 20, maximum 100</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - The marker provided in the previous request. If this parameter is specified, the response includes records beyond the marker only, up to <code>MaxRecords</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_reserved_cache_nodes_offerings: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"DescribeReservedCacheNodesOfferings", payload );
    return resposne;
  }, 
  /**
   * Modifies the Cache Cluster settings. You can change one or more Cache Cluster configuration
   * parameters by specifying the parameters and the new values in the request.
   *
   * @param {String} cache_cluster_id (Required) The Cache Cluster identifier. This value is stored as a lowercase string.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>NumCacheNodes</code> - <code>integer</code> - Optional - The number of Cache Nodes the Cache Cluster should have. If NumCacheNodes is greater than the existing number of Cache Nodes, Cache Nodes will be added. If NumCacheNodes is less than the existing number of Cache Nodes, Cache Nodes will be removed. When removing Cache Nodes, the Ids of the specific Cache Nodes to be removed must be supplied using the CacheNodeIdsToRemove parameter.</li>
   *   <li><code>CacheNodeIdsToRemove</code> - <code>string|array</code> - Optional - The list of Cache Node IDs to be removed. This parameter is only valid when NumCacheNodes is less than the existing number of Cache Nodes. The number of Cache Node Ids supplied in this parameter must match the difference between the existing number of Cache Nodes in the cluster and the new NumCacheNodes requested. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>CacheSecurityGroupNames</code> - <code>string|array</code> - Optional - A list of Cache Security Group Names to authorize on this Cache Cluster. This change is asynchronously applied as soon as possible. Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default". Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>PreferredMaintenanceWindow</code> - <code>string</code> - Optional - The weekly time range (in UTC) during which system maintenance can occur, which may result in an outage. This change is made immediately. If moving this window to the current time, there must be at least 120 minutes between the current time and end of the window to ensure pending changes are applied.</li>
   *   <li><code>NotificationTopicArn</code> - <code>string</code> - Optional - The Amazon Resource Name (ARN) of the SNS topic to which notifications will be sent. <p class="note">The SNS topic owner must be same as the Cache Cluster owner.</p></li>
   *   <li><code>CacheParameterGroupName</code> - <code>string</code> - Optional - The name of the Cache Parameter Group to apply to this Cache Cluster. This change is asynchronously applied as soon as possible for parameters when the <em>ApplyImmediately</em> parameter is specified as <em>true</em> for this request.</li>
   *   <li><code>NotificationTopicStatus</code> - <code>string</code> - Optional - The status of the Amazon SNS notification topic. The value can be <em>active</em> or <em>inactive</em>. Notifications are sent only if the status is <em>active</em>.</li>
   *   <li><code>ApplyImmediately</code> - <code>boolean</code> - Optional - Specifies whether or not the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <em>PreferredMaintenanceWindow</em> setting for the Cache Cluster. If this parameter is passed as <code>false</code>, changes to the Cache Cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first. Default: <code>false</code></li>
   *   <li><code>EngineVersion</code> - <code>string</code> - Optional - The version of the cache engine to upgrade this cluster to.</li>
   *   <li><code>AutoMinorVersionUpgrade</code> - <code>boolean</code> - Optional - Indicates that minor engine upgrades will be applied automatically to the Cache Cluster during the maintenance window. Default: <code>true</code></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_cache_cluster: function(cache_cluster_id,opt){
    var payload = {};
    param.cache_cluster_id = cache_cluster_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"ModifyCacheCluster", payload );
    return resposne;
  }, 
  /**
   * Modifies the parameters of a CacheParameterGroup. To modify more than one parameter, submit a
   * list of ParameterName and ParameterValue parameters. A maximum of 20 parameters can be modified
   * in a single request.
   *
   * @param {String} cache_parameter_group_name (Required) The name of the cache parameter group to modify.
   * @param array $parameter_name_values (Required) An array of parameter names and values for the parameter update. At least one parameter name and value must be supplied; subsequent arguments are optional. A maximum of 20 parameters may be modified in a single request. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>ParameterName</code> - <code>string</code> - Optional - Specifies the name of the parameter.</li>
   *     <li><code>ParameterValue</code> - <code>string</code> - Optional - Specifies the value of the parameter.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_cache_parameter_group: function(cache_parameter_group_name,parameter_name_values,opt){
    var payload = {};
    param.cache_parameter_group_name = cache_parameter_group_name;
    param.parameter_name_values = parameter_name_values;

    payload = this.marge_param(payload,opt);
    var response = this.request({"ModifyCacheParameterGroup", payload );
    return resposne;
  }, 
  /**
   * Purchases a reserved Cache Node offering.
   *
   * @param {String} reserved_cache_nodes_offering_id (Required) The ID of the Reserved Cache Node offering to purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ReservedCacheNodeId</code> - <code>string</code> - Optional - Customer-specified identifier to track this reservation. Example: myreservationID</li>
   *   <li><code>CacheNodeCount</code> - <code>integer</code> - Optional - The number of instances to reserve. Default: <code>1</code></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  purchase_reserved_cache_nodes_offering: function(reserved_cache_nodes_offering_id,opt){
    var payload = {};
    param.reserved_cache_nodes_offering_id = reserved_cache_nodes_offering_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"PurchaseReservedCacheNodesOffering", payload );
    return resposne;
  }, 
  /**
   * Reboots some (or all) of the cache cluster nodes within a previously provisioned ElastiCache
   * cluster. This API results in the application of modified CacheParameterGroup parameters to the
   * cache cluster. This action is taken as soon as possible, and results in a momentary outage to
   * the cache cluster during which the cache cluster status is set to rebooting. During that
   * momentary outage, the contents of the cache (for each cache cluster node being rebooted) are
   * lost. A CacheCluster event is created when the reboot is completed.
   *
   * @param {String} cache_cluster_id (Required) The Cache Cluster identifier. This parameter is stored as a lowercase string.
   * @param string|array $cache_node_ids_to_reboot (Required) A list of Cache Cluster Node Ids to reboot. To reboot an entire cache cluster, specify all cache cluster node Ids. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reboot_cache_cluster: function(cache_cluster_id,cache_node_ids_to_reboot,opt){
    var payload = {};
    param.cache_cluster_id = cache_cluster_id;
    param.cache_node_ids_to_reboot = cache_node_ids_to_reboot;

    payload = this.marge_param(payload,opt);
    var response = this.request({"RebootCacheCluster", payload );
    return resposne;
  }, 
  /**
   * Modifies the parameters of a CacheParameterGroup to the engine or system default value. To
   * reset specific parameters submit a list of the parameter names. To reset the entire
   * CacheParameterGroup, specify the CacheParameterGroup name and ResetAllParameters parameters.
   *
   * @param {String} cache_parameter_group_name (Required) The name of the Cache Parameter Group.
   * @param array $parameter_name_values (Required) An array of parameter names which should be reset. If not resetting the entire CacheParameterGroup, at least one parameter name must be supplied. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>ParameterName</code> - <code>string</code> - Optional - Specifies the name of the parameter.</li>
   *     <li><code>ParameterValue</code> - <code>string</code> - Optional - Specifies the value of the parameter.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ResetAllParameters</code> - <code>boolean</code> - Optional - Specifies whether (<em>true</em>) or not (<em>false</em>) to reset all parameters in the Cache Parameter Group to default values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reset_cache_parameter_group: function(cache_parameter_group_name,parameter_name_values,opt){
    var payload = {};
    param.cache_parameter_group_name = cache_parameter_group_name;
    param.parameter_name_values = parameter_name_values;

    payload = this.marge_param(payload,opt);
    var response = this.request({"ResetCacheParameterGroup", payload );
    return resposne;
  }, 
  /**
   * Revokes ingress from a CacheSecurityGroup for previously authorized EC2 Security Groups.
   *
   * @param {String} cache_security_group_name (Required) The name of the Cache Security Group to revoke ingress from.
   * @param {String} ec2_security_group_name (Required) The name of the EC2 Security Group to revoke access from.
   * @param {String} ec2_security_group_owner_id (Required) The AWS Account Number of the owner of the security group specified in the <em>EC2SecurityGroupName</em> parameter. The AWS Access Key ID is not an acceptable value.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  revoke_cache_security_group_ingress: function(cache_security_group_name,ec2_security_group_name,ec2_security_group_owner_id,opt){
    var payload = {};
    param.cache_security_group_name = cache_security_group_name;
    param.ec2_security_group_name = ec2_security_group_name;
    param.ec2_security_group_owner_id = ec2_security_group_owner_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"RevokeCacheSecurityGroupIngress", payload );
    return resposne;
  }
}
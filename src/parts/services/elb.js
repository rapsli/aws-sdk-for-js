/**
 * @class AmazonELBClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonELB(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonELB.prototype = {
  service:'elasticloadbalancing',
  version:'2012-06-01',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonELB
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Associates one or more security groups with your LoadBalancer in VPC. The provided security
   * group IDs will override any currently applied security groups.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param string|array $security_groups (Required) A list of security group IDs to associate with your LoadBalancer in VPC. The security group IDs must be provided as the ID and not the security group name (For example, sg-1234). Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  apply_security_groups_to_load_balancer: function(load_balancer_name,security_groups,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.security_groups = security_groups;

    param = this.marge_param(param,opt);
    var response = this.request(, "ApplySecurityGroupsToLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Adds one or more subnets to the set of configured subnets in the VPC for the LoadBalancer.
   *  
   * The Loadbalancers evenly distribute requests across all of the registered subnets.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param string|array $subnets (Required) A list of subnet IDs to add for the LoadBalancer. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  attach_load_balancer_to_subnets: function(load_balancer_name,subnets,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.subnets = subnets;

    param = this.marge_param(param,opt);
    var response = this.request(, "AttachLoadBalancerToSubnets", param );
    return resposne;
  }, 
  /**
   * Enables the client to define an application healthcheck for the instances.
   *
   * @param {String} load_balancer_name (Required) The mnemonic name associated with the LoadBalancer. This name must be unique within the client AWS account.
   * @param array $health_check (Required) A structure containing the configuration information for the new healthcheck. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Target</code> - <code>string</code> - Required - Specifies the instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535. <p class="note">TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case a healthcheck simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy. SSL is also specified as SSL: port pair, for example, SSL:5000. For HTTP or HTTPS protocol, the situation is different. You have to include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy. The total length of the HTTP ping target needs to be 1024 16-bit Unicode characters or less.</p></li>
   *     <li><code>Interval</code> - <code>integer</code> - Required - Specifies the approximate interval, in seconds, between health checks of an individual instance.</li>
   *     <li><code>Timeout</code> - <code>integer</code> - Required - Specifies the amount of time, in seconds, during which no response means a failed health probe. <p class="note">This value must be less than the <em>Interval</em> value.</p></li>
   *     <li><code>UnhealthyThreshold</code> - <code>integer</code> - Required - Specifies the number of consecutive health probe failures required before moving the instance to the <em>Unhealthy</em> state.</li>
   *     <li><code>HealthyThreshold</code> - <code>integer</code> - Required - Specifies the number of consecutive health probe successes required before moving the instance to the <em>Healthy</em> state.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  configure_health_check: function(load_balancer_name,health_check,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.health_check = health_check;

    param = this.marge_param(param,opt);
    var response = this.request(, "ConfigureHealthCheck", param );
    return resposne;
  }, 
  /**
   * Generates a stickiness policy with sticky session lifetimes that follow that of an
   * application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.
   *  
   * This policy is similar to the policy created by CreateLBCookieStickinessPolicy, except that the
   * lifetime of the special Elastic Load Balancing cookie follows the lifetime of the
   * application-generated cookie specified in the policy configuration. The LoadBalancer only
   * inserts a new stickiness cookie when the application response includes a new application
   * cookie.
   *  
   * If the application cookie is explicitly removed or expires, the session stops being sticky
   * until a new application cookie is issued.
   * 
   * <p class="note">
   * An application client must receive and send two cookies: the application-generated cookie and
   * the special Elastic Load Balancing cookie named <code>AWSELB</code>. This is the default
   * behavior for many common web browsers.
   * </p>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param {String} policy_name (Required) The name of the policy being created. The name must be unique within the set of policies for this LoadBalancer.
   * @param {String} cookie_name (Required) Name of the application cookie used for stickiness.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_app_cookie_stickiness_policy: function(load_balancer_name,policy_name,cookie_name,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.policy_name = policy_name;
    param.cookie_name = cookie_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateAppCookieStickinessPolicy", param );
    return resposne;
  }, 
  /**
   * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the
   * browser (user-agent) or a specified expiration period. This policy can be associated only with
   * HTTP/HTTPS listeners.
   *  
   * When a LoadBalancer implements this policy, the LoadBalancer uses a special cookie to track the
   * backend server instance for each request. When the LoadBalancer receives a request, it first
   * checks to see if this cookie is present in the request. If so, the LoadBalancer sends the
   * request to the application server specified in the cookie. If not, the LoadBalancer sends the
   * request to a server that is chosen based on the existing load balancing algorithm.
   *  
   * A cookie is inserted into the response for binding subsequent requests from the same user to
   * that server. The validity of the cookie is based on the cookie expiration time, which is
   * specified in the policy configuration.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param {String} policy_name (Required) The name of the policy being created. The name must be unique within the set of policies for this LoadBalancer.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CookieExpirationPeriod</code> - <code>long</code> - Optional - The time period in seconds after which the cookie should be considered stale. Not specifying this parameter indicates that the sticky session will last for the duration of the browser session.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_lb_cookie_stickiness_policy: function(load_balancer_name,policy_name,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateLbCookieStickinessPolicy", param );
    return resposne;
  }, 
  /**
   * Creates a new LoadBalancer.
   *  
   * After the call has completed successfully, a new LoadBalancer is created; however, it will not
   * be usable until at least one instance has been registered. When the LoadBalancer creation is
   * completed, the client can check whether or not it is usable by using the DescribeInstanceHealth
   * API. The LoadBalancer is usable as soon as any registered instance is <em>InService</em>.
   * 
   * <p class="note">
   * Currently, the client's quota of LoadBalancers is limited to ten per Region.
   * </p>
   * <p class="note"></p> 
   * LoadBalancer DNS names vary depending on the Region they're created in. For LoadBalancers
   * created in the United States, the DNS name ends with:
   * 
   * <ul>
   *   <li><em>us-east-1.elb.amazonaws.com</em> (for the US Standard Region)</li>
   *   <li><em>us-west-1.elb.amazonaws.com</em> (for the Northern California Region)</li>
   * </ul>
   * 
   * For LoadBalancers created in the EU (Ireland) Region, the DNS name ends with:
   * 
   * <ul>
   *   <li><em>eu-west-1.elb.amazonaws.com</em></li>
   * </ul>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within your set of LoadBalancers.
   * @param array $listeners (Required) A list of the following tuples: LoadBalancerPort, InstancePort, and Protocol. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Protocol</code> - <code>string</code> - Required - Specifies the LoadBalancer transport protocol to use for routing - HTTP, HTTPS, TCP or SSL. This property cannot be modified for the life of the LoadBalancer.</li>
   *     <li><code>LoadBalancerPort</code> - <code>integer</code> - Required - Specifies the external LoadBalancer port number. This property cannot be modified for the life of the LoadBalancer.</li>
   *     <li><code>InstanceProtocol</code> - <code>string</code> - Optional - Specifies the protocol to use for routing traffic to back-end instances - HTTP, HTTPS, TCP, or SSL. This property cannot be modified for the life of the LoadBalancer. <p class="note">If the front-end protocol is HTTP or HTTPS, <code>InstanceProtocol</code> has to be at the same protocol layer, i.e., HTTP or HTTPS. Likewise, if the front-end protocol is TCP or SSL, InstanceProtocol has to be TCP or SSL.</p> <p class="note">If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, i.e., HTTPS or SSL, the listener's <code>InstanceProtocol</code> has to be secure, i.e., HTTPS or SSL. If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be either HTTP or TCP.</p></li>
   *     <li><code>InstancePort</code> - <code>integer</code> - Required - Specifies the TCP port on which the instance server is listening. This property cannot be modified for the life of the LoadBalancer.</li>
   *     <li><code>SSLCertificateId</code> - <code>string</code> - Optional - The ARN string of the server certificate. To get the ARN of the server certificate, call the AWS Identity and Access Management <a href="http://docs.amazonwebservices.com/IAM/latest/APIReference/index.html?API_UploadServerCertificate.html">UploadServerCertificate</a> API.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AvailabilityZones</code> - <code>string|array</code> - Optional - A list of Availability Zones. At least one Availability Zone must be specified. Specified Availability Zones must be in the same EC2 Region as the LoadBalancer. Traffic will be equally distributed across all zones. This list can be modified after the creation of the LoadBalancer. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Subnets</code> - <code>string|array</code> - Optional - A list of subnet IDs in your VPC to attach to your LoadBalancer. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>SecurityGroups</code> - <code>string|array</code> - Optional - The security groups assigned to your LoadBalancer within your VPC. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Scheme</code> - <code>string</code> - Optional - Specifies the type of a load balancer, which can be internet-facing or internal. - internet-facing: (default) The load balancer will have a publicly resolvable DNS name that resolves to public IP addresses. - internal: The load balancer will have a publicly resolvable DNS name that resolves to private IP addresses This option is only available for load balancers attached to a VPC. [Allowed values: <code>internet-facing</code>, <code>internal</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_load_balancer: function(load_balancer_name,listeners,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.listeners = listeners;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Creates one or more listeners on a LoadBalancer for the specified port. If a listener with the
   * given port does not already exist, it will be created; otherwise, the properties of the new
   * listener must match the properties of the existing listener.
   *
   * @param {String} load_balancer_name (Required) The name of the new LoadBalancer. The name must be unique within your AWS account.
   * @param array $listeners (Required) A list of <code>LoadBalancerPort</code>, <code>InstancePort</code>, <code>Protocol</code>, and <code>SSLCertificateId</code> items. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Protocol</code> - <code>string</code> - Required - Specifies the LoadBalancer transport protocol to use for routing - HTTP, HTTPS, TCP or SSL. This property cannot be modified for the life of the LoadBalancer.</li>
   *     <li><code>LoadBalancerPort</code> - <code>integer</code> - Required - Specifies the external LoadBalancer port number. This property cannot be modified for the life of the LoadBalancer.</li>
   *     <li><code>InstanceProtocol</code> - <code>string</code> - Optional - Specifies the protocol to use for routing traffic to back-end instances - HTTP, HTTPS, TCP, or SSL. This property cannot be modified for the life of the LoadBalancer. <p class="note">If the front-end protocol is HTTP or HTTPS, <code>InstanceProtocol</code> has to be at the same protocol layer, i.e., HTTP or HTTPS. Likewise, if the front-end protocol is TCP or SSL, InstanceProtocol has to be TCP or SSL.</p> <p class="note">If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, i.e., HTTPS or SSL, the listener's <code>InstanceProtocol</code> has to be secure, i.e., HTTPS or SSL. If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be either HTTP or TCP.</p></li>
   *     <li><code>InstancePort</code> - <code>integer</code> - Required - Specifies the TCP port on which the instance server is listening. This property cannot be modified for the life of the LoadBalancer.</li>
   *     <li><code>SSLCertificateId</code> - <code>string</code> - Optional - The ARN string of the server certificate. To get the ARN of the server certificate, call the AWS Identity and Access Management <a href="http://docs.amazonwebservices.com/IAM/latest/APIReference/index.html?API_UploadServerCertificate.html">UploadServerCertificate</a> API.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_load_balancer_listeners: function(load_balancer_name,listeners,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.listeners = listeners;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateLoadBalancerListeners", param );
    return resposne;
  }, 
  /**
   * Creates a new policy that contains the necessary attributes depending on the policy type.
   * Policies are settings that are saved for your Elastic LoadBalancer and that can be applied to
   * the front-end listener, or the back-end application server, depending on your policy type.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer for which the policy is being created. This name must be unique within the client AWS account.
   * @param {String} policy_name (Required) The name of the LoadBalancer policy being created. The name must be unique within the set of policies for this LoadBalancer.
   * @param {String} policy_type_name (Required) The name of the base policy type being used to create this policy. To get the list of policy types, use the <code>DescribeLoadBalancerPolicyTypes</code> action.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PolicyAttributes</code> - <code>array</code> - Optional - A list of attributes associated with the policy being created. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>AttributeName</code> - <code>string</code> - Optional - The name of the attribute associated with the policy.</li>
   *       <li><code>AttributeValue</code> - <code>string</code> - Optional - The value of the attribute associated with the policy.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_load_balancer_policy: function(load_balancer_name,policy_name,policy_type_name,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.policy_name = policy_name;
    param.policy_type_name = policy_type_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateLoadBalancerPolicy", param );
    return resposne;
  }, 
  /**
   * Deletes the specified LoadBalancer.
   *  
   * If attempting to recreate the LoadBalancer, the client must reconfigure all the settings. The
   * DNS name associated with a deleted LoadBalancer will no longer be usable. Once deleted, the
   * name and associated DNS record of the LoadBalancer no longer exist and traffic sent to any of
   * its IP addresses will no longer be delivered to client instances. The client will not receive
   * the same DNS name even if a new LoadBalancer with same LoadBalancerName is created.
   *  
   * To successfully call this API, the client must provide the same account credentials as were
   * used to create the LoadBalancer.
   * 
   * <p class="note">
   * By design, if the LoadBalancer does not exist or has already been deleted, DeleteLoadBalancer
   * still succeeds.
   * </p>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_load_balancer: function(load_balancer_name,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Deletes listeners from the LoadBalancer for the specified port.
   *
   * @param {String} load_balancer_name (Required) The mnemonic name associated with the LoadBalancer.
   * @param {Number} load_balancer_ports (Required) The client port number(s) of the LoadBalancerListener(s) to be removed.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_load_balancer_listeners: function(load_balancer_name,load_balancer_ports,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.load_balancer_ports = load_balancer_ports;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteLoadBalancerListeners", param );
    return resposne;
  }, 
  /**
   * Deletes a policy from the LoadBalancer. The specified policy must not be enabled for any
   * listeners.
   *
   * @param {String} load_balancer_name (Required) The mnemonic name associated with the LoadBalancer. The name must be unique within your AWS account.
   * @param {String} policy_name (Required) The mnemonic name for the policy being deleted.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_load_balancer_policy: function(load_balancer_name,policy_name,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteLoadBalancerPolicy", param );
    return resposne;
  }, 
  /**
   * Deregisters instances from the LoadBalancer. Once the instance is deregistered, it will stop
   * receiving traffic from the LoadBalancer.
   *  
   * In order to successfully call this API, the same account credentials as those used to create
   * the LoadBalancer must be provided.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param array $instances (Required) A list of EC2 instance IDs consisting of all instances to be deregistered. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>InstanceId</code> - <code>string</code> - Optional - Provides an EC2 instance ID.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  deregister_instances_from_load_balancer: function(load_balancer_name,instances,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.instances = instances;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeregisterInstancesFromLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Returns the current state of the instances of the specified LoadBalancer. If no instances are
   * specified, the state of all the instances for the LoadBalancer is returned.
   * 
   * <p class="note">
   * The client must have created the specified input LoadBalancer in order to retrieve this
   * information; the client must provide the same account credentials as those that were used to
   * create the LoadBalancer.
   * </p>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Instances</code> - <code>array</code> - Optional - A list of instance IDs whose states are being queried. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>InstanceId</code> - <code>string</code> - Optional - Provides an EC2 instance ID.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_instance_health: function(load_balancer_name,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeInstanceHealth", param );
    return resposne;
  }, 
  /**
   * Returns detailed descriptions of the policies. If you specify a LoadBalancer name, the
   * operation returns either the descriptions of the specified policies, or descriptions of all the
   * policies created for the LoadBalancer. If you don't specify a LoadBalancer name, the operation
   * returns descriptions of the specified sample policies, or descriptions of all the sample
   * policies. The names of the sample policies have the <code>ELBSample-</code> prefix.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>LoadBalancerName</code> - <code>string</code> - Optional - The mnemonic name associated with the LoadBalancer. If no name is specified, the operation returns the attributes of either all the sample policies pre-defined by Elastic Load Balancing or the specified sample polices.</li>
   *   <li><code>PolicyNames</code> - <code>string|array</code> - Optional - The names of LoadBalancer policies you've created or Elastic Load Balancing sample policy names. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_load_balancer_policies: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeLoadBalancerPolicies", param );
    return resposne;
  }, 
  /**
   * Returns meta-information on the specified LoadBalancer policies defined by the Elastic Load
   * Balancing service. The policy types that are returned from this action can be used in a
   * <code>CreateLoadBalancerPolicy</code> action to instantiate specific policy configurations that
   * will be applied to an Elastic LoadBalancer.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PolicyTypeNames</code> - <code>string|array</code> - Optional - Specifies the name of the policy types. If no names are specified, returns the description of all the policy types defined by Elastic Load Balancing service. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_load_balancer_policy_types: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeLoadBalancerPolicyTypes", param );
    return resposne;
  }, 
  /**
   * Returns detailed configuration information for the specified LoadBalancers. If no LoadBalancers
   * are specified, the operation returns configuration information for all LoadBalancers created by
   * the caller.
   * 
   * <p class="note">
   * The client must have created the specified input LoadBalancers in order to retrieve this
   * information; the client must provide the same account credentials as those that were used to
   * create the LoadBalancer.
   * </p>
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>LoadBalancerNames</code> - <code>string|array</code> - Optional - A list of names associated with the LoadBalancers at creation time. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - An optional parameter reserved for future use.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_load_balancers: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeLoadBalancers", param );
    return resposne;
  }, 
  /**
   * Removes subnets from the set of configured subnets in the VPC for the LoadBalancer.
   *  
   * After a subnet is removed all of the EndPoints registered with the LoadBalancer that are in the
   * removed subnet will go into the <em>OutOfService</em> state. When a subnet is removed, the
   * LoadBalancer will balance the traffic among the remaining routable subnets for the
   * LoadBalancer.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer to be detached. The name must be unique within the client AWS account.
   * @param string|array $subnets (Required) A list of subnet IDs to remove from the set of configured subnets for the LoadBalancer. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  detach_load_balancer_from_subnets: function(load_balancer_name,subnets,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.subnets = subnets;

    param = this.marge_param(param,opt);
    var response = this.request(, "DetachLoadBalancerFromSubnets", param );
    return resposne;
  }, 
  /**
   * Removes the specified EC2 Availability Zones from the set of configured Availability Zones for
   * the LoadBalancer.
   *  
   * There must be at least one Availability Zone registered with a LoadBalancer at all times. A
   * client cannot remove all the Availability Zones from a LoadBalancer. Once an Availability Zone
   * is removed, all the instances registered with the LoadBalancer that are in the removed
   * Availability Zone go into the OutOfService state. Upon Availability Zone removal, the
   * LoadBalancer attempts to equally balance the traffic among its remaining usable Availability
   * Zones. Trying to remove an Availability Zone that was not associated with the LoadBalancer does
   * nothing.
   * 
   * <p class="note">
   * In order for this call to be successful, the client must have created the LoadBalancer. The
   * client must provide the same account credentials as those that were used to create the
   * LoadBalancer.
   * </p>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param string|array $availability_zones (Required) A list of Availability Zones to be removed from the LoadBalancer. <p class="note">There must be at least one Availability Zone registered with a LoadBalancer at all times. The client cannot remove all the Availability Zones from a LoadBalancer. Specified Availability Zones must be in the same Region.</p> Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  disable_availability_zones_for_load_balancer: function(load_balancer_name,availability_zones,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.availability_zones = availability_zones;

    param = this.marge_param(param,opt);
    var response = this.request(, "DisableAvailabilityZonesForLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Adds one or more EC2 Availability Zones to the LoadBalancer.
   *  
   * The LoadBalancer evenly distributes requests across all its registered Availability Zones that
   * contain instances. As a result, the client must ensure that its LoadBalancer is appropriately
   * scaled for each registered Availability Zone.
   * 
   * <p class="note">
   * The new EC2 Availability Zones to be added must be in the same EC2 Region as the Availability
   * Zones for which the LoadBalancer was created.
   * </p>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param string|array $availability_zones (Required) A list of new Availability Zones for the LoadBalancer. Each Availability Zone must be in the same Region as the LoadBalancer. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  enable_availability_zones_for_load_balancer: function(load_balancer_name,availability_zones,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.availability_zones = availability_zones;

    param = this.marge_param(param,opt);
    var response = this.request(, "EnableAvailabilityZonesForLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Adds new instances to the LoadBalancer.
   *  
   * Once the instance is registered, it starts receiving traffic and requests from the
   * LoadBalancer. Any instance that is not in any of the Availability Zones registered for the
   * LoadBalancer will be moved to the <em>OutOfService</em> state. It will move to the
   * <em>InService</em> state when the Availability Zone is added to the LoadBalancer.
   * 
   * <p class="note">
   * In order for this call to be successful, the client must have created the LoadBalancer. The
   * client must provide the same account credentials as those that were used to create the
   * LoadBalancer.
   * </p>
   * <p class="note">
   * Completion of this API does not guarantee that operation has completed. Rather, it means that
   * the request has been registered and the changes will happen shortly.
   * </p>
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param array $instances (Required) A list of instance IDs that should be registered with the LoadBalancer. <p class="note">When the instance is stopped and then restarted, the IP addresses associated with your instance changes. Elastic Load Balancing cannot recognize the new IP address, which prevents it from routing traffic to your instances. We recommend that you de-register your Amazon EC2 instances from your load balancer after you stop your instance, and then register the load balancer with your instance after you've restarted. To de-register your instances from load balancer, use <code>DeregisterInstancesFromLoadBalancer</code> action.</p> <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>InstanceId</code> - <code>string</code> - Optional - Provides an EC2 instance ID.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  register_instances_with_load_balancer: function(load_balancer_name,instances,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.instances = instances;

    param = this.marge_param(param,opt);
    var response = this.request(, "RegisterInstancesWithLoadBalancer", param );
    return resposne;
  }, 
  /**
   * Sets the certificate that terminates the specified listener's SSL connections. The specified
   * certificate replaces any prior certificate that was used on the same LoadBalancer and port.
   *
   * @param {String} load_balancer_name (Required) The name of the the LoadBalancer.
   * @param {Number} load_balancer_port (Required) The port that uses the specified SSL certificate.
   * @param {String} ssl_certificate_id (Required) The ID of the SSL certificate chain to use. For more information on SSL certificates, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/ManagingServerCerts.html">Managing Server Certificates</a> in the AWS Identity and Access Management documentation.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_load_balancer_listener_ssl_certificate: function(load_balancer_name,load_balancer_port,ssl_certificate_id,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.load_balancer_port = load_balancer_port;
    param.ssl_certificate_id = ssl_certificate_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "SetLoadBalancerListenerSslCertificate", param );
    return resposne;
  }, 
  /**
   * Replaces the current set of policies associated with a port on which the back-end server is
   * listening with a new set of policies. After the policies have been created using
   * <code>CreateLoadBalancerPolicy</code>, they can be applied here as a list. At this time, only
   * the back-end server authentication policy type can be applied to the back-end ports; this
   * policy type is composed of multiple public key policies.
   *
   * @param {String} load_balancer_name (Required) The mnemonic name associated with the LoadBalancer. This name must be unique within the client AWS account.
   * @param {Number} instance_port (Required) The port number associated with the back-end server.
   * @param string|array $policy_names (Required) List of policy names to be set. If the list is empty, then all current polices are removed from the back-end server. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_load_balancer_policies_for_backend_server: function(load_balancer_name,instance_port,policy_names,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.instance_port = instance_port;
    param.policy_names = policy_names;

    param = this.marge_param(param,opt);
    var response = this.request(, "SetLoadBalancerPoliciesForBackendServer", param );
    return resposne;
  }, 
  /**
   * Associates, updates, or disables a policy with a listener on the LoadBalancer. You can
   * associate multiple policies with a listener.
   *
   * @param {String} load_balancer_name (Required) The name associated with the LoadBalancer. The name must be unique within the client AWS account.
   * @param {Number} load_balancer_port (Required) The external port of the LoadBalancer with which this policy applies to.
   * @param string|array $policy_names (Required) List of policies to be associated with the listener. Currently this list can have at most one policy. If the list is empty, the current policy is removed from the listener. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_load_balancer_policies_of_listener: function(load_balancer_name,load_balancer_port,policy_names,opt){
    var param = {};
    param.load_balancer_name = load_balancer_name;
    param.load_balancer_port = load_balancer_port;
    param.policy_names = policy_names;

    param = this.marge_param(param,opt);
    var response = this.request(, "SetLoadBalancerPoliciesOfListener", param );
    return resposne;
  }
}
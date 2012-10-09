/**
 * @class AmazonEC2Client
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonEC2(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonEC2.prototype = {
  service:'ec2',
  version:'2012-07-20',
  auth_class: new AuthV2Query(),
  /**
   * @memberOf AmazonEC2
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Activates a specific number of licenses for a 90-day period. Activations can be done against a
   * specific license ID.
   *
   * @param {String} license_id (Required) Specifies the ID for the specific license to activate against.
   * @param {Number} capacity (Required) Specifies the additional number of licenses to activate.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  activate_license: function(license_id,capacity,opt){
    var param = {};
    param.license_id = license_id;
    param.capacity = capacity;

    param = this.marge_param(param,opt);
    var response = this.request(, "ActivateLicense", param );
    return resposne;
  }, 
  /**
   * The AllocateAddress operation acquires an elastic IP address for use with your account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Domain</code> - <code>string</code> - Optional - Set to <code>vpc</code> to allocate the address to your VPC. By default, will allocate to EC2. [Allowed values: <code>vpc</code>, <code>standard</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  allocate_address: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "AllocateAddress", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PrivateIpAddress</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>SecondaryPrivateIpAddressCount</code> - <code>integer</code> - Optional - </li>
   *   <li><code>AllowReassignment</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  assign_private_ip_addresses: function(network_interface_id,opt){
    var param = {};
    param.network_interface_id = network_interface_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AssignPrivateIpAddresses", param );
    return resposne;
  }, 
  /**
   * The AssociateAddress operation associates an elastic IP address with an instance.
   *  
   * If the IP address is currently assigned to another instance, the IP address is assigned to the
   * new instance. This is an idempotent operation. If you enter it more than once, Amazon EC2 does
   * not return an error.
   *
   * @param {String} instance_id (Required) The instance to associate with the IP address.
   * @param {String} public_ip (Required) IP address that you are assigning to the instance.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AllocationId</code> - <code>string</code> - Optional - The allocation ID that AWS returned when you allocated the elastic IP address for use with Amazon VPC.</li>
   *   <li><code>NetworkInterfaceId</code> - <code>string</code> - Optional - </li>
   *   <li><code>PrivateIpAddress</code> - <code>string</code> - Optional - </li>
   *   <li><code>AllowReassociation</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  associate_address: function(instance_id,public_ip,opt){
    var param = {};
    param.instance_id = instance_id;
    param.public_ip = public_ip;

    param = this.marge_param(param,opt);
    var response = this.request(, "AssociateAddress", param );
    return resposne;
  }, 
  /**
   * Associates a set of DHCP options (that you've previously created) with the specified VPC. Or,
   * associates the default DHCP options with the VPC. The default set consists of the standard EC2
   * host name, no domain name, no DNS server, no NTP server, and no NetBIOS server or node type.
   * After you associate the options with the VPC, any existing instances and all new instances that
   * you launch in that VPC use the options. For more information about the supported DHCP options
   * and using them with Amazon VPC, go to Using DHCP Options in the Amazon Virtual Private Cloud
   * Developer Guide.
   *
   * @param {String} dhcp_options_id (Required) The ID of the DHCP options to associate with the VPC. Specify "default" to associate the default DHCP options with the VPC.
   * @param {String} vpc_id (Required) The ID of the VPC to associate the DHCP options with.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  associate_dhcp_options: function(dhcp_options_id,vpc_id,opt){
    var param = {};
    param.dhcp_options_id = dhcp_options_id;
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AssociateDhcpOptions", param );
    return resposne;
  }, 
  /**
   * Associates a subnet with a route table. The subnet and route table must be in the same VPC.
   * This association causes traffic originating from the subnet to be routed according to the
   * routes in the route table. The action returns an association ID, which you need if you want to
   * disassociate the route table from the subnet later. A route table can be associated with
   * multiple subnets.
   *  
   * For more information about route tables, go to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} subnet_id (Required) The ID of the subnet.
   * @param {String} route_table_id (Required) The ID of the route table.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  associate_route_table: function(subnet_id,route_table_id,opt){
    var param = {};
    param.subnet_id = subnet_id;
    param.route_table_id = route_table_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AssociateRouteTable", param );
    return resposne;
  }, 
  /**
   * Attaches an Internet gateway to a VPC, enabling connectivity between the Internet and the VPC.
   * For more information about your VPC and Internet gateway, go to the Amazon Virtual Private
   * Cloud User Guide.
   *
   * @param {String} internet_gateway_id (Required) The ID of the Internet gateway to attach.
   * @param {String} vpc_id (Required) The ID of the VPC.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  attach_internet_gateway: function(internet_gateway_id,vpc_id,opt){
    var param = {};
    param.internet_gateway_id = internet_gateway_id;
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AttachInternetGateway", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param {String} instance_id (Required) 
   * @param {Number} device_index (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  attach_network_interface: function(network_interface_id,instance_id,device_index,opt){
    var param = {};
    param.network_interface_id = network_interface_id;
    param.instance_id = instance_id;
    param.device_index = device_index;

    param = this.marge_param(param,opt);
    var response = this.request(, "AttachNetworkInterface", param );
    return resposne;
  }, 
  /**
   * Attach a previously created volume to a running instance.
   *
   * @param {String} volume_id (Required) The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running.
   * @param {String} instance_id (Required) The ID of the instance to which the volume attaches. The volume and instance must be within the same Availability Zone and the instance must be running.
   * @param {String} device (Required) Specifies how the device is exposed to the instance (e.g., <code>/dev/sdh</code>).
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  attach_volume: function(volume_id,instance_id,device,opt){
    var param = {};
    param.volume_id = volume_id;
    param.instance_id = instance_id;
    param.device = device;

    param = this.marge_param(param,opt);
    var response = this.request(, "AttachVolume", param );
    return resposne;
  }, 
  /**
   * Attaches a VPN gateway to a VPC. This is the last step required to get your VPC fully connected
   * to your data center before launching instances in it. For more information, go to Process for
   * Using Amazon VPC in the Amazon Virtual Private Cloud Developer Guide.
   *
   * @param {String} vpn_gateway_id (Required) The ID of the VPN gateway to attach to the VPC.
   * @param {String} vpc_id (Required) The ID of the VPC to attach to the VPN gateway.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  attach_vpn_gateway: function(vpn_gateway_id,vpc_id,opt){
    var param = {};
    param.vpn_gateway_id = vpn_gateway_id;
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AttachVpnGateway", param );
    return resposne;
  }, 
  /**
   * This action applies only to security groups in a VPC; it's not supported for EC2 security
   * groups. For information about Amazon Virtual Private Cloud and VPC security groups, go to the
   * Amazon Virtual Private Cloud User Guide.
   *  
   * The action adds one or more egress rules to a VPC security group. Specifically, this permits
   * instances in a security group to send traffic to either one or more destination CIDR IP address
   * ranges, or to one or more destination security groups in the same VPC.
   *  
   * Each rule consists of the protocol (e.g., TCP), plus either a CIDR range, or a source group.
   * For the TCP and UDP protocols, you must also specify the destination port or port range. For
   * the ICMP protocol, you must also specify the ICMP type and code. You can use <code>-1</code> as
   * a wildcard for the ICMP type or code.
   *  
   * Rule changes are propagated to instances within the security group as quickly as possible.
   * However, a small delay might occur.
   *  
   * <strong>Important:</strong> For VPC security groups: You can have up to 50 rules total per
   * group (covering both ingress and egress).
   *
   * @param {String} group_id (Required) ID of the VPC security group to modify.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>IpPermissions</code> - <code>array</code> - Optional - List of IP permissions to authorize on the specified security group. Specifying permissions through IP permissions is the preferred way of authorizing permissions since it offers more flexibility and control. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>IpProtocol</code> - <code>string</code> - Optional - The IP protocol of this permission. Valid protocol values: <code>tcp</code>, <code>udp</code>, <code>icmp</code></li>
   *       <li><code>FromPort</code> - <code>integer</code> - Optional - Start of port range for the TCP and UDP protocols, or an ICMP type number. An ICMP type number of <code>-1</code> indicates a wildcard (i.e., any ICMP type number).</li>
   *       <li><code>ToPort</code> - <code>integer</code> - Optional - End of port range for the TCP and UDP protocols, or an ICMP code. An ICMP code of <code>-1</code> indicates a wildcard (i.e., any ICMP code).</li>
   *       <li><code>Groups</code> - <code>array</code> - Optional - The list of AWS user IDs and groups included in this permission. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The AWS user ID of an account.</li>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - Name of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *           <li><code>GroupId</code> - <code>string</code> - Optional - ID of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>IpRanges</code> - <code>string|array</code> - Optional - The list of CIDR IP ranges included in this permission. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  authorize_security_group_egress: function(group_id,opt){
    var param = {};
    param.group_id = group_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "AuthorizeSecurityGroupEgress", param );
    return resposne;
  }, 
  /**
   * The AuthorizeSecurityGroupIngress operation adds permissions to a security group.
   *  
   * Permissions are specified by the IP protocol (TCP, UDP or ICMP), the source of the request (by
   * IP range or an Amazon EC2 user-group pair), the source and destination port ranges (for TCP and
   * UDP), and the ICMP codes and types (for ICMP). When authorizing ICMP, <code>-1</code> can be
   * used as a wildcard in the type and code fields.
   *  
   * Permission changes are propagated to instances within the security group as quickly as
   * possible. However, depending on the number of instances, a small delay might occur.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GroupName</code> - <code>string</code> - Optional - Name of the standard (EC2) security group to modify. The group must belong to your account. Can be used instead of GroupID for standard (EC2) security groups.</li>
   *   <li><code>GroupId</code> - <code>string</code> - Optional - ID of the standard (EC2) or VPC security group to modify. The group must belong to your account. Required for VPC security groups; can be used instead of GroupName for standard (EC2) security groups.</li>
   *   <li><code>IpPermissions</code> - <code>array</code> - Optional - List of IP permissions to authorize on the specified security group. Specifying permissions through IP permissions is the preferred way of authorizing permissions since it offers more flexibility and control. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>IpProtocol</code> - <code>string</code> - Optional - The IP protocol of this permission. Valid protocol values: <code>tcp</code>, <code>udp</code>, <code>icmp</code></li>
   *       <li><code>FromPort</code> - <code>integer</code> - Optional - Start of port range for the TCP and UDP protocols, or an ICMP type number. An ICMP type number of <code>-1</code> indicates a wildcard (i.e., any ICMP type number).</li>
   *       <li><code>ToPort</code> - <code>integer</code> - Optional - End of port range for the TCP and UDP protocols, or an ICMP code. An ICMP code of <code>-1</code> indicates a wildcard (i.e., any ICMP code).</li>
   *       <li><code>Groups</code> - <code>array</code> - Optional - The list of AWS user IDs and groups included in this permission. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The AWS user ID of an account.</li>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - Name of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *           <li><code>GroupId</code> - <code>string</code> - Optional - ID of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>IpRanges</code> - <code>string|array</code> - Optional - The list of CIDR IP ranges included in this permission. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  authorize_security_group_ingress: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "AuthorizeSecurityGroupIngress", param );
    return resposne;
  }, 
  /**
   * The BundleInstance operation request that an instance is bundled the next time it boots. The
   * bundling process creates a new image from a running instance and stores the AMI data in S3. Once
   * bundled, the image must be registered in the normal way using the RegisterImage API.
   *
   * @param {String} instance_id (Required) The ID of the instance to bundle.
   * @param array $policy (Required) The details of S3 storage for bundling a Windows instance. Takes an associative array of parameters that can have the following keys: <ul>
   *   <li><code>Bucket</code> - <code>string</code> - Optional - The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</li>
   *   <li><code>Prefix</code> - <code>string</code> - Optional - The prefix to use when storing the AMI in S3.</li>
   *   <li><code>AWSAccessKeyId</code> - <code>string</code> - Optional - The Access Key ID of the owner of the Amazon S3 bucket. Use the <CFPolicy::get_key()> method of a <CFPolicy> instance.</li>
   *   <li><code>UploadPolicy</code> - <code>string</code> - Optional - A Base64-encoded Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on the user's behalf. Use the <CFPolicy::get_policy()> method of a <CFPolicy> instance.</li>
   *   <li><code>UploadPolicySignature</code> - <code>string</code> - Optional - The signature of the Base64 encoded JSON document. Use the <CFPolicy::get_policy_signature()> method of a <CFPolicy> instance.</li></ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  bundle_instance: function(instance_id,policy,opt){
    var param = {};
    param.instance_id = instance_id;
    param.policy = policy;

    param = this.marge_param(param,opt);
    var response = this.request(, "BundleInstance", param );
    return resposne;
  }, 
  /**
   * CancelBundleTask operation cancels a pending or in-progress bundling task. This is an
   * asynchronous call and it make take a while for the task to be canceled. If a task is canceled
   * while it is storing items, there may be parts of the incomplete AMI stored in S3. It is up to
   * the caller to clean up these parts from S3.
   *
   * @param {String} bundle_id (Required) The ID of the bundle task to cancel.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  cancel_bundle_task: function(bundle_id,opt){
    var param = {};
    param.bundle_id = bundle_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CancelBundleTask", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} conversion_task_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ReasonMessage</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  cancel_conversion_task: function(conversion_task_id,opt){
    var param = {};
    param.conversion_task_id = conversion_task_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CancelConversionTask", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} export_task_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  cancel_export_task: function(export_task_id,opt){
    var param = {};
    param.export_task_id = export_task_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CancelExportTask", param );
    return resposne;
  }, 
  /**
   * Cancels one or more Spot Instance requests.
   *  
   * Spot Instances are instances that Amazon EC2 starts on your behalf when the maximum price that
   * you specify exceeds the current Spot Price. Amazon EC2 periodically sets the Spot Price based
   * on available Spot Instance capacity and current spot instance requests.
   *  
   * For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide</a>.
   *
   * @param string|array $spot_instance_request_id (Required) Specifies the ID of the Spot Instance request. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  cancel_spot_instance_requests: function(spot_instance_request_id,opt){
    var param = {};
    param.spot_instance_request_id = spot_instance_request_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CancelSpotInstanceRequests", param );
    return resposne;
  }, 
  /**
   * The ConfirmProductInstance operation returns true if the specified product code is attached to
   * the specified instance. The operation returns false if the product code is not attached to the
   * instance.
   *  
   * The ConfirmProductInstance operation can only be executed by the owner of the AMI. This feature
   * is useful when an AMI owner is providing support and wants to verify whether a user's instance
   * is eligible.
   *
   * @param {String} product_code (Required) The product code to confirm.
   * @param {String} instance_id (Required) The ID of the instance to confirm.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  confirm_product_instance: function(product_code,instance_id,opt){
    var param = {};
    param.product_code = product_code;
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ConfirmProductInstance", param );
    return resposne;
  }, 
  /**
   * Provides information to AWS about your customer gateway device. The customer gateway is the
   * appliance at your end of the VPN connection (compared to the VPN gateway, which is the device
   * at the AWS side of the VPN connection). You can have a single active customer gateway per AWS
   * account (active means that you've created a VPN connection to use with the customer gateway).
   * AWS might delete any customer gateway that you create with this operation if you leave it
   * inactive for an extended period of time.
   *  
   * You must provide the Internet-routable IP address of the customer gateway's external interface.
   * The IP address must be static.
   *  
   * You must also provide the device's Border Gateway Protocol (BGP) Autonomous System Number
   * (ASN). You can use an existing ASN assigned to your network. If you don't have an ASN already,
   * you can use a private ASN (in the 64512 - 65534 range). For more information about ASNs, go to
   *   <a href=
   * "http://en.wikipedia.org/wiki/Autonomous_system_%28Internet%29">http://en.wikipedia.org/wiki/Autonomous_system_%28Internet%29</a>.
   *
   * @param {String} type (Required) The type of VPN connection this customer gateway supports.
   * @param {String} ip_address (Required) The Internet-routable IP address for the customer gateway's outside interface. The address must be static
   * @param {Number} bgp_asn (Required) The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_customer_gateway: function(type,ip_address,bgp_asn,opt){
    var param = {};
    param.type = type;
    param.ip_address = ip_address;
    param.bgp_asn = bgp_asn;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateCustomerGateway", param );
    return resposne;
  }, 
  /**
   * Creates a set of DHCP options that you can then associate with one or more VPCs, causing all
   * existing and new instances that you launch in those VPCs to use the set of DHCP options. The
   * following table lists the individual DHCP options you can specify. For more information about
   * the options, go to <a href=
   * "http://www.ietf.org/rfc/rfc2132.txt">http://www.ietf.org/rfc/rfc2132.txt</a>
   *
   * @param array $dhcp_configuration (Required) A set of one or more DHCP configurations. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Key</code> - <code>string</code> - Optional - Contains the name of a DHCP option.</li>
   *     <li><code>Value</code> - <code>string|array</code> - Optional - Contains a set of values for a DHCP option. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_dhcp_options: function(dhcp_configuration,opt){
    var param = {};
    param.dhcp_configuration = dhcp_configuration;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateDhcpOptions", param );
    return resposne;
  }, 
  /**
   * Creates an Amazon EBS-backed AMI from a "running" or "stopped" instance. AMIs that use an
   * Amazon EBS root device boot faster than AMIs that use instance stores. They can be up to 1 TiB
   * in size, use storage that persists on instance failure, and can be stopped and started.
   *
   * @param {String} instance_id (Required) The ID of the instance from which to create the new image.
   * @param {String} name (Required) The name for the new AMI being created.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description</code> - <code>string</code> - Optional - The description for the new AMI being created.</li>
   *   <li><code>NoReboot</code> - <code>boolean</code> - Optional - By default this property is set to <code>false</code>, which means Amazon EC2 attempts to cleanly shut down the instance before image creation and reboots the instance afterwards. When set to true, Amazon EC2 will not shut down the instance before creating the image. When this option is used, file system integrity on the created image cannot be guaranteed.</li>
   *   <li><code>BlockDeviceMapping</code> - <code>array</code> - Optional - The BlockDeviceMappingItemType data type. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>VirtualName</code> - <code>string</code> - Optional - Specifies the virtual device name.</li>
   *       <li><code>DeviceName</code> - <code>string</code> - Optional - Specifies the device name (e.g., <code>/dev/sdh</code>).</li>
   *       <li><code>Ebs</code> - <code>array</code> - Optional - Specifies parameters used to automatically setup Amazon EBS volumes when the instance is launched. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>SnapshotId</code> - <code>string</code> - Optional - The ID of the snapshot from which the volume will be created.</li>
   *           <li><code>VolumeSize</code> - <code>integer</code> - Optional - The size of the volume, in gigabytes.</li>
   *           <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - Specifies whether the Amazon EBS volume is deleted on instance termination.</li>
   *           <li><code>VolumeType</code> - <code>string</code> - Optional -  [Allowed values: <code>standard</code>, <code>io1</code>]</li>
   *           <li><code>Iops</code> - <code>integer</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>NoDevice</code> - <code>string</code> - Optional - Specifies the device name to suppress during instance launch.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_image: function(instance_id,name,opt){
    var param = {};
    param.instance_id = instance_id;
    param.name = name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateImage", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} instance_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description</code> - <code>string</code> - Optional - </li>
   *   <li><code>TargetEnvironment</code> - <code>string</code> - Optional -  [Allowed values: <code>citrix</code>, <code>vmware</code>]</li>
   *   <li><code>ExportToS3</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>DiskImageFormat</code> - <code>string</code> - Optional -  [Allowed values: <code>vmdk</code>, <code>vhd</code>]</li>
   *       <li><code>ContainerFormat</code> - <code>string</code> - Optional -  [Allowed values: <code>ova</code>]</li>
   *       <li><code>S3Bucket</code> - <code>string</code> - Optional - </li>
   *       <li><code>S3Prefix</code> - <code>string</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_instance_export_task: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateInstanceExportTask", param );
    return resposne;
  }, 
  /**
   * Creates a new Internet gateway in your AWS account. After creating the Internet gateway, you
   * then attach it to a VPC using <code>AttachInternetGateway</code>. For more information about
   * your VPC and Internet gateway, go to Amazon Virtual Private Cloud User Guide.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_internet_gateway: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateInternetGateway", param );
    return resposne;
  }, 
  /**
   * The CreateKeyPair operation creates a new 2048 bit RSA key pair and returns a unique ID that
   * can be used to reference this key pair when launching new instances. For more information, see
   * RunInstances.
   *
   * @param {String} key_name (Required) The unique name for the new key pair.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_key_pair: function(key_name,opt){
    var param = {};
    param.key_name = key_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateKeyPair", param );
    return resposne;
  }, 
  /**
   * Creates a new network ACL in a VPC. Network ACLs provide an optional layer of security (on top
   * of security groups) for the instances in your VPC. For more information about network ACLs, go
   * to Network ACLs in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} vpc_id (Required) The ID of the VPC where the network ACL will be created.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_network_acl: function(vpc_id,opt){
    var param = {};
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateNetworkAcl", param );
    return resposne;
  }, 
  /**
   * Creates an entry (i.e., rule) in a network ACL with a rule number you specify. Each network ACL
   * has a set of numbered ingress rules and a separate set of numbered egress rules. When
   * determining whether a packet should be allowed in or out of a subnet associated with the ACL,
   * Amazon VPC processes the entries in the ACL according to the rule numbers, in ascending order.
   *  
   * <strong>Important:</strong> We recommend that you leave room between the rules (e.g., 100, 110,
   * 120, etc.), and not number them sequentially (101, 102, 103, etc.). This allows you to easily
   * add a new rule between existing ones without having to renumber the rules.
   *  
   * After you add an entry, you can't modify it; you must either replace it, or create a new entry
   * and delete the old one.
   *  
   * For more information about network ACLs, go to Network ACLs in the Amazon Virtual Private Cloud
   * User Guide.
   *
   * @param {String} network_acl_id (Required) ID of the ACL where the entry will be created.
   * @param {Number} rule_number (Required) Rule number to assign to the entry (e.g., 100). ACL entries are processed in ascending order by rule number.
   * @param {String} protocol (Required) IP protocol the rule applies to. Valid Values: <code>tcp</code>, <code>udp</code>, <code>icmp</code> or an IP protocol number.
   * @param {String} rule_action (Required) Whether to allow or deny traffic that matches the rule. [Allowed values: <code>allow</code>, <code>deny</code>]
   * @param boolean $egress (Required) Whether this rule applies to egress traffic from the subnet (<code>true</code>) or ingress traffic to the subnet (<code>false</code>).
   * @param {String} cidr_block (Required) The CIDR range to allow or deny, in CIDR notation (e.g., <code>172.16.0.0/24</code>).
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Icmp</code> - <code>array</code> - Optional - ICMP values. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Type</code> - <code>integer</code> - Optional - For the ICMP protocol, the ICMP type. A value of <code>-1</code> is a wildcard meaning all types. Required if specifying <code>icmp</code> for the protocol.</li>
   *       <li><code>Code</code> - <code>integer</code> - Optional - For the ICMP protocol, the ICMP code. A value of <code>-1</code> is a wildcard meaning all codes. Required if specifying <code>icmp</code> for the protocol.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>PortRange</code> - <code>array</code> - Optional - Port ranges. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>From</code> - <code>integer</code> - Optional - The first port in the range. Required if specifying <code>tcp</code> or <code>udp</code> for the protocol.</li>
   *       <li><code>To</code> - <code>integer</code> - Optional - The last port in the range. Required if specifying <code>tcp</code> or <code>udp</code> for the protocol.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_network_acl_entry: function(network_acl_id,rule_number,protocol,rule_action,egress,cidr_block,opt){
    var param = {};
    param.network_acl_id = network_acl_id;
    param.rule_number = rule_number;
    param.protocol = protocol;
    param.rule_action = rule_action;
    param.egress = egress;
    param.cidr_block = cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateNetworkAclEntry", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} subnet_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description</code> - <code>string</code> - Optional - </li>
   *   <li><code>PrivateIpAddress</code> - <code>string</code> - Optional - </li>
   *   <li><code>SecurityGroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>PrivateIpAddresses</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>PrivateIpAddress</code> - <code>string</code> - Required - </li>
   *       <li><code>Primary</code> - <code>boolean</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>SecondaryPrivateIpAddressCount</code> - <code>integer</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_network_interface: function(subnet_id,opt){
    var param = {};
    param.subnet_id = subnet_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateNetworkInterface", param );
    return resposne;
  }, 
  /**
   * Creates a <code>PlacementGroup</code> into which multiple Amazon EC2 instances can be launched.
   * Users must give the group a name unique within the scope of the user account.
   *
   * @param {String} group_name (Required) The name of the <code>PlacementGroup</code>.
   * @param {String} strategy (Required) The <code>PlacementGroup</code> strategy. [Allowed values: <code>cluster</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_placement_group: function(group_name,strategy,opt){
    var param = {};
    param.group_name = group_name;
    param.strategy = strategy;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreatePlacementGroup", param );
    return resposne;
  }, 
  /**
   * Creates a new route in a route table within a VPC. The route's target can be either a gateway
   * attached to the VPC or a NAT instance in the VPC.
   *  
   * When determining how to route traffic, we use the route with the most specific match. For
   * example, let's say the traffic is destined for <code>192.0.2.3</code>, and the route table
   * includes the following two routes:
   * 
   * <ul>
   *   <li><code>192.0.2.0/24</code> (goes to some target A)</li>
   *   <li><code>192.0.2.0/28</code> (goes to some target B)</li>
   * </ul>
   * 
   * Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route
   * in the list is more specific, so we use that route to determine where to target the traffic.
   *  
   * For more information about route tables, go to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} route_table_id (Required) The ID of the route table where the route will be added.
   * @param {String} destination_cidr_block (Required) The CIDR address block used for the destination match. For example: <code>0.0.0.0/0</code>. Routing decisions are based on the most specific match.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GatewayId</code> - <code>string</code> - Optional - The ID of a VPN or Internet gateway attached to your VPC. You must provide either <code>GatewayId</code> or <code>InstanceId</code>, but not both.</li>
   *   <li><code>InstanceId</code> - <code>string</code> - Optional - The ID of a NAT instance in your VPC. You must provide either <code>GatewayId</code> or <code>InstanceId</code>, but not both.</li>
   *   <li><code>NetworkInterfaceId</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_route: function(route_table_id,destination_cidr_block,opt){
    var param = {};
    param.route_table_id = route_table_id;
    param.destination_cidr_block = destination_cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateRoute", param );
    return resposne;
  }, 
  /**
   * Creates a new route table within a VPC. After you create a new route table, you can add routes
   * and associate the table with a subnet. For more information about route tables, go to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} vpc_id (Required) The ID of the VPC where the route table will be created.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_route_table: function(vpc_id,opt){
    var param = {};
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateRouteTable", param );
    return resposne;
  }, 
  /**
   * The CreateSecurityGroup operation creates a new security group.
   *  
   * Every instance is launched in a security group. If no security group is specified during
   * launch, the instances are launched in the default security group. Instances within the same
   * security group have unrestricted network access to each other. Instances will reject network
   * access attempts from other instances in a different security group. As the owner of instances
   * you can grant or revoke specific permissions using the AuthorizeSecurityGroupIngress and
   * RevokeSecurityGroupIngress operations.
   *
   * @param {String} group_name (Required) Name of the security group.
   * @param {String} group_description (Required) Description of the group. This is informational only.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>VpcId</code> - <code>string</code> - Optional - ID of the VPC.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_security_group: function(group_name,group_description,opt){
    var param = {};
    param.group_name = group_name;
    param.group_description = group_description;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateSecurityGroup", param );
    return resposne;
  }, 
  /**
   * Create a snapshot of the volume identified by volume ID. A volume does not have to be detached
   * at the time the snapshot is taken.
   * 
   * <p class="note">
   * Snapshot creation requires that the system is in a consistent state. For instance, this means
   * that if taking a snapshot of a database, the tables must be read-only locked to ensure that the
   * snapshot will not contain a corrupted version of the database. Therefore, be careful when using
   * this API to ensure that the system remains in the consistent state until the create snapshot
   * status has returned.
   * </p>
   *
   * @param {String} volume_id (Required) The ID of the volume from which to create the snapshot.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description</code> - <code>string</code> - Optional - The description for the new snapshot.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_snapshot: function(volume_id,opt){
    var param = {};
    param.volume_id = volume_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateSnapshot", param );
    return resposne;
  }, 
  /**
   * Creates the data feed for Spot Instances, enabling you to view Spot Instance usage logs. You
   * can create one data feed per account.
   *  
   * For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide</a>.
   *
   * @param {String} bucket (Required) The Amazon S3 bucket in which to store the Spot Instance datafeed.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Prefix</code> - <code>string</code> - Optional - The prefix that is prepended to datafeed files.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_spot_datafeed_subscription: function(bucket,opt){
    var param = {};
    param.bucket = bucket;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateSpotDatafeedSubscription", param );
    return resposne;
  }, 
  /**
   * Creates a subnet in an existing VPC. You can create up to 20 subnets in a VPC. If you add more
   * than one subnet to a VPC, they're set up in a star topology with a logical router in the
   * middle. When you create each subnet, you provide the VPC ID and the CIDR block you want for the
   * subnet. Once you create a subnet, you can't change its CIDR block. The subnet's CIDR block can
   * be the same as the VPC's CIDR block (assuming you want only a single subnet in the VPC), or a
   * subset of the VPC's CIDR block. If you create more than one subnet in a VPC, the subnets' CIDR
   * blocks must not overlap. The smallest subnet (and VPC) you can create uses a <code>/28</code>
   * netmask (16 IP addresses), and the largest uses a <code>/18</code> netmask (16,384 IP
   * addresses).
   * 
   * <p class="important"></p> 
   * AWS reserves both the first four and the last IP address in each subnet's CIDR block. They're
   * not available for use.
   *
   * @param {String} vpc_id (Required) The ID of the VPC to create the subnet in.
   * @param {String} cidr_block (Required) The CIDR block the subnet is to cover.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AvailabilityZone</code> - <code>string</code> - Optional - The Availability Zone to create the subnet in.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_subnet: function(vpc_id,cidr_block,opt){
    var param = {};
    param.vpc_id = vpc_id;
    param.cidr_block = cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateSubnet", param );
    return resposne;
  }, 
  /**
   * Adds or overwrites tags for the specified resources. Each resource can have a maximum of 10
   * tags. Each tag consists of a key-value pair. Tag keys must be unique per resource.
   *
   * @param string|array $resource_id (Required) One or more IDs of resources to tag. This could be the ID of an AMI, an instance, an EBS volume, or snapshot, etc. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $tag (Required) The tags to add or overwrite for the specified resources. Each tag item consists of a key-value pair. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Key</code> - <code>string</code> - Optional - The tag's key.</li>
   *     <li><code>Value</code> - <code>string</code> - Optional - The tag's value.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_tags: function(resource_id,tag,opt){
    var param = {};
    param.resource_id = resource_id;
    param.tag = tag;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateTags", param );
    return resposne;
  }, 
  /**
   * Initializes an empty volume of a given size.
   *
   * @param {String} availability_zone (Required) The Availability Zone in which to create the new volume.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Size</code> - <code>integer</code> - Optional - The size of the volume, in gigabytes. Required if you are not creating a volume from a snapshot.</li>
   *   <li><code>SnapshotId</code> - <code>string</code> - Optional - The ID of the snapshot from which to create the new volume.</li>
   *   <li><code>VolumeType</code> - <code>string</code> - Optional -  [Allowed values: <code>standard</code>, <code>io1</code>]</li>
   *   <li><code>Iops</code> - <code>integer</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_volume: function(availability_zone,opt){
    var param = {};
    param.availability_zone = availability_zone;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateVolume", param );
    return resposne;
  }, 
  /**
   * Creates a VPC with the CIDR block you specify. The smallest VPC you can create uses a
   * <code>/28</code> netmask (16 IP addresses), and the largest uses a <code>/18</code> netmask
   * (16,384 IP addresses). To help you decide how big to make your VPC, go to the topic about
   * creating VPCs in the Amazon Virtual Private Cloud Developer Guide.
   *  
   * By default, each instance you launch in the VPC has the default DHCP options (the standard EC2
   * host name, no domain name, no DNS server, no NTP server, and no NetBIOS server or node type).
   *
   * @param {String} cidr_block (Required) A valid CIDR block.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceTenancy</code> - <code>string</code> - Optional - The allowed tenancy of instances launched into the VPC. A value of default means instances can be launched with any tenancy; a value of dedicated means instances must be launched with tenancy as dedicated.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_vpc: function(cidr_block,opt){
    var param = {};
    param.cidr_block = cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateVpc", param );
    return resposne;
  }, 
  /**
   * Creates a new VPN connection between an existing VPN gateway and customer gateway. The only
   * supported connection type is ipsec.1.
   *  
   * The response includes information that you need to configure your customer gateway, in XML
   * format. We recommend you use the command line version of this operation
   * (<code>ec2-create-vpn-connection</code>), which takes an <code>-f</code> option (for format)
   * and returns configuration information formatted as expected by the vendor you specified, or in
   * a generic, human readable format. For information about the command, go to
   * <code>ec2-create-vpn-connection</code> in the Amazon Virtual Private Cloud Command Line
   * Reference.
   * 
   * <p class="important"></p> 
   * We strongly recommend you use HTTPS when calling this operation because the response contains
   * sensitive cryptographic information for configuring your customer gateway.
   *  
   * If you decide to shut down your VPN connection for any reason and then create a new one, you
   * must re-configure your customer gateway with the new information returned from this call.
   *
   * @param {String} type (Required) The type of VPN connection.
   * @param {String} customer_gateway_id (Required) The ID of the customer gateway.
   * @param {String} vpn_gateway_id (Required) The ID of the VPN gateway.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_vpn_connection: function(type,customer_gateway_id,vpn_gateway_id,opt){
    var param = {};
    param.type = type;
    param.customer_gateway_id = customer_gateway_id;
    param.vpn_gateway_id = vpn_gateway_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateVpnConnection", param );
    return resposne;
  }, 
  /**
   * Creates a new VPN gateway. A VPN gateway is the VPC-side endpoint for your VPN connection. You
   * can create a VPN gateway before creating the VPC itself.
   *
   * @param {String} type (Required) The type of VPN connection this VPN gateway supports.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AvailabilityZone</code> - <code>string</code> - Optional - The Availability Zone in which to create the VPN gateway.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_vpn_gateway: function(type,opt){
    var param = {};
    param.type = type;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateVpnGateway", param );
    return resposne;
  }, 
  /**
   * Deactivates a specific number of licenses. Deactivations can be done against a specific license
   * ID after they have persisted for at least a 90-day period.
   *
   * @param {String} license_id (Required) Specifies the ID for the specific license to deactivate against.
   * @param {Number} capacity (Required) Specifies the amount of capacity to deactivate against the license.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  deactivate_license: function(license_id,capacity,opt){
    var param = {};
    param.license_id = license_id;
    param.capacity = capacity;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeactivateLicense", param );
    return resposne;
  }, 
  /**
   * Deletes a customer gateway. You must delete the VPN connection before deleting the customer
   * gateway.
   *  
   * You can have a single active customer gateway per AWS account (active means that you've created
   * a VPN connection with that customer gateway). AWS might delete any customer gateway you leave
   * inactive for an extended period of time.
   *
   * @param {String} customer_gateway_id (Required) The ID of the customer gateway to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_customer_gateway: function(customer_gateway_id,opt){
    var param = {};
    param.customer_gateway_id = customer_gateway_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteCustomerGateway", param );
    return resposne;
  }, 
  /**
   * Deletes a set of DHCP options that you specify. Amazon VPC returns an error if the set of
   * options you specify is currently associated with a VPC. You can disassociate the set of options
   * by associating either a new set of options or the default options with the VPC.
   *
   * @param {String} dhcp_options_id (Required) The ID of the DHCP options set to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_dhcp_options: function(dhcp_options_id,opt){
    var param = {};
    param.dhcp_options_id = dhcp_options_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteDhcpOptions", param );
    return resposne;
  }, 
  /**
   * Deletes an Internet gateway from your AWS account. The gateway must not be attached to a VPC.
   * For more information about your VPC and Internet gateway, go to Amazon Virtual Private Cloud
   * User Guide.
   *
   * @param {String} internet_gateway_id (Required) The ID of the Internet gateway to be deleted.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_internet_gateway: function(internet_gateway_id,opt){
    var param = {};
    param.internet_gateway_id = internet_gateway_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteInternetGateway", param );
    return resposne;
  }, 
  /**
   * The DeleteKeyPair operation deletes a key pair.
   *
   * @param {String} key_name (Required) The name of the Amazon EC2 key pair to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_key_pair: function(key_name,opt){
    var param = {};
    param.key_name = key_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteKeyPair", param );
    return resposne;
  }, 
  /**
   * Deletes a network ACL from a VPC. The ACL must not have any subnets associated with it. You
   * can't delete the default network ACL. For more information about network ACLs, go to Network
   * ACLs in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} network_acl_id (Required) The ID of the network ACL to be deleted.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_network_acl: function(network_acl_id,opt){
    var param = {};
    param.network_acl_id = network_acl_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteNetworkAcl", param );
    return resposne;
  }, 
  /**
   * Deletes an ingress or egress entry (i.e., rule) from a network ACL. For more information about
   * network ACLs, go to Network ACLs in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} network_acl_id (Required) ID of the network ACL.
   * @param {Number} rule_number (Required) Rule number for the entry to delete.
   * @param boolean $egress (Required) Whether the rule to delete is an egress rule (<code>true</code>) or ingress rule (<code>false</code>).
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_network_acl_entry: function(network_acl_id,rule_number,egress,opt){
    var param = {};
    param.network_acl_id = network_acl_id;
    param.rule_number = rule_number;
    param.egress = egress;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteNetworkAclEntry", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_network_interface: function(network_interface_id,opt){
    var param = {};
    param.network_interface_id = network_interface_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteNetworkInterface", param );
    return resposne;
  }, 
  /**
   * Deletes a <code>PlacementGroup</code> from a user's account. Terminate all Amazon EC2 instances
   * in the placement group before deletion.
   *
   * @param {String} group_name (Required) The name of the <code>PlacementGroup</code> to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_placement_group: function(group_name,opt){
    var param = {};
    param.group_name = group_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeletePlacementGroup", param );
    return resposne;
  }, 
  /**
   * Deletes a route from a route table in a VPC. For more information about route tables, go to
   *   <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} route_table_id (Required) The ID of the route table where the route will be deleted.
   * @param {String} destination_cidr_block (Required) The CIDR range for the route you want to delete. The value you specify must exactly match the CIDR for the route you want to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_route: function(route_table_id,destination_cidr_block,opt){
    var param = {};
    param.route_table_id = route_table_id;
    param.destination_cidr_block = destination_cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteRoute", param );
    return resposne;
  }, 
  /**
   * Deletes a route table from a VPC. The route table must not be associated with a subnet. You
   * can't delete the main route table. For more information about route tables, go to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} route_table_id (Required) The ID of the route table to be deleted.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_route_table: function(route_table_id,opt){
    var param = {};
    param.route_table_id = route_table_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteRouteTable", param );
    return resposne;
  }, 
  /**
   * The DeleteSecurityGroup operation deletes a security group.
   * 
   * <p class="note"></p> 
   * If you attempt to delete a security group that contains instances, a fault is returned.
   *  
   * If you attempt to delete a security group that is referenced by another security group, a fault
   * is returned. For example, if security group B has a rule that allows access from security group
   * A, security group A cannot be deleted until the allow rule is removed.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GroupName</code> - <code>string</code> - Optional - The name of the Amazon EC2 security group to delete.</li>
   *   <li><code>GroupId</code> - <code>string</code> - Optional - The ID of the Amazon EC2 security group to delete.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_security_group: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteSecurityGroup", param );
    return resposne;
  }, 
  /**
   * Deletes the snapshot identified by <code>snapshotId</code>.
   *
   * @param {String} snapshot_id (Required) The ID of the snapshot to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_snapshot: function(snapshot_id,opt){
    var param = {};
    param.snapshot_id = snapshot_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteSnapshot", param );
    return resposne;
  }, 
  /**
   * Deletes the data feed for Spot Instances.
   *  
   * For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide</a>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_spot_datafeed_subscription: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteSpotDatafeedSubscription", param );
    return resposne;
  }, 
  /**
   * Deletes a subnet from a VPC. You must terminate all running instances in the subnet before
   * deleting it, otherwise Amazon VPC returns an error.
   *
   * @param {String} subnet_id (Required) The ID of the subnet you want to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_subnet: function(subnet_id,opt){
    var param = {};
    param.subnet_id = subnet_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteSubnet", param );
    return resposne;
  }, 
  /**
   * Deletes tags from the specified Amazon EC2 resources.
   *
   * @param string|array $resource_id (Required) A list of one or more resource IDs. This could be the ID of an AMI, an instance, an EBS volume, or snapshot, etc. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Tag</code> - <code>array</code> - Optional - The tags to delete from the specified resources. Each tag item consists of a key-value pair. If a tag is specified without a value, the tag and all of its values are deleted. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Key</code> - <code>string</code> - Optional - The tag's key.</li>
   *       <li><code>Value</code> - <code>string</code> - Optional - The tag's value.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_tags: function(resource_id,opt){
    var param = {};
    param.resource_id = resource_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteTags", param );
    return resposne;
  }, 
  /**
   * Deletes a previously created volume. Once successfully deleted, a new volume can be created
   * with the same name.
   *
   * @param {String} volume_id (Required) The ID of the EBS volume to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_volume: function(volume_id,opt){
    var param = {};
    param.volume_id = volume_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteVolume", param );
    return resposne;
  }, 
  /**
   * Deletes a VPC. You must detach or delete all gateways or other objects that are dependent on
   * the VPC first. For example, you must terminate all running instances, delete all VPC security
   * groups (except the default), delete all the route tables (except the default), etc.
   *
   * @param {String} vpc_id (Required) The ID of the VPC you want to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_vpc: function(vpc_id,opt){
    var param = {};
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteVpc", param );
    return resposne;
  }, 
  /**
   * Deletes a VPN connection. Use this if you want to delete a VPC and all its associated
   * components. Another reason to use this operation is if you believe the tunnel credentials for
   * your VPN connection have been compromised. In that situation, you can delete the VPN connection
   * and create a new one that has new keys, without needing to delete the VPC or VPN gateway. If
   * you create a new VPN connection, you must reconfigure the customer gateway using the new
   * configuration information returned with the new VPN connection ID.
   *  
   * If you're deleting the VPC and all its associated parts, we recommend you detach the VPN
   * gateway from the VPC and delete the VPC before deleting the VPN connection.
   *
   * @param {String} vpn_connection_id (Required) The ID of the VPN connection to delete
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_vpn_connection: function(vpn_connection_id,opt){
    var param = {};
    param.vpn_connection_id = vpn_connection_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteVpnConnection", param );
    return resposne;
  }, 
  /**
   * Deletes a VPN gateway. Use this when you want to delete a VPC and all its associated components
   * because you no longer need them. We recommend that before you delete a VPN gateway, you detach
   * it from the VPC and delete the VPN connection. Note that you don't need to delete the VPN
   * gateway if you just want to delete and re-create the VPN connection between your VPC and data
   * center.
   *
   * @param {String} vpn_gateway_id (Required) The ID of the VPN gateway to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_vpn_gateway: function(vpn_gateway_id,opt){
    var param = {};
    param.vpn_gateway_id = vpn_gateway_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteVpnGateway", param );
    return resposne;
  }, 
  /**
   * The DeregisterImage operation deregisters an AMI. Once deregistered, instances of the AMI can
   * no longer be launched.
   *
   * @param {String} image_id (Required) The ID of the AMI to deregister.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  deregister_image: function(image_id,opt){
    var param = {};
    param.image_id = image_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeregisterImage", param );
    return resposne;
  }, 
  /**
   * The DescribeAddresses operation lists elastic IP addresses assigned to your account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PublicIp</code> - <code>string|array</code> - Optional - The optional list of Elastic IP addresses to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Addresses. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>AllocationId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_addresses: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeAddresses", param );
    return resposne;
  }, 
  /**
   * The DescribeAvailabilityZones operation describes availability zones that are currently
   * available to the account and their states.
   *  
   * Availability zones are not the same across accounts. The availability zone
   * <code>us-east-1a</code> for account A is not necessarily the same as <code>us-east-1a</code>
   * for account B. Zone assignments are mapped independently for each account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ZoneName</code> - <code>string|array</code> - Optional - A list of the availability zone names to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for AvailabilityZones. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_availability_zones: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeAvailabilityZones", param );
    return resposne;
  }, 
  /**
   * The DescribeBundleTasks operation describes in-progress and recent bundle tasks. Complete and
   * failed tasks are removed from the list a short time after completion. If no bundle ids are
   * given, all bundle tasks are returned.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>BundleId</code> - <code>string|array</code> - Optional - The list of bundle task IDs to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for BundleTasks. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_bundle_tasks: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeBundleTasks", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A filter used to limit results when describing tags. Multiple values can be specified per filter. A tag must match at least one of the specified values for it to be returned from an operation. Wildcards can be included in filter values; <code>*</code> specifies that zero or more characters must match, and <code>?</code> specifies that exactly one character must match. Use a backslash to escape special characters. For example, a filter value of <code>\*amazon\?\\</code> specifies the literal string <code>*amazon?\</code>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>ConversionTaskId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_conversion_tasks: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeConversionTasks", param );
    return resposne;
  }, 
  /**
   * Gives you information about your customer gateways. You can filter the results to return
   * information only about customer gateways that match criteria you specify. For example, you
   * could ask to get information about a particular customer gateway (or all) only if the gateway's
   * state is pending or available. You can specify multiple filters (e.g., the customer gateway has
   * a particular IP address for the Internet-routable external interface, and the gateway's state
   * is pending or available). The result includes information for a particular customer gateway
   * only if the gateway matches all your filters. If there's no match, no special message is
   * returned; the response is simply empty. The following table shows the available filters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CustomerGatewayId</code> - <code>string|array</code> - Optional - A set of one or more customer gateway IDs. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Customer Gateways. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_customer_gateways: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeCustomerGateways", param );
    return resposne;
  }, 
  /**
   * Gives you information about one or more sets of DHCP options. You can specify one or more DHCP
   * options set IDs, or no IDs (to describe all your sets of DHCP options). The returned
   * information consists of:
   * 
   * <ul>
   *   <li>The DHCP options set ID</li>
   *   <li>The options</li>
   * </ul>
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>DhcpOptionsId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for DhcpOptions. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_dhcp_options: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeDhcpOptions", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ExportTaskId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_export_tasks: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeExportTasks", param );
    return resposne;
  }, 
  /**
   * The DescribeImageAttribute operation returns information about an attribute of an AMI. Only one
   * attribute can be specified per call.
   *
   * @param {String} image_id (Required) The ID of the AMI whose attribute is to be described.
   * @param {String} attribute (Required) The name of the attribute to describe. Available attribute names: <code>productCodes</code>, <code>kernel</code>, <code>ramdisk</code>, <code>launchPermisson</code>, <code>blockDeviceMapping</code>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_image_attribute: function(image_id,attribute,opt){
    var param = {};
    param.image_id = image_id;
    param.attribute = attribute;

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeImageAttribute", param );
    return resposne;
  }, 
  /**
   * The DescribeImages operation returns information about AMIs, AKIs, and ARIs available to the
   * user. Information returned includes image type, product codes, architecture, and kernel and RAM
   * disk IDs. Images available to the user include public images available for any user to launch,
   * private images owned by the user making the request, and private images owned by other users
   * for which the user has explicit launch permissions.
   *  
   * Launch permissions fall into three categories:
   * 
   * <ul>
   *   <li><strong>Public:</strong> The owner of the AMI granted launch permissions for the AMI to the
   *   all group. All users have launch permissions for these AMIs.</li>
   *   <li><strong>Explicit:</strong> The owner of the AMI granted launch permissions to a specific
   *   user.</li>
   *   <li><strong>Implicit:</strong> A user has implicit launch permissions for all AMIs he or she
   *   owns.</li>
   * </ul>
   * 
   * The list of AMIs returned can be modified by specifying AMI IDs, AMI owners, or users with
   * launch permissions. If no options are specified, Amazon EC2 returns all AMIs for which the user
   * has launch permissions.
   *  
   * If you specify one or more AMI IDs, only AMIs that have the specified IDs are returned. If you
   * specify an invalid AMI ID, a fault is returned. If you specify an AMI ID for which you do not
   * have access, it will not be included in the returned results.
   *  
   * If you specify one or more AMI owners, only AMIs from the specified owners and for which you
   * have access are returned. The results can include the account IDs of the specified owners,
   * amazon for AMIs owned by Amazon or self for AMIs that you own.
   *  
   * If you specify a list of executable users, only users that have launch permissions for the AMIs
   * are returned. You can specify account IDs (if you own the AMI(s)), self for AMIs for which you
   * own or have explicit permissions, or all for public AMIs.
   * 
   * <p class="note">
   * Deregistered images are included in the returned results for an unspecified interval after
   * deregistration.
   * </p>
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ImageId</code> - <code>string|array</code> - Optional - An optional list of the AMI IDs to describe. If not specified, all AMIs will be described. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Owner</code> - <code>string|array</code> - Optional - The optional list of owners for the described AMIs. The IDs amazon, self, and explicit can be used to include AMIs owned by Amazon, AMIs owned by the user, and AMIs for which the user has explicit launch permissions, respectively. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>ExecutableBy</code> - <code>string|array</code> - Optional - The optional list of users with explicit launch permissions for the described AMIs. The user ID can be a user's account ID, 'self' to return AMIs for which the sender of the request has explicit launch permissions, or 'all' to return AMIs with public launch permissions. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Images. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_images: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeImages", param );
    return resposne;
  }, 
  /**
   * Returns information about an attribute of an instance. Only one attribute can be specified per
   * call.
   *
   * @param {String} instance_id (Required) The ID of the instance whose instance attribute is being described.
   * @param {String} attribute (Required) The name of the attribute to describe. Available attribute names: <code>instanceType</code>, <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, <code>instanceInitiatedShutdownBehavior</code>, <code>rootDeviceName</code>, <code>blockDeviceMapping</code> [Allowed values: <code>instanceType</code>, <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, <code>instanceInitiatedShutdownBehavior</code>, <code>rootDeviceName</code>, <code>blockDeviceMapping</code>, <code>productCodes</code>, <code>sourceDestCheck</code>, <code>groupSet</code>, <code>ebsOptimized</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_instance_attribute: function(instance_id,attribute,opt){
    var param = {};
    param.instance_id = instance_id;
    param.attribute = attribute;

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeInstanceAttribute", param );
    return resposne;
  }, 
  /**
   * Describes the status of an Amazon Elastic Compute Cloud (Amazon EC2) instance. Instance status
   * provides information about two types of scheduled events for an instance that may require your
   * attention:
   * 
   * <ul>
   *   <li>Scheduled Reboot: When Amazon EC2 determines that an instance must be rebooted, the
   * instance's status will return one of two event codes: <code>system-reboot</code> or
   * <code>instance-reboot</code>. System reboot commonly occurs if certain maintenance or upgrade
   * operations require a reboot of the underlying host that supports an instance. Instance reboot
   * commonly occurs if the instance must be rebooted, rather than the underlying host. Rebooting
   * events include a scheduled start and end time.</li>
   *   <li>Scheduled Retirement: When Amazon EC2 determines that an instance must be shut down, the
   * instance's status will return an event code called <code>instance-retirement</code>. Retirement
   * commonly occurs when the underlying host is degraded and must be replaced. Retirement events
   * include a scheduled start and end time. You're also notified by email if one of your instances
   * is set to retiring. The email message indicates when your instance will be permanently retired.</li>
   * </ul>
   * 
   * If your instance is permanently retired, it will not be restarted. You can avoid retirement by
   * manually restarting your instance when its event code is <code>instance-retirement</code>. This
   * ensures that your instance is started on a healthy host.
   *  
   * <code>DescribeInstanceStatus</code> returns information only for instances in the running
   * state.
   *  
   * You can filter the results to return information only about instances that match criteria you
   * specify. For example, you could get information about instances in a specific Availability
   * Zone. You can specify multiple values for a filter (e.g., more than one Availability Zone). An
   * instance must match at least one of the specified values for it to be included in the results.
   *  
   * You can specify multiple filters. An instance must match all the filters for it to be included
   * in the results. If there's no match, no special message is returned; the response is simply
   * empty.
   *  
   * You can use wildcards with the filter values: <code>*</code> matches zero or more characters,
   * and <code>?</code> matches exactly one character. You can escape special characters using a
   * backslash before the character. For example, a value of <code>\*amazon\?\\</code> searches for
   * the literal string <code>*amazon?\</code>.
   *  
   * The following filters are available:
   * 
   * <ul>
   *   <li><code>availability-zone</code> - Filter on an instance's availability zone.</li>
   *   <li><code>instance-state-name</code> - Filter on the intended state of the instance, e.g.,
   *   running.</li>
   *   <li><code>instance-state-code</code> - Filter on the intended state code of the instance, e.g.,
   *   16.</li>
   * </ul>
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceId</code> - <code>string|array</code> - Optional - The list of instance IDs. If not specified, all instances are described. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - The list of filters to limit returned results. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string specifying the next paginated set of results to return.</li>
   *   <li><code>MaxResults</code> - <code>integer</code> - Optional - The maximum number of paginated instance items per response.</li>
   *   <li><code>IncludeAllInstances</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_instance_status: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeInstanceStatus", param );
    return resposne;
  }, 
  /**
   * The DescribeInstances operation returns information about instances that you own.
   *  
   * If you specify one or more instance IDs, Amazon EC2 returns information for those instances. If
   * you do not specify instance IDs, Amazon EC2 returns information for all relevant instances. If
   * you specify an invalid instance ID, a fault is returned. If you specify an instance that you do
   * not own, it will not be included in the returned results.
   *  
   * Recently terminated instances might appear in the returned results. This interval is usually
   * less than one hour.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceId</code> - <code>string|array</code> - Optional - An optional list of the instances to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Instances. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/index.html?ApiReference-query-DescribeInstances.html">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_instances: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeInstances", param );
    return resposne;
  }, 
  /**
   * Gives you information about your Internet gateways. You can filter the results to return
   * information only about Internet gateways that match criteria you specify. For example, you
   * could get information only about gateways with particular tags. The Internet gateway must match
   * at least one of the specified values for it to be included in the results.
   *  
   * You can specify multiple filters (e.g., the Internet gateway is attached to a particular VPC
   * and is tagged with a particular value). The result includes information for a particular
   * Internet gateway only if the gateway matches all your filters. If there's no match, no special
   * message is returned; the response is simply empty.
   *  
   * You can use wildcards with the filter values: an asterisk matches zero or more characters, and
   * <code>?</code> matches exactly one character. You can escape special characters using a
   * backslash before the character. For example, a value of <code>\*amazon\?\\</code> searches for
   * the literal string <code>*amazon?\</code>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InternetGatewayId</code> - <code>string|array</code> - Optional - One or more Internet gateway IDs. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Internet Gateways. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_internet_gateways: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeInternetGateways", param );
    return resposne;
  }, 
  /**
   * The DescribeKeyPairs operation returns information about key pairs available to you. If you
   * specify key pairs, information about those key pairs is returned. Otherwise, information for
   * all registered key pairs is returned.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>KeyName</code> - <code>string|array</code> - Optional - The optional list of key pair names to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for KeyPairs. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_key_pairs: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeKeyPairs", param );
    return resposne;
  }, 
  /**
   * Provides details of a user's registered licenses. Zero or more IDs may be specified on the
   * call. When one or more license IDs are specified, only data for the specified IDs are returned.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>LicenseId</code> - <code>string|array</code> - Optional - Specifies the license registration for which details are to be returned. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Licenses. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_licenses: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeLicenses", param );
    return resposne;
  }, 
  /**
   * Gives you information about the network ACLs in your VPC. You can filter the results to return
   * information only about ACLs that match criteria you specify. For example, you could get
   * information only the ACL associated with a particular subnet. The ACL must match at least one
   * of the specified values for it to be included in the results.
   *  
   * You can specify multiple filters (e.g., the ACL is associated with a particular subnet and has
   * an egress entry that denies traffic to a particular port). The result includes information for
   * a particular ACL only if it matches all your filters. If there's no match, no special message
   * is returned; the response is simply empty.
   *  
   * You can use wildcards with the filter values: an asterisk matches zero or more characters, and
   * <code>?</code> matches exactly one character. You can escape special characters using a
   * backslash before the character. For example, a value of <code>\*amazon\?\\</code> searches for
   * the literal string <code>*amazon?\</code>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>NetworkAclId</code> - <code>string|array</code> - Optional - One or more network ACL IDs. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Network ACLs. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_network_acls: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeNetworkAcls", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description</code> - <code>string</code> - Optional - </li>
   *   <li><code>SourceDestCheck</code> - <code>string</code> - Optional - </li>
   *   <li><code>GroupSet</code> - <code>string</code> - Optional - </li>
   *   <li><code>Attachment</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_network_interface_attribute: function(network_interface_id,opt){
    var param = {};
    param.network_interface_id = network_interface_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeNetworkInterfaceAttribute", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>NetworkInterfaceId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A filter used to limit results when describing tags. Multiple values can be specified per filter. A tag must match at least one of the specified values for it to be returned from an operation. Wildcards can be included in filter values; <code>*</code> specifies that zero or more characters must match, and <code>?</code> specifies that exactly one character must match. Use a backslash to escape special characters. For example, a filter value of <code>\*amazon\?\\</code> specifies the literal string <code>*amazon?\</code>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_network_interfaces: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeNetworkInterfaces", param );
    return resposne;
  }, 
  /**
   * Returns information about one or more <code>PlacementGroup</code> instances in a user's
   * account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GroupName</code> - <code>string|array</code> - Optional - The name of the <code>PlacementGroup</code>. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Placement Groups. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_placement_groups: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribePlacementGroups", param );
    return resposne;
  }, 
  /**
   * The DescribeRegions operation describes regions zones that are currently available to the
   * account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>RegionName</code> - <code>string|array</code> - Optional - The optional list of regions to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Regions. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_regions: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeRegions", param );
    return resposne;
  }, 
  /**
   * The DescribeReservedInstances operation describes Reserved Instances that were purchased for
   * use with your account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ReservedInstancesId</code> - <code>string|array</code> - Optional - The optional list of Reserved Instance IDs to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for ReservedInstances. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>OfferingType</code> - <code>string</code> - Optional - The Reserved Instance offering type.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_reserved_instances: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeReservedInstances", param );
    return resposne;
  }, 
  /**
   * The DescribeReservedInstancesOfferings operation describes Reserved Instance offerings that are
   * available for purchase. With Amazon EC2 Reserved Instances, you purchase the right to launch
   * Amazon EC2 instances for a period of time (without getting insufficient capacity errors) and
   * pay a lower usage rate for the actual time used.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ReservedInstancesOfferingId</code> - <code>string|array</code> - Optional - An optional list of the unique IDs of the Reserved Instance offerings to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>InstanceType</code> - <code>string</code> - Optional - The instance type on which the Reserved Instance can be used. [Allowed values: <code>t1.micro</code>, <code>m1.small</code>, <code>m1.medium</code>, <code>m1.large</code>, <code>m1.xlarge</code>, <code>m2.xlarge</code>, <code>m2.2xlarge</code>, <code>m2.4xlarge</code>, <code>c1.medium</code>, <code>c1.xlarge</code>, <code>hi1.4xlarge</code>, <code>cc1.4xlarge</code>, <code>cc2.8xlarge</code>, <code>cg1.4xlarge</code>]</li>
   *   <li><code>AvailabilityZone</code> - <code>string</code> - Optional - The Availability Zone in which the Reserved Instance can be used.</li>
   *   <li><code>ProductDescription</code> - <code>string</code> - Optional - The Reserved Instance product description.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for ReservedInstancesOfferings. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>InstanceTenancy</code> - <code>string</code> - Optional - The tenancy of the Reserved Instance offering. A Reserved Instance with tenancy of dedicated will run on single-tenant hardware and can only be launched within a VPC.</li>
   *   <li><code>OfferingType</code> - <code>string</code> - Optional - The Reserved Instance offering type.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_reserved_instances_offerings: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeReservedInstancesOfferings", param );
    return resposne;
  }, 
  /**
   * Gives you information about your route tables. You can filter the results to return information
   * only about tables that match criteria you specify. For example, you could get information only
   * about a table associated with a particular subnet. You can specify multiple values for the
   * filter. The table must match at least one of the specified values for it to be included in the
   * results.
   *  
   * You can specify multiple filters (e.g., the table has a particular route, and is associated
   * with a particular subnet). The result includes information for a particular table only if it
   * matches all your filters. If there's no match, no special message is returned; the response is
   * simply empty.
   *  
   * You can use wildcards with the filter values: an asterisk matches zero or more characters, and
   * <code>?</code> matches exactly one character. You can escape special characters using a
   * backslash before the character. For example, a value of <code>\*amazon\?\\</code> searches for
   * the literal string <code>*amazon?\</code>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>RouteTableId</code> - <code>string|array</code> - Optional - One or more route table IDs. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Route Tables. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_route_tables: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeRouteTables", param );
    return resposne;
  }, 
  /**
   * The DescribeSecurityGroups operation returns information about security groups that you own.
   *  
   * If you specify security group names, information about those security group is returned.
   * Otherwise, information for all security group is returned. If you specify a group that does not
   * exist, a fault is returned.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GroupName</code> - <code>string|array</code> - Optional - The optional list of Amazon EC2 security groups to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>GroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for SecurityGroups. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_security_groups: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSecurityGroups", param );
    return resposne;
  }, 
  /**
   * Returns information about an attribute of a snapshot. Only one attribute can be specified per
   * call.
   *
   * @param {String} snapshot_id (Required) The ID of the EBS snapshot whose attribute is being described.
   * @param {String} attribute (Required) The name of the EBS attribute to describe. Available attribute names: createVolumePermission [Allowed values: <code>productCodes</code>, <code>createVolumePermission</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_snapshot_attribute: function(snapshot_id,attribute,opt){
    var param = {};
    param.snapshot_id = snapshot_id;
    param.attribute = attribute;

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSnapshotAttribute", param );
    return resposne;
  }, 
  /**
   * Returns information about the Amazon EBS snapshots available to you. Snapshots available to you
   * include public snapshots available for any AWS account to launch, private snapshots you own,
   * and private snapshots owned by another AWS account but for which you've been given explicit
   * create volume permissions.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>SnapshotId</code> - <code>string|array</code> - Optional - The optional list of EBS snapshot IDs to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Owner</code> - <code>string|array</code> - Optional - The optional list of EBS snapshot owners. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>RestorableBy</code> - <code>string|array</code> - Optional - The optional list of users who have permission to create volumes from the described EBS snapshots. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Snapshots. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_snapshots: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSnapshots", param );
    return resposne;
  }, 
  /**
   * Describes the data feed for Spot Instances.
   *  
   * For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide</a>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_spot_datafeed_subscription: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSpotDatafeedSubscription", param );
    return resposne;
  }, 
  /**
   * Describes Spot Instance requests. Spot Instances are instances that Amazon EC2 starts on your
   * behalf when the maximum price that you specify exceeds the current Spot Price. Amazon EC2
   * periodically sets the Spot Price based on available Spot Instance capacity and current spot
   * instance requests. For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2010-08-31/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2010-08-31/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide</a>.
   *  
   * You can filter the results to return information only about Spot Instance requests that match
   * criteria you specify. For example, you could get information about requests where the Spot
   * Price you specified is a certain value (you can't use greater than or less than comparison, but
   * you can use <code>*</code> and <code>?</code> wildcards). You can specify multiple values for a
   * filter. A Spot Instance request must match at least one of the specified values for it to be
   * included in the results.
   *  
   * You can specify multiple filters (e.g., the Spot Price is equal to a particular value, and the
   * instance type is <code>m1.small</code>). The result includes information for a particular
   * request only if it matches all your filters. If there's no match, no special message is
   * returned; the response is simply empty.
   *  
   * You can use wildcards with the filter values: an asterisk matches zero or more characters, and
   * <code>?</code> matches exactly one character. You can escape special characters using a
   * backslash before the character. For example, a value of <code>\*amazon\?\\</code> searches for
   * the literal string <code>*amazon?\</code>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>SpotInstanceRequestId</code> - <code>string|array</code> - Optional - The ID of the request. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for SpotInstances. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_spot_instance_requests: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSpotInstanceRequests", param );
    return resposne;
  }, 
  /**
   * Describes the Spot Price history.
   *  
   * Spot Instances are instances that Amazon EC2 starts on your behalf when the maximum price that
   * you specify exceeds the current Spot Price. Amazon EC2 periodically sets the Spot Price based
   * on available Spot Instance capacity and current spot instance requests.
   *  
   * For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide</a>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>StartTime</code> - <code>string</code> - Optional - The start date and time of the Spot Instance price history data. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>EndTime</code> - <code>string</code> - Optional - The end date and time of the Spot Instance price history data. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>InstanceType</code> - <code>string|array</code> - Optional - Specifies the instance type to return. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>ProductDescription</code> - <code>string|array</code> - Optional - The description of the AMI. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for SpotPriceHistory. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>AvailabilityZone</code> - <code>string</code> - Optional - Filters the results by availability zone (ex: 'us-east-1a').</li>
   *   <li><code>MaxResults</code> - <code>integer</code> - Optional - Specifies the number of rows to return.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - Specifies the next set of rows to return.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_spot_price_history: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSpotPriceHistory", param );
    return resposne;
  }, 
  /**
   * Gives you information about your subnets. You can filter the results to return information only
   * about subnets that match criteria you specify.
   *  
   * For example, you could ask to get information about a particular subnet (or all) only if the
   * subnet's state is available. You can specify multiple filters (e.g., the subnet is in a
   * particular VPC, and the subnet's state is available).
   *  
   * The result includes information for a particular subnet only if the subnet matches all your
   * filters. If there's no match, no special message is returned; the response is simply empty. The
   * following table shows the available filters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>SubnetId</code> - <code>string|array</code> - Optional - A set of one or more subnet IDs. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Subnets. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_subnets: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeSubnets", param );
    return resposne;
  }, 
  /**
   * Describes the tags for the specified resources.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for tags. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_tags: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeTags", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} volume_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Attribute</code> - <code>string</code> - Optional -  [Allowed values: <code>autoEnableIO</code>, <code>productCodes</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_volume_attribute: function(volume_id,opt){
    var param = {};
    param.volume_id = volume_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeVolumeAttribute", param );
    return resposne;
  }, 
  /**
   * Describes the status of a volume.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>VolumeId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A filter used to limit results when describing tags. Multiple values can be specified per filter. A tag must match at least one of the specified values for it to be returned from an operation. Wildcards can be included in filter values; <code>*</code> specifies that zero or more characters must match, and <code>?</code> specifies that exactly one character must match. Use a backslash to escape special characters. For example, a filter value of <code>\*amazon\?\\</code> specifies the literal string <code>*amazon?\</code>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - </li>
   *   <li><code>MaxResults</code> - <code>integer</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_volume_status: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeVolumeStatus", param );
    return resposne;
  }, 
  /**
   * Describes the status of the indicated volume or, in lieu of any specified, all volumes
   * belonging to the caller. Volumes that have been deleted are not described.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>VolumeId</code> - <code>string|array</code> - Optional - The optional list of EBS volumes to describe. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for Volumes. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_volumes: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeVolumes", param );
    return resposne;
  }, 
  /**
   * Gives you information about your VPCs. You can filter the results to return information only
   * about VPCs that match criteria you specify.
   *  
   * For example, you could ask to get information about a particular VPC or VPCs (or all your VPCs)
   * only if the VPC's state is available. You can specify multiple filters (e.g., the VPC uses one
   * of several sets of DHCP options, and the VPC's state is available). The result includes
   * information for a particular VPC only if the VPC matches all your filters.
   *  
   * If there's no match, no special message is returned; the response is simply empty. The
   * following table shows the available filters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>VpcId</code> - <code>string|array</code> - Optional - The ID of a VPC you want information about. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for VPCs. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_vpcs: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeVpcs", param );
    return resposne;
  }, 
  /**
   * Gives you information about your VPN connections.
   * 
   * <p class="important"></p> 
   * We strongly recommend you use HTTPS when calling this operation because the response contains
   * sensitive cryptographic information for configuring your customer gateway.
   *  
   * You can filter the results to return information only about VPN connections that match criteria
   * you specify. For example, you could ask to get information about a particular VPN connection
   * (or all) only if the VPN's state is pending or available. You can specify multiple filters
   * (e.g., the VPN connection is associated with a particular VPN gateway, and the gateway's state
   * is pending or available). The result includes information for a particular VPN connection only
   * if the VPN connection matches all your filters. If there's no match, no special message is
   * returned; the response is simply empty. The following table shows the available filters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>VpnConnectionId</code> - <code>string|array</code> - Optional - A VPN connection ID. More than one may be specified per request. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for VPN Connections. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_vpn_connections: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeVpnConnections", param );
    return resposne;
  }, 
  /**
   * Gives you information about your VPN gateways. You can filter the results to return information
   * only about VPN gateways that match criteria you specify.
   *  
   * For example, you could ask to get information about a particular VPN gateway (or all) only if
   * the gateway's state is pending or available. You can specify multiple filters (e.g., the VPN
   * gateway is in a particular Availability Zone and the gateway's state is pending or available).
   *  
   * The result includes information for a particular VPN gateway only if the gateway matches all
   * your filters. If there's no match, no special message is returned; the response is simply
   * empty. The following table shows the available filters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>VpnGatewayId</code> - <code>string|array</code> - Optional - A list of filters used to match properties for VPN Gateways. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Filter</code> - <code>array</code> - Optional - A list of filters used to match properties for VPN Gateways. For a complete reference to the available filter keys for this operation, see the <a href="http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/">Amazon EC2 API reference</a>. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - Specifies the name of the filter.</li>
   *       <li><code>Value</code> - <code>string|array</code> - Optional - Contains one or more values for the filter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_vpn_gateways: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DescribeVpnGateways", param );
    return resposne;
  }, 
  /**
   * Detaches an Internet gateway from a VPC, disabling connectivity between the Internet and the
   * VPC. The VPC must not contain any running instances with elastic IP addresses. For more
   * information about your VPC and Internet gateway, go to Amazon Virtual Private Cloud User Guide.
   *  
   * For more information about Amazon Virtual Private Cloud and Internet gateways, go to the Amazon
   * Virtual Private Cloud User Guide.
   *
   * @param {String} internet_gateway_id (Required) The ID of the Internet gateway to detach.
   * @param {String} vpc_id (Required) The ID of the VPC.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  detach_internet_gateway: function(internet_gateway_id,vpc_id,opt){
    var param = {};
    param.internet_gateway_id = internet_gateway_id;
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DetachInternetGateway", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} attachment_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Force</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  detach_network_interface: function(attachment_id,opt){
    var param = {};
    param.attachment_id = attachment_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DetachNetworkInterface", param );
    return resposne;
  }, 
  /**
   * Detach a previously attached volume from a running instance.
   *
   * @param {String} volume_id (Required) The ID of the volume to detach.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceId</code> - <code>string</code> - Optional - The ID of the instance from which to detach the the specified volume.</li>
   *   <li><code>Device</code> - <code>string</code> - Optional - The device name to which the volume is attached on the specified instance.</li>
   *   <li><code>Force</code> - <code>boolean</code> - Optional - Forces detachment if the previous detachment attempt did not occur cleanly (logging into an instance, unmounting the volume, and detaching normally). This option can lead to data loss or a corrupted file system. Use this option only as a last resort to detach a volume from a failed instance. The instance will not have an opportunity to flush file system caches nor file system meta data. If you use this option, you must perform file system check and repair procedures.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  detach_volume: function(volume_id,opt){
    var param = {};
    param.volume_id = volume_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DetachVolume", param );
    return resposne;
  }, 
  /**
   * Detaches a VPN gateway from a VPC. You do this if you're planning to turn off the VPC and not
   * use it anymore. You can confirm a VPN gateway has been completely detached from a VPC by
   * describing the VPN gateway (any attachments to the VPN gateway are also described).
   *  
   * You must wait for the attachment's state to switch to detached before you can delete the VPC or
   * attach a different VPC to the VPN gateway.
   *
   * @param {String} vpn_gateway_id (Required) The ID of the VPN gateway to detach from the VPC.
   * @param {String} vpc_id (Required) The ID of the VPC to detach the VPN gateway from.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  detach_vpn_gateway: function(vpn_gateway_id,vpc_id,opt){
    var param = {};
    param.vpn_gateway_id = vpn_gateway_id;
    param.vpc_id = vpc_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DetachVpnGateway", param );
    return resposne;
  }, 
  /**
   * The DisassociateAddress operation disassociates the specified elastic IP address from the
   * instance to which it is assigned. This is an idempotent operation. If you enter it more than
   * once, Amazon EC2 does not return an error.
   *
   * @param {String} public_ip (Required) The elastic IP address that you are disassociating from the instance.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AssociationId</code> - <code>string</code> - Optional - Association ID corresponding to the VPC elastic IP address you want to disassociate.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  disassociate_address: function(public_ip,opt){
    var param = {};
    param.public_ip = public_ip;

    param = this.marge_param(param,opt);
    var response = this.request(, "DisassociateAddress", param );
    return resposne;
  }, 
  /**
   * Disassociates a subnet from a route table.
   *  
   * After you perform this action, the subnet no longer uses the routes in the route table. Instead
   * it uses the routes in the VPC's main route table. For more information about route tables, go
   * to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} association_id (Required) The association ID representing the current association between the route table and subnet.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  disassociate_route_table: function(association_id,opt){
    var param = {};
    param.association_id = association_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DisassociateRouteTable", param );
    return resposne;
  }, 
  /**
   * Enable IO on the volume after an event has occured.
   *
   * @param {String} volume_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  enable_volume_io: function(volume_id,opt){
    var param = {};
    param.volume_id = volume_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "EnableVolumeIo", param );
    return resposne;
  }, 
  /**
   * The GetConsoleOutput operation retrieves console output for the specified instance.
   *
   * Instance console output is buffered and posted shortly after instance boot, reboot, and
   * termination. Amazon EC2 preserves the most recent 64 KB output which will be available for at least
   * one hour after the most recent post.
   *
   * @param {String} instance_id (Required) The ID of the instance for which you want console output.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response. The value of <code>output</code> is automatically Base64-decoded.
   */
  get_console_output: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetConsoleOutput", param );
    return resposne;
  }, 
  /**
   * Retrieves the encrypted administrator password for the instances running Windows.
   *
   * The Windows password is only generated the first time an AMI is launched. It is not generated for
   * rebundled AMIs or after the password is changed on an instance. The password is encrypted using the
   * key pair that you provided.
   *
   * @param {String} instance_id (Required) The ID of the instance for which you want the Windows administrator password.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>DecryptPasswordWithKey</code> - <code>string</code> - Optional - Enables the decryption of the Administrator password for the given Microsoft Windows instance. Specifies the RSA private key that is associated with the keypair ID which was used to launch the Microsoft Windows instance.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_password_data: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetPasswordData", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} platform (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description</code> - <code>string</code> - Optional - </li>
   *   <li><code>LaunchSpecification</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Architecture</code> - <code>string</code> - Optional - </li>
   *       <li><code>SecurityGroup</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *       <li><code>AdditionalInfo</code> - <code>string</code> - Optional - </li>
   *       <li><code>UserData</code> - <code>string</code> - Optional - </li>
   *       <li><code>InstanceType</code> - <code>string</code> - Optional -  [Allowed values: <code>t1.micro</code>, <code>m1.small</code>, <code>m1.medium</code>, <code>m1.large</code>, <code>m1.xlarge</code>, <code>m2.xlarge</code>, <code>m2.2xlarge</code>, <code>m2.4xlarge</code>, <code>c1.medium</code>, <code>c1.xlarge</code>, <code>hi1.4xlarge</code>, <code>cc1.4xlarge</code>, <code>cc2.8xlarge</code>, <code>cg1.4xlarge</code>]</li>
   *       <li><code>Placement</code> - <code>array</code> - Optional - Describes where an Amazon EC2 instance is running within an Amazon EC2 region. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>AvailabilityZone</code> - <code>string</code> - Optional - The availability zone in which an Amazon EC2 instance runs.</li>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - The name of the <code>PlacementGroup</code> in which an Amazon EC2 instance runs. Placement groups are primarily used for launching High Performance Computing instances in the same group to ensure fast connection speeds.</li>
   *           <li><code>Tenancy</code> - <code>string</code> - Optional - The allowed tenancy of instances launched into the VPC. A value of default means instances can be launched with any tenancy; a value of dedicated means all instances launched into the VPC will be launched as dedicated tenancy regardless of the tenancy assigned to the instance at launch.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>BlockDeviceMapping</code> - <code>array</code> - Optional - The BlockDeviceMappingItemType data type. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>VirtualName</code> - <code>string</code> - Optional - Specifies the virtual device name.</li>
   *           <li><code>DeviceName</code> - <code>string</code> - Optional - Specifies the device name (e.g., <code>/dev/sdh</code>).</li>
   *           <li><code>Ebs</code> - <code>array</code> - Optional - Specifies parameters used to automatically setup Amazon EBS volumes when the instance is launched. <ul>
   *             <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *               <li><code>SnapshotId</code> - <code>string</code> - Optional - The ID of the snapshot from which the volume will be created.</li>
   *               <li><code>VolumeSize</code> - <code>integer</code> - Optional - The size of the volume, in gigabytes.</li>
   *               <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - Specifies whether the Amazon EBS volume is deleted on instance termination.</li>
   *               <li><code>VolumeType</code> - <code>string</code> - Optional -  [Allowed values: <code>standard</code>, <code>io1</code>]</li>
   *               <li><code>Iops</code> - <code>integer</code> - Optional - </li>
   *             </ul></li>
   *           </ul></li>
   *           <li><code>NoDevice</code> - <code>string</code> - Optional - Specifies the device name to suppress during instance launch.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>Monitoring</code> - <code>boolean</code> - Optional - </li>
   *       <li><code>SubnetId</code> - <code>string</code> - Optional - </li>
   *       <li><code>DisableApiTermination</code> - <code>boolean</code> - Optional - </li>
   *       <li><code>InstanceInitiatedShutdownBehavior</code> - <code>string</code> - Optional - </li>
   *       <li><code>PrivateIpAddress</code> - <code>string</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>DiskImage</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Image</code> - <code>array</code> - Optional -  <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>Format</code> - <code>string</code> - Required - </li>
   *           <li><code>Bytes</code> - <code>long</code> - Required - </li>
   *           <li><code>ImportManifestUrl</code> - <code>string</code> - Required - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>Description</code> - <code>string</code> - Optional - </li>
   *       <li><code>Volume</code> - <code>array</code> - Optional -  <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>Size</code> - <code>long</code> - Required - </li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  import_instance: function(platform,opt){
    var param = {};
    param.platform = platform;

    param = this.marge_param(param,opt);
    var response = this.request(, "ImportInstance", param );
    return resposne;
  }, 
  /**
   * Imports the public key from an RSA key pair created with a third-party tool. This operation differs
   * from CreateKeyPair as the private key is never transferred between the caller and AWS servers.
   *
   * RSA key pairs are easily created on Microsoft Windows and Linux OS systems using the <code>ssh-keygen</code>
   * command line tool provided with the standard OpenSSH installation. Standard library support for RSA
   * key pair creation is also available for Java, Ruby, Python, and many other programming languages.
   *
   * The following formats are supported:
   *
   * <ul>
   *   <li>OpenSSH public key format.</li>
   *   <li>Base64 encoded DER format.</li>
   *   <li>SSH public key file format as specified in <a href="http://tools.ietf.org/html/rfc4716">RFC 4716</a>.</li>
   * </ul>
   *
   * @param {String} key_name (Required) The unique name for the key pair.
   * @param {String} public_key_material (Required) The public key portion of the key pair being imported.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  import_key_pair: function(key_name,public_key_material,opt){
    var param = {};
    param.key_name = key_name;
    param.public_key_material = public_key_material;

    param = this.marge_param(param,opt);
    var response = this.request(, "ImportKeyPair", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AvailabilityZone</code> - <code>string</code> - Optional - </li>
   *   <li><code>Image</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Format</code> - <code>string</code> - Required - </li>
   *       <li><code>Bytes</code> - <code>long</code> - Required - </li>
   *       <li><code>ImportManifestUrl</code> - <code>string</code> - Required - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>Description</code> - <code>string</code> - Optional - </li>
   *   <li><code>Volume</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Size</code> - <code>long</code> - Required - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  import_volume: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ImportVolume", param );
    return resposne;
  }, 
  /**
   * The ModifyImageAttribute operation modifies an attribute of an AMI.
   *
   * @param {String} image_id (Required) The ID of the AMI whose attribute you want to modify.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Attribute</code> - <code>string</code> - Optional - The name of the AMI attribute you want to modify. Available attributes: <code>launchPermission</code>, <code>productCodes</code></li>
   *   <li><code>OperationType</code> - <code>string</code> - Optional - The type of operation being requested. Available operation types: <code>add</code>, <code>remove</code></li>
   *   <li><code>UserId</code> - <code>string|array</code> - Optional - The AWS user ID being added to or removed from the list of users with launch permissions for this AMI. Only valid when the launchPermission attribute is being modified. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>UserGroup</code> - <code>string|array</code> - Optional - The user group being added to or removed from the list of user groups with launch permissions for this AMI. Only valid when the launchPermission attribute is being modified. Available user groups: <code>all</code> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>ProductCode</code> - <code>string|array</code> - Optional - The list of product codes being added to or removed from the specified AMI. Only valid when the productCodes attribute is being modified. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Value</code> - <code>string</code> - Optional - The value of the attribute being modified. Only valid when the description attribute is being modified.</li>
   *   <li><code>LaunchPermission</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Add</code> - <code>array</code> - Optional - Describes a permission to launch an Amazon Machine Image (AMI). <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The AWS user ID of the user involved in this launch permission.</li>
   *           <li><code>Group</code> - <code>string</code> - Optional - The AWS group of the user involved in this launch permission. Available groups: <code>all</code></li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>Remove</code> - <code>array</code> - Optional - Describes a permission to launch an Amazon Machine Image (AMI). <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The AWS user ID of the user involved in this launch permission.</li>
   *           <li><code>Group</code> - <code>string</code> - Optional - The AWS group of the user involved in this launch permission. Available groups: <code>all</code></li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>Description.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_image_attribute: function(image_id,opt){
    var param = {};
    param.image_id = image_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ModifyImageAttribute", param );
    return resposne;
  }, 
  /**
   * Modifies an attribute of an instance.
   *
   * @param {String} instance_id (Required) The ID of the instance whose attribute is being modified.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Attribute</code> - <code>string</code> - Optional - The name of the attribute being modified. Available attribute names: <code>instanceType</code>, <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, <code>instanceInitiatedShutdownBehavior</code>, <code>rootDevice</code>, <code>blockDeviceMapping</code> [Allowed values: <code>instanceType</code>, <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, <code>instanceInitiatedShutdownBehavior</code>, <code>rootDeviceName</code>, <code>blockDeviceMapping</code>, <code>productCodes</code>, <code>sourceDestCheck</code>, <code>groupSet</code>, <code>ebsOptimized</code>]</li>
   *   <li><code>Value</code> - <code>string</code> - Optional - The new value of the instance attribute being modified. Only valid when <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code> or <code>instanceInitiateShutdownBehavior</code> is specified as the attribute being modified.</li>
   *   <li><code>BlockDeviceMapping</code> - <code>array</code> - Optional - The new block device mappings for the instance whose attributes are being modified. Only valid when blockDeviceMapping is specified as the attribute being modified. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>DeviceName</code> - <code>string</code> - Optional - The device name (e.g., <code>/dev/sdh</code>) at which the block device is exposed on the instance.</li>
   *       <li><code>Ebs</code> - <code>array</code> - Optional - The EBS instance block device specification describing the EBS block device to map to the specified device name on a running instance. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>VolumeId</code> - <code>string</code> - Optional - The ID of the EBS volume that should be mounted as a block device on an Amazon EC2 instance.</li>
   *           <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - Specifies whether the Amazon EBS volume is deleted on instance termination.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>VirtualName</code> - <code>string</code> - Optional - The virtual device name.</li>
   *       <li><code>NoDevice</code> - <code>string</code> - Optional - When set to the empty string, specifies that the device name in this object should not be mapped to any real device.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>SourceDestCheck.Value</code> - <code>boolean</code> - Optional - Boolean value</li>
   *   <li><code>DisableApiTermination.Value</code> - <code>boolean</code> - Optional - Boolean value</li>
   *   <li><code>InstanceType.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>Kernel.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>Ramdisk.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>UserData.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>InstanceInitiatedShutdownBehavior.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>GroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>EbsOptimized.Value</code> - <code>boolean</code> - Optional - Boolean value</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_instance_attribute: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ModifyInstanceAttribute", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Description.Value</code> - <code>string</code> - Optional - String value</li>
   *   <li><code>SourceDestCheck.Value</code> - <code>boolean</code> - Optional - Boolean value</li>
   *   <li><code>SecurityGroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Attachment</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>AttachmentId</code> - <code>string</code> - Optional - </li>
   *       <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_network_interface_attribute: function(network_interface_id,opt){
    var param = {};
    param.network_interface_id = network_interface_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ModifyNetworkInterfaceAttribute", param );
    return resposne;
  }, 
  /**
   * Adds or remove permission settings for the specified snapshot.
   *
   * @param {String} snapshot_id (Required) The ID of the EBS snapshot whose attributes are being modified.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Attribute</code> - <code>string</code> - Optional - The name of the attribute being modified. Available attribute names: <code>createVolumePermission</code> [Allowed values: <code>productCodes</code>, <code>createVolumePermission</code>]</li>
   *   <li><code>OperationType</code> - <code>string</code> - Optional - The operation to perform on the attribute. Available operation names: <code>add</code>, <code>remove</code></li>
   *   <li><code>UserId</code> - <code>string|array</code> - Optional - The AWS user IDs to add to or remove from the list of users that have permission to create EBS volumes from the specified snapshot. Currently supports "all". <p class="note">Only valid when the <code>createVolumePermission</code> attribute is being modified.</p> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>UserGroup</code> - <code>string|array</code> - Optional - The AWS group names to add to or remove from the list of groups that have permission to create EBS volumes from the specified snapshot. Currently supports "all". <p class="note">Only valid when the <code>createVolumePermission</code> attribute is being modified.</p> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>CreateVolumePermission</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Add</code> - <code>array</code> - Optional - Describes a permission allowing either a user or group to create a new EBS volume from a snapshot. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The user ID of the user that can create volumes from the snapshot.</li>
   *           <li><code>Group</code> - <code>string</code> - Optional - The group that is allowed to create volumes from the snapshot (currently supports "all").</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>Remove</code> - <code>array</code> - Optional - Describes a permission allowing either a user or group to create a new EBS volume from a snapshot. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The user ID of the user that can create volumes from the snapshot.</li>
   *           <li><code>Group</code> - <code>string</code> - Optional - The group that is allowed to create volumes from the snapshot (currently supports "all").</li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_snapshot_attribute: function(snapshot_id,opt){
    var param = {};
    param.snapshot_id = snapshot_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ModifySnapshotAttribute", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} volume_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoEnableIO.Value</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  modify_volume_attribute: function(volume_id,opt){
    var param = {};
    param.volume_id = volume_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ModifyVolumeAttribute", param );
    return resposne;
  }, 
  /**
   * Enables monitoring for a running instance.
   *
   * @param string|array $instance_id (Required) The list of Amazon EC2 instances on which to enable monitoring. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  monitor_instances: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "MonitorInstances", param );
    return resposne;
  }, 
  /**
   * The PurchaseReservedInstancesOffering operation purchases a Reserved Instance for use with your
   * account. With Amazon EC2 Reserved Instances, you purchase the right to launch Amazon EC2
   * instances for a period of time (without getting insufficient capacity errors) and pay a lower
   * usage rate for the actual time used.
   *
   * @param {String} reserved_instances_offering_id (Required) The unique ID of the Reserved Instances offering being purchased.
   * @param {Number} instance_count (Required) The number of Reserved Instances to purchase.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  purchase_reserved_instances_offering: function(reserved_instances_offering_id,instance_count,opt){
    var param = {};
    param.reserved_instances_offering_id = reserved_instances_offering_id;
    param.instance_count = instance_count;

    param = this.marge_param(param,opt);
    var response = this.request(, "PurchaseReservedInstancesOffering", param );
    return resposne;
  }, 
  /**
   * The RebootInstances operation requests a reboot of one or more instances. This operation is
   * asynchronous; it only queues a request to reboot the specified instance(s). The operation will
   * succeed if the instances are valid and belong to the user. Requests to reboot terminated
   * instances are ignored.
   *
   * @param string|array $instance_id (Required) The list of instances to terminate. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reboot_instances: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "RebootInstances", param );
    return resposne;
  }, 
  /**
   * The RegisterImage operation registers an AMI with Amazon EC2. Images must be registered before
   * they can be launched. For more information, see RunInstances.
   *  
   * Each AMI is associated with an unique ID which is provided by the Amazon EC2 service through
   * the RegisterImage operation. During registration, Amazon EC2 retrieves the specified image
   * manifest from Amazon S3 and verifies that the image is owned by the user registering the image.
   *  
   * The image manifest is retrieved once and stored within the Amazon EC2. Any modifications to an
   * image in Amazon S3 invalidates this registration. If you make changes to an image, deregister
   * the previous image and register the new image. For more information, see DeregisterImage.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ImageLocation</code> - <code>string</code> - Optional - The full path to your AMI manifest in Amazon S3 storage.</li>
   *   <li><code>Name</code> - <code>string</code> - Optional - The name to give the new Amazon Machine Image. Constraints: 3-128 alphanumeric characters, parenthesis (<code>()</code>), commas (<code>,</code>), slashes (<code>/</code>), dashes (<code>-</code>), or underscores(<code>_</code>)</li>
   *   <li><code>Description</code> - <code>string</code> - Optional - The description describing the new AMI.</li>
   *   <li><code>Architecture</code> - <code>string</code> - Optional - The architecture of the image. Valid Values: <code>i386</code>, <code>x86_64</code></li>
   *   <li><code>KernelId</code> - <code>string</code> - Optional - The optional ID of a specific kernel to register with the new AMI.</li>
   *   <li><code>RamdiskId</code> - <code>string</code> - Optional - The optional ID of a specific ramdisk to register with the new AMI. Some kernels require additional drivers at launch. Check the kernel requirements for information on whether you need to specify a RAM disk.</li>
   *   <li><code>RootDeviceName</code> - <code>string</code> - Optional - The root device name (e.g., <code>/dev/sda1</code>).</li>
   *   <li><code>BlockDeviceMapping</code> - <code>array</code> - Optional - The block device mappings for the new AMI, which specify how different block devices (ex: EBS volumes and ephemeral drives) will be exposed on instances launched from the new image. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>VirtualName</code> - <code>string</code> - Optional - Specifies the virtual device name.</li>
   *       <li><code>DeviceName</code> - <code>string</code> - Optional - Specifies the device name (e.g., <code>/dev/sdh</code>).</li>
   *       <li><code>Ebs</code> - <code>array</code> - Optional - Specifies parameters used to automatically setup Amazon EBS volumes when the instance is launched. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>SnapshotId</code> - <code>string</code> - Optional - The ID of the snapshot from which the volume will be created.</li>
   *           <li><code>VolumeSize</code> - <code>integer</code> - Optional - The size of the volume, in gigabytes.</li>
   *           <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - Specifies whether the Amazon EBS volume is deleted on instance termination.</li>
   *           <li><code>VolumeType</code> - <code>string</code> - Optional -  [Allowed values: <code>standard</code>, <code>io1</code>]</li>
   *           <li><code>Iops</code> - <code>integer</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>NoDevice</code> - <code>string</code> - Optional - Specifies the device name to suppress during instance launch.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  register_image: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "RegisterImage", param );
    return resposne;
  }, 
  /**
   * The ReleaseAddress operation releases an elastic IP address associated with your account.
   * 
   * <p class="note">
   * Releasing an IP address automatically disassociates it from any instance with which it is
   * associated. For more information, see DisassociateAddress.
   * </p>
   * <p class="important"></p> 
   * After releasing an elastic IP address, it is released to the IP address pool and might no
   * longer be available to your account. Make sure to update your DNS records and any servers or
   * devices that communicate with the address.
   *  
   * If you run this operation on an elastic IP address that is already released, the address might
   * be assigned to another account which will cause Amazon EC2 to return an error.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PublicIp</code> - <code>string</code> - Optional - The elastic IP address that you are releasing from your account.</li>
   *   <li><code>AllocationId</code> - <code>string</code> - Optional - The allocation ID that AWS provided when you allocated the address for use with Amazon VPC.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  release_address: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ReleaseAddress", param );
    return resposne;
  }, 
  /**
   * Changes which network ACL a subnet is associated with. By default when you create a subnet,
   * it's automatically associated with the default network ACL. For more information about network
   * ACLs, go to Network ACLs in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} association_id (Required) The ID representing the current association between the original network ACL and the subnet.
   * @param {String} network_acl_id (Required) The ID of the new ACL to associate with the subnet.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  replace_network_acl_association: function(association_id,network_acl_id,opt){
    var param = {};
    param.association_id = association_id;
    param.network_acl_id = network_acl_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ReplaceNetworkAclAssociation", param );
    return resposne;
  }, 
  /**
   * Replaces an entry (i.e., rule) in a network ACL. For more information about network ACLs, go to
   * Network ACLs in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} network_acl_id (Required) ID of the ACL where the entry will be replaced.
   * @param {Number} rule_number (Required) Rule number of the entry to replace.
   * @param {String} protocol (Required) IP protocol the rule applies to. Valid Values: <code>tcp</code>, <code>udp</code>, <code>icmp</code> or an IP protocol number.
   * @param {String} rule_action (Required) Whether to allow or deny traffic that matches the rule. [Allowed values: <code>allow</code>, <code>deny</code>]
   * @param boolean $egress (Required) Whether this rule applies to egress traffic from the subnet (<code>true</code>) or ingress traffic (<code>false</code>).
   * @param {String} cidr_block (Required) The CIDR range to allow or deny, in CIDR notation (e.g., <code>172.16.0.0/24</code>).
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Icmp</code> - <code>array</code> - Optional - ICMP values. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Type</code> - <code>integer</code> - Optional - For the ICMP protocol, the ICMP type. A value of <code>-1</code> is a wildcard meaning all types. Required if specifying <code>icmp</code> for the protocol.</li>
   *       <li><code>Code</code> - <code>integer</code> - Optional - For the ICMP protocol, the ICMP code. A value of <code>-1</code> is a wildcard meaning all codes. Required if specifying <code>icmp</code> for the protocol.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>PortRange</code> - <code>array</code> - Optional - Port ranges. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>From</code> - <code>integer</code> - Optional - The first port in the range. Required if specifying <code>tcp</code> or <code>udp</code> for the protocol.</li>
   *       <li><code>To</code> - <code>integer</code> - Optional - The last port in the range. Required if specifying <code>tcp</code> or <code>udp</code> for the protocol.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  replace_network_acl_entry: function(network_acl_id,rule_number,protocol,rule_action,egress,cidr_block,opt){
    var param = {};
    param.network_acl_id = network_acl_id;
    param.rule_number = rule_number;
    param.protocol = protocol;
    param.rule_action = rule_action;
    param.egress = egress;
    param.cidr_block = cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "ReplaceNetworkAclEntry", param );
    return resposne;
  }, 
  /**
   * Replaces an existing route within a route table in a VPC. For more information about route
   * tables, go to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *
   * @param {String} route_table_id (Required) The ID of the route table where the route will be replaced.
   * @param {String} destination_cidr_block (Required) The CIDR address block used for the destination match. For example: <code>0.0.0.0/0</code>. The value you provide must match the CIDR of an existing route in the table.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GatewayId</code> - <code>string</code> - Optional - The ID of a VPN or Internet gateway attached to your VPC.</li>
   *   <li><code>InstanceId</code> - <code>string</code> - Optional - The ID of a NAT instance in your VPC.</li>
   *   <li><code>NetworkInterfaceId</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  replace_route: function(route_table_id,destination_cidr_block,opt){
    var param = {};
    param.route_table_id = route_table_id;
    param.destination_cidr_block = destination_cidr_block;

    param = this.marge_param(param,opt);
    var response = this.request(, "ReplaceRoute", param );
    return resposne;
  }, 
  /**
   * Changes the route table associated with a given subnet in a VPC. After you execute this action,
   * the subnet uses the routes in the new route table it's associated with. For more information
   * about route tables, go to <a href=
   * "http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html">Route
   * Tables</a> in the Amazon Virtual Private Cloud User Guide.
   *  
   * You can also use this to change which table is the main route table in the VPC. You just
   * specify the main route table's association ID and the route table that you want to be the new
   * main route table.
   *
   * @param {String} association_id (Required) The ID representing the current association between the original route table and the subnet.
   * @param {String} route_table_id (Required) The ID of the new route table to associate with the subnet.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  replace_route_table_association: function(association_id,route_table_id,opt){
    var param = {};
    param.association_id = association_id;
    param.route_table_id = route_table_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ReplaceRouteTableAssociation", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Status</code> - <code>string</code> - Optional - </li>
   *   <li><code>StartTime</code> - <code>string</code> - Optional -  May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>EndTime</code> - <code>string</code> - Optional -  May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>ReasonCode</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>Description</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  report_instance_status: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ReportInstanceStatus", param );
    return resposne;
  }, 
  /**
   * Creates a Spot Instance request.
   *  
   * Spot Instances are instances that Amazon EC2 starts on your behalf when the maximum price that
   * you specify exceeds the current Spot Price. Amazon EC2 periodically sets the Spot Price based
   * on available Spot Instance capacity and current spot instance requests.
   *  
   * For conceptual information about Spot Instances, refer to the <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/DeveloperGuide/">Amazon Elastic Compute
   * Cloud Developer Guide</a> or <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/2009-11-30/UserGuide/">Amazon Elastic Compute Cloud
   * User Guide.</a>
   *
   * @param {String} spot_price (Required) Specifies the maximum hourly price for any Spot Instance launched to fulfill the request.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceCount</code> - <code>integer</code> - Optional - Specifies the maximum number of Spot Instances to launch.</li>
   *   <li><code>Type</code> - <code>string</code> - Optional - Specifies the Spot Instance type. [Allowed values: <code>one-time</code>, <code>persistent</code>]</li>
   *   <li><code>ValidFrom</code> - <code>string</code> - Optional - Defines the start date of the request. If this is a one-time request, the request becomes active at this date and time and remains active until all instances launch, the request expires, or the request is canceled. If the request is persistent, the request becomes active at this date and time and remains active until it expires or is canceled. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>ValidUntil</code> - <code>string</code> - Optional - End date of the request. If this is a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date and time is reached. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>LaunchGroup</code> - <code>string</code> - Optional - Specifies the instance launch group. Launch groups are Spot Instances that launch and terminate together.</li>
   *   <li><code>AvailabilityZoneGroup</code> - <code>string</code> - Optional - Specifies the Availability Zone group. When specifying the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</li>
   *   <li><code>LaunchSpecification</code> - <code>array</code> - Optional - Specifies additional launch instance information. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>ImageId</code> - <code>string</code> - Optional - The AMI ID.</li>
   *       <li><code>KeyName</code> - <code>string</code> - Optional - The name of the key pair.</li>
   *       <li><code>GroupSet</code> - <code>array</code> - Optional -  <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - </li>
   *           <li><code>GroupId</code> - <code>string</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>SecurityGroup</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *       <li><code>UserData</code> - <code>string</code> - Optional - Optional data, specific to a user's application, to provide in the launch request. All instances that collectively comprise the launch request have access to this data. User data is never returned through API responses.</li>
   *       <li><code>AddressingType</code> - <code>string</code> - Optional - </li>
   *       <li><code>InstanceType</code> - <code>string</code> - Optional - Specifies the instance type. [Allowed values: <code>t1.micro</code>, <code>m1.small</code>, <code>m1.medium</code>, <code>m1.large</code>, <code>m1.xlarge</code>, <code>m2.xlarge</code>, <code>m2.2xlarge</code>, <code>m2.4xlarge</code>, <code>c1.medium</code>, <code>c1.xlarge</code>, <code>hi1.4xlarge</code>, <code>cc1.4xlarge</code>, <code>cc2.8xlarge</code>, <code>cg1.4xlarge</code>]</li>
   *       <li><code>Placement</code> - <code>array</code> - Optional - Defines a placement item. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>AvailabilityZone</code> - <code>string</code> - Optional - The availability zone in which an Amazon EC2 instance runs.</li>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - The name of the <code>PlacementGroup</code> in which an Amazon EC2 instance runs. Placement groups are primarily used for launching High Performance Computing instances in the same group to ensure fast connection speeds.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>KernelId</code> - <code>string</code> - Optional - Specifies the ID of the kernel to select.</li>
   *       <li><code>RamdiskId</code> - <code>string</code> - Optional - Specifies the ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information on whether or not you need to specify a RAM disk and search for the kernel ID.</li>
   *       <li><code>BlockDeviceMapping</code> - <code>array</code> - Optional - Specifies how block devices are exposed to the instance. Each mapping is made up of a virtualName and a deviceName. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>VirtualName</code> - <code>string</code> - Optional - Specifies the virtual device name.</li>
   *           <li><code>DeviceName</code> - <code>string</code> - Optional - Specifies the device name (e.g., <code>/dev/sdh</code>).</li>
   *           <li><code>Ebs</code> - <code>array</code> - Optional - Specifies parameters used to automatically setup Amazon EBS volumes when the instance is launched. <ul>
   *             <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *               <li><code>SnapshotId</code> - <code>string</code> - Optional - The ID of the snapshot from which the volume will be created.</li>
   *               <li><code>VolumeSize</code> - <code>integer</code> - Optional - The size of the volume, in gigabytes.</li>
   *               <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - Specifies whether the Amazon EBS volume is deleted on instance termination.</li>
   *               <li><code>VolumeType</code> - <code>string</code> - Optional -  [Allowed values: <code>standard</code>, <code>io1</code>]</li>
   *               <li><code>Iops</code> - <code>integer</code> - Optional - </li>
   *             </ul></li>
   *           </ul></li>
   *           <li><code>NoDevice</code> - <code>string</code> - Optional - Specifies the device name to suppress during instance launch.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>Monitoring.Enabled</code> - <code>boolean</code> - Optional - Enables monitoring for the instance.</li>
   *       <li><code>SubnetId</code> - <code>string</code> - Optional - Specifies the Amazon VPC subnet ID within which to launch the instance(s) for Amazon Virtual Private Cloud.</li>
   *       <li><code>NetworkInterfaceSet</code> - <code>array</code> - Optional -  <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>NetworkInterfaceId</code> - <code>string</code> - Optional - </li>
   *           <li><code>DeviceIndex</code> - <code>integer</code> - Optional - </li>
   *           <li><code>SubnetId</code> - <code>string</code> - Optional - </li>
   *           <li><code>Description</code> - <code>string</code> - Optional - </li>
   *           <li><code>PrivateIpAddress</code> - <code>string</code> - Optional - </li>
   *           <li><code>SecurityGroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *           <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - </li>
   *           <li><code>PrivateIpAddresses</code> - <code>array</code> - Optional -  <ul>
   *             <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *               <li><code>PrivateIpAddress</code> - <code>string</code> - Required - </li>
   *               <li><code>Primary</code> - <code>boolean</code> - Optional - </li>
   *             </ul></li>
   *           </ul></li>
   *           <li><code>SecondaryPrivateIpAddressCount</code> - <code>integer</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>IamInstanceProfile</code> - <code>array</code> - Optional -  <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>Arn</code> - <code>string</code> - Optional - </li>
   *           <li><code>Name</code> - <code>string</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>EbsOptimized</code> - <code>boolean</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  request_spot_instances: function(spot_price,opt){
    var param = {};
    param.spot_price = spot_price;

    param = this.marge_param(param,opt);
    var response = this.request(, "RequestSpotInstances", param );
    return resposne;
  }, 
  /**
   * The ResetImageAttribute operation resets an attribute of an AMI to its default value.
   * 
   * <p class="note">
   * The productCodes attribute cannot be reset.
   * </p>
   *
   * @param {String} image_id (Required) The ID of the AMI whose attribute is being reset.
   * @param {String} attribute (Required) The name of the attribute being reset. Available attribute names: <code>launchPermission</code>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reset_image_attribute: function(image_id,attribute,opt){
    var param = {};
    param.image_id = image_id;
    param.attribute = attribute;

    param = this.marge_param(param,opt);
    var response = this.request(, "ResetImageAttribute", param );
    return resposne;
  }, 
  /**
   * Resets an attribute of an instance to its default value.
   *
   * @param {String} instance_id (Required) The ID of the Amazon EC2 instance whose attribute is being reset.
   * @param {String} attribute (Required) The name of the attribute being reset. Available attribute names: <code>kernel</code>, <code>ramdisk</code> [Allowed values: <code>instanceType</code>, <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, <code>instanceInitiatedShutdownBehavior</code>, <code>rootDeviceName</code>, <code>blockDeviceMapping</code>, <code>productCodes</code>, <code>sourceDestCheck</code>, <code>groupSet</code>, <code>ebsOptimized</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reset_instance_attribute: function(instance_id,attribute,opt){
    var param = {};
    param.instance_id = instance_id;
    param.attribute = attribute;

    param = this.marge_param(param,opt);
    var response = this.request(, "ResetInstanceAttribute", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>SourceDestCheck</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reset_network_interface_attribute: function(network_interface_id,opt){
    var param = {};
    param.network_interface_id = network_interface_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "ResetNetworkInterfaceAttribute", param );
    return resposne;
  }, 
  /**
   * Resets permission settings for the specified snapshot.
   *
   * @param {String} snapshot_id (Required) The ID of the snapshot whose attribute is being reset.
   * @param {String} attribute (Required) The name of the attribute being reset. Available attribute names: <code>createVolumePermission</code> [Allowed values: <code>productCodes</code>, <code>createVolumePermission</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  reset_snapshot_attribute: function(snapshot_id,attribute,opt){
    var param = {};
    param.snapshot_id = snapshot_id;
    param.attribute = attribute;

    param = this.marge_param(param,opt);
    var response = this.request(, "ResetSnapshotAttribute", param );
    return resposne;
  }, 
  /**
   * This action applies only to security groups in a VPC. It doesn't work with EC2 security groups.
   * For information about Amazon Virtual Private Cloud and VPC security groups, go to the Amazon
   * Virtual Private Cloud User Guide.
   *  
   * The action removes one or more egress rules from a VPC security group. The values that you
   * specify in the revoke request (e.g., ports, etc.) must match the existing rule's values in
   * order for the rule to be revoked.
   *  
   * Each rule consists of the protocol, and the CIDR range or destination security group. For the
   * TCP and UDP protocols, you must also specify the destination port or range of ports. For the
   * ICMP protocol, you must also specify the ICMP type and code.
   *  
   * Rule changes are propagated to instances within the security group as quickly as possible.
   * However, a small delay might occur.
   *
   * @param {String} group_id (Required) ID of the VPC security group to modify.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>IpPermissions</code> - <code>array</code> - Optional - List of IP permissions to authorize on the specified security group. Specifying permissions through IP permissions is the preferred way of authorizing permissions since it offers more flexibility and control. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>IpProtocol</code> - <code>string</code> - Optional - The IP protocol of this permission. Valid protocol values: <code>tcp</code>, <code>udp</code>, <code>icmp</code></li>
   *       <li><code>FromPort</code> - <code>integer</code> - Optional - Start of port range for the TCP and UDP protocols, or an ICMP type number. An ICMP type number of <code>-1</code> indicates a wildcard (i.e., any ICMP type number).</li>
   *       <li><code>ToPort</code> - <code>integer</code> - Optional - End of port range for the TCP and UDP protocols, or an ICMP code. An ICMP code of <code>-1</code> indicates a wildcard (i.e., any ICMP code).</li>
   *       <li><code>Groups</code> - <code>array</code> - Optional - The list of AWS user IDs and groups included in this permission. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The AWS user ID of an account.</li>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - Name of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *           <li><code>GroupId</code> - <code>string</code> - Optional - ID of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>IpRanges</code> - <code>string|array</code> - Optional - The list of CIDR IP ranges included in this permission. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  revoke_security_group_egress: function(group_id,opt){
    var param = {};
    param.group_id = group_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "RevokeSecurityGroupEgress", param );
    return resposne;
  }, 
  /**
   * The RevokeSecurityGroupIngress operation revokes permissions from a security group. The
   * permissions used to revoke must be specified using the same values used to grant the
   * permissions.
   *  
   * Permissions are specified by IP protocol (TCP, UDP, or ICMP), the source of the request (by IP
   * range or an Amazon EC2 user-group pair), the source and destination port ranges (for TCP and
   * UDP), and the ICMP codes and types (for ICMP).
   *  
   * Permission changes are quickly propagated to instances within the security group. However,
   * depending on the number of instances in the group, a small delay might occur.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>GroupName</code> - <code>string</code> - Optional - Name of the standard (EC2) security group to modify. The group must belong to your account. Can be used instead of GroupID for standard (EC2) security groups.</li>
   *   <li><code>GroupId</code> - <code>string</code> - Optional - ID of the standard (EC2) or VPC security group to modify. The group must belong to your account. Required for VPC security groups; can be used instead of GroupName for standard (EC2) security groups.</li>
   *   <li><code>IpPermissions</code> - <code>array</code> - Optional - List of IP permissions to revoke on the specified security group. For an IP permission to be removed, it must exactly match one of the IP permissions you specify in this list. Specifying permissions through IP permissions is the preferred way of revoking permissions since it offers more flexibility and control. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>IpProtocol</code> - <code>string</code> - Optional - The IP protocol of this permission. Valid protocol values: <code>tcp</code>, <code>udp</code>, <code>icmp</code></li>
   *       <li><code>FromPort</code> - <code>integer</code> - Optional - Start of port range for the TCP and UDP protocols, or an ICMP type number. An ICMP type number of <code>-1</code> indicates a wildcard (i.e., any ICMP type number).</li>
   *       <li><code>ToPort</code> - <code>integer</code> - Optional - End of port range for the TCP and UDP protocols, or an ICMP code. An ICMP code of <code>-1</code> indicates a wildcard (i.e., any ICMP code).</li>
   *       <li><code>Groups</code> - <code>array</code> - Optional - The list of AWS user IDs and groups included in this permission. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>UserId</code> - <code>string</code> - Optional - The AWS user ID of an account.</li>
   *           <li><code>GroupName</code> - <code>string</code> - Optional - Name of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *           <li><code>GroupId</code> - <code>string</code> - Optional - ID of the security group in the specified AWS account. Cannot be used when specifying a CIDR IP address range.</li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>IpRanges</code> - <code>string|array</code> - Optional - The list of CIDR IP ranges included in this permission. Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  revoke_security_group_ingress: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "RevokeSecurityGroupIngress", param );
    return resposne;
  }, 
  /**
   * The RunInstances operation launches a specified number of instances.
   *  
   * If Amazon EC2 cannot launch the minimum number AMIs you request, no instances launch. If there
   * is insufficient capacity to launch the maximum number of AMIs you request, Amazon EC2 launches
   * as many as possible to satisfy the requested maximum values.
   *  
   * Every instance is launched in a security group. If you do not specify a security group at
   * launch, the instances start in your default security group. For more information on creating
   * security groups, see CreateSecurityGroup.
   *  
   * An optional instance type can be specified. For information about instance types, see Instance
   * Types.
   *  
   * You can provide an optional key pair ID for each image in the launch request (for more
   * information, see CreateKeyPair). All instances that are created from images that use this key
   * pair will have access to the associated public key at boot. You can use this key to provide
   * secure access to an instance of an image on a per-instance basis. Amazon EC2 public images use
   * this feature to provide secure access without passwords.
   * 
   * <p class="important"></p> 
   * Launching public images without a key pair ID will leave them inaccessible.
   *  
   * The public key material is made available to the instance at boot time by placing it in the
   * <code>openssh_id.pub</code> file on a logical device that is exposed to the instance as
   * <code>/dev/sda2</code> (the ephemeral store). The format of this file is suitable for use as an
   * entry within <code>~/.ssh/authorized_keys</code> (the OpenSSH format). This can be done at boot
   * (e.g., as part of <code>rc.local</code>) allowing for secure access without passwords.
   *  
   * Optional user data can be provided in the launch request. All instances that collectively
   * comprise the launch request have access to this data For more information, see Instance
   * Metadata.
   * 
   * <p class="note">
   * If any of the AMIs have a product code attached for which the user has not subscribed, the
   * RunInstances call will fail.
   * </p>
   * <p class="important"></p> 
   * We strongly recommend using the 2.6.18 Xen stock kernel with the <code>c1.medium</code> and
   * <code>c1.xlarge</code> instances. Although the default Amazon EC2 kernels will work, the new
   * kernels provide greater stability and performance for these instance types. For more
   * information about kernels, see Kernels, RAM Disks, and Block Device Mappings.
   *
   * @param {String} image_id (Required) Unique ID of a machine image, returned by a call to DescribeImages.
   * @param {Number} min_count (Required) Minimum number of instances to launch. If the value is more than Amazon EC2 can launch, no instances are launched at all.
   * @param {Number} max_count (Required) Maximum number of instances to launch. If the value is more than Amazon EC2 can launch, the largest possible number above minCount will be launched instead. Between 1 and the maximum number allowed for your account (default: 20).
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>KeyName</code> - <code>string</code> - Optional - The name of the key pair.</li>
   *   <li><code>SecurityGroup</code> - <code>string|array</code> - Optional - The names of the security groups into which the instances will be launched. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>SecurityGroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>UserData</code> - <code>string</code> - Optional - Specifies additional information to make available to the instance(s).</li>
   *   <li><code>AddressingType</code> - <code>string</code> - Optional - </li>
   *   <li><code>InstanceType</code> - <code>string</code> - Optional - Specifies the instance type for the launched instances. [Allowed values: <code>t1.micro</code>, <code>m1.small</code>, <code>m1.medium</code>, <code>m1.large</code>, <code>m1.xlarge</code>, <code>m2.xlarge</code>, <code>m2.2xlarge</code>, <code>m2.4xlarge</code>, <code>c1.medium</code>, <code>c1.xlarge</code>, <code>hi1.4xlarge</code>, <code>cc1.4xlarge</code>, <code>cc2.8xlarge</code>, <code>cg1.4xlarge</code>]</li>
   *   <li><code>Placement</code> - <code>array</code> - Optional - Specifies the placement constraints (Availability Zones) for launching the instances. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>AvailabilityZone</code> - <code>string</code> - Optional - The availability zone in which an Amazon EC2 instance runs.</li>
   *       <li><code>GroupName</code> - <code>string</code> - Optional - The name of the <code>PlacementGroup</code> in which an Amazon EC2 instance runs. Placement groups are primarily used for launching High Performance Computing instances in the same group to ensure fast connection speeds.</li>
   *       <li><code>Tenancy</code> - <code>string</code> - Optional - The allowed tenancy of instances launched into the VPC. A value of default means instances can be launched with any tenancy; a value of dedicated means all instances launched into the VPC will be launched as dedicated tenancy regardless of the tenancy assigned to the instance at launch.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>KernelId</code> - <code>string</code> - Optional - The ID of the kernel with which to launch the instance.</li>
   *   <li><code>RamdiskId</code> - <code>string</code> - Optional - The ID of the RAM disk with which to launch the instance. Some kernels require additional drivers at launch. Check the kernel requirements for information on whether you need to specify a RAM disk. To find kernel requirements, go to the Resource Center and search for the kernel ID.</li>
   *   <li><code>BlockDeviceMapping</code> - <code>array</code> - Optional - Specifies how block devices are exposed to the instance. Each mapping is made up of a virtualName and a deviceName. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>VirtualName</code> - <code>string</code> - Optional - Specifies the virtual device name.</li>
   *       <li><code>DeviceName</code> - <code>string</code> - Optional - Specifies the device name (e.g., <code>/dev/sdh</code>).</li>
   *       <li><code>Ebs</code> - <code>array</code> - Optional - Specifies parameters used to automatically setup Amazon EBS volumes when the instance is launched. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>SnapshotId</code> - <code>string</code> - Optional - The ID of the snapshot from which the volume will be created.</li>
   *           <li><code>VolumeSize</code> - <code>integer</code> - Optional - The size of the volume, in gigabytes.</li>
   *           <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - Specifies whether the Amazon EBS volume is deleted on instance termination.</li>
   *           <li><code>VolumeType</code> - <code>string</code> - Optional -  [Allowed values: <code>standard</code>, <code>io1</code>]</li>
   *           <li><code>Iops</code> - <code>integer</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>NoDevice</code> - <code>string</code> - Optional - Specifies the device name to suppress during instance launch.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>Monitoring.Enabled</code> - <code>boolean</code> - Optional - Enables monitoring for the instance.</li>
   *   <li><code>SubnetId</code> - <code>string</code> - Optional - Specifies the subnet ID within which to launch the instance(s) for Amazon Virtual Private Cloud.</li>
   *   <li><code>DisableApiTermination</code> - <code>boolean</code> - Optional - Specifies whether the instance can be terminated using the APIs. You must modify this attribute before you can terminate any "locked" instances from the APIs.</li>
   *   <li><code>InstanceInitiatedShutdownBehavior</code> - <code>string</code> - Optional - Specifies whether the instance's Amazon EBS volumes are stopped or terminated when the instance is shut down.</li>
   *   <li><code>License</code> - <code>array</code> - Optional - Specifies active licenses in use and attached to an Amazon EC2 instance. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Pool</code> - <code>string</code> - Optional - The license pool from which to take a license when starting Amazon EC2 instances in the associated <code>RunInstances</code> request.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>PrivateIpAddress</code> - <code>string</code> - Optional - If you're using Amazon Virtual Private Cloud, you can optionally use this parameter to assign the instance a specific available IP address from the subnet.</li>
   *   <li><code>ClientToken</code> - <code>string</code> - Optional - Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, go to How to Ensure Idempotency in the Amazon Elastic Compute Cloud User Guide.</li>
   *   <li><code>NetworkInterface</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>NetworkInterfaceId</code> - <code>string</code> - Optional - </li>
   *       <li><code>DeviceIndex</code> - <code>integer</code> - Optional - </li>
   *       <li><code>SubnetId</code> - <code>string</code> - Optional - </li>
   *       <li><code>Description</code> - <code>string</code> - Optional - </li>
   *       <li><code>PrivateIpAddress</code> - <code>string</code> - Optional - </li>
   *       <li><code>SecurityGroupId</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *       <li><code>DeleteOnTermination</code> - <code>boolean</code> - Optional - </li>
   *       <li><code>PrivateIpAddresses</code> - <code>array</code> - Optional -  <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>PrivateIpAddress</code> - <code>string</code> - Required - </li>
   *           <li><code>Primary</code> - <code>boolean</code> - Optional - </li>
   *         </ul></li>
   *       </ul></li>
   *       <li><code>SecondaryPrivateIpAddressCount</code> - <code>integer</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>IamInstanceProfile</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Arn</code> - <code>string</code> - Optional - </li>
   *       <li><code>Name</code> - <code>string</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>EbsOptimized</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  run_instances: function(image_id,min_count,max_count,opt){
    var param = {};
    param.image_id = image_id;
    param.min_count = min_count;
    param.max_count = max_count;

    param = this.marge_param(param,opt);
    var response = this.request(, "RunInstances", param );
    return resposne;
  }, 
  /**
   * Starts an instance that uses an Amazon EBS volume as its root device. Instances that use Amazon
   * EBS volumes as their root devices can be quickly stopped and started. When an instance is
   * stopped, the compute resources are released and you are not billed for hourly instance usage.
   * However, your root partition Amazon EBS volume remains, continues to persist your data, and you
   * are charged for Amazon EBS volume usage. You can restart your instance at any time.
   * 
   * <p class="note"></p> 
   * Performing this operation on an instance that uses an instance store as its root device returns
   * an error.
   *
   * @param string|array $instance_id (Required) The list of Amazon EC2 instances to start. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AdditionalInfo</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  start_instances: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "StartInstances", param );
    return resposne;
  }, 
  /**
   * Stops an instance that uses an Amazon EBS volume as its root device. Instances that use Amazon
   * EBS volumes as their root devices can be quickly stopped and started. When an instance is
   * stopped, the compute resources are released and you are not billed for hourly instance usage.
   * However, your root partition Amazon EBS volume remains, continues to persist your data, and you
   * are charged for Amazon EBS volume usage. You can restart your instance at any time.
   * 
   * <p class="note"></p> 
   * Before stopping an instance, make sure it is in a state from which it can be restarted.
   * Stopping an instance does not preserve data stored in RAM.
   *  
   * Performing this operation on an instance that uses an instance store as its root device returns
   * an error.
   *
   * @param string|array $instance_id (Required) The list of Amazon EC2 instances to stop. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Force</code> - <code>boolean</code> - Optional - Forces the instance to stop. The instance will not have an opportunity to flush file system caches nor file system meta data. If you use this option, you must perform file system check and repair procedures. This option is not recommended for Windows instances.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  stop_instances: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "StopInstances", param );
    return resposne;
  }, 
  /**
   * The TerminateInstances operation shuts down one or more instances. This operation is
   * idempotent; if you terminate an instance more than once, each call will succeed.
   *  
   * Terminated instances will remain visible after termination (approximately one hour).
   *
   * @param string|array $instance_id (Required) The list of instances to terminate. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  terminate_instances: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "TerminateInstances", param );
    return resposne;
  }, 
  /**
   * 
   *
   * @param {String} network_interface_id (Required) 
   * @param string|array $private_ip_address (Required)  Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  unassign_private_ip_addresses: function(network_interface_id,private_ip_address,opt){
    var param = {};
    param.network_interface_id = network_interface_id;
    param.private_ip_address = private_ip_address;

    param = this.marge_param(param,opt);
    var response = this.request(, "UnassignPrivateIpAddresses", param );
    return resposne;
  }, 
  /**
   * Disables monitoring for a running instance.
   *
   * @param string|array $instance_id (Required) The list of Amazon EC2 instances on which to disable monitoring. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  unmonitor_instances: function(instance_id,opt){
    var param = {};
    param.instance_id = instance_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "UnmonitorInstances", param );
    return resposne;
  }
}
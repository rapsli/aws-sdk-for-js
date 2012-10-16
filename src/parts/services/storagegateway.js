/**
 * @class AmazonStorageGatewayClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonStorageGateway(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonStorageGateway.prototype = {
  service:'storagegateway',
  api_version:'2012-04-30',
  auth_class: new AuthV4JSON(),
  operation_prefix: 'x-amz-target:StorageGateway_20120430.',
  /**
   * @memberOf AmazonStorageGateway
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * This operation activates the gateway you previously deployed on your VMware host. For more
   * information, see <code>DownloadAndDeploy</code>. In the activation process you specify
   * information such as the region you want to use for storing snapshots, the time zone for
   * scheduled snapshots and the gateway schedule window, an activation key, and a name for your
   * gateway. The activation process also associates your gateway with your account.
   * 
   * <p class="note">
   * You must power on the gateway VM before you can activate your gateway.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.ActivationKey Your gateway activation key. You can obtain the activation key by sending a GET request to the gateway IP. The redirect URL returned in the response provides you the activation key for your gateway. Length: Minimum length of 1. Maximum length of 50.
   * @param {String} opt.GatewayName A unique identifier for your gateway. This name becomes part of the gateway Amazon Resources Name (ARN) which is what you use as an input to other operations. Length: Minimum length of 2. Maximum length of 255. [Constraints: The value must be between 2 and 255 characters, and must match the following regular expression pattern: 
   * @param {String} opt.GatewayTimezone One of the 
   * @param {String} opt.GatewayRegion One of the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  activate_gateway: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ActivateGateway", payload );
    return response;
  }, 
  /**
   * This operation configures one or more gateway local disks as working storage.
   *  
   * In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add
   * working storage, and one or more disk IDs that you want to configure as working storage.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {String|array} opt.DiskIds An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  add_working_storage: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddWorkingStorage", payload );
    return response;
  }, 
  /**
   * This operation initiates a snapshot of a volume.
   *  
   * AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to
   * Amazon Simple Storage (S3) for durable off-site recovery, as well as import the data to an
   * Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take
   * snapshots of your gateway volume on a scheduled or ad-hoc basis. This API enables you to take
   * ad-hoc snapshot. For more information, see <a href="TBD">Working With Snapshots in the AWS
   * Storage Gateway Console</a>.
   *  
   * In the CreateSnapshot request you identify the volume by providing it's Amazon Resource Name
   * (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the
   * snapshot of specified volume, the snapshot and description appears in the Amazon EC2 console.
   * In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to
   * check the snapshot progress or later use it when you want to create a volume from a snapshot.
   * 
   * <p class="note">
   * To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to
   *   <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteSnapshot.html">
   * DeleteSnapshot</a> and <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">
   * DescribeSnapshots</a> in the <em>Amazon Elastic Compute Cloud API Reference</em>.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.VolumeARN The Amazon Resource Name (ARN) of the volume. Use the 
   * @param {String} opt.SnapshotDescription Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_snapshot: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateSnapshot", payload );
    return response;
  }, 
  /**
   * This operation creates a volume on a specified gateway. The size of the volume is inferred from
   * the disk size. You can choose to preserve existing data on the disk, create volume from an
   * existing snapshot, or create an empty volume. If you choose to create an empty gateway volume,
   * then any existing data on the disk is erased.
   *  
   * In the request you must specify the gateway and the disk information on which you are creating
   * the volume. In response, AWS Storage Gateway creates the volume and returns volume information
   * such as the volume ARN, size and the iSCSI target ARN that initiators can use to connect to the
   * volume target.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {String} opt.DiskId The unique identifier for the gateway local disk that is configured as a stored volume. Use 
   * @param {String} [opt.SnapshotId] The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot otherwise do not include this field. To list snapshots for your account use 
   * @param {Boolean} opt.PreserveExistingData Specify this field as true if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume. 
   * @param {String} opt.TargetName The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. For example, specifying 
   * @param {String} opt.NetworkInterfaceId The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_stored_iscsi_volume: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateStoredIscsiVolume", payload );
    return response;
  }, 
  /**
   * This operation deletes the bandwidth rate limits of a gateway. You can delete either the upload
   * and download bandwidth rate limit, or you can delete both. If you delete only one of the
   * limits, the other limit remains unchanged. To specify which gateway to work with, use the
   * Amazon Resource Name (ARN) of the gateway in your request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {String} opt.BandwidthType One of the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_bandwidth_rate_limit: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteBandwidthRateLimit", payload );
    return response;
  }, 
  /**
   * This operation deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a
   * specified iSCSI target and initiator pair.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TargetARN The Amazon Resource Name (ARN) of the iSCSI volume target. Use the 
   * @param {String} opt.InitiatorName The iSCSI initiator that connects to the target. Length: 1 to 255 characters. 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_chap_credentials: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteChapCredentials", payload );
    return response;
  }, 
  /**
   * This operation deletes a gateway. To specify which gateway to delete, use the Amazon Resource
   * Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
   * not delete the gateway virtual machine (VM) from your host computer.
   *  
   * After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
   * volumes are not deleted upon deleting the gateway, however, pending snapshots will not
   * complete. After you delete a gateway, your next step is to remove it from your environment.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_gateway: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteGateway", payload );
    return response;
  }, 
  /**
   * This operation delete the specified gateway volume that you previously created using the
   * <code>CreateStorediSCSIVolume</code> API. The gateway local disk that was configured as the
   * storage volume is not deleted. You can reuse the local disk to create another storage volume.
   *  
   * Before you delete a gateway volume, make sure there are no iSCSI connections to the volume you
   * are deleting. You should also make sure there is no snapshot in progress. You can use the
   * Amazon Elastic Compute Cloud (EC2) API to query snapshots on the volume you are deleting and
   * check the snapshot status. For more information, go to <a href=
   * "http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">
   * DescribeSnapshots</a> in the <em>Amazon Elastic Compute Cloud API Reference</em>.
   *  
   * In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want
   * to delete.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.VolumeARN The Amazon Resource Name (ARN) of the volume. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_volume: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteVolume", payload );
    return response;
  }, 
  /**
   * This operation returns the bandwidth rate limits of a gateway. By default, these limits are not
   * set, which means no bandwidth rate limiting is in effect.
   *  
   * This operation only returns a value for a bandwidth rate limit only if the limit is set. If no
   * limits are set for the gateway, then this operation returns only the gateway ARN in the
   * response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the
   * gateway in your request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_bandwidth_rate_limit: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeBandwidthRateLimit", payload );
    return response;
  }, 
  /**
   * This operation returns an array of Challenge-Handshake Authentication Protocol (CHAP)
   * credentials information for a specified iSCSI target, one for each target-initiator pair.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TargetARN The Amazon Resource Name (ARN) of the iSCSI volume target. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_chap_credentials: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeChapCredentials", payload );
    return response;
  }, 
  /**
   * This operation returns metadata about a gateway such as its name, network interfaces,
   * configured time zone, and the state (whether the gateway is running or not). To specify which
   * gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_gateway_information: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeGatewayInformation", payload );
    return response;
  }, 
  /**
   * This operation returns your gateway's weekly maintenance start time including the day and time
   * of the week. Note that values are in terms of the gateway's time zone.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_maintenance_start_time: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeMaintenanceStartTime", payload );
    return response;
  }, 
  /**
   * This operation describes the snapshot schedule for the specified gateway volume. The snapshot
   * schedule information includes intervals at which snapshots are automatically initiated on the
   * volume.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.VolumeARN The Amazon Resource Name (ARN) of the volume. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_snapshot_schedule: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeSnapshotSchedule", payload );
    return response;
  }, 
  /**
   * This operation returns description of the gateway volumes specified in the request. The list of
   * gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway
   * returns volume information sorted by volume ARNs.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String|array} opt.VolumeARNs An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the specified stored volumes must from the same gateway. Use 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_stored_iscsi_volumes: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeStoredIscsiVolumes", payload );
    return response;
  }, 
  /**
   * This operation returns information about the working storage of a gateway. The response
   * includes disk IDs that are configured as working storage, and it includes the amount of working
   * storage allocated and used.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_working_storage: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeWorkingStorage", payload );
    return response;
  }, 
  /**
   * This operation lists gateways owned by an AWS account in a region specified in the request. The
   * returned list is ordered by gateway Amazon Resource Name (ARN).
   *  
   * By default, the operation returns a maximum of 100 gateways. This operation supports pagination
   * that allows you to optionally reduce the number of gateways returned in a response.
   *  
   * If you have more gateways than are returned in a response-that is, the response returns only a
   * truncated list of your gateways-the response contains a marker that you can specify in your
   * next request to fetch the next page of gateways.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] An opaque string that indicates the position at which to begin the returned list of gateways. 
   * @param {Number} [opt.Limit] Specifies that the list of gateways returned be limited to the specified number of items. Valid Values: a number from 1 to 100.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_gateways: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListGateways", payload );
    return response;
  }, 
  /**
   * This operation returns a list of the local disks of a gateway. To specify which gateway to
   * describe you use the Amazon Resource Name (ARN) of the gateway in the body of the request.
   *  
   * The request returns all disks, specifying which are configured as working storage, stored
   * volume or not configured at all.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_local_disks: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListLocalDisks", payload );
    return response;
  }, 
  /**
   * This operation lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN.
   * The response includes only the volume ARNs. If you want additional volume information, use the
   * <code>DescribeStorediSCSIVolumes</code> API.
   *  
   * The operation supports pagination. By default, the operation returns a maximum of up to 100
   * volumes. You can optionally specify the <code>Limit</code> field in the body to limit the
   * number of volumes in the response. If the number of volumes returned in the response is
   * truncated, the response includes a Marker field. You can use this Marker value in your
   * subsequent request to retrieve the next set of volumes.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {String} [opt.Marker] A string that indicates the position at which to begin the returned list of volumes. Obtain the marker from the response of a previous List iSCSI Volumes request.
   * @param {Number} [opt.Limit] Specifies that the list of volumes returned be limited to the specified number of items. Constraint: Minimum value of 1. Maximum value of 100.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_volumes: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListVolumes", payload );
    return response;
  }, 
  /**
   * This operation shuts down a gateway. To specify which gateway to shut down, use the Amazon
   * Resource Name (ARN) of the gateway in the body of your request.
   *  
   * The operation shuts down the gateway service component running in the storage gateway's virtual
   * machine (VM) and not the VM.
   * 
   * <p class="note">
   * If you want to shut down the VM, it is recommended that you first shut down the gateway
   * component in the VM to avoid unpredictable conditions.
   * </p> 
   * After the gateway is shutdown, you cannot call any other API except <code>StartGateway</code>,
   * <code>DescribeGatewayInformation</code>, and <code>ListGateways</code>. For more information,
   * see <code>ActivateGateway</code>. Your applications cannot read from or write to the gateway's
   * storage volumes, and there are no snapshots taken.
   * 
   * <p class="note">
   * When you make a shutdown request, you will get a <code>200 OK</code> success response
   * immediately. However, it might take some time for the gateway to shut down. You can call the
   * <code>DescribeGatewayInformation</code> API to check the status. For more information, see
   * <code>ActivateGateway</code>.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  shutdown_gateway: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ShutdownGateway", payload );
    return response;
  }, 
  /**
   * This operation starts a gateway that you previously shut down (see
   * <code>ShutdownGateway</code>). After the gateway starts, you can then make other API calls,
   * your applications can read from or write to the gateway's storage volumes and you will be able
   * to take snapshot backups.
   * 
   * <p class="note">
   * When you make a request, you will get a 200 OK success response immediately. However, it might
   * take some time for the gateway to be ready. You should call
   * <code>DescribeGatewayInformation</code> and check the status before making any additional API
   * calls. For more information, see <code>ActivateGateway</code>.
   * </p> 
   * To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your
   * request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  start_gateway: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("StartGateway", payload );
    return response;
  }, 
  /**
   * This operation updates the bandwidth rate limits of a gateway. You can update both the upload
   * and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth
   * rate limit, the existing rate limit remains.
   *  
   * By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the
   * gateway does not have any limitations on its bandwidth usage and could potentially use the
   * maximum available bandwidth.
   *  
   * To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your
   * request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Long} [opt.AverageUploadRateLimitInBitsPerSec] The average upload bandwidth rate limit in bits per second. Constraint: Minimum value of 51200.
   * @param {Long} [opt.AverageDownloadRateLimitInBitsPerSec] The average download bandwidth rate limit in bits per second. Constraint: Minimum value of 102400.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_bandwidth_rate_limit: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateBandwidthRateLimit", payload );
    return response;
  }, 
  /**
   * This operation updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
   * specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added
   * security, you might use it.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TargetARN The Amazon Resource Name (ARN) of the iSCSI volume target. Use the 
   * @param {String} opt.SecretToAuthenticateInitiator The secret key that the initiator (e.g. Windows client) must provide to participate in mutual CHAP with the target. Length: Minimum length of 12. Maximum length of 16.
   * @param {String} opt.InitiatorName The iSCSI initiator that connects to the target. Length: Minimum length of 1. Maximum length of 255. 
   * @param {String} [opt.SecretToAuthenticateTarget] The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client). Length: Minimum length of 12. Maximum length of 16.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_chap_credentials: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateChapCredentials", payload );
    return response;
  }, 
  /**
   * This operation updates a gateway's metadata, which includes the gateway's name and time zone.
   * To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your
   * request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {String} [opt.GatewayName] A unique identifier for your gateway. This name becomes part of the gateway Amazon Resources Name (ARN) which is what you use as an input to other operations. Length: Minimum length of 2. Maximum length of 255. [Constraints: The value must be between 2 and 255 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.GatewayTimezone] One of the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_gateway_information: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateGatewayInformation", payload );
    return response;
  }, 
  /**
   * This operation updates the gateway virtual machine (VM) software. The request immediately
   * triggers the software update. Before initiating this update, make sure there is no traffic to
   * the gateway.
   *  
   * Before sending this request, you should make sure all your applications have finished writing
   * to your gateway's storage volumes in order to avoid data loss. During the update, applications
   * cannot use the gateway's storage volumes.
   * 
   * <p class="note">
   * When you make this request, you get a <code>200 OK</code> success response immediately.
   * However, it might take some time for the update to complete. You can call
   * <code>DescribeGatewayInformation</code> to verify the gateway is in the
   * <code>STATE_RUNNING</code> state.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_gateway_software_now: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateGatewaySoftwareNow", payload );
    return response;
  }, 
  /**
   * This operation updates a gateway's weekly maintenance start time information, including day and
   * time of the week. The maintenance time is the time in your gateway's time zone.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.GatewayARN The Amazon Resource Name (ARN) of the gateway. Use the 
   * @param {Number} opt.HourOfDay The maintenance start time hour of day. Length: 2 
   * @param {Number} opt.MinuteOfHour The maintenance start time minute of hour.. Length: 2 
   * @param {Number} opt.DayOfWeek The maintenance start time day of the week. Length: 1 Valid Values An integer between 0 and 6, where 0 represents Sunday and 6 represents Saturday.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_maintenance_start_time: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateMaintenanceStartTime", payload );
    return response;
  }, 
  /**
   * This operation updates a snapshot schedule configured for a gateway volume.
   *  
   * The default snapshot schedule for volume is once every 24 hours, starting at the creation time
   * of the volume. You can use this API to change the snaphot schedule configured for the volume.
   *  
   * In the request you must identify the gateway volume whose snapshot schedule you want to update,
   * and the schedule information, including when you want the snapshot to begin on a day and the
   * frequency (in hours) of snapshots.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.VolumeARN The Amazon Resource Name (ARN) of the volume. Use the 
   * @param {Number} opt.StartAt The hour of the day at which the snapshot schedule begins. Length: 2 
   * @param {Number} opt.RecurrenceInHours Frequency of snapshots. Specify the number of hours between snapshots. 
   * @param {String} [opt.Description] Optional description of the snapshot that overwrites the existing description. Length: up to 255 characters.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_snapshot_schedule: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateSnapshotSchedule", payload );
    return response;
  }
}
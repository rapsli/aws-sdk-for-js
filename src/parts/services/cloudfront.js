/**
 * @class AmazonCloudFrontClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonCloudFront(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudFront.prototype = {
  service:'cloudfront',
  version:'2012-03-15',
  auth_class: new AuthV2REST(),
  /**
   * @memberOf AmazonCloudFront
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Creates an Amazon CloudFront distribution. You can have up to 100 distributions in the Amazon
   * CloudFront system.
   *
   * For an Adobe Real-Time Messaging Protocol (RTMP) streaming distribution, set the <code>Streaming</code> option
   * to true.
   *
   * @param {String} origin (Required) The source to use for the Amazon CloudFront distribution. Use an Amazon S3 bucket name, or a fully-qualified non-S3 domain name prefixed with <code>http://</code> or <code>https://</code>.
   * @param {String} caller_reference (Required) A unique identifier for the request. A timestamp-appended string is recommended.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>CNAME</code> - <code>string|array</code> - Optional - A DNS CNAME to use to map to the Amazon CloudFront distribution. If setting more than one, use an indexed array. Supports 1-10 CNAMEs.</li>
   *   <li><code>Comment</code> - <code>string</code> - Optional - A comment to apply to the distribution. Cannot exceed 128 characters.</li>
   *   <li><code>DefaultRootObject</code> - <code>string</code> - Optional - The file to load when someone accesses the root of the Amazon CloudFront domain (e.g., <code>index.html</code>).</li>
   *   <li><code>Enabled</code> - <code>string</code> - Optional - A value of <code>true</code> will enable the distribution. A value of <code>false</code> will disable it. The default value is <code>true</code>.</li>
   *   <li><code>OriginAccessIdentity</code> - <code>string</code> - Optional - The origin access identity (OAI) associated with this distribution. Use the Identity ID from the OAI, not the <code>CanonicalId</code>. Requires an S3 origin.</li>
   *   <li><code>OriginProtocolPolicy</code> - <code>string</code> - Optional - The origin protocol policy to apply to your origin. If you specify <code>http-only</code>, CloudFront will use HTTP only to access the origin. If you specify <code>match-viewer</code>, CloudFront will fetch from your origin using HTTP or HTTPS, based on the protocol of the viewer request. [Allowed values: <code>http-only</code>, <code>match-viewer</code>]. The default value is <code>match-viewer</code>. Requires a non-S3 origin.</li>
   *   <li><code>Streaming</code> - <code>boolean</code> - Optional - Whether or not this should be for a streaming distribution. A value of <code>true</code> creates a streaming distribution. A value of <code>false</code> creates a standard distribution. The default value is <code>false</code>.</li>
   *   <li><code>Logging</code> - <code>array</code> - Optional - Controls whether access logs are written for the distribution. If you want to turn on access logs, include this element; if you want to turn off access logs, remove this element.</li>
   *   <li><code>TrustedSigners</code> - <code>array</code> - Optional - An array of AWS account numbers for users who are trusted signers. Explicity add the value <code>Self</code> to the array to add your own account as a trusted signer.</li>
   *   <li><code>RequiredProtocols</code> - <code>string<code> - Optional -  Use this element to restrict access to your distribution solely to HTTPS requests. Without this element, CloudFront can use any available protocol to serve the request.</li>
   *   <li><code>CachingBehavior</code> - <code>array</code> - Optional - Determines the minimum TTL for objects in the CloudFront cache. This value specifies a lower bound for values in the headers for an object, for example, in the Cache-Control max-age directive.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/CreateDistribution.html POST Distribution
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/CreateStreamingDistribution.html POST Streaming Distribution
   */
  create_distribution: function(origin,caller_reference,opt){
    var payload = {};
    payload.origin = origin;
    payload.caller_reference = caller_reference;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateDistribution", payload );
    return response;
  }, 
  /**
   * Gets a list of distributions. By default, the list is returned as one result. If needed, paginate the
   * list by specifying values for the <code>MaxItems</code> and <code>Marker</code> parameters.
   *
   * Standard distributions are listed separately from streaming distributions. For streaming distributions,
   * set the <code>Streaming</code> option to true.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this setting when paginating results to indicate where in your list of distributions to begin. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - The maximum number of distributions you want in the response body. Maximum of 100.</li>
   *   <li><code>Streaming</code> - <code>boolean</code> - Optional - Whether or not this should be for a streaming distribution. A value of <code>true</code> will create a streaming distribution. A value of <code>false</code> will create a standard distribution. The default value is <code>false</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/ListDistributions.html GET Distribution List
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/ListStreamingDistributions.html GET Streaming Distribution List
   */
  list_distributions: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("ListDistributions", payload );
    return response;
  }, 
  /**
   * Gets distribution information for the specified distribution ID.
   *
   * Standard distributions are handled separately from streaming distributions. For streaming
   * distributions, set the <code>Streaming</code> option to true.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Streaming</code> - <code>boolean</code> - Optional - Whether or not this should be for a streaming distribution. A value of <code>true</code> will create a streaming distribution. A value of <code>false</code> will create a standard distribution. The default value is <code>false</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetDistribution.html GET Distribution
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetStreamingDistribution.html GET Streaming Distribution
   */
  get_distribution_info: function(distribution_id,opt){
    var payload = {};
    payload.distribution_id = distribution_id;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetDistributionInfo", payload );
    return response;
  }, 
  /**
   * Deletes a disabled distribution. If distribution hasn't been disabled, Amazon CloudFront returns a
   * <code>DistributionNotDisabled</code> error. Use <set_distribution_config()> to disable a distribution before
   * attempting to delete.
   *
   * For an Adobe Real-Time Messaging Protocol (RTMP) streaming distribution, set the <code>Streaming</code> option
   * to be <code>true</code>.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param {String} etag (Required) The <code>ETag</code> header value retrieved from <get_distribution_config()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Streaming</code> - <code>boolean</code> - Optional - Whether or not this should be for a streaming distribution. A value of <code>true</code> will create a streaming distribution. A value of <code>false</code> will create a standard distribution. The default value is <code>false</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/DeleteDistribution.html DELETE Distribution
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/DeleteStreamingDistribution.html DELETE Streaming Distribution
   */
  delete_distribution: function(distribution_id,etag,opt){
    var payload = {};
    payload.distribution_id = distribution_id;
    payload.etag = etag;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteDistribution", payload );
    return response;
  }, 
  /**
   * Gets the current distribution configuration for the specified distribution ID.
   *
   * Standard distributions are handled separately from streaming distributions. For streaming
   * distributions, set the <code>Streaming</code> option to true.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Streaming</code> - <code>boolean</code> - Optional - Whether or not this should be for a streaming distribution. A value of <code>true</code> will create a streaming distribution. A value of <code>false</code> will create a standard distribution. The default value is <code>false</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetConfig.html GET Distribution Config
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetStreamingDistConfig.html GET Streaming Distribution Config
   */
  get_distribution_config: function(distribution_id,opt){
    var payload = {};
    payload.distribution_id = distribution_id;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetDistributionConfig", payload );
    return response;
  }, 
  /**
   * Sets a new distribution configuration for the specified distribution ID.
   *
   * Standard distributions are handled separately from streaming distributions. For streaming
   * distributions, set the <code>Streaming</code> option to true.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param {String} xml (Required) The DistributionConfig XML generated by <generate_config_xml()> or <update_config_xml()>.
   * @param {String} etag (Required) The ETag header value retrieved from <get_distribution_config()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Streaming</code> - <code>boolean</code> - Optional - Whether or not this should be for a streaming distribution. A value of <code>true</code> will create a streaming distribution. A value of <code>false</code> will create a standard distribution. The default value is <code>false</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/PutConfig.html PUT Distribution Config
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/PutStreamingDistConfig.html PUT Streaming Distribution Config
   */
  set_distribution_config: function(distribution_id,xml,etag,opt){
    var payload = {};
    payload.distribution_id = distribution_id;
    payload.xml = xml;
    payload.etag = etag;

    payload = this.marge_param(payload,opt);
    var response = this.request("SetDistributionConfig", payload );
    return response;
  }, 
  /**
   * Creates a new Amazon CloudFront origin access identity (OAI). You can create up to 100 OAIs per AWS
   * account. For more information, see the Amazon CloudFront Developer Guide.
   *
   * @param {String} caller_reference (Required) A unique identifier for the request. A timestamp-appended string is recommended.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Comment</code> - <code>string</code> - Optional - A comment about the OAI.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/CreateOAI.html POST Origin Access Identity
   */
  create_oai: function(caller_reference,opt){
    var payload = {};
    payload.caller_reference = caller_reference;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateOai", payload );
    return response;
  }, 
  /**
   * Gets a list of origin access identity (OAI) summaries. By default, the list is returned as one result.
   * If needed, paginate the list by specifying values for the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this when paginating results to indicate where in your list of distributions to begin. The results include distributions in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last distribution on that page).</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - The maximum number of distributions you want in the response body. Maximum of 100.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/ListOAIs.html GET Origin Access Identity List
   */
  list_oais: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("ListOais", payload );
    return response;
  }, 
  /**
   * Gets information about an origin access identity (OAI).
   *
   * @param {String} identity_id (Required) The Identity ID for an existing OAI.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetOAI.html GET Origin Access Identity
   */
  get_oai: function(identity_id,opt){
    var payload = {};
    payload.identity_id = identity_id;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetOai", payload );
    return response;
  }, 
  /**
   * Deletes an Amazon CloudFront origin access identity (OAI). To delete an OAI, the identity must first
   * be disassociated from all distributions (by updating each distribution's configuration to omit the
   * <code>OriginAccessIdentity</code> element). Wait until each distribution's state is <code>Deployed</code>
   * before deleting the OAI.
   *
   * @param {String} identity_id (Required) An Identity ID for an existing OAI.
   * @param {String} etag (Required) The <code>ETag</code> header value retrieved from a call to <get_oai()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/DeleteOAI.html DELETE Origin Access Identity
   */
  delete_oai: function(identity_id,etag,opt){
    var payload = {};
    payload.identity_id = identity_id;
    payload.etag = etag;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteOai", payload );
    return response;
  }, 
  /**
   * Gets the configuration of the origin access identity (OAI) for the specified identity ID.
   *
   * @param {String} identity_id (Required) An Identity ID for an existing OAI.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetOAIConfig.html GET Origin Access Identity Config
   */
  get_oai_config: function(identity_id,opt){
    var payload = {};
    payload.identity_id = identity_id;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetOaiConfig", payload );
    return response;
  }, 
  /**
   * Sets the configuration for an Amazon CloudFront origin access identity (OAI). Use this when updating
   * the configuration. Currently, only comments may be updated.  Follow the same process as when updating
   * an identity's configuration as you do when updating a distribution's configuration. For more
   * information, go to Updating a Distribution's Configuration in the Amazon CloudFront Developer Guide.
   *
   * When attempting to change configuration items that are not allowed to be updated, Amazon CloudFront
   * returns an <code>IllegalUpdate</code> error.
   *
   * @param {String} identity_id (Required) An Identity ID for an existing OAI.
   * @param {String} xml (Required) The configuration XML generated by <generate_oai_xml()>.
   * @param {String} etag (Required) The ETag header value retrieved from a call to <get_distribution_config()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/PutOAIConfig.html PUT Origin Access Identity Config
   */
  set_oai_config: function(identity_id,xml,etag,opt){
    var payload = {};
    payload.identity_id = identity_id;
    payload.xml = xml;
    payload.etag = etag;

    payload = this.marge_param(payload,opt);
    var response = this.request("SetOaiConfig", payload );
    return response;
  }, 
  /**
   * Creates a new invalidation request.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param {String} caller_reference (Required) A unique identifier for the request. A timestamp-appended string is recommended.
   * @param string|array $paths (Required) One or more paths to set for invalidation. Pass a string for a single value, or an indexed array for multiple values. values.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/CreateInvalidation.html POST Invalidation
   */
  create_invalidation: function(distribution_id,caller_reference,paths,opt){
    var payload = {};
    payload.distribution_id = distribution_id;
    payload.caller_reference = caller_reference;
    payload.paths = paths;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateInvalidation", payload );
    return response;
  }, 
  /**
   * Gets a list of invalidations. By default, the list is returned as one result. If needed, paginate the
   * list by specifying values for the <code>MaxItems</code> and <code>Marker</code> parameters.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this when paginating results to indicate where in the list of invalidations to begin. The results include invalidations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> parameter to the value of the <code>NextMarker</code> parameter from the current page's response, which is also the ID of the last invalidation on that page.</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - The maximum number of invalidations you want in the response body. A maximum value of 100 can be used.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/ListInvalidation.html GET Invalidation List
   */
  list_invalidations: function(distribution_id,opt){
    var payload = {};
    payload.distribution_id = distribution_id;

    payload = this.marge_param(payload,opt);
    var response = this.request("ListInvalidations", payload );
    return response;
  }, 
  /**
   * Gets information about an invalidation.
   *
   * @param {String} distribution_id (Required) The distribution ID returned from <create_distribution()> or <list_distributions()>.
   * @param {String} invalidation_id (Required) The invalidation ID returned from <create_invalidation()> or <list_invalidations()>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   * @link http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/GetInvalidation.html GET Invalidation
   */
  get_invalidation: function(distribution_id,invalidation_id,opt){
    var payload = {};
    payload.distribution_id = distribution_id;
    payload.invalidation_id = invalidation_id;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetInvalidation", payload );
    return response;
  }
}
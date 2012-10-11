/**
 * @class AmazonS3Client
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonS3(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonS3.prototype = {
  service:'s3',
  api_version:'2006-03-01',
  auth_class: new (),
  operation_prefix: '',
  /**
   * @memberOf AmazonS3
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
	 * Creates an Amazon S3 bucket.
	 *
	 * Every object stored in Amazon S3 is contained in a bucket. Buckets partition the namespace of
	 * objects stored in Amazon S3 at the top level. in a bucket, any name can be used for objects.
	 * However, bucket names must be unique across all of Amazon S3.
	 *
	 * @param {String} [bucket] The name of the bucket to create.
	 * @param {String} [region] The preferred geographical location for the bucket. [Allowed values: `AmazonS3::REGION_US_E1 `, `AmazonS3::REGION_US_W1`, `AmazonS3::REGION_EU_W1`, `AmazonS3::REGION_APAC_SE1`, `AmazonS3::REGION_APAC_NE1`]
	 * @param {String} [acl] The ACL settings for the specified object. Accepts any of the following constants: [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. Alternatively, an array of associative arrays. Each associative array contains an <code>id</code> and a <code>permission</code> key. The default value is <code>ACL_PRIVATE</code>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingBucket.html Working with Amazon S3 Buckets
	 */
  create_bucket: function(bucket,region,acl,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.region = region;
    payload.acl = acl;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateBucket", payload );
    return response;
  }, 
  /**
	 * Gets the region in which the specified Amazon S3 bucket is located.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_bucket_region: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetBucketRegion", payload );
    return response;
  }, 
  /**
	 * Gets the HTTP headers for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_bucket_headers: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetBucketHeaders", payload );
    return response;
  }, 
  /**
	 * Gets a list of all buckets contained in the caller's Amazon S3 account.
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_buckets: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListBuckets", payload );
    return response;
  }, 
  /**
	 * Gets the access control list (ACL) settings for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  get_bucket_acl: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetBucketAcl", payload );
    return response;
  }, 
  /**
	 * Sets the access control list (ACL) settings for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [acl] The ACL settings for the specified bucket. [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. Alternatively, an array of associative arrays. Each associative array contains an `id` and a `permission` key. The default value is <ACL_PRIVATE>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  set_bucket_acl: function(bucket,acl,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.acl = acl;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetBucketAcl", payload );
    return response;
  }, 
  /**
	 * Creates an Amazon S3 object. After an Amazon S3 bucket is created, objects can be stored in it.
	 *
	 * Each standard object can hold up to 5 GB of data. When an object is stored in Amazon S3, the data is streamed
	 * to multiple storage servers in multiple data centers. This ensures the data remains available in the
	 * event of internal network or hardware failure.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>acl</code> - <code>string</code> - Optional - The ACL settings for the specified object. Accepts any of the following constants: [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. Alternatively, an array of associative arrays. Each associative array contains an <code>id</code> and a <code>permission</code> key. The default value is <code>ACL_PRIVATE</code>.</li>
	 * 	<li><code>body</code> - <code>string</code> - Required; Conditional - The data to be stored in the object. Either this parameter or <code>fileUpload</code> must be specified.</li>
	 * 	<li><code>contentType</code> - <code>string</code> - Optional - The type of content that is being sent in the body. If a file is being uploaded via <code>fileUpload</code> as a file system path, it will attempt to determine the correct mime-type based on the file extension. The default value is <code>application/octet-stream</code>.</li>
	 * 	<li><code>encryption</code> - <code>string</code> - Optional - The algorithm to use for encrypting the object. [Allowed values: <code>AES256</code>]</li>
	 * 	<li><code>fileUpload</code> - <code>string|resource</code> - Required; Conditional - The URL/path for the file to upload, or an open resource. Either this parameter or <code>body</code> is required.</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>length</code> - <code>integer</code> - Optional - The size of the object in bytes. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">RFC 2616, section 14.13</a>. The value can also be passed to the <code>header</code> option as <code>Content-Length</code>.</li>
	 * 	<li><code>meta</code> - <code>array</code> - Optional - An associative array of key-value pairs. Represented by <code>x-amz-meta-:</code>. Any header starting with this prefix is considered user metadata. It will be stored with the object and returned when you retrieve the object. The total size of the HTTP request, not including the body, must be less than 4 KB.</li>
	 * 	<li><code>seekTo</code> - <code>integer</code> - Optional - The starting position in bytes within the file/stream to upload from.</li>
	 * 	<li><code>storage</code> - <code>string</code> - Optional - Whether to use Standard or Reduced Redundancy storage. [Allowed values: <code>AmazonS3::STORAGE_STANDARD</code>, <code>AmazonS3::STORAGE_REDUCED</code>]. The default value is <code>STORAGE_STANDARD</code>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  create_object: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateObject", payload );
    return response;
  }, 
  /**
	 * Gets the contents of an Amazon S3 object in the specified bucket.
	 *
	 * The MD5 value for an object can be retrieved from the ETag HTTP header for any object that was uploaded
	 * with a normal PUT/POST. This value is incorrect for multipart uploads.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>etag</code> - <code>string</code> - Optional - The <code>ETag</code> header passed in from a previous request. If specified, request <code>LastModified</code> option must be specified as well. Will trigger a <code>304 Not Modified</code> status code if the file hasn't changed.</li>
	 * 	<li><code>fileDownload</code> - <code>string|resource</code> - Optional - The file system location to download the file to, or an open file resource. Must be a server-writable location.</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>lastmodified</code> - <code>string</code> - Optional - The <code>LastModified</code> header passed in from a previous request. If specified, request <code>ETag</code> option must be specified as well. Will trigger a <code>304 Not Modified</code> status code if the file hasn't changed.</li>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>range</code> - <code>string</code> - Optional - The range of bytes to fetch from the object. Specify this parameter when downloading partial bits or completing incomplete object downloads. The specified range must be notated with a hyphen (e.g., 0-10485759). Defaults to the byte range of the complete Amazon S3 object.</li>
	 * 	<li><code>response</code> - <code>array</code> - Optional - Allows adjustments to specific response headers. Pass an associative array where each key is one of the following: <code>cache-control</code>, <code>content-disposition</code>, <code>content-encoding</code>, <code>content-language</code>, <code>content-type</code>, <code>expires</code>. The <code>expires</code> value should use <php:gmdate()> and be formatted with the <code>DATE_RFC2822</code> constant.</li>
	 * 	<li><code>versionId</code> - <code>string</code> - Optional - The version of the object to retrieve. Version IDs are returned in the <code>x-amz-version-id</code> header of any previous object-related request.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_object: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetObject", payload );
    return response;
  }, 
  /**
	 * Gets the HTTP headers for the specified Amazon S3 object.
	 *
	 * The MD5 value for an object can be retrieved from the ETag HTTP header for any object that was uploaded
	 * with a normal PUT/POST. This value is incorrect for multipart uploads.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>versionId</code> - <code>string</code> - Optional - The version of the object to retrieve. Version IDs are returned in the <code>x-amz-version-id</code> header of any previous object-related request.</li>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_object_headers: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetObjectHeaders", payload );
    return response;
  }, 
  /**
	 * Deletes an Amazon S3 object from the specified bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>versionId</code> - <code>string</code> - Optional - The version of the object to delete. Version IDs are returned in the <code>x-amz-version-id</code> header of any previous object-related request.</li>
	 * 	<li><code>MFASerial</code> - <code>string</code> - Optional - The serial number on the back of the Gemalto device. <code>MFASerial</code> and <code>MFAToken</code> must both be set for MFA to work.</li>
	 * 	<li><code>MFAToken</code> - <code>string</code> - Optional - The current token displayed on the Gemalto device. <code>MFASerial</code> and <code>MFAToken</code> must both be set for MFA to work.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://aws.amazon.com/mfa/ Multi-Factor Authentication
	 */
  delete_object: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteObject", payload );
    return response;
  }, 
  /**
	 * Deletes one or more specified Amazon S3 objects from the specified bucket.
	 *
	 * Since `delete_object()` is designed for deleting a single object, this method is intended to be used
	 * when there are two or more objects to delete.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>objects</code> - <code>array</code> - Required - The object references to delete from the bucket. <ul>
	 * 		<li><code>key</code> - <code>string</code> - Required - The name of the object (e.g., the "key") to delete. This should include the entire file path including all "subdirectories".</li>
	 * 		<li><code>version_id</code> - <code>string</code> - Optional - If the object is versioned, include the version ID to delete.</li>
	 * 	</ul></li>
	 * 	<li><code>quiet</code> - <code>boolean</code> - Optional - Whether or not Amazon S3 should use "Quiet" mode for this operation. A value of <code>true</code> will enable Quiet mode. A value of <code>false</code> will use Verbose mode. The default value is <code>false</code>.</li>
	 * 	<li><code>MFASerial</code> - <code>string</code> - Optional - The serial number on the back of the Gemalto device. <code>MFASerial</code> and <code>MFAToken</code> must both be set for MFA to work.</li>
	 * 	<li><code>MFAToken</code> - <code>string</code> - Optional - The current token displayed on the Gemalto device. <code>MFASerial</code> and <code>MFAToken</code> must both be set for MFA to work.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://aws.amazon.com/mfa/ Multi-Factor Authentication
	 */
  delete_objects: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteObjects", payload );
    return response;
  }, 
  /**
	 * Gets a list of all Amazon S3 objects in the specified bucket.
	 *
	 * NOTE: <strong>This method is paginated</strong>, and will not return more than <code>max-keys</code> keys. If you want to retrieve a list of all keys, you will need to make multiple calls to this function using the <code>marker</code> option to specify the pagination offset (the key of the last processed key--lexically ordered) and the <code>IsTruncated</code> response key to detect when all results have been processed. See: <a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/index.html?RESTBucketGET.html">the S3 REST documentation for get_bucket</a> for more information.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>delimiter</code> - <code>string</code> - Optional - Keys that contain the same string between the prefix and the first occurrence of the delimiter will be rolled up into a single result element in the CommonPrefixes collection.</li>
	 * 	<li><code>marker</code> - <code>string</code> - Optional - Restricts the response to contain results that only occur alphabetically after the value of the marker.</li>
	 * 	<li><code>max-keys</code> - <code>string</code> - Optional - The maximum number of results returned by the method call. The returned list will contain no more results than the specified value, but may return fewer. The default value is 1000.</li>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>prefix</code> - <code>string</code> - Optional - Restricts the response to contain results that begin only with the specified prefix.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_objects: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListObjects", payload );
    return response;
  }, 
  /**
	 * Copies an Amazon S3 object to a new location, whether in the same Amazon S3 region, bucket, or otherwise.
	 *
	 * @param {Object} [source] The bucket and file name to copy from. The following keys must be set: <ul>
	 * 	<li><code>bucket</code> - <code>string</code> - Required - Specifies the name of the bucket containing the source object.</li>
	 * 	<li><code>filename</code> - <code>string</code> - Required - Specifies the file name of the source object to copy.</li></ul>
	 * @param {Object} [dest] The bucket and file name to copy to. The following keys must be set: <ul>
	 * 	<li><code>bucket</code> - <code>string</code> - Required - Specifies the name of the bucket to copy the object to.</li>
	 * 	<li><code>filename</code> - <code>string</code> - Required - Specifies the file name to copy the object to.</li></ul>
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>acl</code> - <code>string</code> - Optional - The ACL settings for the specified object. [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. Alternatively, an array of associative arrays. Each associative array contains an <code>id</code> and a <code>permission</code> key. The default value is <code>ACL_PRIVATE</code>.</li>
	 * 	<li><code>encryption</code> - <code>string</code> - Optional - The algorithm to use for encrypting the object. [Allowed values: <code>AES256</code>]</li>
	 * 	<li><code>storage</code> - <code>string</code> - Optional - Whether to use Standard or Reduced Redundancy storage. [Allowed values: <code>AmazonS3::STORAGE_STANDARD</code>, <code>AmazonS3::STORAGE_REDUCED</code>]. The default value is <code>STORAGE_STANDARD</code>.</li>
	 * 	<li><code>versionId</code> - <code>string</code> - Optional - The version of the object to copy. Version IDs are returned in the <code>x-amz-version-id</code> header of any previous object-related request.</li>
	 * 	<li><code>ifMatch</code> - <code>string</code> - Optional - The ETag header from a previous request. Copies the object if its entity tag (ETag) matches the specified tag; otherwise, the request returns a <code>412</code> HTTP status code error (precondition failed). Used in conjunction with <code>ifUnmodifiedSince</code>.</li>
	 * 	<li><code>ifUnmodifiedSince</code> - <code>string</code> - Optional - The LastModified header from a previous request. Copies the object if it hasn't been modified since the specified time; otherwise, the request returns a <code>412</code> HTTP status code error (precondition failed). Used in conjunction with <code>ifMatch</code>.</li>
	 * 	<li><code>ifNoneMatch</code> - <code>string</code> - Optional - The ETag header from a previous request. Copies the object if its entity tag (ETag) is different than the specified ETag; otherwise, the request returns a <code>412</code> HTTP status code error (failed condition). Used in conjunction with <code>ifModifiedSince</code>.</li>
	 * 	<li><code>ifModifiedSince</code> - <code>string</code> - Optional - The LastModified header from a previous request. Copies the object if it has been modified since the specified time; otherwise, the request returns a <code>412</code> HTTP status code error (failed condition). Used in conjunction with <code>ifNoneMatch</code>.</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>meta</code> - <code>array</code> - Optional - Associative array of key-value pairs. Represented by <code>x-amz-meta-:</code> Any header starting with this prefix is considered user metadata. It will be stored with the object and returned when you retrieve the object. The total size of the HTTP request, not including the body, must be less than 4 KB.</li>
	 * 	<li><code>metadataDirective</code> - <code>string</code> - Optional - Accepts either COPY or REPLACE. You will likely never need to use this, as it manages itself with no issues.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/API/RESTObjectCOPY.html Copying Amazon S3 Objects
	 */
  copy_object: function(source,dest,opt){
    var payload = {};
    payload.source = source;
    payload.dest = dest;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CopyObject", payload );
    return response;
  }, 
  /**
	 * Updates an Amazon S3 object with new headers or other metadata. To replace the content of the
	 * specified Amazon S3 object, call <create_object()> with the same bucket and file name parameters.
	 *
	 * @param {String} [bucket] The name of the bucket that contains the source file.
	 * @param {String} [filename] The source file name that you want to update.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>acl</code> - <code>string</code> - Optional - The ACL settings for the specified object. [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. The default value is <ACL_PRIVATE>.</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>meta</code> - <code>array</code> - Optional - An associative array of key-value pairs. Any header with the <code>x-amz-meta-</code> prefix is considered user metadata and is stored with the Amazon S3 object. It will be stored with the object and returned when you retrieve the object. The total size of the HTTP request, not including the body, must be less than 4 KB.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/API/RESTObjectCOPY.html Copying Amazon S3 Objects
	 */
  update_object: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateObject", payload );
    return response;
  }, 
  /**
	 * Gets the access control list (ACL) settings for the specified Amazon S3 object.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>versionId</code> - <code>string</code> - Optional - The version of the object to retrieve. Version IDs are returned in the <code>x-amz-version-id</code> header of any previous object-related request.</li>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  get_object_acl: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetObjectAcl", payload );
    return response;
  }, 
  /**
	 * Sets the access control list (ACL) settings for the specified Amazon S3 object.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [acl] The ACL settings for the specified object. Accepts any of the following constants: [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. Alternatively, an array of associative arrays. Each associative array contains an <code>id</code> and a <code>permission</code> key. The default value is <code>ACL_PRIVATE</code>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  set_object_acl: function(bucket,filename,acl,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.acl = acl;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetObjectAcl", payload );
    return response;
  }, 
  /**
	 * Gets the access logs associated with the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use. Pass a `null` value when using the <set_vhost()> method.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/ServerLogs.html Server Access Logging
	 */
  get_logs: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetLogs", payload );
    return response;
  }, 
  /**
	 * Enables access logging for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to enable logging for. Pass a `null` value when using the <set_vhost()> method.
	 * @param {String} [target_bucket] The name of the bucket to store the logs in.
	 * @param {String} [target_prefix] The prefix to give to the log file names.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>users</code> - <code>array</code> - Optional - An array of associative arrays specifying any user to give access to. Each associative array contains an <code>id</code> and <code>permission</code> value.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/LoggingAPI.html Server Access Logging Configuration API
	 */
  enable_logging: function(bucket,target_bucket,target_prefix,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.target_bucket = target_bucket;
    payload.target_prefix = target_prefix;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("EnableLogging", payload );
    return response;
  }, 
  /**
	 * Disables access logging for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use. Pass `null` if using <set_vhost()>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/LoggingAPI.html Server Access Logging Configuration API
	 */
  disable_logging: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DisableLogging", payload );
    return response;
  }, 
  /**
	 * Changes the content type for an existing Amazon S3 object.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [contentType] The content-type to apply to the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  change_content_type: function(bucket,filename,contentType,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.contentType = contentType;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ChangeContentType", payload );
    return response;
  }, 
  /**
	 * Changes the storage redundancy for an existing object.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [storage] The storage setting to apply to the object. [Allowed values: <code>AmazonS3::STORAGE_STANDARD</code>, <code>AmazonS3::STORAGE_REDUCED</code>]
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  change_storage_redundancy: function(bucket,filename,storage,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.storage = storage;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ChangeStorageRedundancy", payload );
    return response;
  }, 
  /**
	 * Enables versioning support for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>MFASerial</code> - string (Optional) The serial number on the back of the Gemalto device. <code>MFASerial</code>, <code>MFAToken</code> and <code>MFAStatus</code> must all be set for MFA to work.</li>
	 * 	<li><code>MFAToken</code> - string (Optional) The current token displayed on the Gemalto device. <code>MFASerial</code>, <code>MFAToken</code> and <code>MFAStatus</code> must all be set for MFA to work.</li>
	 * 	<li><code>MFAStatus</code> - string (Optional) The MFA Delete status. Can be <code>Enabled</code> or <code>Disabled</code>. <code>MFASerial</code>, <code>MFAToken</code> and <code>MFAStatus</code> must all be set for MFA to work.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://aws.amazon.com/mfa/ Multi-Factor Authentication
	 */
  enable_versioning: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("EnableVersioning", payload );
    return response;
  }, 
  /**
	 * Disables versioning support for the specified Amazon S3 bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>MFASerial</code> - <code>string</code> - Optional - The serial number on the back of the Gemalto device. <code>MFASerial</code>, <code>MFAToken</code> and <code>MFAStatus</code> must all be set for MFA to work.</li>
	 * 	<li><code>MFAToken</code> - <code>string</code> - Optional - The current token displayed on the Gemalto device. <code>MFASerial</code>, <code>MFAToken</code> and <code>MFAStatus</code> must all be set for MFA to work.</li>
	 * 	<li><code>MFAStatus</code> - <code>string</code> - Optional - The MFA Delete status. Can be <code>Enabled</code> or <code>Disabled</code>. <code>MFASerial</code>, <code>MFAToken</code> and <code>MFAStatus</code> must all be set for MFA to work.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://aws.amazon.com/mfa/ Multi-Factor Authentication
	 */
  disable_versioning: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DisableVersioning", payload );
    return response;
  }, 
  /**
	 * Gets an Amazon S3 bucket's versioning status.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_versioning_status: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetVersioningStatus", payload );
    return response;
  }, 
  /**
	 * Gets a list of all the versions of Amazon S3 objects in the specified bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>delimiter</code> - <code>string</code> - Optional - Unicode string parameter. Keys that contain the same string between the prefix and the first occurrence of the delimiter will be rolled up into a single result element in the CommonPrefixes collection.</li>
	 * 	<li><code>key-marker</code> - <code>string</code> - Optional - Restricts the response to contain results that only occur alphabetically after the value of the <code>key-marker</code>.</li>
	 * 	<li><code>max-keys</code> - <code>string</code> - Optional - Limits the number of results returned in response to your query. Will return no more than this number of results, but possibly less.</li>
	 * 	<li><code>prefix</code> - <code>string</code> - Optional - Restricts the response to only contain results that begin with the specified prefix.</li>
	 * 	<li><code>version-id-marker</code> - <code>string</code> - Optional - Restricts the response to contain results that only occur alphabetically after the value of the <code>version-id-marker</code>.</li>
	 * 	<li><code>preauth</code> - <code>integer|string</code> - Optional - Specifies that a presigned URL for this request should be returned. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_bucket_object_versions: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListBucketObjectVersions", payload );
    return response;
  }, 
  /**
	 * Sets the policy sub-resource for the specified Amazon S3 bucket. The specified policy replaces any
	 * policy the bucket already has.
	 *
	 * To perform this operation, the caller must be authorized to set a policy for the bucket and have
	 * PutPolicy permissions. If the caller does not have PutPolicy permissions for the bucket, Amazon S3
	 * returns a `403 Access Denied` error. If the caller has the correct permissions but has not been
	 * authorized by the bucket owner, Amazon S3 returns a `405 Method Not Allowed` error.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Cfpolicy} [policy] The JSON policy to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/AccessPolicyLanguage.html Appendix: The Access Policy Language
	 */
  set_bucket_policy: function(bucket,policy,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.policy = policy;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetBucketPolicy", payload );
    return response;
  }, 
  /**
	 * Gets the policy of the specified Amazon S3 bucket.
	 *
	 * To use this operation, the caller must have GetPolicy permissions for the specified bucket and must be
	 * the bucket owner. If the caller does not have GetPolicy permissions, this method will generate a
	 * `403 Access Denied` error. If the caller has the correct permissions but is not the bucket owner, this
	 * method will generate a `405 Method Not Allowed` error. If the bucket does not have a policy defined for
	 * it, this method will generate a `404 Policy Not Found` error.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_bucket_policy: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetBucketPolicy", payload );
    return response;
  }, 
  /**
	 * Deletes the bucket policy for the specified Amazon S3 bucket. To delete the policy, the caller must
	 * be the bucket owner and have `DeletePolicy` permissions for the specified bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response. If you do not have `DeletePolicy` permissions, Amazon S3 returns a `403 Access Denied` error. If you have the correct permissions, but are not the bucket owner, Amazon S3 returns a `405 Method Not Allowed` error. If the bucket doesn't have a policy, Amazon S3 returns a `204 No Content` error.
	 */
  delete_bucket_policy: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteBucketPolicy", payload );
    return response;
  }, 
  /**
	 * Enables notifications of specified events for an Amazon S3 bucket. Currently, the
	 * `s3:ReducedRedundancyLostObject` event is the only event supported for notifications. The
	 * `s3:ReducedRedundancyLostObject` event is triggered when Amazon S3 detects that it has lost all
	 * copies of an Amazon S3 object and can no longer service requests for that object.
	 *
	 * If the bucket owner and Amazon SNS topic owner are the same, the bucket owner has permission to
	 * publish notifications to the topic by default. Otherwise, the owner of the topic must create a
	 * policy to enable the bucket owner to publish to the topic.
	 *
	 * By default, only the bucket owner can configure notifications on a bucket. However, bucket owners
	 * can use bucket policies to grant permission to other users to set this configuration with the
	 * `s3:PutBucketNotification` permission.
	 *
	 * After a PUT operation is called to configure notifications on a bucket, Amazon S3 publishes a test
	 * notification to ensure that the topic exists and that the bucket owner has permission to publish
	 * to the specified topic. If the notification is successfully published to the SNS topic, the PUT
	 * operation updates the bucket configuration and returns the 200 OK responses with a
	 * `x-amz-sns-test-message-id` header containing the message ID of the test notification sent to topic.
	 *
	 * @param {String} [bucket] The name of the bucket to create bucket notifications for.
	 * @param {String} [topic_arn] The SNS topic ARN to send notifications to.
	 * @param {String} [event] The event type to listen for.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/NotificationHowTo.html Setting Up Notification of Bucket Events
	 */
  create_bucket_notification: function(bucket,topic_arn,event,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.topic_arn = topic_arn;
    payload.event = event;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateBucketNotification", payload );
    return response;
  }, 
  /**
	 * Gets the notification configuration of a bucket. Currently, the `s3:ReducedRedundancyLostObject` event
	 * is the only event supported for notifications. The `s3:ReducedRedundancyLostObject` event is triggered
	 * when Amazon S3 detects that it has lost all replicas of a Reduced Redundancy Storage object and can no
	 * longer service requests for that object.
	 *
	 * If notifications are not enabled on the bucket, the operation returns an empty
	 * `NotificatonConfiguration` element.
	 *
	 * By default, you must be the bucket owner to read the notification configuration of a bucket. However,
	 * the bucket owner can use a bucket policy to grant permission to other users to read this configuration
	 * with the `s3:GetBucketNotification` permission.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/NotificationHowTo.html Setting Up Notification of Bucket Events
	 */
  get_bucket_notifications: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetBucketNotifications", payload );
    return response;
  }, 
  /**
	 * Empties the list of SNS topics to send notifications to.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/NotificationHowTo.html Setting Up Notification of Bucket Events
	 */
  delete_bucket_notification: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteBucketNotification", payload );
    return response;
  }, 
  /**
	 * Initiates a multipart upload and returns an `UploadId`.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>acl</code> - <code>string</code> - Optional - The ACL settings for the specified object. Accepts any of the following constants: [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. Alternatively, an array of associative arrays. Each associative array contains an <code>id</code> and a <code>permission</code> key. The default value is <code>ACL_PRIVATE</code>.</li>
	 * 	<li><code>contentType</code> - <code>string</code> - Optional - The type of content that is being sent. The default value is <code>application/octet-stream</code>.</li>
	 * 	<li><code>encryption</code> - <code>string</code> - Optional - The algorithm to use for encrypting the object. [Allowed values: <code>AES256</code>]</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>meta</code> - <code>array</code> - Optional - An associative array of key-value pairs. Any header starting with <code>x-amz-meta-:</code> is considered user metadata. It will be stored with the object and returned when you retrieve the object. The total size of the HTTP request, not including the body, must be less than 4 KB.</li>
	 * 	<li><code>storage</code> - <code>string</code> - Optional - Whether to use Standard or Reduced Redundancy storage. [Allowed values: <code>AmazonS3::STORAGE_STANDARD</code>, <code>AmazonS3::STORAGE_REDUCED</code>]. The default value is <code>STORAGE_STANDARD</code>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  initiate_multipart_upload: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("InitiateMultipartUpload", payload );
    return response;
  }, 
  /**
	 * Uploads a single part of a multipart upload. The part size cannot be smaller than 5 MB
	 * or larger than 5 TB. A multipart upload can have no more than 10,000 parts.
	 *
	 * Amazon S3 charges for storage as well as requests to the service. Smaller part sizes (and more
	 * requests) allow for faster failures and better upload reliability. Larger part sizes (and fewer
	 * requests) costs slightly less but has lower upload reliability.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [upload_id] The upload ID identifying the multipart upload whose parts are being listed. The upload ID is retrieved from a call to <initiate_multipart_upload()>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>fileUpload</code> - <code>string|resource</code> - Required - The URL/path for the file to upload or an open resource.</li>
	 * 	<li><code>partNumber</code> - <code>integer</code> - Required - The part number order of the multipart upload.</li>
	 * 	<li><code>expect</code> - <code>string</code> - Optional - Specifies that the SDK not send the request body until it receives an acknowledgement. If the message is rejected based on the headers, the body of the message is not sent. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.20">RFC 2616, section 14.20</a>. The value can also be passed to the <code>header</code> option as <code>Expect</code>. [Allowed values: <code>100-continue</code>]</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>length</code> - <code>integer</code> - Optional - The size of the part in bytes. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">RFC 2616, section 14.13</a>. The value can also be passed to the <code>header</code> option as <code>Content-Length</code>.</li>
	 * 	<li><code>md5</code> - <code>string</code> - Optional - The base64 encoded 128-bit MD5 digest of the part data. This header can be used as a message integrity check to verify that the part data is the same data that was originally sent. Although it is optional, we recommend using this mechanism as an end-to-end integrity check. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>. The value can also be passed to the <code>header</code> option as <code>Content-MD5</code>.</li>
	 * 	<li><code>seekTo</code> - <code>integer</code> - Optional - The starting position in bytes for the piece of the file/stream to upload.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  upload_part: function(bucket,filename,upload_id,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.upload_id = upload_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UploadPart", payload );
    return response;
  }, 
  /**
	 * Lists the completed parts of an in-progress multipart upload.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [upload_id] The upload ID identifying the multipart upload whose parts are being listed. The upload ID is retrieved from a call to <initiate_multipart_upload()>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>max-parts</code> - <code>integer</code> - Optional - The maximum number of parts to return in the response body.</li>
	 * 	<li><code>part-number-marker</code> - <code>string</code> - Optional - Restricts the response to contain results that only occur numerically after the value of the <code>part-number-marker</code>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_parts: function(bucket,filename,upload_id,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.upload_id = upload_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListParts", payload );
    return response;
  }, 
  /**
	 * Aborts an in-progress multipart upload. This operation cannot be reversed.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [upload_id] The upload ID identifying the multipart upload whose parts are being listed. The upload ID is retrieved from a call to <initiate_multipart_upload()>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  abort_multipart_upload: function(bucket,filename,upload_id,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.upload_id = upload_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AbortMultipartUpload", payload );
    return response;
  }, 
  /**
	 * Completes an in-progress multipart upload. A multipart upload is completed by describing the part
	 * numbers and corresponding ETag values in order, and submitting that data to Amazon S3 as an XML document.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {String} [upload_id] The upload ID identifying the multipart upload whose parts are being listed. The upload ID is retrieved from a call to <initiate_multipart_upload()>.
	 * @param {String|array|simplexmlelement|cfresponse} [parts] The completion XML document. This document can be provided in multiple ways; as a string of XML, as a <php:SimpleXMLElement> object representing the XML document, as an indexed array of associative arrays where the keys are <code>PartNumber</code> and <code>ETag</code>, or as a <CFResponse> object returned by <list_parts()>.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  complete_multipart_upload: function(bucket,filename,upload_id,parts,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload.upload_id = upload_id;
    payload.parts = parts;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CompleteMultipartUpload", payload );
    return response;
  }, 
  /**
	 * Lists the in-progress multipart uploads.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>delimiter</code> - <code>string</code> - Optional - Keys that contain the same string between the prefix and the first occurrence of the delimiter will be rolled up into a single result element in the CommonPrefixes collection.</li>
	 * 	<li><code>key-marker</code> - <code>string</code> - Optional - Restricts the response to contain results that only occur alphabetically after the value of the <code>key-marker</code>. If used in conjunction with <code>upload-id-marker</code>, the results will be filtered to include keys whose upload ID is alphabetically after the value of <code>upload-id-marker</code>.</li>
	 * 	<li><code>upload-id-marker</code> - <code>string</code> - Optional - Restricts the response to contain results that only occur alphabetically after the value of the <code>upload-id-marker</code>. Must be used in conjunction with <code>key-marker</code>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_multipart_uploads: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListMultipartUploads", payload );
    return response;
  }, 
  /**
	 * Since Amazon S3's standard <copy_object()> operation only supports copying objects that are smaller than
	 * 5 GB, the ability to copy large objects (greater than 5 GB) requires the use of "Multipart Copy".
	 *
	 * Copying large objects requires the developer to initiate a new multipart "upload", copy pieces of the
	 * large object (specifying a range of bytes up to 5 GB from the large source file), then complete the
	 * multipart "upload".
	 *
	 * NOTE: <strong>This is a synchronous operation</strong>, not an <em>asynchronous</em> operation, which means
	 * that Amazon S3 will not return a response for this operation until the copy has completed across the Amazon
	 * S3 server fleet. Copying objects within a single region will complete more quickly than copying objects
	 * <em>across</em> regions. The synchronous nature of this operation is different from other services where
	 * responses are typically returned immediately, even if the operation itself has not yet been completed on
	 * the server-side.
	 *
	 * @param {Object} [source] The bucket and file name to copy from. The following keys must be set: <ul>
	 * 	<li><code>bucket</code> - <code>string</code> - Required - Specifies the name of the bucket containing the source object.</li>
	 * 	<li><code>filename</code> - <code>string</code> - Required - Specifies the file name of the source object to copy.</li></ul>
	 * @param {Object} [dest] The bucket and file name to copy to. The following keys must be set: <ul>
	 * 	<li><code>bucket</code> - <code>string</code> - Required - Specifies the name of the bucket to copy the object to.</li>
	 * 	<li><code>filename</code> - <code>string</code> - Required - Specifies the file name to copy the object to.</li></ul>
	 * @param {String} [upload_id] The upload ID identifying the multipart upload whose parts are being listed. The upload ID is retrieved from a call to <initiate_multipart_upload()>.
	 * @param {Number} [part_number] A part number uniquely identifies a part and defines its position within the destination object. When you complete a multipart upload, a complete object is created by concatenating parts in ascending order based on part number. If you copy a new part using the same part number as a previously copied/uploaded part, the previously written part is overwritten.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>ifMatch</code> - <code>string</code> - Optional - The ETag header from a previous request. Copies the object if its entity tag (ETag) matches the specified tag; otherwise, the request returns a <code>412</code> HTTP status code error (precondition failed). Used in conjunction with <code>ifUnmodifiedSince</code>.</li>
	 * 	<li><code>ifUnmodifiedSince</code> - <code>string</code> - Optional - The LastModified header from a previous request. Copies the object if it hasn't been modified since the specified time; otherwise, the request returns a <code>412</code> HTTP status code error (precondition failed). Used in conjunction with <code>ifMatch</code>.</li>
	 * 	<li><code>ifNoneMatch</code> - <code>string</code> - Optional - The ETag header from a previous request. Copies the object if its entity tag (ETag) is different than the specified ETag; otherwise, the request returns a <code>412</code> HTTP status code error (failed condition). Used in conjunction with <code>ifModifiedSince</code>.</li>
	 * 	<li><code>ifModifiedSince</code> - <code>string</code> - Optional - The LastModified header from a previous request. Copies the object if it has been modified since the specified time; otherwise, the request returns a <code>412</code> HTTP status code error (failed condition). Used in conjunction with <code>ifNoneMatch</code>.</li>
	 * 	<li><code>range</code> - <code>string</code> - Optional - The range of bytes to copy from the object. Specify this parameter when copying partial bits. The specified range must be notated with a hyphen (e.g., 0-10485759). Defaults to the byte range of the complete Amazon S3 object.</li>
	 * 	<li><code>versionId</code> - <code>string</code> - Optional - The version of the object to copy. Version IDs are returned in the <code>x-amz-version-id</code> header of any previous object-related request.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  copy_part: function(source,dest,upload_id,part_number,opt){
    var payload = {};
    payload.source = source;
    payload.dest = dest;
    payload.upload_id = upload_id;
    payload.part_number = part_number;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CopyPart", payload );
    return response;
  }, 
  /**
	 * Creates an Amazon S3 object using the multipart upload APIs. It is analogous to <create_object()>.
	 *
	 * While each individual part of a multipart upload can hold up to 5 GB of data, this method limits the
	 * part size to a maximum of 500 MB. The combined size of all parts can not exceed 5 TB of data. When an
	 * object is stored in Amazon S3, the data is streamed to multiple storage servers in multiple data
	 * centers. This ensures the data remains available in the event of internal network or hardware failure.
	 *
	 * Amazon S3 charges for storage as well as requests to the service. Smaller part sizes (and more
	 * requests) allow for faster failures and better upload reliability. Larger part sizes (and fewer
	 * requests) costs slightly less but has lower upload reliability.
	 *
	 * In certain cases with large objects, it's possible for this method to attempt to open more file system
	 * connections than allowed by the OS. In this case, either
	 * <a href="https://forums.aws.amazon.com/thread.jspa?threadID=70216">increase the number of connections
	 * allowed</a> or increase the value of the <code>partSize</code> parameter to use a larger part size.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {String} [filename] The file name for the object.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>fileUpload</code> - <code>string|resource</code> - Required - The URL/path for the file to upload, or an open resource.</li>
	 * 	<li><code>acl</code> - <code>string</code> - Optional - The ACL settings for the specified object. [Allowed values: <code>AmazonS3::ACL_PRIVATE</code>, <code>AmazonS3::ACL_PUBLIC</code>, <code>AmazonS3::ACL_OPEN</code>, <code>AmazonS3::ACL_AUTH_READ</code>, <code>AmazonS3::ACL_OWNER_READ</code>, <code>AmazonS3::ACL_OWNER_FULL_CONTROL</code>]. The default value is <code>ACL_PRIVATE</code>.</li>
	 * 	<li><code>contentType</code> - <code>string</code> - Optional - The type of content that is being sent in the body. The default value is <code>application/octet-stream</code>.</li>
	 * 	<li><code>headers</code> - <code>array</code> - Optional - Standard HTTP headers to send along in the request. Accepts an associative array of key-value pairs.</li>
	 * 	<li><code>length</code> - <code>integer</code> - Optional - The size of the object in bytes. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">RFC 2616, section 14.13</a>. The value can also be passed to the <code>header</code> option as <code>Content-Length</code>.</li>
	 * 	<li><code>limit</code> - <code>integer</code> - Optional - The maximum number of concurrent uploads done by cURL. Gets passed to <code>CFBatchRequest</code>.</li>
	 * 	<li><code>meta</code> - <code>array</code> - Optional - An associative array of key-value pairs. Any header starting with <code>x-amz-meta-:</code> is considered user metadata. It will be stored with the object and returned when you retrieve the object. The total size of the HTTP request, not including the body, must be less than 4 KB.</li>
	 * 	<li><code>partSize</code> - <code>integer</code> - Optional - The size of an individual part. The size may not be smaller than 5 MB or larger than 500 MB. The default value is 50 MB.</li>
	 * 	<li><code>seekTo</code> - <code>integer</code> - Optional - The starting position in bytes for the first piece of the file/stream to upload.</li>
	 * 	<li><code>storage</code> - <code>string</code> - Optional - Whether to use Standard or Reduced Redundancy storage. [Allowed values: <code>AmazonS3::STORAGE_STANDARD</code>, <code>AmazonS3::STORAGE_REDUCED</code>]. The default value is <code>STORAGE_STANDARD</code>.</li>
	 * 	<li><code>uploadId</code> - <code>string</code> - Optional - An upload ID identifying an existing multipart upload to use. If this option is not set, one will be created automatically.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 * @link http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAccessPolicy.html REST Access Control Policy
	 */
  create_mpu_object: function(bucket,filename,opt){
    var payload = {};
    payload.bucket = bucket;
    payload.filename = filename;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateMpuObject", payload );
    return response;
  }, 
  /**
	 * Enables and configures an Amazon S3 website using the corresponding bucket as the content source.
	 * The website will have one default domain name associated with it, which is the bucket name. If you
	 * attempt to configure an Amazon S3 website for a bucket whose name is not compatible with DNS,
	 * Amazon S3 returns an <code>InvalidBucketName</code> error. For more information on bucket names and DNS,
	 * refer to <a href="http://docs.amazonwebservices.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations.</a>
	 *
	 * To visit the bucket as a website a new endpoint is created in the following pattern:
	 * <code>http://&lt;bucketName&gt;.s3-website-&lt;region&gt;.amazonaws.com</code>. This is a sample URL
	 * for a bucket called <code>example-bucket</code> in the <code>us-east-1</code> region.
	 * (e.g., <code>http://example-bucket.s3-website-us-east-1.amazonaws.com</code>)
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>indexDocument</code> - <code>string</code> - Optional - The file path to use as the root document. The default value is <code>index.html</code>.</li>
	 * 	<li><code>errorDocument</code> - <code>string</code> - Optional - The file path to use as the error document. The default value is <code>error.html</code>.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  create_website_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateWebsiteConfig", payload );
    return response;
  }, 
  /**
	 * Retrieves the website configuration for a bucket. The contents of this response are identical to the
	 * content submitted by the user during the website creation operation. If a website configuration has
	 * never been set, Amazon S3 will return a 404 error.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_website_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetWebsiteConfig", payload );
    return response;
  }, 
  /**
	 * Removes the website configuration for a bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_website_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteWebsiteConfig", payload );
    return response;
  }, 
  /**
	 * Enables the ability to specify an expiry period for objects when an object should be deleted,
	 * measured as number of days from creation time. Amazon S3 guarantees that the object will be
	 * deleted when the expiration time is passed.
	 *
	 * This feature is also known as "lifecycle" (e.g., in the AWS Console).
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>rules</code> - <code>string</code> - Required - The object expiration rule-sets to apply to the bucket. <ul>
	 * 		<li><code>x</code> - <code>array</code> - Required - This represents a simple array index. <ul>
	 * 			<li><code>id</code> - <code>string</code> - Optional - Unique identifier for the rule. The value cannot be longer than 255 characters.</li>
	 * 			<li><code>prefix</code> - <code>string</code> - Required - The Amazon S3 object prefix which targets the file(s) for expiration.</li>
	 * 			<li><code>expiration</code> - <code>array</code> - Required - The container for the unit of measurement by which the expiration time is calculated. <ul>
	 * 				<li><code>days</code> - <code>integer</code> - Required - The number of days until the targetted objects expire from the bucket.</li>
	 * 			</ul></li>
	 * 			<li><code>enabled</code> - <code>boolean</code> - Optional - Whether or not to enable this rule-set. A value of <code>true</code> enables the rule-set. A value of <code>false</code> disables the rule-set. The default value is <code>true</code>.</li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  create_object_expiration_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateObjectExpirationConfig", payload );
    return response;
  }, 
  /**
	 * Retrieves the expiry period (i.e., lifecycle) for objects.
	 *
	 * This feature is also known as "lifecycle" (e.g., in the AWS Console).
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_object_expiration_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetObjectExpirationConfig", payload );
    return response;
  }, 
  /**
	 * Deletes the expiry period (i.e., lifecycle) for objects.
	 *
	 * This feature is also known as "lifecycle" (e.g., in the AWS Console).
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_object_expiration_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteObjectExpirationConfig", payload );
    return response;
  }, 
  /**
	 * Apply a set of tags to the specified bucket. Bucket Tags simplify the task of associating Amazon S3
	 * costs with specific buckets.
	 *
	 * This operation requires permission to perform <code>s3:PutBucketTagging</code> actions. By default,
	 * the bucket owner is permitted to perform these actions, and can grant permission to other users.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>tags</code> - <code>array</code> - Required - An associative array of custom key-value pairs. <ul>
	 * 		<li><code>[custom-key]</code> - <code>string</code> - Optional - A custom key-value pair to tag the bucket with.</li>
	 * 	</ul></li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  create_bucket_tags: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateBucketTags", payload );
    return response;
  }, 
  /**
	 * Retrieve all associated tags for the specified bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_bucket_tags: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetBucketTags", payload );
    return response;
  }, 
  /**
	 * Delete all associated tags from the specified bucket.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_bucket_tags: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteBucketTags", payload );
    return response;
  }, 
  /**
	 * Create a new CORS configuration.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>cors_rule</code> - <code>array</code> - Required - One or more rule-sets. <ul>
	 * 		<li><code>x</code> - <code>array</code> - Required - This represents a simple array index. <ul>
	 * 			<li><code>allowed_header</code> - <code>array</code> - Required - Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.</li>
	 * 			<li><code>allowed_method</code> - <code>array</code> - Required - An array of HTTP methods to allow. There must be at least one method set. [Allowed values: `GET`, `PUT`, `HEAD`, `POST`, `DELETE`]</li>
	 * 			<li><code>allowed_origin</code> - <code>array</code> - Required - An array of hostnames to allow. This could be `*` to indicate it is open to all domains. If one of them contains the string `*`, then there can be exactly one.</li>
	 * 			<li><code>expose_header</code> - <code>string</code> - Optional - Enable the browser to read this header.</li>
	 * 			<li><code>id</code> - <code>string</code> - Optional - Unique identifier for the rule. The value cannot be longer than 255 characters.</li>
	 * 			<li><code>max_age</code> - <code>integer</code> - Optional - Alter the client's caching behavior for the pre-flight request.</li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  create_cors_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateCorsConfig", payload );
    return response;
  }, 
  /**
	 * Retrieves the CORS configuration.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_cors_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetCorsConfig", payload );
    return response;
  }, 
  /**
	 * Deletes the CORS configuration.
	 *
	 * @param {String} [bucket] The name of the bucket to use.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_cors_config: function(bucket,opt){
    var payload = {};
    payload.bucket = bucket;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteCorsConfig", payload );
    return response;
  }
}
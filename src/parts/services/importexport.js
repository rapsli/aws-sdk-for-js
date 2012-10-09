/**
 * @class AmazonImportExportClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonImportExport(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonImportExport.prototype = {
  service:'importexport',
  version:'2010-06-01',
  auth_class: new AuthV2Query(),
  /**
   * @memberOf AmazonImportExport
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * This operation cancels a specified job. Only the job owner can cancel it. The operation fails
   * if the job has already started or is complete.
   *
   * @param {String} job_id (Required) A unique identifier which refers to a particular job.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  cancel_job: function(job_id,opt){
    var payload = {};
    param.job_id = job_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"CancelJob", payload );
    return resposne;
  }, 
  /**
   * This operation initiates the process of scheduling an upload or download of your data. You
   * include in the request a manifest that describes the data transfer specifics. The response to
   * the request includes a job ID, which you can use in other operations, a signature that you use
   * to identify your storage device, and the address where you should ship your storage device.
   *
   * @param {String} job_type (Required) Specifies whether the job to initiate is an import or export job. [Allowed values: <code>Import</code>, <code>Export</code>]
   * @param {String} manifest (Required) The UTF-8 encoded text of the manifest file.
   * @param boolean $validate_only (Required) Validate the manifest and parameter values in the request but do not actually create a job.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ManifestAddendum</code> - <code>string</code> - Optional - For internal use only.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_job: function(job_type,manifest,validate_only,opt){
    var payload = {};
    param.job_type = job_type;
    param.manifest = manifest;
    param.validate_only = validate_only;

    payload = this.marge_param(payload,opt);
    var response = this.request({"CreateJob", payload );
    return resposne;
  }, 
  /**
   * This operation returns information about a job, including where the job is in the processing
   * pipeline, the status of the results, and the signature value associated with the job. You can
   * only return information about jobs you own.
   *
   * @param {String} job_id (Required) A unique identifier which refers to a particular job.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_status: function(job_id,opt){
    var payload = {};
    param.job_id = job_id;

    payload = this.marge_param(payload,opt);
    var response = this.request({"GetStatus", payload );
    return resposne;
  }, 
  /**
   * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs
   * in reverse chronological order based on the date of creation. For example if Job Test1 was
   * created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2
   * followed by Test1.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>MaxJobs</code> - <code>integer</code> - Optional - Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains<IsTruncated>true</IsTruncated>. To return the additional jobs, see Marker.</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_jobs: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request({"ListJobs", payload );
    return resposne;
  }, 
  /**
   * You use this operation to change the parameters specified in the original manifest file by
   * supplying a new manifest file. The manifest file attached to this request replaces the original
   * manifest file. You can only use the operation after a CreateJob request but before the data
   * transfer starts and you can only use it on jobs you own.
   *
   * @param {String} job_id (Required) A unique identifier which refers to a particular job.
   * @param {String} manifest (Required) The UTF-8 encoded text of the manifest file.
   * @param {String} job_type (Required) Specifies whether the job to initiate is an import or export job. [Allowed values: <code>Import</code>, <code>Export</code>]
   * @param boolean $validate_only (Required) Validate the manifest and parameter values in the request but do not actually create a job.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_job: function(job_id,manifest,job_type,validate_only,opt){
    var payload = {};
    param.job_id = job_id;
    param.manifest = manifest;
    param.job_type = job_type;
    param.validate_only = validate_only;

    payload = this.marge_param(payload,opt);
    var response = this.request({"UpdateJob", payload );
    return resposne;
  }
}
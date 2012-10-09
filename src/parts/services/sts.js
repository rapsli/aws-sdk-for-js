/**
 * @class AmazonSTSClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonSTS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSTS.prototype = {
  service:'sts',
  version:'2011-06-15',
  auth_class: new AuthV4Query(),
  /**
   * @memberOf AmazonSTS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * The GetFederationToken action returns a set of temporary credentials for a federated user with
   * the user name and policy specified in the request. The credentials consist of an Access Key ID,
   * a Secret Access Key, and a security token. Credentials created by IAM users are valid for the
   * specified duration, between one and 36 hours; credentials created using account credentials
   * last one hour.
   *  
   * The federated user who holds these credentials has any permissions allowed by the intersection
   * of the specified policy and any resource or user policies that apply to the caller of the
   * GetFederationToken API, and any resource policies that apply to the federated user's Amazon
   * Resource Name (ARN). For more information about how token permissions work, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/TokenPermissions.html" target=
   * "_blank">Controlling Permissions in Temporary Credentials</a> in <em>Using AWS Identity and
   * Access Management</em>. For information about using GetFederationToken to create temporary
   * credentials, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/CreatingFedTokens.html" target=
   * "_blank">Creating Temporary Credentials to Enable Access for Federated Users</a> in <em>Using
   * AWS Identity and Access Management</em>.
   *
   * @param {String} name (Required) The name of the federated user associated with the credentials. For information about limitations on user names, go to <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. [Constraints: The value must be between 2 and 32 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Policy</code> - <code>string</code> - Optional - A policy specifying the permissions to associate with the credentials. The caller can delegate their own permissions by specifying a policy, and both policies will be checked when a service call is made. For more information about how permissions work in the context of temporary credentials, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/TokenPermissions.html" target="_blank">Controlling Permissions in Temporary Credentials</a> in <em>Using AWS Identity and Access Management</em>. [Constraints: The value must be between 1 and 2048 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]</li>
   *   <li><code>DurationSeconds</code> - <code>integer</code> - Optional - The duration, in seconds, that the session should last. Acceptable durations for federation sessions range from 3600s (one hour) to 129600s (36 hours), with 43200s (12 hours) as the default.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_federation_token: function(name,opt){
    var payload = {};
    payload.name = name;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetFederationToken", payload );
    return response;
  }, 
  /**
   * The GetSessionToken action returns a set of temporary credentials for an AWS account or IAM
   * user. The credentials consist of an Access Key ID, a Secret Access Key, and a security token.
   * These credentials are valid for the specified duration only. The session duration for IAM users
   * can be between one and 36 hours, with a default of 12 hours. The session duration for AWS
   * account owners is restricted to one hour. Providing the MFA device serial number and the token
   * code is optional.
   *  
   * For more information about using GetSessionToken to create temporary credentials, go to
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/CreatingSessionTokens.html"
   * target="_blank">Creating Temporary Credentials to Enable Access for IAM Users</a> in <em>Using
   * IAM</em>.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>DurationSeconds</code> - <code>integer</code> - Optional - The duration, in seconds, that the credentials should remain valid. Acceptable durations for IAM user sessions range from 3600s (one hour) to 129600s (36 hours), with 43200s (12 hours) as the default. Sessions for AWS account owners are restricted to a maximum of 3600s (one hour).</li>
   *   <li><code>SerialNumber</code> - <code>string</code> - Optional - The identification number of the Multi-Factor Authentication (MFA) device for the user. If the user has an access policy requiring MFA to access resources, provide the value here. The number is in the <strong>Security Credentials</strong> tab of the user's details pane in the IAM console. If the user has an active MFA device, the details pane displays a <strong>Multi-Factor Authentication Device</strong> value such as <code>arn:aws:iam::123456789012:mfa/user</code> for a virtual device or the device serial number for a hardware device. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]</li>
   *   <li><code>TokenCode</code> - <code>string</code> - Optional - The value provided by the MFA device. If the user has an access policy requiring an MFA code, provide the value here to get permission to resources as specified in the access policy. If MFA is required, and a code not provided while requesting a set of temporary security credentials, the user will receive an "access denied" response when requesting resources that require MFA. For more information, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingMFA.html" target="_blank">Using Multi-Factor Authentication (MFA) Devices with AWS</a> in <em>Using IAM</em>. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_session_token: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("GetSessionToken", payload );
    return response;
  }
}
/**
 * @class AmazonIAMClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonIAM(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonIAM.prototype = {
  service:'iam',
  version:'2010-05-08',
  auth_class: new AuthV4Query(),
  /**
   * @memberOf AmazonIAM
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Adds the specified role to the specified instance profile.
   *
   * @param {String} instance_profile_name (Required) Name of the instance profile to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} role_name (Required) Name of the role to add. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  add_role_to_instance_profile: function(instance_profile_name,role_name,opt){
    var param = {};
    param.instance_profile_name = instance_profile_name;
    param.role_name = role_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "AddRoleToInstanceProfile", param );
    return resposne;
  }, 
  /**
   * Adds the specified user to the specified group.
   *
   * @param {String} group_name (Required) Name of the group to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} user_name (Required) Name of the user to add. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  add_user_to_group: function(group_name,user_name,opt){
    var param = {};
    param.group_name = group_name;
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "AddUserToGroup", param );
    return resposne;
  }, 
  /**
   * Changes the password of the IAM user calling <code>ChangePassword</code>. The root account
   * password is not affected by this action. For information about modifying passwords, see
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingLogins.html"
   * target="_blank">Managing Passwords</a>.
   *
   * @param {String} old_password (Required)  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param {String} new_password (Required)  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  change_password: function(old_password,new_password,opt){
    var param = {};
    param.old_password = old_password;
    param.new_password = new_password;

    param = this.marge_param(param,opt);
    var response = this.request(, "ChangePassword", param );
    return resposne;
  }, 
  /**
   * Creates a new AWS Secret Access Key and corresponding AWS Access Key ID for the specified user.
   * The default status for new keys is <code>Active</code>.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request. Because this action works for access keys under the AWS
   * account, you can use this API to manage root credentials even if the AWS account has no
   * associated users.
   *  
   * For information about limits on the number of keys you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="important">
   * To ensure the security of your AWS account, the Secret Access Key is accessible only during key
   * and user creation. You must save the key (for example, in a text file) if you want to be able
   * to access it again. If a secret key is lost, you can delete the access keys for the associated
   * user and then create new keys.
   * </p>
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - The user name that the new key will belong to. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_access_key: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateAccessKey", param );
    return resposne;
  }, 
  /**
   * This action creates an alias for your AWS account. For information about using an AWS account
   * alias, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/AccountAlias.html"
   * target="_blank">Using an Alias for Your AWS Account ID</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} account_alias (Required) Name of the account alias to create. [Constraints: The value must be between 3 and 63 characters, and must match the following regular expression pattern: <code>^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_account_alias: function(account_alias,opt){
    var param = {};
    param.account_alias = account_alias;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateAccountAlias", param );
    return resposne;
  }, 
  /**
   * Creates a new group.
   *  
   * For information about the number of groups you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} group_name (Required) Name of the group to create. Do not include the path in this value. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Path</code> - <code>string</code> - Optional - The path to the group. For more information about paths, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. This parameter is optional. If it is not included, it defaults to a slash (/). [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_group: function(group_name,opt){
    var param = {};
    param.group_name = group_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateGroup", param );
    return resposne;
  }, 
  /**
   * Creates a new instance profile.
   *  
   * For information about the number of instance profiles you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} instance_profile_name (Required) Name of the instance profile to create. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Path</code> - <code>string</code> - Optional - The path to the instance profile. For more information about paths, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. This parameter is optional. If it is not included, it defaults to a slash (/). [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_instance_profile: function(instance_profile_name,opt){
    var param = {};
    param.instance_profile_name = instance_profile_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateInstanceProfile", param );
    return resposne;
  }, 
  /**
   * Creates a password for the specified user, giving the user the ability to access AWS services
   * through the AWS Management Console. For more information about managing passwords, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_ManagingLogins.html"
   * target="_blank">Managing Passwords</a> in <em>Using IAM</em>.
   *
   * @param {String} user_name (Required) Name of the user to create a password for. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} password (Required) The new password for the user name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_login_profile: function(user_name,password,opt){
    var param = {};
    param.user_name = user_name;
    param.password = password;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateLoginProfile", param );
    return resposne;
  }, 
  /**
   * Creates a new role for your AWS account.
   *  
   * For information about limitations on the number of roles you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} role_name (Required) Name of the role to create. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} assume_role_policy_document (Required) The policy govering by who and under what conditions the role can be assumed. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Path</code> - <code>string</code> - Optional - The path to the role. For more information about paths, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. This parameter is optional. If it is not included, it defaults to a slash (/). [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_role: function(role_name,assume_role_policy_document,opt){
    var param = {};
    param.role_name = role_name;
    param.assume_role_policy_document = assume_role_policy_document;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateRole", param );
    return resposne;
  }, 
  /**
   * Creates a new user for your AWS account.
   *  
   * For information about limitations on the number of users you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} user_name (Required) Name of the user to create. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Path</code> - <code>string</code> - Optional - The path for the user name. For more information about paths, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. This parameter is optional. If it is not included, it defaults to a slash (/). [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_user: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateUser", param );
    return resposne;
  }, 
  /**
   * Creates a new virtual MFA device for the AWS account. After creating the virtual MFA, use
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/APIReference/API_EnableMFADevice.html"
   * target="_blank">EnableMFADevice</a> to attach the MFA device to an IAM user. For more
   * information about creating and working with virtual MFA devices, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_VirtualMFA.html"
   * target="_blank">Using a Virtual MFA Device</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *  
   * For information about limits on the number of MFA devices you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="important">
   * The seed information contained in the QR code and the Base32 string should be treated like any
   * other secret access information, such as your AWS access keys or your passwords. After you
   * provision your virtual device, you should ensure that the information is destroyed following
   * secure procedures.
   * </p>
   *
   * @param {String} virtual_mfa_device_name (Required) The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device. [Constraints: The value must be more than 1 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Path</code> - <code>string</code> - Optional - The path for the virtual MFA device. For more information about paths, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. This parameter is optional. If it is not included, it defaults to a slash (/). [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_virtual_mfa_device: function(virtual_mfa_device_name,opt){
    var param = {};
    param.virtual_mfa_device_name = virtual_mfa_device_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "CreateVirtualMfaDevice", param );
    return resposne;
  }, 
  /**
   * Deactivates the specified MFA device and removes it from association with the user name for
   * which it was originally enabled.
   *
   * @param {String} user_name (Required) Name of the user whose MFA device you want to deactivate. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} serial_number (Required) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  deactivate_mfa_device: function(user_name,serial_number,opt){
    var param = {};
    param.user_name = user_name;
    param.serial_number = serial_number;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeactivateMfaDevice", param );
    return resposne;
  }, 
  /**
   * Deletes the access key associated with the specified user.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request. Because this action works for access keys under the AWS
   * account, you can use this API to manage root credentials even if the AWS account has no
   * associated users.
   *
   * @param {String} access_key_id (Required) The Access Key ID for the Access Key ID and Secret Access Key you want to delete. [Constraints: The value must be between 16 and 32 characters, and must match the following regular expression pattern: <code>[\w]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user whose key you want to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_access_key: function(access_key_id,opt){
    var param = {};
    param.access_key_id = access_key_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteAccessKey", param );
    return resposne;
  }, 
  /**
   * Deletes the specified AWS account alias. For information about using an AWS account alias, see
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/AccountAlias.html" target=
   * "_blank">Using an Alias for Your AWS Account ID</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} account_alias (Required) Name of the account alias to delete. [Constraints: The value must be between 3 and 63 characters, and must match the following regular expression pattern: <code>^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_account_alias: function(account_alias,opt){
    var param = {};
    param.account_alias = account_alias;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteAccountAlias", param );
    return resposne;
  }, 
  /**
   * Deletes the password policy for the AWS account.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_account_password_policy: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteAccountPasswordPolicy", param );
    return resposne;
  }, 
  /**
   * Deletes the specified group. The group must not contain any users or have any attached
   * policies.
   *
   * @param {String} group_name (Required) Name of the group to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_group: function(group_name,opt){
    var param = {};
    param.group_name = group_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteGroup", param );
    return resposne;
  }, 
  /**
   * Deletes the specified policy that is associated with the specified group.
   *
   * @param {String} group_name (Required) Name of the group the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_group_policy: function(group_name,policy_name,opt){
    var param = {};
    param.group_name = group_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteGroupPolicy", param );
    return resposne;
  }, 
  /**
   * Deletes the specified instance profile. The instance profile must have an associated role.
   *
   * @param {String} instance_profile_name (Required) Name of the instance profile to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_instance_profile: function(instance_profile_name,opt){
    var param = {};
    param.instance_profile_name = instance_profile_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteInstanceProfile", param );
    return resposne;
  }, 
  /**
   * Deletes the password for the specified user, which terminates the user's ability to access AWS
   * services through the AWS Management Console.
   * 
   * <p class="important">
   * Deleting a user's password does not prevent a user from accessing IAM through the command line
   * interface or the API. To prevent all user access you must also either make the access key
   * inactive or delete it. For more information about making keys inactive or deleting them, see
   * <code>UpdateAccessKey</code> and <code>DeleteAccessKey</code>.
   * </p>
   *
   * @param {String} user_name (Required) Name of the user whose password you want to delete. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_login_profile: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteLoginProfile", param );
    return resposne;
  }, 
  /**
   * Deletes the specified role. The role must not have any attached policies.
   *
   * @param {String} role_name (Required) Name of the role to delete. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_role: function(role_name,opt){
    var param = {};
    param.role_name = role_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteRole", param );
    return resposne;
  }, 
  /**
   * Deletes the specified policy associated with the specified role.
   *
   * @param {String} role_name (Required) Name of the role the policy is associated with. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_role_policy: function(role_name,policy_name,opt){
    var param = {};
    param.role_name = role_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteRolePolicy", param );
    return resposne;
  }, 
  /**
   * Deletes the specified server certificate.
   * 
   * <p class="important">
   * If you are using a server certificate with Elastic Load Balancing, deleting the certificate
   * could have implications for your application. If Elastic Load Balancing doesn't detect the
   * deletion of bound certificates, it may continue to use the certificates. This could cause
   * Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to
   * the certificate from Elastic Load Balancing before using this command to delete the
   * certificate. For more information, go to <a href=
   * "http://docs.amazonwebservices.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html"
   * target="blank">DeleteLoadBalancerListeners</a> in the <em>Elastic Load Balancing API
   * Reference</em>.
   * </p>
   *
   * @param {String} server_certificate_name (Required) The name of the server certificate you want to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_server_certificate: function(server_certificate_name,opt){
    var param = {};
    param.server_certificate_name = server_certificate_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteServerCertificate", param );
    return resposne;
  }, 
  /**
   * Deletes the specified signing certificate associated with the specified user.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request. Because this action works for access keys under the AWS
   * account, you can use this API to manage root credentials even if the AWS account has no
   * associated users.
   *
   * @param {String} certificate_id (Required) ID of the signing certificate to delete. [Constraints: The value must be between 24 and 128 characters, and must match the following regular expression pattern: <code>[\w]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user the signing certificate belongs to. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_signing_certificate: function(certificate_id,opt){
    var param = {};
    param.certificate_id = certificate_id;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteSigningCertificate", param );
    return resposne;
  }, 
  /**
   * Deletes the specified user. The user must not belong to any groups, have any keys or signing
   * certificates, or have any attached policies.
   *
   * @param {String} user_name (Required) Name of the user to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_user: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteUser", param );
    return resposne;
  }, 
  /**
   * Deletes the specified policy associated with the specified user.
   *
   * @param {String} user_name (Required) Name of the user the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_user_policy: function(user_name,policy_name,opt){
    var param = {};
    param.user_name = user_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteUserPolicy", param );
    return resposne;
  }, 
  /**
   * Deletes a virtual MFA device.
   * 
   * <p class="note">
   * You must deactivate a user's virtual MFA device before you can delete it. For information about
   * deactivating MFA devices, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/APIReference/API_DeactivateMFADevice.html">DeactivateMFADevice</a>.
   * </p>
   *
   * @param {String} serial_number (Required) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_virtual_mfa_device: function(serial_number,opt){
    var param = {};
    param.serial_number = serial_number;

    param = this.marge_param(param,opt);
    var response = this.request(, "DeleteVirtualMfaDevice", param );
    return resposne;
  }, 
  /**
   * Enables the specified MFA device and associates it with the specified user name. When enabled,
   * the MFA device is required for every subsequent login by the user name associated with the
   * device.
   *
   * @param {String} user_name (Required) Name of the user for whom you want to enable the MFA device. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} serial_number (Required) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]
   * @param {String} authentication_code1 (Required) An authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]
   * @param {String} authentication_code2 (Required) A subsequent authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  enable_mfa_device: function(user_name,serial_number,authentication_code1,authentication_code2,opt){
    var param = {};
    param.user_name = user_name;
    param.serial_number = serial_number;
    param.authentication_code1 = authentication_code1;
    param.authentication_code2 = authentication_code2;

    param = this.marge_param(param,opt);
    var response = this.request(, "EnableMfaDevice", param );
    return resposne;
  }, 
  /**
   * Retrieves the password policy for the AWS account. For more information about using a password
   * policy, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing
   * an IAM Password Policy</a>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_account_password_policy: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "GetAccountPasswordPolicy", param );
    return resposne;
  }, 
  /**
   * Retrieves account level information about account entity usage and IAM quotas.
   *  
   * For information about limitations on IAM entities, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_account_summary: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "GetAccountSummary", param );
    return resposne;
  }, 
  /**
   * Returns a list of users that are in the specified group. You can paginate the results using the
   * <code>MaxItems</code> and <code>Marker</code> parameters.
   *
   * @param {String} group_name (Required) Name of the group. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_group: function(group_name,opt){
    var param = {};
    param.group_name = group_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetGroup", param );
    return resposne;
  }, 
  /**
   * Retrieves the specified policy document for the specified group. The returned policy is
   * URL-encoded according to RFC 3986. For more information about RFC 3986, go to <a href=
   * "http://www.faqs.org/rfcs/rfc3986.html">http://www.faqs.org/rfcs/rfc3986.html</a>.
   *
   * @param {String} group_name (Required) Name of the group the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document to get. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_group_policy: function(group_name,policy_name,opt){
    var param = {};
    param.group_name = group_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetGroupPolicy", param );
    return resposne;
  }, 
  /**
   * Retrieves information about the specified instance profile, including the instance profile's
   * path, GUID, ARN, and role.
   *
   * @param {String} instance_profile_name (Required) Name of the instance profile to get information about. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_instance_profile: function(instance_profile_name,opt){
    var param = {};
    param.instance_profile_name = instance_profile_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetInstanceProfile", param );
    return resposne;
  }, 
  /**
   * Retrieves the user name and password create date for the specified user.
   *
   * @param {String} user_name (Required) Name of the user whose login profile you want to retrieve. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_login_profile: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetLoginProfile", param );
    return resposne;
  }, 
  /**
   * Retrieves information about the specified role, including the role's path, GUID, ARN, and the
   * assume role policy.
   *
   * @param {String} role_name (Required) Name of the role to get information about. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_role: function(role_name,opt){
    var param = {};
    param.role_name = role_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetRole", param );
    return resposne;
  }, 
  /**
   * Retrieves the specified policy document for the specified role. The returned policy is
   * URL-encoded according to RFC 3986. For more information about RFC 3986, go to <a href=
   * "http://www.faqs.org/rfcs/rfc3986.html">http://www.faqs.org/rfcs/rfc3986.html</a>.
   *
   * @param {String} role_name (Required) Name of the role who the policy is associated with. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document to get. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_role_policy: function(role_name,policy_name,opt){
    var param = {};
    param.role_name = role_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetRolePolicy", param );
    return resposne;
  }, 
  /**
   * Retrieves information about the specified server certificate.
   *
   * @param {String} server_certificate_name (Required) The name of the server certificate you want to retrieve information about. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_server_certificate: function(server_certificate_name,opt){
    var param = {};
    param.server_certificate_name = server_certificate_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetServerCertificate", param );
    return resposne;
  }, 
  /**
   * Retrieves information about the specified user, including the user's path, GUID, and ARN.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user to get information about. This parameter is optional. If it is not included, it defaults to the user making the request. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_user: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "GetUser", param );
    return resposne;
  }, 
  /**
   * Retrieves the specified policy document for the specified user. The returned policy is
   * URL-encoded according to RFC 3986. For more information about RFC 3986, go to <a href=
   * "http://www.faqs.org/rfcs/rfc3986.html">http://www.faqs.org/rfcs/rfc3986.html</a>.
   *
   * @param {String} user_name (Required) Name of the user who the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document to get. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_user_policy: function(user_name,policy_name,opt){
    var param = {};
    param.user_name = user_name;
    param.policy_name = policy_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "GetUserPolicy", param );
    return resposne;
  }, 
  /**
   * Returns information about the Access Key IDs associated with the specified user. If there are
   * none, the action returns an empty list.
   *  
   * Although each user is limited to a small number of keys, you can still paginate the results
   * using the <code>MaxItems</code> and <code>Marker</code> parameters.
   *  
   * If the <code>UserName</code> field is not specified, the UserName is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   * 
   * <p class="note">
   * To ensure the security of your AWS account, the secret access key is accessible only during key
   * and user creation.
   * </p>
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of keys you want in the response. If there are additional keys beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_access_keys: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListAccessKeys", param );
    return resposne;
  }, 
  /**
   * Lists the account aliases associated with the account. For information about using an AWS
   * account alias, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/AccountAlias.html" target=
   * "_blank">Using an Alias for Your AWS Account ID</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of account aliases you want in the response. If there are additional account aliases beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_account_aliases: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListAccountAliases", param );
    return resposne;
  }, 
  /**
   * Lists the names of the policies associated with the specified group. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} group_name (Required) The name of the group to list policies for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of policy names you want in the response. If there are additional policy names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_group_policies: function(group_name,opt){
    var param = {};
    param.group_name = group_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "ListGroupPolicies", param );
    return resposne;
  }, 
  /**
   * Lists the groups that have the specified path prefix.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PathPrefix</code> - <code>string</code> - Optional - The path prefix for filtering the results. For example: <code>/division_abc/subdivision_xyz/</code>, which would get all groups whose path starts with <code>/division_abc/subdivision_xyz/</code>. This parameter is optional. If it is not included, it defaults to a slash (/), listing all groups. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>\u002F[\u0021-\u007F]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of groups you want in the response. If there are additional groups beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_groups: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListGroups", param );
    return resposne;
  }, 
  /**
   * Lists the groups the specified user belongs to.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} user_name (Required) The name of the user to list groups for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of groups you want in the response. If there are additional groups beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_groups_for_user: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "ListGroupsForUser", param );
    return resposne;
  }, 
  /**
   * Lists the instance profiles that have the specified path prefix. If there are none, the action
   * returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PathPrefix</code> - <code>string</code> - Optional - The path prefix for filtering the results. For example: <code>/application_abc/component_xyz/</code>, which would get all instance profiles whose path starts with <code>/application_abc/component_xyz/</code>. This parameter is optional. If it is not included, it defaults to a slash (/), listing all instance profiles. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>\u002F[\u0021-\u007F]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_instance_profiles: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListInstanceProfiles", param );
    return resposne;
  }, 
  /**
   * Lists the instance profiles that have the specified associated role. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} role_name (Required) The name of the role to list instance profiles for. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_instance_profiles_for_role: function(role_name,opt){
    var param = {};
    param.role_name = role_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "ListInstanceProfilesForRole", param );
    return resposne;
  }, 
  /**
   * Lists the MFA devices. If the request includes the user name, then this action lists all the
   * MFA devices associated with the specified user name. If you do not specify a user name, IAM
   * determines the user name implicitly based on the AWS Access Key ID signing the request.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user whose MFA devices you want to list. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of MFA devices you want in the response. If there are additional MFA devices beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_mfa_devices: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListMfaDevices", param );
    return resposne;
  }, 
  /**
   * Lists the names of the policies associated with the specified role. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} role_name (Required) The name of the role to list policies for. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_role_policies: function(role_name,opt){
    var param = {};
    param.role_name = role_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "ListRolePolicies", param );
    return resposne;
  }, 
  /**
   * Lists the roles have the specified path prefix. If there are none, the action returns an empty
   * list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PathPrefix</code> - <code>string</code> - Optional - The path prefix for filtering the results. For example: <code>/application_abc/component_xyz/</code>, which would get all roles whose path starts with <code>/application_abc/component_xyz/</code>. This parameter is optional. If it is not included, it defaults to a slash (/), listing all roles. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>\u002F[\u0021-\u007F]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_roles: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListRoles", param );
    return resposne;
  }, 
  /**
   * Lists the server certificates that have the specified path prefix. If none exist, the action
   * returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PathPrefix</code> - <code>string</code> - Optional - The path prefix for filtering the results. For example: <code>/company/servercerts</code> would get all server certificates for which the path starts with <code>/company/servercerts</code>. This parameter is optional. If it is not included, it defaults to a slash (/), listing all server certificates. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>\u002F[\u0021-\u007F]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of server certificates you want in the response. If there are additional server certificates beyond the maximum you specify, the <code>IsTruncated</code> response element will be set to <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_server_certificates: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListServerCertificates", param );
    return resposne;
  }, 
  /**
   * Returns information about the signing certificates associated with the specified user. If there
   * are none, the action returns an empty list.
   *  
   * Although each user is limited to a small number of signing certificates, you can still paginate
   * the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
   *  
   * If the <code>UserName</code> field is not specified, the user name is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - The name of the user. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of certificate IDs you want in the response. If there are additional certificate IDs beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_signing_certificates: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListSigningCertificates", param );
    return resposne;
  }, 
  /**
   * Lists the names of the policies associated with the specified user. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} user_name (Required) The name of the user to list policies for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this only when paginating results to indicate the maximum number of policy names you want in the response. If there are additional policy names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_user_policies: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "ListUserPolicies", param );
    return resposne;
  }, 
  /**
   * Lists the users that have the specified path prefix. If there are none, the action returns an
   * empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>PathPrefix</code> - <code>string</code> - Optional - The path prefix for filtering the results. For example: <code>/division_abc/subdivision_xyz/</code>, which would get all user names whose path starts with <code>/division_abc/subdivision_xyz/</code>. This parameter is optional. If it is not included, it defaults to a slash (/), listing all user names. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>\u002F[\u0021-\u007F]*</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_users: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListUsers", param );
    return resposne;
  }, 
  /**
   * Lists the virtual MFA devices under the AWS account by assignment status. If you do not specify
   * an assignment status, the action returns a list of all virtual MFA devices. Assignment status
   * can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AssignmentStatus</code> - <code>string</code> - Optional - The status (unassigned or assigned) of the devices to list. If you do not specify an <code>AssignmentStatus</code>, the action defaults to <code>Any</code> which lists both assigned and unassigned virtual MFA devices. [Allowed values: <code>Assigned</code>, <code>Unassigned</code>, <code>Any</code>]</li>
   *   <li><code>Marker</code> - <code>string</code> - Optional - Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the <code>Marker</code> element in the response you just received. [Constraints: The value must be between 1 and 320 characters, and must match the following regular expression pattern: <code>[\u0020-\u00FF]*</code>]</li>
   *   <li><code>MaxItems</code> - <code>integer</code> - Optional - Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_virtual_mfa_devices: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "ListVirtualMfaDevices", param );
    return resposne;
  }, 
  /**
   * Adds (or updates) a policy document associated with the specified group. For information about
   * policies, refer to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?PoliciesOverview.html"
   * target="_blank">Overview of Policies</a> in <em>Using AWS Identity and Access Management</em>.
   *  
   * For information about limits on the number of policies you can associate with a group, see
   *   <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because policy documents can be large, you should use POST rather than GET when calling
   * <code>PutGroupPolicy</code>. For information about setting up signatures and authorization
   * through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} group_name (Required) Name of the group to associate the policy with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_document (Required) The policy document. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  put_group_policy: function(group_name,policy_name,policy_document,opt){
    var param = {};
    param.group_name = group_name;
    param.policy_name = policy_name;
    param.policy_document = policy_document;

    param = this.marge_param(param,opt);
    var response = this.request(, "PutGroupPolicy", param );
    return resposne;
  }, 
  /**
   * Adds (or updates) a policy document associated with the specified role. For information about
   * policies, refer to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?PoliciesOverview.html"
   * target="_blank">Overview of Policies</a> in <em>Using AWS Identity and Access Management</em>.
   *  
   * For information about limits on the number of policies you can associate with a role, see
   *   <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because policy documents can be large, you should use POST rather than GET when calling
   * <code>PutRolePolicy</code>. For information about setting up signatures and authorization
   * through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} role_name (Required) Name of the role to associate the policy with. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_document (Required) The policy document. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  put_role_policy: function(role_name,policy_name,policy_document,opt){
    var param = {};
    param.role_name = role_name;
    param.policy_name = policy_name;
    param.policy_document = policy_document;

    param = this.marge_param(param,opt);
    var response = this.request(, "PutRolePolicy", param );
    return resposne;
  }, 
  /**
   * Adds (or updates) a policy document associated with the specified user. For information about
   * policies, refer to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?PoliciesOverview.html"
   * target="_blank">Overview of Policies</a> in <em>Using AWS Identity and Access Management</em>.
   *  
   * For information about limits on the number of policies you can associate with a user, see
   *   <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because policy documents can be large, you should use POST rather than GET when calling
   * <code>PutUserPolicy</code>. For information about setting up signatures and authorization
   * through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} user_name (Required) Name of the user to associate the policy with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_name (Required) Name of the policy document. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_document (Required) The policy document. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  put_user_policy: function(user_name,policy_name,policy_document,opt){
    var param = {};
    param.user_name = user_name;
    param.policy_name = policy_name;
    param.policy_document = policy_document;

    param = this.marge_param(param,opt);
    var response = this.request(, "PutUserPolicy", param );
    return resposne;
  }, 
  /**
   * Removes the specified role from the specified instance profile.
   *
   * @param {String} instance_profile_name (Required) Name of the instance profile to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} role_name (Required) Name of the role to remove. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  remove_role_from_instance_profile: function(instance_profile_name,role_name,opt){
    var param = {};
    param.instance_profile_name = instance_profile_name;
    param.role_name = role_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "RemoveRoleFromInstanceProfile", param );
    return resposne;
  }, 
  /**
   * Removes the specified user from the specified group.
   *
   * @param {String} group_name (Required) Name of the group to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} user_name (Required) Name of the user to remove. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  remove_user_from_group: function(group_name,user_name,opt){
    var param = {};
    param.group_name = group_name;
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "RemoveUserFromGroup", param );
    return resposne;
  }, 
  /**
   * Synchronizes the specified MFA device with AWS servers.
   *
   * @param {String} user_name (Required) Name of the user whose MFA device you want to resynchronize. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} serial_number (Required) Serial number that uniquely identifies the MFA device. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]
   * @param {String} authentication_code1 (Required) An authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]
   * @param {String} authentication_code2 (Required) A subsequent authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  resync_mfa_device: function(user_name,serial_number,authentication_code1,authentication_code2,opt){
    var param = {};
    param.user_name = user_name;
    param.serial_number = serial_number;
    param.authentication_code1 = authentication_code1;
    param.authentication_code2 = authentication_code2;

    param = this.marge_param(param,opt);
    var response = this.request(, "ResyncMfaDevice", param );
    return resposne;
  }, 
  /**
   * Changes the status of the specified access key from Active to Inactive, or vice versa. This
   * action can be used to disable a user's key as part of a key rotation work flow.
   *  
   * If the <code>UserName</code> field is not specified, the UserName is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   *  
   * For information about rotating keys, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?ManagingCredentials.html"
   * target="_blank">Managing Keys and Certificates</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} access_key_id (Required) The Access Key ID of the Secret Access Key you want to update. [Constraints: The value must be between 16 and 32 characters, and must match the following regular expression pattern: <code>[\w]*</code>]
   * @param {String} status (Required) The status you want to assign to the Secret Access Key. <code>Active</code> means the key can be used for API calls to AWS, while <code>Inactive</code> means the key cannot be used. [Allowed values: <code>Active</code>, <code>Inactive</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user whose key you want to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_access_key: function(access_key_id,status,opt){
    var param = {};
    param.access_key_id = access_key_id;
    param.status = status;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateAccessKey", param );
    return resposne;
  }, 
  /**
   * Updates the password policy settings for the account. For more information about using a
   * password policy, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing
   * an IAM Password Policy</a>.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>MinimumPasswordLength</code> - <code>integer</code> - Optional - </li>
   *   <li><code>RequireSymbols</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>RequireNumbers</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>RequireUppercaseCharacters</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>RequireLowercaseCharacters</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>AllowUsersToChangePassword</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_account_password_policy: function(opt){
    var param = {};

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateAccountPasswordPolicy", param );
    return resposne;
  }, 
  /**
   * Updates the policy governing how the given role can be assumed.
   *
   * @param {String} role_name (Required) Name of the role to update. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} policy_document (Required) The policy govering by who and under what conditions the role can be assumed. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_assume_role_policy: function(role_name,policy_document,opt){
    var param = {};
    param.role_name = role_name;
    param.policy_document = policy_document;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateAssumeRolePolicy", param );
    return resposne;
  }, 
  /**
   * Updates the name and/or the path of the specified group.
   * 
   * <p class="important">
   * You should understand the implications of changing a group's path or name. For more
   * information, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Renaming.html" target=
   * "_blank">Renaming Users and Groups</a> in <em>Using AWS Identity and Access Management</em>.
   * </p>
   * <p class="note">
   * To change a group name the requester must have appropriate permissions on both the source
   * object and the target object. For example, to change Managers to MGRs, the entity making the
   * request must have permission on Managers and MGRs, or must have permission on all (*). For more
   * information about permissions, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/PermissionsAndPolicies.html" target=
   * "blank">Permissions and Policies</a>.
   * </p>
   *
   * @param {String} group_name (Required) Name of the group to update. If you're changing the name of the group, this is the original name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>NewPath</code> - <code>string</code> - Optional - New path for the group. Only include this if changing the group's path. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>NewGroupName</code> - <code>string</code> - Optional - New name for the group. Only include this if changing the group's name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_group: function(group_name,opt){
    var param = {};
    param.group_name = group_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateGroup", param );
    return resposne;
  }, 
  /**
   * Changes the password for the specified user.
   *
   * @param {String} user_name (Required) Name of the user whose password you want to update. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Password</code> - <code>string</code> - Optional - The new password for the user name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_login_profile: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateLoginProfile", param );
    return resposne;
  }, 
  /**
   * Updates the name and/or the path of the specified server certificate.
   * 
   * <p class="important">
   * You should understand the implications of changing a server certificate's path or name. For
   * more information, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/ManagingServerCerts.html" target=
   * "_blank">Managing Server Certificates</a> in <em>Using AWS Identity and Access Management</em>.
   * </p>
   * <p class="note">
   * To change a server certificate name the requester must have appropriate permissions on both the
   * source object and the target object. For example, to change the name from ProductionCert to
   * ProdCert, the entity making the request must have permission on ProductionCert and ProdCert, or
   * must have permission on all (*). For more information about permissions, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/PermissionsAndPolicies.html" target=
   * "blank">Permissions and Policies</a>.
   * </p>
   *
   * @param {String} server_certificate_name (Required) The name of the server certificate that you want to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>NewPath</code> - <code>string</code> - Optional - The new path for the server certificate. Include this only if you are updating the server certificate's path. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>NewServerCertificateName</code> - <code>string</code> - Optional - The new name for the server certificate. Include this only if you are updating the server certificate's name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_server_certificate: function(server_certificate_name,opt){
    var param = {};
    param.server_certificate_name = server_certificate_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateServerCertificate", param );
    return resposne;
  }, 
  /**
   * Changes the status of the specified signing certificate from active to disabled, or vice versa.
   * This action can be used to disable a user's signing certificate as part of a certificate
   * rotation work flow.
   *  
   * If the <code>UserName</code> field is not specified, the UserName is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   *  
   * For information about rotating certificates, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?ManagingCredentials.html"
   * target="_blank">Managing Keys and Certificates</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} certificate_id (Required) The ID of the signing certificate you want to update. [Constraints: The value must be between 24 and 128 characters, and must match the following regular expression pattern: <code>[\w]*</code>]
   * @param {String} status (Required) The status you want to assign to the certificate. <code>Active</code> means the certificate can be used for API calls to AWS, while <code>Inactive</code> means the certificate cannot be used. [Allowed values: <code>Active</code>, <code>Inactive</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user the signing certificate belongs to. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_signing_certificate: function(certificate_id,status,opt){
    var param = {};
    param.certificate_id = certificate_id;
    param.status = status;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateSigningCertificate", param );
    return resposne;
  }, 
  /**
   * Updates the name and/or the path of the specified user.
   * 
   * <p class="important">
   * You should understand the implications of changing a user's path or name. For more information,
   * see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Renaming.html" target=
   * "_blank">Renaming Users and Groups</a> in <em>Using AWS Identity and Access Management</em>.
   * </p>
   * <p class="note">
   * To change a user name the requester must have appropriate permissions on both the source object
   * and the target object. For example, to change Bob to Robert, the entity making the request must
   * have permission on Bob and Robert, or must have permission on all (*). For more information
   * about permissions, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/PermissionsAndPolicies.html" target=
   * "blank">Permissions and Policies</a>.
   * </p>
   *
   * @param {String} user_name (Required) Name of the user to update. If you're changing the name of the user, this is the original user name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>NewPath</code> - <code>string</code> - Optional - New path for the user. Include this parameter only if you're changing the user's path. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>NewUserName</code> - <code>string</code> - Optional - New name for the user. Include this parameter only if you're changing the user's name. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_user: function(user_name,opt){
    var param = {};
    param.user_name = user_name;

    param = this.marge_param(param,opt);
    var response = this.request(, "UpdateUser", param );
    return resposne;
  }, 
  /**
   * Uploads a server certificate entity for the AWS account. The server certificate entity includes
   * a public key certificate, a private key, and an optional certificate chain, which should all be
   * PEM-encoded.
   *  
   * For information about the number of server certificates you can upload, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because the body of the public key certificate, private key, and the certificate chain can be
   * large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>.
   * For information about setting up signatures and authorization through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} server_certificate_name (Required) The name for the server certificate. Do not include the path in this value. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]
   * @param {String} certificate_body (Required) The contents of the public key certificate in PEM-encoded format. [Constraints: The value must be between 1 and 16384 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param {String} private_key (Required) The contents of the private key in PEM-encoded format. [Constraints: The value must be between 1 and 16384 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Path</code> - <code>string</code> - Optional - The path for the server certificate. For more information about paths, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <em>Using AWS Identity and Access Management</em>. This parameter is optional. If it is not included, it defaults to a slash (/). [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: <code>(\u002F)|(\u002F[\u0021-\u007F]+\u002F)</code>]</li>
   *   <li><code>CertificateChain</code> - <code>string</code> - Optional - The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain. [Constraints: The value must be between 1 and 2097152 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  upload_server_certificate: function(server_certificate_name,certificate_body,private_key,opt){
    var param = {};
    param.server_certificate_name = server_certificate_name;
    param.certificate_body = certificate_body;
    param.private_key = private_key;

    param = this.marge_param(param,opt);
    var response = this.request(, "UploadServerCertificate", param );
    return resposne;
  }, 
  /**
   * Uploads an X.509 signing certificate and associates it with the specified user. Some AWS
   * services use X.509 signing certificates to validate requests that are signed with a
   * corresponding private key. When you upload the certificate, its default status is
   * <code>Active</code>.
   *  
   * If the <code>UserName</code> field is not specified, the user name is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   * 
   * <p class="note">
   * Because the body of a X.509 certificate can be large, you should use POST rather than GET when
   * calling <code>UploadSigningCertificate</code>. For information about setting up signatures and
   * authorization through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} certificate_body (Required) The contents of the signing certificate. [Constraints: The value must be between 1 and 16384 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>UserName</code> - <code>string</code> - Optional - Name of the user the signing certificate is for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  upload_signing_certificate: function(certificate_body,opt){
    var param = {};
    param.certificate_body = certificate_body;

    param = this.marge_param(param,opt);
    var response = this.request(, "UploadSigningCertificate", param );
    return resposne;
  }
}
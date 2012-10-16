/**
 * @class AmazonRDSClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonRDS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonRDS.prototype = {
  service:'rds',
  api_version:'2012-07-31',
  auth_class: new AuthV4Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonRDS
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Adds metadata tags to a DB Instance. These tags can also be used with cost allocation reporting
   * to track cost associated with a DB Instance.
   *  
   * For an overview on tagging DB Instances, see <a href=
   * "http://docs.amazonwebservices.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">DB
   * Instance Tags.</a>
   *
   * @param {String} [resource_name] The DB Instance the tags will be added to.   * @param {Object} [tags] The tags to be assigned to the DB Instance. <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Key</code> - <code>string</code> - Optional - A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and cannot be prefixed with "aws:". The string may only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</li>
   *     <li><code>Value</code> - <code>string</code> - Optional - A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and cannot be prefixed with "aws:". The string may only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  add_tags_to_resource: function(resource_name,tags,opt){
    var payload = {};
    payload.resource_name = resource_name;
    payload.tags = tags;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddTagsToResource", payload );
    return response;
  }, 
  /**
   * Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC
   * Security Groups can be added to the DBSecurityGroup if the application using the database is
   * running on EC2 or VPC instances. Second, IP ranges are available if the application accessing
   * your database is running on the Internet. Required parameters for this API are one of CIDR
   * range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName
   * or EC2SecurityGroupId for non-VPC).
   * 
   * <p class="note">
   * You cannot authorize ingress from an EC2 security group in one Region to an Amazon RDS DB
   * Instance in another. You cannot authorize ingress from a VPC security group in one VPC to an
   * Amazon RDS DB Instance in another.
   * </p> 
   * For an overview of CIDR ranges, go to the <a href=
   * "http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
   *
   * @param {String} [db_security_group_name] The name of the DB Security Group to add authorization to.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.CIDRIP] The IP range to authorize.
   * @param {String} [opt.EC2SecurityGroupName] Name of the EC2 Security Group to authorize. For VPC DB Security Groups, 
   * @param {String} [opt.EC2SecurityGroupId] Id of the EC2 Security Group to authorize. For VPC DB Security Groups, 
   * @param {String} [opt.EC2SecurityGroupOwnerId] AWS Account Number of the owner of the EC2 Security Group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value. For VPC DB Security Groups, 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  authorize_db_security_group_ingress: function(db_security_group_name,opt){
    var payload = {};
    payload.db_security_group_name = db_security_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AuthorizeDbSecurityGroupIngress", payload );
    return response;
  }, 
  /**
   * Copies the specified DBSnapshot. The source DBSnapshot must be in the "available" state.
   *
   * @param {String} [source_db_snapshot_identifier] The identifier for the source DB snapshot. Constraints:<ul><li>Must be the identifier for a valid system snapshot in the "available" state.</li></ul>Example: <code>rds:mydb-2012-04-02-00-01</code>   * @param {String} [target_db_snapshot_identifier] The identifier for the copied snapshot. Constraints:<ul><li>Cannot be null, empty, or blank</li><li>Must contain from 1 to 255 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>Example: <code>my-db-snapshot</code>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  copy_db_snapshot: function(source_db_snapshot_identifier,target_db_snapshot_identifier,opt){
    var payload = {};
    payload.source_db_snapshot_identifier = source_db_snapshot_identifier;
    payload.target_db_snapshot_identifier = target_db_snapshot_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CopyDbSnapshot", payload );
    return response;
  }, 
  /**
   * Creates a new DB instance.
   *
   * @param {String} [db_instance_identifier] The DB Instance identifier. This parameter is stored as a lowercase string. Constraints:<ul><li>Must contain from 1 to 63 alphanumeric characters or hyphens (1 to 15 for SQL Server).</li><li>First character must be a letter.</li><li>Cannot end with a hyphen or contain two consecutive hyphens.</li></ul>Example: <code>mydbinstance</code>   * @param {Number} [allocated_storage] The amount of storage (in gigabytes) to be initially allocated for the database instance. <strong>MySQL</strong> Constraints: Must be an integer from 5 to 1024. Type: Integer <strong>Oracle</strong> Constraints: Must be an integer from 10 to 1024. <strong>SQL Server</strong> Constraints: Must be an integer from 200 to 1024 (Standard Edition and Enterprise Edition) or from 30 to 1024 (Express Edition and Web Edition)   * @param {String} [db_instance_class] The compute and memory capacity of the DB Instance. To determine the instance classes that are available for a particular DB engine, use the <code>DescribeOrderableDBInstanceOptions</code> action. Valid Values: <code>db.t1.micro | db.m1.small | db.m1.large | db.m1.xlarge | db.m2.xlarge |db.m2.2xlarge | db.m2.4xlarge</code>  <p class="note">Amazon RDS does not support db.t1.micro instances in a virtual private cloud (VPC).</p>   * @param {String} [engine] The name of the database engine to be used for this instance. Valid Values: <code>MySQL</code> | <code>oracle-se1</code> | <code>oracle-se</code> | <code>oracle-ee</code> | <code>sqlserver-ee</code> | <code>sqlserver-se</code> | <code>sqlserver-ex</code> | <code>sqlserver-web</code>   * @param {String} [master_username] The name of master user for the client DB Instance. <strong>MySQL</strong> Constraints:<ul><li>Must be 1 to 16 alphanumeric characters.</li><li>First character must be a letter.</li><li>Cannot be a reserved word for the chosen database engine.</li></ul>Type: String <strong>Oracle</strong> Constraints:<ul><li>Must be 1 to 30 alphanumeric characters.</li><li>First character must be a letter.</li><li>Cannot be a reserved word for the chosen database engine.</li></ul> <strong>SQL Server</strong> Constraints:<ul><li>Must be 1 to 128 alphanumeric characters.</li><li>First character must be a letter.</li><li>Cannot be a reserved word for the chosen database engine.</li></ul>   * @param {String} [master_user_password] The password for the master database user. <strong>MySQL</strong> Constraints: Must contain from 8 to 41 alphanumeric characters. Type: String <strong>Oracle</strong> Constraints: Must contain from 8 to 30 alphanumeric characters. <strong>SQL Server</strong> Constraints: Must contain from 8 to 128 alphanumeric characters.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBName] The meaning of this parameter differs according to the database engine you use. 
   * @param {String|array} [opt.DBSecurityGroups] A list of DB Security Groups to associate with this DB Instance. Default: The default DB Security Group for the database engine. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String} [opt.AvailabilityZone] The EC2 Availability Zone that the database instance will be created in. Default: A random, system-chosen Availability Zone in the endpoint's region. Example: 
   * @param {String} [opt.DBSubnetGroupName] A DB Subnet Group to associate with this DB Instance. If there is no DB Subnet Group, then it is a non-VPC DB instance.
   * @param {String} [opt.PreferredMaintenanceWindow] The weekly time range (in UTC) during which system maintenance can occur. Format: 
   * @param {String} [opt.DBParameterGroupName] The name of the DB Parameter Group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine will be used. Constraints:
   * @param {Number} [opt.BackupRetentionPeriod] The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. Default: 1 Constraints:
   * @param {String} [opt.PreferredBackupWindow] The daily time range during which automated backups are created if automated backups are enabled, using the 
   * @param {Number} [opt.Port] The port number on which the database accepts connections. 
   * @param {Boolean} [opt.MultiAZ] Specifies if the DB Instance is a Multi-AZ deployment. For Microsoft SQL Server, must be set to false. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
   * @param {String} [opt.EngineVersion] The version number of the database engine to use. 
   * @param {Boolean} [opt.AutoMinorVersionUpgrade] Indicates that minor engine upgrades will be applied automatically to the DB Instance during the maintenance window. Default: 
   * @param {String} [opt.LicenseModel] License model information for this DB Instance. Valid values: 
   * @param {String} [opt.OptionGroupName] Indicates that the DB Instance should be associated with the specified option group.
   * @param {String} [opt.CharacterSetName] For supported engines, indicates that the DB Instance should be associated with the specified CharacterSet.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_db_instance: function(db_instance_identifier,allocated_storage,db_instance_class,engine,master_username,master_user_password,opt){
    var payload = {};
    payload.db_instance_identifier = db_instance_identifier;
    payload.allocated_storage = allocated_storage;
    payload.db_instance_class = db_instance_class;
    payload.engine = engine;
    payload.master_username = master_username;
    payload.master_user_password = master_user_password;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDbInstance", payload );
    return response;
  }, 
  /**
   * Creates a DB Instance that acts as a Read Replica of a source DB Instance.
   *  
   * All Read Replica DB Instances are created as Single-AZ deployments with backups disabled. All
   * other DB Instance attributes (including DB Security Groups and DB Parameter Groups) are
   * inherited from the source DB Instance, except as specified below.
   * 
   * <p class="important"></p> 
   * The source DB Instance must have backup retention enabled.
   *
   * @param {String} [db_instance_identifier] The DB Instance identifier of the Read Replica. This is the unique key that identifies a DB Instance. This parameter is stored as a lowercase string.   * @param {String} [source_db_instance_identifier] The identifier of the DB Instance that will act as the source for the Read Replica. Each DB Instance can have up to five Read Replicas. Constraints: Must be the identifier of an existing DB Instance that is not already a Read Replica DB Instance.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBInstanceClass] The compute and memory capacity of the Read Replica. Valid Values: 
   * @param {String} [opt.AvailabilityZone] The Amazon EC2 Availability Zone that the Read Replica will be created in. Default: A random, system-chosen Availability Zone in the endpoint's region. Example: 
   * @param {Number} [opt.Port] The port number that the DB Instance uses for connections. Default: Inherits from the source DB Instance Valid Values: 
   * @param {Boolean} [opt.AutoMinorVersionUpgrade] Indicates that minor engine upgrades will be applied automatically to the Read Replica during the maintenance window. Default: Inherits from the source DB Instance
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_db_instance_read_replica: function(db_instance_identifier,source_db_instance_identifier,opt){
    var payload = {};
    payload.db_instance_identifier = db_instance_identifier;
    payload.source_db_instance_identifier = source_db_instance_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDbInstanceReadReplica", payload );
    return response;
  }, 
  /**
   * Creates a new DB Parameter Group.
   *  
   * A DB Parameter Group is initially created with the default parameters for the database engine
   * used by the DB Instance. To provide custom values for any of the parameters, you must modify
   * the group after creating it using <em>ModifyDBParameterGroup</em>. Once you've created a DB
   * Parameter Group, you need to associate it with your DB Instance using
   * <em>ModifyDBInstance</em>. When you associate a new DB Parameter Group with a running DB
   * Instance, you need to reboot the DB Instance for the new DB Parameter Group and associated
   * settings to take effect.
   *
   * @param {String} [db_parameter_group_name] The name of the DB Parameter Group. Constraints:<ul><li>Must be 1 to 255 alphanumeric characters</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul> <p class="note">This value is stored as a lower-case string.</p>   * @param {String} [db_parameter_group_family] The DB Parameter Group Family name. A DB Parameter Group can be associated with one and only one DB Parameter Group Family, and can be applied only to a DB Instance running a database engine and engine version compatible with that DB Parameter Group Family.   * @param {String} [description] The description for the DB Parameter Group.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_db_parameter_group: function(db_parameter_group_name,db_parameter_group_family,description,opt){
    var payload = {};
    payload.db_parameter_group_name = db_parameter_group_name;
    payload.db_parameter_group_family = db_parameter_group_family;
    payload.description = description;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDbParameterGroup", payload );
    return response;
  }, 
  /**
   * Creates a new DB Security Group. DB Security Groups control access to a DB Instance.
   *
   * @param {String} [db_security_group_name] The name for the DB Security Group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Must not be "Default". Example: <code>mysecuritygroup</code>   * @param {String} [db_security_group_description] The description for the DB Security Group.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EC2VpcId] The Id of VPC. Indicates which VPC this DB Security Group should belong to. Must be specified to create a DB Security Group for a VPC; may not be specified otherwise.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_db_security_group: function(db_security_group_name,db_security_group_description,opt){
    var payload = {};
    payload.db_security_group_name = db_security_group_name;
    payload.db_security_group_description = db_security_group_description;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDbSecurityGroup", payload );
    return response;
  }, 
  /**
   * Creates a DBSnapshot. The source DBInstance must be in "available" state.
   *
   * @param {String} [db_snapshot_identifier] The identifier for the DB Snapshot. Constraints:<ul><li>Cannot be null, empty, or blank</li><li>Must contain from 1 to 255 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>Example: <code>my-snapshot-id</code>   * @param {String} [db_instance_identifier] The DB Instance identifier. This is the unique key that identifies a DB Instance. This parameter isn't case sensitive. Constraints:<ul><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_db_snapshot: function(db_snapshot_identifier,db_instance_identifier,opt){
    var payload = {};
    payload.db_snapshot_identifier = db_snapshot_identifier;
    payload.db_instance_identifier = db_instance_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDbSnapshot", payload );
    return response;
  }, 
  /**
   * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in each AZ in
   * the region.
   *
   * @param {String} [db_subnet_group_name] The name for the DB Subnet Group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Must not be "Default". Example: <code>mySubnetgroup</code>   * @param {String} [db_subnet_group_description] The description for the DB Subnet Group.   * @param {String|array} [subnet_ids] The EC2 Subnet IDs for the DB Subnet Group. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_db_subnet_group: function(db_subnet_group_name,db_subnet_group_description,subnet_ids,opt){
    var payload = {};
    payload.db_subnet_group_name = db_subnet_group_name;
    payload.db_subnet_group_description = db_subnet_group_description;
    payload.subnet_ids = subnet_ids;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDbSubnetGroup", payload );
    return response;
  }, 
  /**
   * Creates a new Option Group.
   *
   * @param {String} [option_group_name] Specifies the name of the option group to be created. Constraints:<ul><li>Must be 1 to 255 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>Example: <code>myOptiongroup</code>   * @param {String} [engine_name] Specifies the name of the engine that this option group should be associated with.   * @param {String} [major_engine_version] Specifies the major version of the engine that this option group should be associated with.   * @param {String} [option_group_description] The description of the option group.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_option_group: function(option_group_name,engine_name,major_engine_version,option_group_description,opt){
    var payload = {};
    payload.option_group_name = option_group_name;
    payload.engine_name = engine_name;
    payload.major_engine_version = major_engine_version;
    payload.option_group_description = option_group_description;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateOptionGroup", payload );
    return response;
  }, 
  /**
   * The DeleteDBInstance API deletes a previously provisioned RDS instance. A successful response
   * from the web service indicates the request was received correctly. If a final DBSnapshot is
   * requested the status of the RDS instance will be "deleting" until the DBSnapshot is created.
   * DescribeDBInstance is used to monitor the status of this operation. This cannot be canceled or
   * reverted once submitted.
   *
   * @param {String} [db_instance_identifier] The DB Instance identifier for the DB Instance to be deleted. This parameter isn't case sensitive. Constraints:<ul><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Boolean} [opt.SkipFinalSnapshot] Determines whether a final DB Snapshot is created before the DB Instance is deleted. If 
   * @param {String} [opt.FinalDBSnapshotIdentifier] The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_db_instance: function(db_instance_identifier,opt){
    var payload = {};
    payload.db_instance_identifier = db_instance_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteDbInstance", payload );
    return response;
  }, 
  /**
   * Deletes a specified DBParameterGroup. The DBParameterGroup cannot be associated with any RDS
   * instances to be deleted.
   * 
   * <p class="note">
   * The specified DB Parameter Group cannot be associated with any DB Instances.
   * </p>
   *
   * @param {String} [db_parameter_group_name] The name of the DB Parameter Group. Constraints:<ul><li>Must be the name of an existing DB Parameter Group</li><li>You cannot delete a default DB Parameter Group</li><li>Cannot be associated with any DB Instances</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_db_parameter_group: function(db_parameter_group_name,opt){
    var payload = {};
    payload.db_parameter_group_name = db_parameter_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteDbParameterGroup", payload );
    return response;
  }, 
  /**
   * Deletes a DB Security Group.
   * 
   * <p class="note">
   * The specified DB Security Group must not be associated with any DB Instances.
   * </p>
   *
   * @param {String} [db_security_group_name] The name of the DB Security Group to delete. <p class="note">You cannot delete the default DB Security Group.</p> Constraints:<ul><li>Must be 1 to 255 alphanumeric characters</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_db_security_group: function(db_security_group_name,opt){
    var payload = {};
    payload.db_security_group_name = db_security_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteDbSecurityGroup", payload );
    return response;
  }, 
  /**
   * Deletes a DBSnapshot.
   * 
   * <p class="note">
   * The DBSnapshot must be in the <code>available</code> state to be deleted.
   * </p>
   *
   * @param {String} [db_snapshot_identifier] The DBSnapshot identifier. Constraints: Must be the name of an existing DB Snapshot in the <code>available</code> state.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_db_snapshot: function(db_snapshot_identifier,opt){
    var payload = {};
    payload.db_snapshot_identifier = db_snapshot_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteDbSnapshot", payload );
    return response;
  }, 
  /**
   * Deletes a DB subnet group.
   * 
   * <p class="note">
   * The specified database subnet group must not be associated with any DB instances.
   * </p>
   *
   * @param {String} [db_subnet_group_name] The name of the database subnet group to delete. <p class="note">You cannot delete the default subnet group.</p> Constraints:<ul><li>Must be 1 to 255 alphanumeric characters</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_db_subnet_group: function(db_subnet_group_name,opt){
    var payload = {};
    payload.db_subnet_group_name = db_subnet_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteDbSubnetGroup", payload );
    return response;
  }, 
  /**
   * Deletes an existing Option Group.
   *
   * @param {String} [option_group_name] The name of the option group to be deleted. <p class="note">You cannot delete default Option Groups.</p>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_option_group: function(option_group_name,opt){
    var payload = {};
    payload.option_group_name = option_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteOptionGroup", payload );
    return response;
  }, 
  /**
   * Returns a list of the available DB engines.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Engine] The database engine to return.
   * @param {String} [opt.EngineVersion] The database engine version to return. Example: 
   * @param {String} [opt.DBParameterGroupFamily] The name of a specific DB Parameter Group family to return details for. Constraints:
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more than the 
   * @param {String} [opt.Marker] The marker provided in the previous request. If this parameter is specified, the response includes records beyond the marker only, up to 
   * @param {Boolean} [opt.DefaultOnly] Indicates that only the default version of the specified engine or engine and major version combination is returned.
   * @param {Boolean} [opt.ListSupportedCharacterSets] If this parameter is specified, and if the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_engine_versions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbEngineVersions", payload );
    return response;
  }, 
  /**
   * Returns information about provisioned RDS instances. This API supports pagination.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBInstanceIdentifier] The user-supplied instance identifier. If this parameter is specified, information from only the specific DB Instance is returned. This parameter isn't case sensitive. Constraints:
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeDBInstances request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_instances: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbInstances", payload );
    return response;
  }, 
  /**
   * Returns a list of DBParameterGroup descriptions. If a DBParameterGroupName is specified, the
   * list will contain only the description of the specified DBParameterGroup.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBParameterGroupName] The name of a specific DB Parameter Group to return details for. Constraints:
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeDBParameterGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_parameter_groups: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbParameterGroups", payload );
    return response;
  }, 
  /**
   * Returns the detailed parameter list for a particular DBParameterGroup.
   *
   * @param {String} [db_parameter_group_name] The name of a specific DB Parameter Group to return details for. Constraints:<ul><li>Must be 1 to 255 alphanumeric characters</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Source] The parameter types to return. Default: All parameter types returned Valid Values: 
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeDBParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_parameters: function(db_parameter_group_name,opt){
    var payload = {};
    payload.db_parameter_group_name = db_parameter_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbParameters", payload );
    return response;
  }, 
  /**
   * Returns a list of DBSecurityGroup descriptions. If a DBSecurityGroupName is specified, the list
   * will contain only the descriptions of the specified DBSecurityGroup.
   *  
   * For an overview of CIDR ranges, go to the <a href=
   * "http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBSecurityGroupName] The name of the DB Security Group to return details for.
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeDBSecurityGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_security_groups: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbSecurityGroups", payload );
    return response;
  }, 
  /**
   * Returns information about DBSnapshots. This API supports pagination.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBInstanceIdentifier] A DB Instance Identifier to retrieve the list of DB Snapshots for. Cannot be used in conjunction with DBSnapshotIdentifier. This parameter isn't case sensitive. Constraints:
   * @param {String} [opt.DBSnapshotIdentifier] A specific DB Snapshot Identifier to describe. Cannot be used in conjunction with DBInstanceIdentifier. This value is stored as a lowercase string. Constraints:
   * @param {String} [opt.SnapshotType] An optional snapshot type for which snapshots will be returned. If not specified, the returned results will include snapshots of all types.
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeDBSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_snapshots: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbSnapshots", payload );
    return response;
  }, 
  /**
   * Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list
   * will contain only the descriptions of the specified DBSubnetGroup.
   *  
   * For an overview of CIDR ranges, go to the <a href=
   * "http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBSubnetGroupName] The name of the DB Subnet Group to return details for.
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_db_subnet_groups: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeDbSubnetGroups", payload );
    return response;
  }, 
  /**
   * Returns the default engine and system parameter information for the specified database engine.
   *
   * @param {String} [db_parameter_group_family] The name of the DB Parameter Group Family.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeEngineDefaultParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_engine_default_parameters: function(db_parameter_group_family,opt){
    var payload = {};
    payload.db_parameter_group_family = db_parameter_group_family;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeEngineDefaultParameters", payload );
    return response;
  }, 
  /**
   * Returns events related to DB Instances, DB Security Groups, DB Snapshots and DB Parameter
   * Groups for the past 14 days. Events specific to a particular DB Instance, DB Security Group,
   * database snapshot or DB Parameter Group can be obtained by providing the name as a parameter.
   * By default, the past hour of events are returned.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.SourceIdentifier] The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response. Constraints:
   * @param {String} [opt.SourceType] The event source to retrieve events for. If no value is specified, all events are returned. [Allowed values: 
   * @param {String} [opt.StartTime] The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the 
   * @param {String} [opt.EndTime] The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the 
   * @param {Number} [opt.Duration] The number of minutes to retrieve events for. Default: 60
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
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
   * Describes all available options.
   *
   * @param {String} [engine_name] A required parameter. Options available for the given Engine name will be described.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.MajorEngineVersion] If specified, filters the results to include only options for the specified major engine version.
   *   <li><code>Marker</code> - <code>string</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_option_group_options: function(engine_name,opt){
    var payload = {};
    payload.engine_name = engine_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeOptionGroupOptions", payload );
    return response;
  }, 
  /**
   * Describes the available option groups.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.OptionGroupName] The name of the option group to describe. Cannot be supplied together with EngineName or MajorEngineVersion.
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - </li>
   *   <li><code>EngineName</code> - <code>string</code> - Optional - Filters the list of option groups to only include groups associated with a specific database engine.</li>
   *   <li><code>MajorEngineVersion</code> - <code>string</code> - Optional - Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_option_groups: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeOptionGroups", payload );
    return response;
  }, 
  /**
   * Returns a list of orderable DB Instance options for the specified engine.
   *
   * @param {String} [engine] The name of the engine to retrieve DB Instance options for.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.EngineVersion] The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.
   * @param {String} [opt.DBInstanceClass] The DB Instance class filter value. Specify this parameter to show only the available offerings matching the specified DB Instance class.
   * @param {String} [opt.LicenseModel] The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.
   * @param {Boolean} [opt.Vpc] The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more records exist than the specified 
   * @param {String} [opt.Marker] An optional marker provided in the previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_orderable_db_instance_options: function(engine,opt){
    var payload = {};
    payload.engine = engine;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeOrderableDbInstanceOptions", payload );
    return response;
  }, 
  /**
   * Returns information about reserved DB Instances for this account, or about a specified reserved
   * DB Instance.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ReservedDBInstanceId] The reserved DB Instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.
   * @param {String} [opt.ReservedDBInstancesOfferingId] The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.
   * @param {String} [opt.DBInstanceClass] The DB Instance class filter value. Specify this parameter to show only those reservations matching the specified DB Instances class.
   * @param {String} [opt.Duration] The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: 
   * @param {String} [opt.ProductDescription] The product description filter value. Specify this parameter to show only those reservations matching the specified product description.
   * @param {String} [opt.OfferingType] The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: 
   * @param {Boolean} [opt.MultiAZ] The Multi-AZ filter value. Specify this parameter to show only those reservations matching the specified Multi-AZ parameter.
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more than the 
   * @param {String} [opt.Marker] The marker provided in the previous request. If this parameter is specified, the response includes records beyond the marker only, up to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_reserved_db_instances: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeReservedDbInstances", payload );
    return response;
  }, 
  /**
   * Lists available reserved DB Instance offerings.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ReservedDBInstancesOfferingId] The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier. Example: 
   * @param {String} [opt.DBInstanceClass] The DB Instance class filter value. Specify this parameter to show only the available offerings matching the specified DB Instance class.
   * @param {String} [opt.Duration] Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: 
   * @param {String} [opt.ProductDescription] Product description filter value. Specify this parameter to show only the available offerings matching the specified product description.
   * @param {String} [opt.OfferingType] The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: 
   * @param {Boolean} [opt.MultiAZ] The Multi-AZ filter value. Specify this parameter to show only the available offerings matching the specified Multi-AZ parameter.
   * @param {Number} [opt.MaxRecords] The maximum number of records to include in the response. If more than the 
   * @param {String} [opt.Marker] The marker provided in the previous request. If this parameter is specified, the response includes records beyond the marker only, up to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_reserved_db_instances_offerings: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeReservedDbInstancesOfferings", payload );
    return response;
  }, 
  /**
   * Lists all tags on a DB Instance.
   *  
   * For an overview on tagging DB Instances, see <a href=
   * "http://docs.amazonwebservices.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">DB
   * Instance Tags.</a>
   *
   * @param {String} [resource_name] The DB Instance with tags to be listed.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_tags_for_resource: function(resource_name,opt){
    var payload = {};
    payload.resource_name = resource_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListTagsForResource", payload );
    return response;
  }, 
  /**
   * Modify settings for a DB Instance. You can change one or more database configuration parameters
   * by specifying these parameters and the new values in the request.
   *
   * @param {String} [db_instance_identifier] The DB Instance identifier. This value is stored as a lowercase string. For a SQL Server DB Instance, this value cannot be changed. Constraints:<ul><li>Must be the identifier for an existing DB Instance</li><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>Example:<copy>mydbinstance</copy>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Number} [opt.AllocatedStorage] The new storage capacity of the RDS instance. This change does not result in an outage and is applied during the next maintenance window unless the 
   * @param {String} [opt.DBInstanceClass] The new compute and memory capacity of the DB Instance. To determine the instance classes that are available for a particular DB engine, use the 
   * @param {String|array} [opt.DBSecurityGroups] A list of DB Security Groups to authorize on this DB Instance. This change is asynchronously applied as soon as possible. Constraints:
   * @param {Boolean} [opt.ApplyImmediately] Specifies whether or not the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the 
   * @param {String} [opt.MasterUserPassword] The new password for the DB Instance master user. This change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the 
   * @param {String} [opt.DBParameterGroupName] The name of the DB Parameter Group to apply to this DB Instance. This change is asynchronously applied as soon as possible for parameters when the 
   * @param {Number} [opt.BackupRetentionPeriod] The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. Default: Uses existing setting Constraints:
   * @param {String} [opt.PreferredBackupWindow] The daily time range during which automated backups are created if automated backups are enabled, as determined by the 
   * @param {String} [opt.PreferredMaintenanceWindow] The weekly time range (in UTC) during which system maintenance can occur, which may result in an outage. This change is made immediately. If moving this window to the current time, there must be at least 120 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes
   * @param {Boolean} [opt.MultiAZ] Specifies if the DB Instance is a Multi-AZ deployment. Constraints: Cannot be specified if the DB Instance is a read replica.
   * @param {String} [opt.EngineVersion] The version number of the database engine to upgrade to. For major version upgrades, if a nondefault DB Parameter Group is currently in use, a new DB Parameter Group in the DB Parameter Group Family for the new engine version must be specified. The new DB Parameter Group can be the default for that DB Parameter Group Family. Example: 
   * @param {Boolean} [opt.AllowMajorVersionUpgrade] Indicates that major version upgrades are allowed. Constraints: This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB Instance's current version.
   * @param {Boolean} [opt.AutoMinorVersionUpgrade] Indicates that minor version upgrades will be applied automatically to the DB Instance during the maintenance window.
   * @param {String} [opt.OptionGroupName] Indicates that the DB Instance should be associated with the specified option group.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  modify_db_instance: function(db_instance_identifier,opt){
    var payload = {};
    payload.db_instance_identifier = db_instance_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ModifyDbInstance", payload );
    return response;
  }, 
  /**
   * Modifies the parameters of a DBParameterGroup. To modify more than one parameter submit a list
   * of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters
   * can be modified in a single request.
   * 
   * <p class="note"></p> 
   * The <code>apply-immediate</code> method can be used only for dynamic parameters; the
   * <code>pending-reboot</code> method can be used with MySQL and Oracle DB Instances for either
   * dynamic or static parameters. For Microsoft SQL Server DB Instances, the
   * <code>pending-reboot</code> method can be used only for static parameters.
   *
   * @param {String} [db_parameter_group_name] The name of the DB Parameter Group. Constraints:<ul><li>Must be the name of an existing DB Parameter Group</li><li>Must be 1 to 255 alphanumeric characters</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [parameters] An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters may be modified in a single request. Valid Values (for the application method): <code>immediate | pending-reboot</code>  <p class="note">You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when DB Instance reboots.</p> <ul>   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>ParameterName</code> - <code>string</code> - Optional - Specifies the name of the parameter.</li>
   *     <li><code>ParameterValue</code> - <code>string</code> - Optional - Specifies the value of the parameter.</li>
   *     <li><code>Description</code> - <code>string</code> - Optional - Provides a description of the parameter.</li>
   *     <li><code>Source</code> - <code>string</code> - Optional - Indicates the source of the parameter value.</li>
   *     <li><code>ApplyType</code> - <code>string</code> - Optional - Specifies the engine specific parameters type.</li>
   *     <li><code>DataType</code> - <code>string</code> - Optional - Specifies the valid data type for the parameter.</li>
   *     <li><code>AllowedValues</code> - <code>string</code> - Optional - Specifies the valid range of values for the parameter.</li>
   *     <li><code>IsModifiable</code> - <code>boolean</code> - Optional - Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.</li>
   *     <li><code>MinimumEngineVersion</code> - <code>string</code> - Optional - The earliest engine version to which the parameter can apply.</li>
   *     <li><code>ApplyMethod</code> - <code>string</code> - Optional - Indicates when to apply parameter updates. [Allowed values: <code>immediate</code>, <code>pending-reboot</code>]</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  modify_db_parameter_group: function(db_parameter_group_name,parameters,opt){
    var payload = {};
    payload.db_parameter_group_name = db_parameter_group_name;
    payload.parameters = parameters;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ModifyDbParameterGroup", payload );
    return response;
  }, 
  /**
   * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in each
   * AZ in the region.
   *
   * @param {String} [db_subnet_group_name] The name for the DB Subnet Group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Must not be "Default". Example: <code>mySubnetgroup</code>   * @param {String|array} [subnet_ids] The EC2 Subnet IDs for the DB Subnet Group. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBSubnetGroupDescription] The description for the DB Subnet Group.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  modify_db_subnet_group: function(db_subnet_group_name,subnet_ids,opt){
    var payload = {};
    payload.db_subnet_group_name = db_subnet_group_name;
    payload.subnet_ids = subnet_ids;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ModifyDbSubnetGroup", payload );
    return response;
  }, 
  /**
   * Modifies an existing Option Group.
   *
   * @param {String} [option_group_name] The name of the option group to be modified.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.OptionsToInclude] Options in this list are added to the Option Group or, if already present, the specified configuration is used to update the existing configuration. 
   * @param {Object} [opt.x] This represents a simple array index. 
   *       <li><code>Port</code> - <code>integer</code> - Optional - </li>
   *       <li><code>DBSecurityGroupMemberships</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>OptionsToRemove</code> - <code>string|array</code> - Optional - Options in this list are removed from the Option Group. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>ApplyImmediately</code> - <code>boolean</code> - Optional - Indicates whether the changes should be applied immediately, or during the next maintenance window for each instance associated with the Option Group.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  modify_option_group: function(option_group_name,opt){
    var payload = {};
    payload.option_group_name = option_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ModifyOptionGroup", payload );
    return response;
  }, 
  /**
   * Purchases a reserved DB Instance offering.
   *
   * @param {String} [reserved_db_instances_offering_id] The ID of the Reserved DB Instance offering to purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ReservedDBInstanceId] Customer-specified identifier to track this reservation. Example: myreservationID
   * @param {Number} [opt.DBInstanceCount] The number of instances to reserve. Default: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  purchase_reserved_db_instances_offering: function(reserved_db_instances_offering_id,opt){
    var payload = {};
    payload.reserved_db_instances_offering_id = reserved_db_instances_offering_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PurchaseReservedDbInstancesOffering", payload );
    return response;
  }, 
  /**
   * Reboots a previously provisioned RDS instance. This API results in the application of modified
   * DBParameterGroup parameters with ApplyStatus of pending-reboot to the RDS instance. This action
   * is taken as soon as possible, and results in a momentary outage to the RDS instance during
   * which the RDS instance status is set to rebooting. If the RDS instance is configured for
   * MultiAZ, it is possible that the reboot will be conducted through a failover. A DBInstance
   * event is created when the reboot is completed.
   *
   * @param {String} [db_instance_identifier] The DB Instance identifier. This parameter is stored as a lowercase string. Constraints:<ul><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Boolean} [opt.ForceFailover] When 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  reboot_db_instance: function(db_instance_identifier,opt){
    var payload = {};
    payload.db_instance_identifier = db_instance_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RebootDbInstance", payload );
    return response;
  }, 
  /**
   * Removes metadata tags from a DB Instance.
   *  
   * For an overview on tagging DB Instances, see <a href=
   * "http://docs.amazonwebservices.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">DB
   * Instance Tags.</a>
   *
   * @param {String} [resource_name] The DB Instance the tags will be removed from.   * @param {String|array} [tag_keys] The tag key (name) of the tag to be removed. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  remove_tags_from_resource: function(resource_name,tag_keys,opt){
    var payload = {};
    payload.resource_name = resource_name;
    payload.tag_keys = tag_keys;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RemoveTagsFromResource", payload );
    return response;
  }, 
  /**
   * Modifies the parameters of a DBParameterGroup to the engine/system default value. To reset
   * specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the
   * entire DBParameterGroup specify the DBParameterGroup name and ResetAllParameters parameters.
   * When resetting the entire group, dynamic parameters are updated immediately and static
   * parameters are set to pending-reboot to take effect on the next DB instance restart or
   * RebootDBInstance request.
   *
   * @param {String} [db_parameter_group_name] The name of the DB Parameter Group. Constraints:<ul><li>Must be 1 to 255 alphanumeric characters</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Boolean} [opt.ResetAllParameters] Specifies whether (
   * @param {Object} [opt.Parameters] An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters may be modified in a single request. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.ParameterName] Specifies the name of the parameter.
   * @param {String} [opt.ParameterValue] Specifies the value of the parameter.
   * @param {String} [opt.Description] Provides a description of the parameter.
   * @param {String} [opt.Source] Indicates the source of the parameter value.
   * @param {String} [opt.ApplyType] Specifies the engine specific parameters type.
   * @param {String} [opt.DataType] Specifies the valid data type for the parameter.
   * @param {String} [opt.AllowedValues] Specifies the valid range of values for the parameter.
   * @param {Boolean} [opt.IsModifiable] Indicates whether (
   * @param {String} [opt.MinimumEngineVersion] The earliest engine version to which the parameter can apply.
   * @param {String} [opt.ApplyMethod] Indicates when to apply parameter updates. [Allowed values: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  reset_db_parameter_group: function(db_parameter_group_name,opt){
    var payload = {};
    payload.db_parameter_group_name = db_parameter_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ResetDbParameterGroup", payload );
    return response;
  }, 
  /**
   * Creates a new DB Instance from a DB snapshot. The target database is created from the source
   * database restore point with the same configuration as the original source database, except that
   * the new RDS instance is created with the default security group.
   *
   * @param {String} [db_instance_identifier] The identifier for the DB Snapshot to restore from. Constraints:<ul><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {String} [db_snapshot_identifier] Name of the DB Instance to create from the DB Snapshot. This parameter isn't case sensitive. Constraints:<ul><li>Must contain from 1 to 255 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>Example: <code>my-snapshot-id</code>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.DBInstanceClass] The compute and memory capacity of the Amazon RDS DB instance. Valid Values: 
   * @param {Number} [opt.Port] The port number on which the database accepts connections. Default: The same port as the original DB Instance Constraints: Value must be 
   * @param {String} [opt.AvailabilityZone] The EC2 Availability Zone that the database instance will be created in. Default: A random, system-chosen Availability Zone. Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ parameter is set to 
   * @param {String} [opt.DBSubnetGroupName] The DB Subnet Group name to use for the new instance.
   * @param {Boolean} [opt.MultiAZ] Specifies if the DB Instance is a Multi-AZ deployment. Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ parameter is set to 
   * @param {Boolean} [opt.AutoMinorVersionUpgrade] Indicates that minor version upgrades will be applied automatically to the DB Instance during the maintenance window.
   * @param {String} [opt.LicenseModel] License model information for the restored DB Instance. Default: Same as source. Valid values: 
   * @param {String} [opt.DBName] The database name for the restored DB Instance. 
   * @param {String} [opt.Engine] The database engine to use for the new instance. Default: The same as source Constraint: Must be compatible with the engine of the source Example: 
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  restore_db_instance_from_db_snapshot: function(db_instance_identifier,db_snapshot_identifier,opt){
    var payload = {};
    payload.db_instance_identifier = db_instance_identifier;
    payload.db_snapshot_identifier = db_snapshot_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RestoreDbInstanceFromDbSnapshot", payload );
    return response;
  }, 
  /**
   * Restores a DB Instance to an arbitrary point-in-time. Users can restore to any point in time
   * before the latestRestorableTime for up to backupRetentionPeriod days. The target database is
   * created from the source database with the same configuration as the original database except
   * that the DB instance is created with the default DB security group.
   *
   * @param {String} [source_db_instance_identifier] The identifier of the source DB Instance from which to restore. Constraints:<ul><li>Must be the identifier of an existing database instance</li><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {String} [target_db_instance_identifier] The name of the new database instance to be created. Constraints:<ul><li>Must contain from 1 to 63 alphanumeric characters or hyphens</li><li>First character must be a letter</li><li>Cannot end with a hyphen or contain two consecutive hyphens</li></ul>   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.RestoreTime] The date and time to restore from. Valid Values: Value must be a UTC time Constraints:
   * @param {Boolean} [opt.UseLatestRestorableTime] Specifies whether (
   * @param {String} [opt.DBInstanceClass] The compute and memory capacity of the Amazon RDS DB instance. Valid Values: 
   * @param {Number} [opt.Port] The port number on which the database accepts connections. Constraints: Value must be 
   * @param {String} [opt.AvailabilityZone] The EC2 Availability Zone that the database instance will be created in. Default: A random, system-chosen Availability Zone. Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ parameter is set to true. Example: 
   * @param {String} [opt.DBSubnetGroupName] The DB subnet group name to use for the new instance.
   * @param {Boolean} [opt.MultiAZ] Specifies if the DB Instance is a Multi-AZ deployment. Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ parameter is set to 
   * @param {Boolean} [opt.AutoMinorVersionUpgrade] Indicates that minor version upgrades will be applied automatically to the DB Instance during the maintenance window.
   * @param {String} [opt.LicenseModel] License model information for the restored DB Instance. Default: Same as source. Valid values: 
   * @param {String} [opt.DBName] The database name for the restored DB Instance. 
   * @param {String} [opt.Engine] The database engine to use for the new instance. Default: The same as source Constraint: Must be compatible with the engine of the source Example: 
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  restore_db_instance_to_point_in_time: function(source_db_instance_identifier,target_db_instance_identifier,opt){
    var payload = {};
    payload.source_db_instance_identifier = source_db_instance_identifier;
    payload.target_db_instance_identifier = target_db_instance_identifier;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RestoreDbInstanceToPointInTime", payload );
    return response;
  }, 
  /**
   * Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC
   * Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for
   * VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).
   *
   * @param {String} [db_security_group_name] The name of the DB Security Group to revoke ingress from.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.CIDRIP] The IP range to revoke access from. Must be a valid CIDR range. If 
   * @param {String} [opt.EC2SecurityGroupName] The name of the EC2 Security Group to revoke access from. For VPC DB Security Groups, 
   * @param {String} [opt.EC2SecurityGroupId] The id of the EC2 Security Group to revoke access from. For VPC DB Security Groups, 
   * @param {String} [opt.EC2SecurityGroupOwnerId] The AWS Account Number of the owner of the EC2 security group specified in the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  revoke_db_security_group_ingress: function(db_security_group_name,opt){
    var payload = {};
    payload.db_security_group_name = db_security_group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RevokeDbSecurityGroupIngress", payload );
    return response;
  }
}
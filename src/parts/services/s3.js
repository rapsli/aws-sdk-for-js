function AmazonS3(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonS3.prototype = {
  service:'s3',
  version:'2006-03-01',
  auth_class:'',
  /**
   * @memberOf AmazonS3
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  create_bucket: function(acl,bucket,region){},
  get_bucket_region: function(bucket){},
  get_bucket_headers: function(bucket){},
  list_buckets: function(){},
  get_bucket_acl: function(bucket){},
  set_bucket_acl: function(acl,bucket){},
  create_object: function(bucket,filename){},
  get_object: function(bucket,filename){},
  get_object_headers: function(bucket,filename){},
  delete_object: function(bucket,filename){},
  delete_objects: function(bucket){},
  list_objects: function(bucket){},
  copy_object: function(dest,source){},
  update_object: function(bucket,filename){},
  get_object_acl: function(bucket,filename){},
  set_object_acl: function(acl,bucket,filename){},
  get_logs: function(bucket){},
  enable_logging: function(bucket,target_bucket,target_prefix){},
  disable_logging: function(bucket){},
  change_content_type: function(bucket,contentType,filename){},
  change_storage_redundancy: function(bucket,filename,storage){},
  enable_versioning: function(bucket){},
  disable_versioning: function(bucket){},
  get_versioning_status: function(bucket){},
  list_bucket_object_versions: function(bucket){},
  set_bucket_policy: function(bucket,policy){},
  get_bucket_policy: function(bucket){},
  delete_bucket_policy: function(bucket){},
  create_bucket_notification: function(bucket,event,topic_arn){},
  get_bucket_notifications: function(bucket){},
  delete_bucket_notification: function(bucket){},
  initiate_multipart_upload: function(bucket,filename){},
  upload_part: function(bucket,filename,upload_id){},
  list_parts: function(bucket,filename,upload_id){},
  abort_multipart_upload: function(bucket,filename,upload_id){},
  complete_multipart_upload: function(bucket,filename,parts,upload_id){},
  list_multipart_uploads: function(bucket){},
  copy_part: function(dest,part_number,source,upload_id){},
  create_mpu_object: function(bucket,filename){},
  create_website_config: function(bucket){},
  get_website_config: function(bucket){},
  delete_website_config: function(bucket){},
  create_object_expiration_config: function(bucket){},
  get_object_expiration_config: function(bucket){},
  delete_object_expiration_config: function(bucket){},
  create_bucket_tags: function(bucket){},
  get_bucket_tags: function(bucket){},
  delete_bucket_tags: function(bucket){},
  create_cors_config: function(bucket){},
  get_cors_config: function(bucket){},
  delete_cors_config: function(bucket){}
}
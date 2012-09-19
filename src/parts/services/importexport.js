function AmazonImportExport(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonImportExport.prototype = {
  service:'importexport',
  version:'2010-06-01',
  auth_class:'AuthV2Query',
  /**
   * @memberOf AmazonImportExport
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  cancel_job: function(job_id){},
  create_job: function(job_type,manifest,validate_only){},
  get_status: function(job_id){},
  list_jobs: function(){},
  update_job: function(job_id,job_type,manifest,validate_only){}
}
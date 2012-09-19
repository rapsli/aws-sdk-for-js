function AmazonCloudSearch(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudSearch.prototype = {
  service:'cloudsearch',
  version:'2011-02-01',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonCloudSearch
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  create_domain: function(domain_name){},
  define_index_field: function(domain_name,index_field){},
  define_rank_expression: function(domain_name,rank_expression){},
  delete_domain: function(domain_name){},
  delete_index_field: function(domain_name,index_field_name){},
  delete_rank_expression: function(domain_name,rank_name){},
  describe_default_search_field: function(domain_name){},
  describe_domains: function(){},
  describe_index_fields: function(domain_name){},
  describe_rank_expressions: function(domain_name){},
  describe_service_access_policies: function(domain_name){},
  describe_stemming_options: function(domain_name){},
  describe_stopword_options: function(domain_name){},
  describe_synonym_options: function(domain_name){},
  index_documents: function(domain_name){},
  update_default_search_field: function(default_search_field,domain_name){},
  update_service_access_policies: function(access_policies,domain_name){},
  update_stemming_options: function(domain_name,stems){},
  update_stopword_options: function(domain_name,stopwords){},
  update_synonym_options: function(domain_name,synonyms){}
}
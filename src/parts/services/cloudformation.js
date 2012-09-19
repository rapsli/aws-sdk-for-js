function AmazonCloudFormation(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudFormation.prototype = {
  service:'cloudformation',
  version:'2010-05-15',
  auth_class:'AuthV4Query',
  /**
   * @memberOf AmazonCloudFormation
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },

  create_stack: function(stack_name){},
  delete_stack: function(stack_name){},
  describe_stack_events: function(){},
  describe_stack_resource: function(stack_name,logical_resource_id){},
  describe_stack_resources: function(){},
  describe_stacks: function(){},
  estimate_template_cost: function(){},
  get_template: function(stack_name){},
  list_stack_resources: function(stack_name){},
  list_stacks: function(){},
  update_stack: function(stack_name){},
  validate_template: function(){}
}
/**
 * @class AmazonSNSClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonSNS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSNS.prototype = {
  service:'sns',
  api_version:'2010-03-31',
  auth_class: new AuthV2Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonSNS
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
	 * The AddPermission action adds a statement to a topic's access control policy, granting access
	 * for the specified AWS accounts to the specified actions.
	 *
	 * @param {String} [topic_arn] The ARN of the topic whose access control policy you wish to modify.
	 * @param {String} [label] A unique identifier for the new policy statement.
	 * @param {String|array} [aws_account_id] The AWS account IDs of the users (principals) who will be given access to the specified actions. The users must have AWS accounts, but do not need to be signed up for this service. Pass a string for a single value, or an indexed array for multiple values.
	 * @param {String|array} [action_name] The action you want to allow for the specified principal(s). Valid values: any Amazon SNS action name. Pass a string for a single value, or an indexed array for multiple values.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  add_permission: function(topic_arn,label,aws_account_id,action_name,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload.label = label;
    payload.aws_account_id = aws_account_id;
    payload.action_name = action_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddPermission", payload );
    return response;
  }, 
  /**
	 * The ConfirmSubscription action verifies an endpoint owner's intent to receive messages by
	 * validating the token sent to the endpoint by an earlier Subscribe action. If the token is
	 * valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This
	 * call requires an AWS signature only when the AuthenticateOnUnsubscribe flag is set to "true".
	 *
	 * @param {String} [topic_arn] The ARN of the topic for which you wish to confirm a subscription.
	 * @param {String} [token] Short-lived token sent to an endpoint during the Subscribe action.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>AuthenticateOnUnsubscribe</code> - <code>string</code> - Optional - Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is <code>true</code> and the request has an AWS signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action will require AWS authentication.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  confirm_subscription: function(topic_arn,token,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload.token = token;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ConfirmSubscription", payload );
    return response;
  }, 
  /**
	 * The CreateTopic action creates a topic to which notifications can be published. Users can
	 * create at most 25 topics. This action is idempotent, so if the requester already owns a topic
	 * with the specified name, that topic's ARN will be returned without creating a new topic.
	 *
	 * @param {String} [name] The name of the topic you want to create. Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, and hyphens, and must be between 1 and 256 characters long.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  create_topic: function(name,opt){
    var payload = {};
    payload.name = name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateTopic", payload );
    return response;
  }, 
  /**
	 * The DeleteTopic action deletes a topic and all its subscriptions. Deleting a topic might
	 * prevent some messages previously sent to the topic from being delivered to subscribers. This
	 * action is idempotent, so deleting a topic that does not exist will not result in an error.
	 *
	 * @param {String} [topic_arn] The ARN of the topic you want to delete.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_topic: function(topic_arn,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteTopic", payload );
    return response;
  }, 
  /**
	 * The GetSubscriptionAttribtues action returns all of the properties of a subscription.
	 *
	 * @param {String} [subscription_arn] The ARN of the subscription whose properties you want to get.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_subscription_attributes: function(subscription_arn,opt){
    var payload = {};
    payload.subscription_arn = subscription_arn;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetSubscriptionAttributes", payload );
    return response;
  }, 
  /**
	 * The GetTopicAttribtues action returns all of the properties of a topic customers have created.
	 * Topic properties returned might differ based on the authorization of the user.
	 *
	 * @param {String} [topic_arn] The ARN of the topic whose properties you want to get.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_topic_attributes: function(topic_arn,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetTopicAttributes", payload );
    return response;
  }, 
  /**
	 * The ListSubscriptions action returns a list of the requester's subscriptions. Each call returns
	 * a limited list of subscriptions, up to 100. If there are more subscriptions, a NextToken is
	 * also returned. Use the NextToken parameter in a new ListSubscriptions call to get further
	 * results.
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - Token returned by the previous ListSubscriptions request.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_subscriptions: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListSubscriptions", payload );
    return response;
  }, 
  /**
	 * The ListSubscriptionsByTopic action returns a list of the subscriptions to a specific topic.
	 * Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions,
	 * a NextToken is also returned. Use the NextToken parameter in a new ListSubscriptionsByTopic
	 * call to get further results.
	 *
	 * @param {String} [topic_arn] The ARN of the topic for which you wish to find subscriptions.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - Token returned by the previous ListSubscriptionsByTopic request.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_subscriptions_by_topic: function(topic_arn,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListSubscriptionsByTopic", payload );
    return response;
  }, 
  /**
	 * The ListTopics action returns a list of the requester's topics. Each call returns a limited
	 * list of topics, up to 100. If there are more topics, a NextToken is also returned. Use the
	 * NextToken parameter in a new ListTopics call to get further results.
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - Token returned by the previous ListTopics request.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_topics: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListTopics", payload );
    return response;
  }, 
  /**
	 * The Publish action sends a message to all of a topic's subscribed endpoints. When a messageId
	 * is returned, the message has been saved and Amazon SNS will attempt to deliver it to the
	 * topic's subscribers shortly. The format of the outgoing message to each subscribed endpoint
	 * depends on the notification protocol selected.
	 *
	 * @param {String} [topic_arn] The topic you want to publish to.
	 * @param {String} [message] The message you want to send to the topic. Constraints: Messages must be UTF-8 encoded strings at most 8 KB in size (8192 bytes, not 8192 characters).
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>Subject</code> - <code>string</code> - Optional - Optional parameter to be used as the "Subject" line of when the message is delivered to e-mail endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints. Constraints: Subjects must be ASCII text that begins with a letter, number or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.</li>
	 * 	<li><code>MessageStructure</code> - <code>string</code> - Optional - Optional parameter. It will have one valid value: "json". If this option, Message is present and set to "json", the value of Message must: be a syntactically valid JSON object. It must contain at least a top level JSON key of "default" with a value that is a string. For any other top level key that matches one of our transport protocols (e.g. "http"), then the corresponding value (if it is a string) will be used for the message published for that protocol Constraints: Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values. The values will be parsed (unescaped) before they are used in outgoing messages. Typically, outbound notifications are JSON encoded (meaning, the characters will be reescaped for sending). JSON strings are UTF-8. Values have a minimum length of 0 (the empty string, "", is allowed). Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes). Non-string values will cause the key to be ignored. Keys that do not correspond to supported transport protocols will be ignored. Duplicate keys are not allowed. Failure to parse or validate any key or value in the message will cause the Publish call to return an error (no partial delivery).</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  publish: function(topic_arn,message,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload.message = message;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("Publish", payload );
    return response;
  }, 
  /**
	 * The RemovePermission action removes a statement from a topic's access control policy.
	 *
	 * @param {String} [topic_arn] The ARN of the topic whose access control policy you wish to modify.
	 * @param {String} [label] The unique label of the statement you want to remove.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  remove_permission: function(topic_arn,label,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload.label = label;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RemovePermission", payload );
    return response;
  }, 
  /**
	 * The SetSubscriptionAttributes action allows a subscription owner to set an attribute of the
	 * topic to a new value.
	 *
	 * @param {String} [subscription_arn] The ARN of the subscription to modify.
	 * @param {String} [attribute_name] The name of the attribute you want to set. Only a subset of the subscriptions attributes are mutable. Valid values: DeliveryPolicy
	 * @param {String} [attribute_value] The new value for the attribute.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  set_subscription_attributes: function(subscription_arn,attribute_name,attribute_value,opt){
    var payload = {};
    payload.subscription_arn = subscription_arn;
    payload.attribute_name = attribute_name;
    payload.attribute_value = attribute_value;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetSubscriptionAttributes", payload );
    return response;
  }, 
  /**
	 * The SetTopicAttributes action allows a topic owner to set an attribute of the topic to a new
	 * value.
	 *
	 * @param {String} [topic_arn] The ARN of the topic to modify.
	 * @param {String} [attribute_name] The name of the attribute you want to set. Only a subset of the topic's attributes are mutable. Valid values: Policy | DisplayName
	 * @param {String} [attribute_value] The new value for the attribute.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  set_topic_attributes: function(topic_arn,attribute_name,attribute_value,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload.attribute_name = attribute_name;
    payload.attribute_value = attribute_value;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetTopicAttributes", payload );
    return response;
  }, 
  /**
	 * The Subscribe action prepares to subscribe an endpoint by sending the endpoint a confirmation
	 * message. To actually create a subscription, the endpoint owner must call the
	 * ConfirmSubscription action with the token from the confirmation message. Confirmation tokens
	 * are valid for three days.
	 *
	 * @param {String} [topic_arn] The ARN of topic you want to subscribe to.
	 * @param {String} [protocol] The protocol you want to use. Supported protocols include:<ul><li>http -- delivery of JSON-encoded message via HTTP POST</li><li>https -- delivery of JSON-encoded message via HTTPS POST</li><li>email -- delivery of message via SMTP</li><li>email-json -- delivery of JSON-encoded message via SMTP</li><li>sms -- delivery of message via SMS</li><li>sqs -- delivery of JSON-encoded message to an Amazon SQS queue</li></ul>
	 * @param {String} [endpoint] The endpoint that you want to receive notifications. Endpoints vary by protocol:<ul><li>For the http protocol, the endpoint is an URL beginning with "http://"</li><li>For the https protocol, the endpoint is a URL beginning with "https://"</li><li>For the email protocol, the endpoint is an e-mail address</li><li>For the email-json protocol, the endpoint is an e-mail address</li><li>For the sms protocol, the endpoint is a phone number of an SMS-enabled device</li><li>For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue</li></ul>
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  subscribe: function(topic_arn,protocol,endpoint,opt){
    var payload = {};
    payload.topic_arn = topic_arn;
    payload.protocol = protocol;
    payload.endpoint = endpoint;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("Subscribe", payload );
    return response;
  }, 
  /**
	 * The Unsubscribe action deletes a subscription. If the subscription requires authentication for
	 * deletion, only the owner of the subscription or the its topic's owner can unsubscribe, and an
	 * AWS signature is required. If the Unsubscribe call does not require authentication and the
	 * requester is not the subscription owner, a final cancellation message is delivered to the
	 * endpoint, so that the endpoint owner can easily resubscribe to the topic if the Unsubscribe
	 * request was unintended.
	 *
	 * @param {String} [subscription_arn] The ARN of the subscription to be deleted.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  unsubscribe: function(subscription_arn,opt){
    var payload = {};
    payload.subscription_arn = subscription_arn;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("Unsubscribe", payload );
    return response;
  }
}
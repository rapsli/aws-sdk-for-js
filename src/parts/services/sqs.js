/**
 * @class AmazonSQSClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonSQS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSQS.prototype = {
  service:'sqs',
  version:'2011-10-01',
  auth_class: new AuthV2Query(),
  /**
   * @memberOf AmazonSQS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * The AddPermission action adds a permission to a queue for a specific <a href=
   * "http://docs.amazonwebservices.com/AWSSimpleQueueService/latest/APIReference/Glossary.html#d0e3892">
   * principal</a>. This allows for sharing access to the queue.
   *  
   * When you create a queue, you have full control access rights for the queue. Only you (as owner
   * of the queue) can grant or deny permissions to the queue. For more information about these
   * permissions, see <a href=
   * "http://docs.amazonwebservices.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/?acp-overview.html">
   * Shared Queues</a> in the Amazon SQS Developer Guide.
   *  
   * <code>AddPermission</code> writes an SQS-generated policy. If you want to write your own
   * policy, use SetQueueAttributes to upload your policy. For more information about writing your
   * own policy, see <a href=
   * "http://docs.amazonwebservices.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/?AccessPolicyLanguage.html">
   * Appendix: The Access Policy Language</a> in the Amazon SQS Developer Guide.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param {String} label (Required) The unique identification of the permission you're setting (e.g., <code>AliceSendMessage</code>). Constraints: Maximum 80 characters; alphanumeric characters, hyphens (-), and underscores (_) are allowed.
   * @param string|array $aws_account_id (Required) The AWS account number of the <a href="http://docs.amazonwebservices.com/AWSSimpleQueueService/latest/APIReference/Glossary.html">principal</a> who will be given permission. The principal must have an AWS account, but does not need to be signed up for Amazon SQS. Pass a string for a single value, or an indexed array for multiple values.
   * @param string|array $action_name (Required) The action the client wants to allow for the specified principal. Pass a string for a single value, or an indexed array for multiple values.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  add_permission: function(queue_url,label,aws_account_id,action_name,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.label = label;
    payload.aws_account_id = aws_account_id;
    payload.action_name = action_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("AddPermission", payload );
    return response;
  }, 
  /**
   * The <code>ChangeMessageVisibility</code> action changes the visibility timeout of a specified
   * message in a queue to a new value. The maximum allowed timeout value you can set the value to
   * is 12 hours. This means you can't extend the timeout of a message in an existing queue to more
   * than a total visibility timeout of 12 hours. (For more information visibility timeout, see
   *   <a href=
   * "http://docs.amazonwebservices.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html">
   * Visibility Timeout</a> in the Amazon SQS Developer Guide.)
   *  
   * For example, let's say you have a message and its default message visibility timeout is 30
   * minutes. You could call <code>ChangeMessageVisiblity</code> with a value of two hours and the
   * effective timeout would be two hours and 30 minutes. When that time comes near you could again
   * extend the time out by calling ChangeMessageVisiblity, but this time the maximum allowed
   * timeout would be 9 hours and 30 minutes.
   * 
   * <p class="important">
   * If you attempt to set the <code>VisibilityTimeout</code> to an amount more than the maximum
   * time left, Amazon SQS returns an error. It will not automatically recalculate and increase the
   * timeout to the maximum time remaining.
   * </p>
   * <p class="important">
   * Unlike with a queue, when you change the visibility timeout for a specific message, that
   * timeout value is applied immediately but is not saved in memory for that message. If you don't
   * delete a message after it is received, the visibility timeout for the message the next time it
   * is received reverts to the original timeout value, not the value you set with the
   * ChangeMessageVisibility action.
   * </p>
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param {String} receipt_handle (Required) The receipt handle associated with the message whose visibility timeout should be changed.
   * @param {Number} visibility_timeout (Required) The new value (in seconds) for the message's visibility timeout.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  change_message_visibility: function(queue_url,receipt_handle,visibility_timeout,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.receipt_handle = receipt_handle;
    payload.visibility_timeout = visibility_timeout;

    payload = this.marge_param(payload,opt);
    var response = this.request("ChangeMessageVisibility", payload );
    return response;
  }, 
  /**
   * This is a batch version of <code>ChangeMessageVisibility</code>. It takes multiple receipt
   * handles and performs the operation on each of the them. The result of the operation on each
   * message is reported individually in the response.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $change_message_visibility_batch_request_entry (Required) A list of receipt handles of the messages for which the visibility timeout must be changed. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Id</code> - <code>string</code> - Required - An identifier for this particular receipt handle. This is used to communicate the result. Note that the <code>Id</code> s of a batch request need to be unique within the request.</li>
   *     <li><code>ReceiptHandle</code> - <code>string</code> - Required - A receipt handle.</li>
   *     <li><code>VisibilityTimeout</code> - <code>integer</code> - Optional - The new value (in seconds) for the message's visibility timeout.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  change_message_visibility_batch: function(queue_url,change_message_visibility_batch_request_entry,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.change_message_visibility_batch_request_entry = change_message_visibility_batch_request_entry;

    payload = this.marge_param(payload,opt);
    var response = this.request("ChangeMessageVisibilityBatch", payload );
    return response;
  }, 
  /**
   * The <code>CreateQueue</code> action creates a new queue, or returns the URL of an existing one.
   * When you request <code>CreateQueue</code>, you provide a name for the queue. To successfully
   * create a new queue, you must provide a name that is unique within the scope of your own queues.
   *  
   * You may pass one or more attributes in the request. If you do not provide a value for any
   * attribute, the queue will have the default value for that attribute. Permitted attributes are
   * the same that can be set using <code>SetQueueAttributes</code>.
   *  
   * If you provide the name of an existing queue, a new queue isn't created. If the values of
   * attributes provided with the request match up with those on the existing queue, the queue URL
   * is returned. Otherwise, a <code>QueueNameExists</code> error is returned.
   *
   * @param {String} queue_name (Required) The name for the queue to be created.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Attribute</code> - <code>array</code> - Optional - A map of attributes with their corresponding values. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional - The name of a queue attribute. [Allowed values: <code>Policy</code>, <code>VisibilityTimeout</code>, <code>MaximumMessageSize</code>, <code>MessageRetentionPeriod</code>, <code>ApproximateNumberOfMessages</code>, <code>ApproximateNumberOfMessagesNotVisible</code>, <code>CreatedTimestamp</code>, <code>LastModifiedTimestamp</code>, <code>QueueArn</code>, <code>ApproximateNumberOfMessagesDelayed</code>, <code>DelaySeconds</code>]</li>
   *       <li><code>Value</code> - <code>string</code> - Optional - The value of a queue attribute.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_queue: function(queue_name,opt){
    var payload = {};
    payload.queue_name = queue_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateQueue", payload );
    return response;
  }, 
  /**
   * The <code>DeleteMessage</code> action unconditionally removes the specified message from the
   * specified queue. Even if the message is locked by another reader due to the visibility timeout
   * setting, it is still deleted from the queue.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param {String} receipt_handle (Required) The receipt handle associated with the message to delete.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_message: function(queue_url,receipt_handle,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.receipt_handle = receipt_handle;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteMessage", payload );
    return response;
  }, 
  /**
   * This is a batch version of <code>DeleteMessage</code>. It takes multiple receipt handles and
   * deletes each one of the messages. The result of the delete operation on each message is
   * reported individually in the response.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $delete_message_batch_request_entry (Required) A list of receipt handles for the messages to be deleted. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Id</code> - <code>string</code> - Required - An identifier for this particular receipt handle. This is used to communicate the result. Note that the <code>Id</code> s of a batch request need to be unique within the request.</li>
   *     <li><code>ReceiptHandle</code> - <code>string</code> - Required - A receipt handle.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_message_batch: function(queue_url,delete_message_batch_request_entry,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.delete_message_batch_request_entry = delete_message_batch_request_entry;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteMessageBatch", payload );
    return response;
  }, 
  /**
   * This action unconditionally deletes the queue specified by the queue URL. Use this operation
   * WITH CARE! The queue is deleted even if it is NOT empty.
   *  
   * Once a queue has been deleted, the queue name is unavailable for use with new queues for 60
   * seconds.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_queue: function(queue_url,opt){
    var payload = {};
    payload.queue_url = queue_url;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteQueue", payload );
    return response;
  }, 
  /**
   * Gets attributes for the specified queue. The following attributes are supported:
   * 
   * <ul>
   *   <li><code>All</code> - returns all values.</li>
   *   <li><code>ApproximateNumberOfMessages</code> - returns the approximate number of visible
   *   messages in a queue. For more information, see Resources Required to Process Messages in
   *   the Amazon SQS Developer Guide.</li>
   *   <li><code>ApproximateNumberOfMessagesNotVisible</code> - returns the approximate number of
   *   messages that are not timed-out and not deleted. For more information, see Resources
   *   Required to Process Messages in the Amazon SQS Developer Guide.</li>
   *   <li><code>VisibilityTimeout</code> - returns the visibility timeout for the queue. For more
   *   information about visibility timeout, see Visibility Timeout in the Amazon SQS Developer
   *   Guide.</li>
   *   <li><code>CreatedTimestamp</code> - returns the time when the queue was created (epoch time in
   *   seconds).</li>
   *   <li><code>LastModifiedTimestamp</code> - returns the time when the queue was last changed
   *   (epoch time in seconds).</li>
   *   <li><code>Policy</code> - returns the queue's policy.</li>
   *   <li><code>MaximumMessageSize</code> - returns the limit of how many bytes a message can contain
   *   before Amazon SQS rejects it.</li>
   *   <li><code>MessageRetentionPeriod</code> - returns the number of seconds Amazon SQS retains a
   *   message.</li>
   *   <li><code>QueueArn</code> - returns the queue's Amazon resource name (ARN).</li>
   *   <li><code>ApproximateNumberOfMessagesDelayed</code> - returns the approximate number of
   *   messages that are pending to be added to the queue.</li>
   *   <li><code>DelaySeconds</code> - returns the default delay on the queue in seconds.</li>
   * </ul>
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AttributeName</code> - <code>string|array</code> - Optional - A list of attributes to retrieve information for. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_queue_attributes: function(queue_url,opt){
    var payload = {};
    payload.queue_url = queue_url;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetQueueAttributes", payload );
    return response;
  }, 
  /**
   * The <code>GetQueueUrl</code> action returns the URL of an existing queue.
   *
   * @param {String} queue_name (Required) The name of the queue whose URL must be fetched.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>QueueOwnerAWSAccountId</code> - <code>string</code> - Optional - The AWS account number of the queue's owner.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  get_queue_url: function(queue_name,opt){
    var payload = {};
    payload.queue_name = queue_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("GetQueueUrl", payload );
    return response;
  }, 
  /**
   * Returns a list of your queues.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>QueueNamePrefix</code> - <code>string</code> - Optional - A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  list_queues: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("ListQueues", payload );
    return response;
  }, 
  /**
   * Retrieves one or more messages from the specified queue, including the message body and message
   * ID of each message. Messages returned by this action stay in the queue until you delete them.
   * However, once a message is returned to a <code>ReceiveMessage</code> request, it is not
   * returned on subsequent <code>ReceiveMessage</code> requests for the duration of the
   * <code>VisibilityTimeout</code>. If you do not specify a <code>VisibilityTimeout</code> in the
   * request, the overall visibility timeout for the queue is used for the returned messages.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AttributeName</code> - <code>string|array</code> - Optional - A list of attributes to retrieve information for. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>MaxNumberOfMessages</code> - <code>integer</code> - Optional - The maximum number of messages to return. Amazon SQS never returns more messages than this value but may return fewer. All of the messages are not necessarily returned.</li>
   *   <li><code>VisibilityTimeout</code> - <code>integer</code> - Optional - The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a <code>ReceiveMessage</code> request.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  receive_message: function(queue_url,opt){
    var payload = {};
    payload.queue_url = queue_url;

    payload = this.marge_param(payload,opt);
    var response = this.request("ReceiveMessage", payload );
    return response;
  }, 
  /**
   * The <code>RemovePermission</code> action revokes any permissions in the queue policy that
   * matches the specified <code>Label</code> parameter. Only the owner of the queue can remove
   * permissions.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param {String} label (Required) The identification of the permission to remove. This is the label added with the <code>AddPermission</code> operation.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  remove_permission: function(queue_url,label,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.label = label;

    payload = this.marge_param(payload,opt);
    var response = this.request("RemovePermission", payload );
    return response;
  }, 
  /**
   * The <code>SendMessage</code> action delivers a message to the specified queue.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param {String} message_body (Required) The message to send.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>DelaySeconds</code> - <code>integer</code> - Optional - The number of seconds the message has to be delayed.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  send_message: function(queue_url,message_body,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.message_body = message_body;

    payload = this.marge_param(payload,opt);
    var response = this.request("SendMessage", payload );
    return response;
  }, 
  /**
   * This is a batch version of <code>SendMessage</code>. It takes multiple messages and adds each
   * of them to the queue. The result of each add operation is reported individually in the
   * response.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $send_message_batch_request_entry (Required) A list of <code>SendMessageBatchRequestEntry</code> s. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Id</code> - <code>string</code> - Required - An identifier for the message in this batch. This is used to communicate the result. Note that the the <code>Id</code> s of a batch request need to be unique within the request.</li>
   *     <li><code>MessageBody</code> - <code>string</code> - Required - Body of the message.</li>
   *     <li><code>DelaySeconds</code> - <code>integer</code> - Optional - The number of seconds for which the message has to be delayed.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  send_message_batch: function(queue_url,send_message_batch_request_entry,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.send_message_batch_request_entry = send_message_batch_request_entry;

    payload = this.marge_param(payload,opt);
    var response = this.request("SendMessageBatch", payload );
    return response;
  }, 
  /**
   * Sets an attribute of a queue. The set of attributes that can be set are - DelaySeconds,
   * MessageRetentionPeriod, MaximumMessageSize, VisibilityTimeout and Policy.
   *
   * @param {String} queue_url (Required) The URL of the SQS queue to take action on.
   * @param array $attribute (Required) A map of attributes to set. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>Name</code> - <code>string</code> - Optional - The name of a queue attribute. [Allowed values: <code>Policy</code>, <code>VisibilityTimeout</code>, <code>MaximumMessageSize</code>, <code>MessageRetentionPeriod</code>, <code>ApproximateNumberOfMessages</code>, <code>ApproximateNumberOfMessagesNotVisible</code>, <code>CreatedTimestamp</code>, <code>LastModifiedTimestamp</code>, <code>QueueArn</code>, <code>ApproximateNumberOfMessagesDelayed</code>, <code>DelaySeconds</code>]</li>
   *     <li><code>Value</code> - <code>string</code> - Optional - The value of a queue attribute.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_queue_attributes: function(queue_url,attribute,opt){
    var payload = {};
    payload.queue_url = queue_url;
    payload.attribute = attribute;

    payload = this.marge_param(payload,opt);
    var response = this.request("SetQueueAttributes", payload );
    return response;
  }
}
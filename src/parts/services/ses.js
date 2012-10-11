/**
 * @class AmazonSESClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonSES(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSES.prototype = {
  service:'email',
  api_version:'2010-12-01',
  auth_class: new AuthV4Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonSES
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
	 * Deletes the specified identity (email address or domain) from the list of verified identities.
	 *
	 * @param {String} [identity] The identity to be removed from the list of identities for the AWS Account.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_identity: function(identity,opt){
    var payload = {};
    payload.identity = identity;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteIdentity", payload );
    return response;
  }, 
  /**
	 * Deletes the specified email address from the list of verified addresses.
	 * 
	 * <p class="important">
	 * The DeleteVerifiedEmailAddress action is deprecated as of the May 15, 2012 release of Domain
	 * Verification. The DeleteIdentity action is now preferred.
	 * </p>
	 *
	 * @param {String} [email_address] An email address to be removed from the list of verified addresses.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  delete_verified_email_address: function(email_address,opt){
    var payload = {};
    payload.email_address = email_address;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteVerifiedEmailAddress", payload );
    return response;
  }, 
  /**
	 * Returns the DNS records, or <em>tokens</em>, that must be present in order for Easy DKIM to
	 * sign outgoing email messages.
	 *  
	 * This action takes a list of verified identities as input. It then returns the following
	 * information for each identity:
	 * 
	 * <ul>
	 * 	<li>Whether Easy DKIM signing is enabled or disabled.</li>
	 * 	<li>The set of tokens that are required for Easy DKIM signing. These tokens must be published
	 * in the domain name's DNS records in order for DKIM verification to complete, and must remain
	 * published in order for Easy DKIM signing to operate correctly. (This information is only
	 * returned for domain name identities, not for email addresses.)</li>
	 * 	<li>Whether Amazon SES has successfully verified the DKIM tokens published in the domain name's
	 * DNS. (This information is only returned for domain name identities, not for email addresses.)</li>
	 * </ul>
	 * 
	 * For more information about Easy DKIM signing, go to the <a href=
	 * "http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a>.
	 *
	 * @param {String|array} [identities] A list of one or more verified identities - email addresses, domains, or both. Pass a string for a single value, or an indexed array for multiple values.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_identity_dkim_attributes: function(identities,opt){
    var payload = {};
    payload.identities = identities;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetIdentityDkimAttributes", payload );
    return response;
  }, 
  /**
	 * Given a list of verified identities (email addresses and/or domains), returns a structure
	 * describing identity notification attributes. For more information about feedback notification,
	 * see the <a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES
	 * Developer Guide</a>.
	 *
	 * @param {String|array} [identities] A list of one or more identities. Pass a string for a single value, or an indexed array for multiple values.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_identity_notification_attributes: function(identities,opt){
    var payload = {};
    payload.identities = identities;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetIdentityNotificationAttributes", payload );
    return response;
  }, 
  /**
	 * Given a list of identities (email addresses and/or domains), returns the verification status
	 * and (for domain identities) the verification token for each identity.
	 *
	 * @param {String|array} [identities] A list of identities. Pass a string for a single value, or an indexed array for multiple values.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_identity_verification_attributes: function(identities,opt){
    var payload = {};
    payload.identities = identities;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetIdentityVerificationAttributes", payload );
    return response;
  }, 
  /**
	 * Returns the user's current sending limits.
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_send_quota: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetSendQuota", payload );
    return response;
  }, 
  /**
	 * Returns the user's sending statistics. The result is a list of data points, representing the
	 * last two weeks of sending activity.
	 *  
	 * Each data point in the list contains statistics for a 15-minute interval.
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  get_send_statistics: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetSendStatistics", payload );
    return response;
  }, 
  /**
	 * Returns a list containing all of the identities (email addresses and domains) for a specific
	 * AWS Account, regardless of verification status.
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>IdentityType</code> - <code>string</code> - Optional - The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed. [Allowed values: <code>EmailAddress</code>, <code>Domain</code>]</li>
	 * 	<li><code>NextToken</code> - <code>string</code> - Optional - The token to use for pagination.</li>
	 * 	<li><code>MaxItems</code> - <code>integer</code> - Optional - The maximum number of identities per page. Possible values are 1-100 inclusive.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_identities: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListIdentities", payload );
    return response;
  }, 
  /**
	 * Returns a list containing all of the email addresses that have been verified.
	 * 
	 * <p class="important">
	 * The ListVerifiedEmailAddresses action is deprecated as of the May 15, 2012 release of Domain
	 * Verification. The ListIdentities action is now preferred.
	 * </p>
	 *
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  list_verified_email_addresses: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListVerifiedEmailAddresses", payload );
    return response;
  }, 
  /**
	 * Composes an email message based on input data, and then immediately queues the message for
	 * sending.
	 * 
	 * <p class="important">
	 * If you have not yet requested production access to Amazon SES, then you will only be able to
	 * send email to and from verified email addresses and domains. For more information, go to the
	 * 	<a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer
	 * Guide</a>.
	 * </p> 
	 * The total size of the message cannot exceed 10 MB.
	 *  
	 * Amazon SES has a limit on the total number of recipients per message: The combined number of
	 * To:, CC: and BCC: email addresses cannot exceed 50. If you need to send an email message to a
	 * larger audience, you can divide your recipient list into groups of 50 or fewer, and then call
	 * Amazon SES repeatedly to send the message to each group.
	 *  
	 * For every message that you send, the total number of recipients (To:, CC: and BCC:) is counted
	 * against your <em>sending quota</em> - the maximum number of emails you can send in a 24-hour
	 * period. For information about your sending quota, go to the "Managing Your Sending Activity"
	 * section of the <a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES
	 * Developer Guide</a>.
	 *
	 * @param {String} [source] The identity's email address.
	 * @param {Object} [destination] The destination for this email, composed of To:, CC:, and BCC: fields. <ul>
	 * 	<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 		<li><code>ToAddresses</code> - <code>string|array</code> - Optional - The To: field(s) of the message. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 		<li><code>CcAddresses</code> - <code>string|array</code> - Optional - The CC: field(s) of the message. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 		<li><code>BccAddresses</code> - <code>string|array</code> - Optional - The BCC: field(s) of the message. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	</ul></li>
	 * </ul>
	 * @param {Object} [message] The message to be sent. <ul>
	 * 	<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 		<li><code>Subject</code> - <code>array</code> - Required - The subject of the message: A short summary of the content, which will appear in the recipient's inbox. <ul>
	 * 			<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 				<li><code>Data</code> - <code>string</code> - Required - The textual data of the content.</li>
	 * 				<li><code>Charset</code> - <code>string</code> - Optional - The character set of the content.</li>
	 * 			</ul></li>
	 * 		</ul></li>
	 * 		<li><code>Body</code> - <code>array</code> - Required - The message body. <ul>
	 * 			<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 				<li><code>Text</code> - <code>array</code> - Optional - The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices). <ul>
	 * 					<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 						<li><code>Data</code> - <code>string</code> - Required - The textual data of the content.</li>
	 * 						<li><code>Charset</code> - <code>string</code> - Optional - The character set of the content.</li>
	 * 					</ul></li>
	 * 				</ul></li>
	 * 				<li><code>Html</code> - <code>array</code> - Optional - The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message. <ul>
	 * 					<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 						<li><code>Data</code> - <code>string</code> - Required - The textual data of the content.</li>
	 * 						<li><code>Charset</code> - <code>string</code> - Optional - The character set of the content.</li>
	 * 					</ul></li>
	 * 				</ul></li>
	 * 			</ul></li>
	 * 		</ul></li>
	 * 	</ul></li>
	 * </ul>
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>ReplyToAddresses</code> - <code>string|array</code> - Optional - The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	<li><code>ReturnPath</code> - <code>string</code> - Optional - The email address to which bounce notifications are to be forwarded. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  send_email: function(source,destination,message,opt){
    var payload = {};
    payload.source = source;
    payload.destination = destination;
    payload.message = message;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SendEmail", payload );
    return response;
  }, 
  /**
	 * Sends an email message, with header and content specified by the client. The
	 * <code>SendRawEmail</code> action is useful for sending multipart MIME emails. The raw text of
	 * the message must comply with Internet email standards; otherwise, the message cannot be sent.
	 * 
	 * <p class="important">
	 * If you have not yet requested production access to Amazon SES, then you will only be able to
	 * send email to and from verified email addresses and domains. For more information, go to the
	 * 	<a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer
	 * Guide</a>.
	 * </p> 
	 * The total size of the message cannot exceed 10 MB. This includes any attachments that are part
	 * of the message.
	 *  
	 * Amazon SES has a limit on the total number of recipients per message: The combined number of
	 * To:, CC: and BCC: email addresses cannot exceed 50. If you need to send an email message to a
	 * larger audience, you can divide your recipient list into groups of 50 or fewer, and then call
	 * Amazon SES repeatedly to send the message to each group.
	 *  
	 * For every message that you send, the total number of recipients (To:, CC: and BCC:) is counted
	 * against your <em>sending quota</em> - the maximum number of emails you can send in a 24-hour
	 * period. For information about your sending quota, go to the "Managing Your Sending Activity"
	 * section of the <a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES
	 * Developer Guide</a>.
	 *
	 * @param {Object} [raw_message] The raw text of the message. The client is responsible for ensuring the following: <ul><li>Message must contain a header and a body, separated by a blank line.</li><li>All required header fields must be present.</li><li>Each part of a multipart MIME message must be formatted properly.</li><li>MIME content types must be among those supported by Amazon SES. Refer to the <a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a> for more details.</li><li>Content must be base64-encoded, if MIME requires it.</li></ul> <ul>
	 * 	<li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
	 * 		<li><code>Data</code> - <code>blob</code> - Required - The raw data of the message. The client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, MIME encoding, and base64 encoding (if necessary). For more information, go to the <a href="http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a>.</li>
	 * 	</ul></li>
	 * </ul>
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>Source</code> - <code>string</code> - Optional - The identity's email address. <p class="note">If you specify the <code>Source</code> parameter, then bounce notifications and complaints will be sent to this email address. This takes precedence over any <em>Return-Path</em> header that you might include in the raw text of the message.</p></li>
	 * 	<li><code>Destinations</code> - <code>string|array</code> - Optional - A list of destinations for the message. Pass a string for a single value, or an indexed array for multiple values.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  send_raw_email: function(raw_message,opt){
    var payload = {};
    payload.raw_message = raw_message;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SendRawEmail", payload );
    return response;
  }, 
  /**
	 * Enables or disables Easy DKIM signing of email sent from an identity:
	 * 
	 * <ul>
	 * 	<li>If Easy DKIM signing is enabled for a domain name identity (e.g.,
	 * <code>example.com</code>), then Amazon SES will DKIM-sign all email sent by addresses under
	 * that domain name (e.g., <code>user@example.com</code>).</li>
	 * 	<li>If Easy DKIM signing is enabled for an email address, then Amazon SES will DKIM-sign all
	 * email sent by that email address.</li>
	 * </ul>
	 * 
	 * For email addresses (e.g., <code>user@example.com</code>), you can only enable Easy DKIM
	 * signing if the corresponding domain (e.g., <code>example.com</code>) has been set up for Easy
	 * DKIM using the AWS Console or the <code>VerifyDomainDkim</code> action.
	 *  
	 * For more information about Easy DKIM signing, go to the <a href=
	 * "http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a>.
	 *
	 * @param {String} [identity] The identity for which DKIM signing should be enabled or disabled.
	 * @param {Boolean} [dkim_enabled] Sets whether DKIM signing is enabled for an identity. Set to <code>true</code> to enable DKIM signing for this identity; <code>false</code> to disable it.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  set_identity_dkim_enabled: function(identity,dkim_enabled,opt){
    var payload = {};
    payload.identity = identity;
    payload.dkim_enabled = dkim_enabled;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetIdentityDkimEnabled", payload );
    return response;
  }, 
  /**
	 * Given an identity (email address or domain), enables or disables whether Amazon SES forwards
	 * feedback notifications as email. Feedback forwarding may only be disabled when both complaint
	 * and bounce topics are set. For more information about feedback notification, see the <a href=
	 * "http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a>.
	 *
	 * @param {String} [identity] The identity for which to set feedback notification forwarding. Examples: <code>user@example.com</code>, <code>example.com</code>.
	 * @param {Boolean} [forwarding_enabled] Sets whether Amazon SES will forward feedback notifications as email. <code>true</code> specifies that Amazon SES will forward feedback notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. <code>false</code> specifies that Amazon SES will publish feedback notifications only through Amazon SNS. This value can only be set to <code>false</code> when topics are specified for both <code>Bounce</code> and <code>Complaint</code> topic types.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  set_identity_feedback_forwarding_enabled: function(identity,forwarding_enabled,opt){
    var payload = {};
    payload.identity = identity;
    payload.forwarding_enabled = forwarding_enabled;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetIdentityFeedbackForwardingEnabled", payload );
    return response;
  }, 
  /**
	 * Given an identity (email address or domain), sets the Amazon SNS topic to which Amazon SES will
	 * publish bounce and complaint notifications for emails sent with that identity as the
	 * <code>Source</code>. Publishing to topics may only be disabled when feedback forwarding is
	 * enabled. For more information about feedback notification, see the <a href=
	 * "http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a>.
	 *
	 * @param {String} [identity] The identity for which the topic will be set. Examples: <code>user@example.com</code>, <code>example.com</code>.
	 * @param {String} [notification_type] The type of feedback notifications that will be published to the specified topic. [Allowed values: <code>Bounce</code>, <code>Complaint</code>]
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>SnsTopic</code> - <code>string</code> - Optional - The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic. If the parameter is ommited from the request or a null value is passed, the topic is cleared and publishing is disabled.</li>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  set_identity_notification_topic: function(identity,notification_type,opt){
    var payload = {};
    payload.identity = identity;
    payload.notification_type = notification_type;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("SetIdentityNotificationTopic", payload );
    return response;
  }, 
  /**
	 * Returns a set of DNS records, or <em>tokens</em>, that must be published in the domain name's
	 * DNS to complete the DKIM verification process. These tokens are DNS <code>CNAME</code> records
	 * that point to DKIM public keys hosted by Amazon SES. To complete the DKIM verification process,
	 * these tokens must be published in the domain's DNS. The tokens must remain published in order
	 * for Easy DKIM signing to function correctly.
	 *  
	 * After the tokens are added to the domain's DNS, Amazon SES will be able to DKIM-sign email
	 * originating from that domain. To enable or disable Easy DKIM signing for a domain, use the
	 * <code>SetIdentityDkimEnabled</code> action.
	 *  
	 * For more information about Easy DKIM, go to the <a href=
	 * "http://docs.amazonwebservices.com/ses/latest/DeveloperGuide">Amazon SES Developer Guide</a>.
	 *
	 * @param {String} [domain] The name of the domain to be verified for Easy DKIM signing.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  verify_domain_dkim: function(domain,opt){
    var payload = {};
    payload.domain = domain;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("VerifyDomainDkim", payload );
    return response;
  }, 
  /**
	 * Verifies a domain.
	 *
	 * @param {String} [domain] The domain to be verified.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  verify_domain_identity: function(domain,opt){
    var payload = {};
    payload.domain = domain;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("VerifyDomainIdentity", payload );
    return response;
  }, 
  /**
	 * Verifies an email address. This action causes a confirmation email message to be sent to the
	 * specified address.
	 * 
	 * <p class="important">
	 * The VerifyEmailAddress action is deprecated as of the May 15, 2012 release of Domain
	 * Verification. The VerifyEmailIdentity action is now preferred.
	 * </p>
	 *
	 * @param {String} [email_address] The email address to be verified.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  verify_email_address: function(email_address,opt){
    var payload = {};
    payload.email_address = email_address;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("VerifyEmailAddress", payload );
    return response;
  }, 
  /**
	 * Verifies an email address. This action causes a confirmation email message to be sent to the
	 * specified address.
	 *
	 * @param {String} [email_address] The email address to be verified.
	 * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>
	 * 	<li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
	 * 	<li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
	 * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
	 */
  verify_email_identity: function(email_address,opt){
    var payload = {};
    payload.email_address = email_address;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("VerifyEmailIdentity", payload );
    return response;
  }
}
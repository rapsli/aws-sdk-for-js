/**
 * Handles all HTTP requests using cURL and manages the responses.
 *
 * @version 2012.01.17
 * @copyright 2006-2011 Ryan Parman
 * @copyright 2006-2010 Foleeo Inc.
 * @copyright 2010-2011 Amazon.com, Inc. or its affiliates.
 * @copyright 2008-2011 Contributors
 * @license http://opensource.org/licenses/bsd-license.php Simplified BSD License
 */
var RequestCore = function(){}
/*%******************************************************************************************%*/
// CONSTANTS
/**
 * GET HTTP Method
 */
RequestCore.HTTP_GET = 'GET';
/**
 * POST HTTP Method
 */
RequestCore.HTTP_POST = 'POST';

/**
 * PUT HTTP Method
 */
RequestCore.HTTP_PUT = 'PUT';

/**
 * DELETE HTTP Method
 */
RequestCore.HTTP_DELETE = 'DELETE';

/**
 * HEAD HTTP Method
 */
RequestCore.HTTP_HEAD = 'HEAD';

RequestCore.prototype = {
  /**
   * The URL being requested.
   */
  request_url:"",

  /**
   * The headers being sent in the request.
   */
  request_headers:"",

  /**
   * The body being sent in the request.
   */
  request_body:"",

  /**
   * The response returned by the request.
   */
  response:"",

  /**
   * The headers returned by the request.
   */
  response_headers:"",

  /**
   * The body returned by the request.
   */
  response_body:"",

  /**
   * The HTTP status code returned by the request.
   */
  response_code:"",

  /**
   * Additional response data.
   */
  response_info:"",

  /**
   * The handle for the cURL object.
   */
  curl_handle:"",

  /**
   * The method by which the request is being made.
   */
  method:"",

  /**
   * Stores the proxy settings to use for the request.
   */
  proxy:null,

  /**
   * The username to use for the request.
   */
  username:null,

  /**
   * The password to use for the request.
   */
  password:null,

  /**
   * Custom HTTP OPT settings.
   */
  httpopts:null,

  /**
   * The state of debug mode.
   */
  debug_mode:false,

  /**
   * The default class to use for HTTP Requests (defaults to <RequestCore>).
   */
  request_class:'RequestCore',

  /**
   * The default class to use for HTTP Responses (defaults to <ResponseCore>).
   */
  response_class:'ResponseCore',

  /**
   * Default useragent string to use.
   */
  useragent:'RequestCoreJS/0.0.1',

  /**
   * File to read from while streaming up.
   */
  read_file:null,

  /**
   * The resource to read from while streaming up.
   */
  read_stream:null,

  /**
   * The size of the stream to read from.
   */
  read_stream_size:null,

  /**
   * The length already read from the stream.
   */
  read_stream_read:0,

  /**
   * File to write to while streaming down.
   */
  write_file:null,

  /**
   * The resource to write to while streaming down.
   */
  write_stream:null,

  /**
   * Stores the intended starting seek position.
   */
  seek_position:null,

  /**
   * The location of the cacert.pem file to use.
   */
  cacert_location:false,

  /**
   * The state of SSL certificate verification.
   */
  ssl_verification:true,

  /**
   * The user-defined callback function to call when a stream is read from.
   */
  registered_streaming_read_callback:null,

  /**
   * The user-defined callback function to call when a stream is written to.
   */
  registered_streaming_write_callback:null,

  /*%******************************************************************************************%*/
  // CONSTRUCTOR/DESTRUCTOR

  /**
   * Constructs a new instance of this class.
   *
   * @param string url (Optional) The URL to request or service endpoint to query.
   * @param string proxy (Optional) The faux-url to use for proxy settings. Takes the following format: `proxy://user:pass@hostname:port`
   * @param array helpers (Optional) An associative array of classnames to use for request, and response functionality. Gets passed in automatically by the calling class.
   * @return this A reference to the current instance.
   */
  initialize: function(url,proxy,helpers) {
    // Set some default values.
    this.request_url = url;
    this.method = this.HTTP_GET;
    this.request_headers = {};
    this.request_body = '';

    // Set a new Request class if one was set.
    if (isset(helpers['request']) && !empty(helpers['request'])) {
      this.request_class = helpers['request'];
    }

    // Set a new Request class if one was set.
    if (isset(helpers['response']) && !empty(helpers['response'])) {
      this.response_class = helpers['response'];
    }

    if (proxy != undefined) {
      this.set_proxy(proxy);
    }
    return this;
  },


  /*%******************************************************************************************%*/
  // REQUEST METHODS

  /**
   * Sets the credentials to use for authentication.
   *
   * @param string user (Required) The username to authenticate with.
   * @param string pass (Required) The password to authenticate with.
   * @return this A reference to the current instance.
   */
  set_credentials:function(user, pass){
    this.username = user;
    this.password = pass;
    return this;
  },

  /**
   * Adds a custom HTTP header to the cURL request.
   *
   * @param string key (Required) The custom HTTP header to set.
   * @param mixed value (Required) The value to assign to the custom HTTP header.
   * @return this A reference to the current instance.
   */
  add_header:function(key, value){
    this.request_headers[key] = value;
    return this;
  },

  /**
   * Removes an HTTP header from the cURL request.
   *
   * @param string key (Required) The custom HTTP header to set.
   * @return this A reference to the current instance.
   */
  remove_header:function(key){
    if (isset(this.request_headers[key]))
    {
      unset(this.request_headers[key]);
    }
    return this;
  },

  /**
   * Set the method type for the request.
   *
   * @param string method (Required) One of the following constants: <HTTP_GET>, <HTTP_POST>, <HTTP_PUT>, <HTTP_HEAD>, <HTTP_DELETE>.
   * @return this A reference to the current instance.
   */
  set_method:function(method){
    this.method = strtoupper(method);
    return this;
  },

  /**
   * Sets a custom useragent string for the class.
   *
   * @param string ua (Required) The useragent string to use.
   * @return this A reference to the current instance.
   */
  set_useragent:function(ua){
    this.useragent = ua;
    return this;
  },

  /**
   * Set the body to send in the request.
   *
   * @param string body (Required) The textual content to send along in the body of the request.
   * @return this A reference to the current instance.
   */
  set_body:function(body){
    this.request_body = body;
    return this;
  },

  /**
   * Set the URL to make the request to.
   *
   * @param string url (Required) The URL to make the request to.
   * @return this A reference to the current instance.
   */
  set_request_url:function(url){
    this.request_url = url;
    return this;
  },

  /**
   * Set additional CURLOPT settings. These will merge with the default settings, and override if
   * there is a duplicate.
   *
   * @param array curlopts (Optional) A set of key-value pairs that set `CURLOPT` options. These will merge with the existing CURLOPTs, and ones passed here will override the defaults. Keys should be the `CURLOPT_*` constants, not strings.
   * @return this A reference to the current instance.
   */
  set_curlopts:function(curlopts){
    this.curlopts = curlopts;
    return this;
  },

  /**
   * Sets the length in bytes to read from the stream while streaming up.
   *
   * @param integer size (Required) The length in bytes to read from the stream.
   * @return this A reference to the current instance.
   */
  set_read_stream_size:function(size){
    this.read_stream_size = size;

    return this;
  },

  /**
   * Sets the resource to read from while streaming up. Reads the stream from its current position until
   * EOF or `size` bytes have been read. If `size` is not given it will be determined by <php:fstat()> and
   * <php:ftell()>.
   *
   * @param resource resource (Required) The readable resource to read from.
   * @param integer size (Optional) The size of the stream to read.
   * @return this A reference to the current instance.
   */
  set_read_stream:function(resource, size ){
    if (size != undefinedF || size < 0)
    {
      stats = fstat(resource);

      if (stats && stats['size'] >= 0)
      {
        position = ftell(resource);

        if (position !== false && position >= 0)
        {
          size = stats['size'] - position;
        }
      }
    }

    this.read_stream = resource;

    return this.set_read_stream_size(size);
  },

  /**
   * Sets the file to read from while streaming up.
   *
   * @param string location (Required) The readable location to read from.
   * @return this A reference to the current instance.
   */
  set_read_file:function(location){
    this.read_file = location;
    read_file_handle = fopen(location, 'r');

    return this.set_read_stream(read_file_handle);
  },

  /**
   * Sets the resource to write to while streaming down.
   *
   * @param resource resource (Required) The writeable resource to write to.
   * @return this A reference to the current instance.
   */
  set_write_stream:function(resource){
    this.write_stream = resource;

    return this;
  },

  /**
   * Sets the file to write to while streaming down.
   *
   * @param string location (Required) The writeable location to write to.
   * @return this A reference to the current instance.
   */
  set_write_file:function(location){
    this.write_file = location;
    write_file_handle = fopen(location, 'w');

    return this.set_write_stream(write_file_handle);
  },

  /**
   * Set the proxy to use for making requests.
   *
   * @param string proxy (Required) The faux-url to use for proxy settings. Takes the following format: `proxy://user:pass@hostname:port`
   * @return this A reference to the current instance.
   */
  set_proxy:function(proxy){
    proxy = parse_url(proxy);
    proxy['user'] = isset(proxy['user']) ? proxy['user'] : null;
    proxy['pass'] = isset(proxy['pass']) ? proxy['pass'] : null;
    proxy['port'] = isset(proxy['port']) ? proxy['port'] : null;
    this.proxy = proxy;
    return this;
  },

  /**
   * Set the intended starting seek position.
   *
   * @param integer position (Required) The byte-position of the stream to begin reading from.
   * @return this A reference to the current instance.
   */
  set_seek_position:function(position){
    this.seek_position = (position != undefined) ?  position : null;
    return this;
  },

  /**
   * Register a callback function to execute whenever a data stream is read from using
   * <CFRequest::streaming_read_callback()>.
   *
   * The user-defined callback function should accept three arguments:
   *
   * <ul>
   * 	<li><code>curl_handle</code> - <code>resource</code> - Required - The cURL handle resource that represents the in-progress transfer.</li>
   * 	<li><code>file_handle</code> - <code>resource</code> - Required - The file handle resource that represents the file on the local file system.</li>
   * 	<li><code>length</code> - <code>integer</code> - Required - The length in kilobytes of the data chunk that was transferred.</li>
   * </ul>
   *
   * @param string|array|function callback (Required) The callback function is called by <php:call_user_func()>, so you can pass the following values: <ul>
   * 	<li>The name of a global function to execute, passed as a string.</li>
   * 	<li>A method to execute, passed as <code>array('ClassName', 'MethodName')</code>.</li>
   * 	<li>An anonymous function (PHP 5.3+).</li></ul>
   * @return this A reference to the current instance.
   */
  register_streaming_read_callback:function(callback){
    this.registered_streaming_read_callback = callback;

    return this;
  },

  /**
   * Register a callback function to execute whenever a data stream is written to using
   * <CFRequest::streaming_write_callback()>.
   *
   * The user-defined callback function should accept two arguments:
   *
   * <ul>
   * 	<li><code>curl_handle</code> - <code>resource</code> - Required - The cURL handle resource that represents the in-progress transfer.</li>
   * 	<li><code>length</code> - <code>integer</code> - Required - The length in kilobytes of the data chunk that was transferred.</li>
   * </ul>
   *
   * @param string|array|function callback (Required) The callback function is called by <php:call_user_func()>, so you can pass the following values: <ul>
   * 	<li>The name of a global function to execute, passed as a string.</li>
   * 	<li>A method to execute, passed as <code>array('ClassName', 'MethodName')</code>.</li>
   * 	<li>An anonymous function (PHP 5.3+).</li></ul>
   * @return this A reference to the current instance.
   */
  register_streaming_write_callback:function(callback){
    this.registered_streaming_write_callback = callback;

    return this;
  },


  /*%******************************************************************************************%*/
  // PREPARE, SEND, AND PROCESS REQUEST

  /**
   * A callback function that is invoked by cURL for streaming up.
   *
   * @param resource curl_handle (Required) The cURL handle for the request.
   * @param resource file_handle (Required) The open file handle resource.
   * @param integer length (Required) The maximum number of bytes to read.
   * @return binary Binary data from a stream.
   */
  streaming_read_callback:function(curl_handle, file_handle, length){
    // Once we've sent as much as we're supposed to send...
    if (this.read_stream_read >= this.read_stream_size)
    {
      // Send EOF
      return '';
    }

    // If we're at the beginning of an upload and need to seek...
    if (this.read_stream_read == 0 && isset(this.seek_position) && this.seek_position !== ftell(this.read_stream))
    {
      if (fseek(this.read_stream, this.seek_position) !== 0)
      {
        throw new RequestCore_Exception('The stream does not support seeking and is either not at the requested position or the position is unknown.');
      }
    }

    read = fread(this.read_stream, min(this.read_stream_size - this.read_stream_read, length)); // Remaining upload data or cURL's requested chunk size
    this.read_stream_read += strlen(read);

    out = read === false ? '' : read;

    // Execute callback function
    if (this.registered_streaming_read_callback)
    {
      call_user_func(this.registered_streaming_read_callback, curl_handle, file_handle, out);
    }

    return out;
  },

  /**
   * A callback function that is invoked by cURL for streaming down.
   *
   * @param resource curl_handle (Required) The cURL handle for the request.
   * @param binary data (Required) The data to write.
   * @return integer The number of bytes written.
   */
  streaming_write_callback:function(curl_handle, data){
    length = strlen(data);
    written_total = 0;
    written_last = 0;

    while (written_total < length)
    {
      written_last = fwrite(this.write_stream, substr(data, written_total));

      if (written_last === false)
      {
        return written_total;
      }

      written_total += written_last;
    }

    // Execute callback function
    if (this.registered_streaming_write_callback)
    {
      call_user_func(this.registered_streaming_write_callback, curl_handle, written_total);
    }

    return written_total;
  },

  /**
   * Prepares and adds the details of the cURL request. This can be passed along to a <php:curl_multi_exec()>
   * function.
   *
   * @return resource The handle for the cURL object.
   */
  prep_request:function(){
    curl_handle = curl_init();

    // Set default options.
    curl_setopt(curl_handle, CURLOPT_URL, this.request_url);
    curl_setopt(curl_handle, CURLOPT_FILETIME, true);
    curl_setopt(curl_handle, CURLOPT_FRESH_CONNECT, false);
    curl_setopt(curl_handle, CURLOPT_CLOSEPOLICY, CURLCLOSEPOLICY_LEAST_RECENTLY_USED);
    curl_setopt(curl_handle, CURLOPT_MAXREDIRS, 5);
    curl_setopt(curl_handle, CURLOPT_HEADER, true);
    curl_setopt(curl_handle, CURLOPT_RETURNTRANSFER, true);
    curl_setopt(curl_handle, CURLOPT_TIMEOUT, 5184000);
    curl_setopt(curl_handle, CURLOPT_CONNECTTIMEOUT, 120);
    curl_setopt(curl_handle, CURLOPT_NOSIGNAL, true);
    curl_setopt(curl_handle, CURLOPT_REFERER, this.request_url);
    curl_setopt(curl_handle, CURLOPT_USERAGENT, this.useragent);
    curl_setopt(curl_handle, CURLOPT_READFUNCTION, array(this, 'streaming_read_callback'));

    // Verification of the SSL cert
    if (this.ssl_verification)
    {
      curl_setopt(curl_handle, CURLOPT_SSL_VERIFYPEER, true);
      curl_setopt(curl_handle, CURLOPT_SSL_VERIFYHOST, 2);
    }
    else
    {
      curl_setopt(curl_handle, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt(curl_handle, CURLOPT_SSL_VERIFYHOST, false);
    }

    // chmod the file as 0755
    if (this.cacert_location === true)
    {
      curl_setopt(curl_handle, CURLOPT_CAINFO, dirname(__FILE__) + '/cacert.pem');
    }
    elseif (is_string(this.cacert_location))
    {
      curl_setopt(curl_handle, CURLOPT_CAINFO, this.cacert_location);
    }

    // Debug mode
    if (this.debug_mode)
    {
      curl_setopt(curl_handle, CURLOPT_VERBOSE, true);
    }

    // Handle open_basedir & safe mode
    if (!ini_get('safe_mode') && !ini_get('open_basedir'))
    {
      curl_setopt(curl_handle, CURLOPT_FOLLOWLOCATION, true);
    }

    // Enable a proxy connection if requested.
    if (this.proxy)
    {
      curl_setopt(curl_handle, CURLOPT_HTTPPROXYTUNNEL, true);

      host = this.proxy['host'];
      host += (this.proxy['port']) ? ':' + this.proxy['port'] : '';
      curl_setopt(curl_handle, CURLOPT_PROXY, host);

      if (isset(this.proxy['user']) && isset(this.proxy['pass']))
      {
        curl_setopt(curl_handle, CURLOPT_PROXYUSERPWD, this.proxy['user'] + ':' + this.proxy['pass']);
      }
    }

    // Set credentials for HTTP Basic/Digest Authentication.
    if (this.username && this.password)
    {
      curl_setopt(curl_handle, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
      curl_setopt(curl_handle, CURLOPT_USERPWD, this.username + ':' + this.password);
    }

    // Handle the encoding if we can.
    if (extension_loaded('zlib'))
    {
      curl_setopt(curl_handle, CURLOPT_ENCODING, 'gzip, deflate');
    }

    // Process custom headers
    if (isset(this.request_headers) && count(this.request_headers))
    {
      temp_headers = {};

      if (!array_key_exists('Expect', this.request_headers))
      {
        this.request_headers['Expect'] = '';
      }

      for (var k in  this.request_headers )
      {
        var v = this.request_headers[k];
        temp_headers.push(k + ': ' + v);
      }

      curl_setopt(curl_handle, CURLOPT_HTTPHEADER, temp_headers);
    }

    switch (this.method)
    {
      case this.HTTP_PUT:
        curl_setopt(curl_handle, CURLOPT_CUSTOMREQUEST, 'PUT');
        if (isset(this.read_stream))
        {
          if (!isset(this.read_stream_size) || this.read_stream_size < 0)
          {
            throw new RequestCore_Exception('The stream size for the streaming upload cannot be determined.');
          }

          curl_setopt(curl_handle, CURLOPT_INFILESIZE, this.read_stream_size);
          curl_setopt(curl_handle, CURLOPT_UPLOAD, true);
        }
        else
        {
          curl_setopt(curl_handle, CURLOPT_POSTFIELDS, this.request_body);
        }
        break;

      case this.HTTP_POST:
        curl_setopt(curl_handle, CURLOPT_POST, true);
        curl_setopt(curl_handle, CURLOPT_POSTFIELDS, this.request_body);
        break;

      case this.HTTP_HEAD:
        curl_setopt(curl_handle, CURLOPT_CUSTOMREQUEST, this.HTTP_HEAD);
        curl_setopt(curl_handle, CURLOPT_NOBODY, 1);
        break;

      default: // Assumed GET
        curl_setopt(curl_handle, CURLOPT_CUSTOMREQUEST, this.method);
        if (isset(this.write_stream))
        {
          curl_setopt(curl_handle, CURLOPT_WRITEFUNCTION, array(this, 'streaming_write_callback'));
          curl_setopt(curl_handle, CURLOPT_HEADER, false);
        }
        else
        {
          curl_setopt(curl_handle, CURLOPT_POSTFIELDS, this.request_body);
        }
        break;
    }

    // Merge in the CURLOPTs
    if (isset(this.curlopts) && sizeof(this.curlopts) > 0)
    {
      for (var k in this.curlopts)
      {
        var v = this.curlops[k];
        curl_setopt(curl_handle, k, v);
      }
    }

    return curl_handle;
  },

  /**
   * Take the post-processed cURL data and break it down into useful header/body/info chunks. Uses the
   * data stored in the `curl_handle` and `response` properties unless replacement data is passed in via
   * parameters.
   *
   * @param resource curl_handle (Optional) The reference to the already executed cURL request.
   * @param string response (Optional) The actual response content itself that needs to be parsed.
   * @return ResponseCore A <ResponseCore> object containing a parsed HTTP response.
   */
  process_response:function(curl_handle , response ){
    // Accept a custom one if it's passed.
    if (curl_handle && response)
    {
      this.curl_handle = curl_handle;
      this.response = response;
    }

    // As long as this came back as a valid resource...
    if (is_resource(this.curl_handle))
    {
      // Determine what's what.
      header_size = curl_getinfo(this.curl_handle, CURLINFO_HEADER_SIZE);
      this.response_headers = substr(this.response, 0, header_size);
      this.response_body = substr(this.response, header_size);
      this.response_code = curl_getinfo(this.curl_handle, CURLINFO_HTTP_CODE);
      this.response_info = curl_getinfo(this.curl_handle);

      // Parse out the headers
      this.response_headers = explode("\r\n\r\n", trim(this.response_headers));
      this.response_headers = array_pop(this.response_headers);
      this.response_headers = explode("\r\n", this.response_headers);
      array_shift(this.response_headers);

      // Loop through and split up the headers.
      header_assoc = {};
      for (var k in this.response_headers )
      {
        var header = this.response_headers[k];
        var kv = header.split(': ');
        header_assoc[strtolower(kv[0])] = kv[1];
      }

      // Reset the headers to the appropriate property.
      this.response_headers = header_assoc;
      this.response_headers['_info'] = this.response_info;
      this.response_headers['_info']['method'] = this.method;

      if (curl_handle && response)
      {
        return new this.response_class(this.response_headers, this.response_body, this.response_code, this.curl_handle);
      }
    }

    // Return false
    return false;
  },

  /**
   * Sends the request, calling necessary utility functions to update built-in properties.
   *
   * @param boolean parse (Optional) Whether to parse the response with ResponseCore or not.
   * @return string The resulting unparsed data from the request.
   */
  send_request:function(parse){
    if(parse == undefined){
      parse = false;
    }
    set_time_limit(0);

    curl_handle = this.prep_request();
    this.response = curl_exec(curl_handle);

    if (this.response === false)
    {
      //      throw new cURL_Exception('cURL resource: ' . (string) curl_handle . '; cURL error: ' . curl_error(curl_handle) . ' (cURL error code ' . curl_errno(curl_handle) . '). See http://curl.haxx.se/libcurl/c/libcurl-errors.html for an explanation of error codes.');
    }

    parsed_response = this.process_response(curl_handle, this.response);

    curl_close(curl_handle);

    if (parse)
    {
      return parsed_response;
    }

    return this.response;
  },

  /**
   * Sends the request using <php:curl_multi_exec()>, enabling parallel requests. Uses the "rolling" method.
   *
   * @param array handles (Required) An indexed array of cURL handles to process simultaneously.
   * @param array opt (Optional) An associative array of parameters that can have the following keys: <ul>
   * 	<li><code>callback</code> - <code>string|array</code> - Optional - The string name of a function to pass the response data to. If this is a method, pass an array where the <code>[0]</code> index is the class and the <code>[1]</code> index is the method name.</li>
   * 	<li><code>limit</code> - <code>integer</code> - Optional - The number of simultaneous requests to make. This can be useful for scaling around slow server responses. Defaults to trusting cURLs judgement as to how many to use.</li></ul>
   * @return array Post-processed cURL responses.
   */
  send_multi_request:function(handles, opt ){
    set_time_limit(0);

    // Skip everything if there are no handles to process.
    if (count(handles) === 0) {
      var ar = {};
      return ar;
    }

    if (opt == undefined) opt = {};

    // Initialize any missing options
    limit = isset(opt['limit']) ? opt['limit'] : -1;

    // Initialize
    handle_list = handles;
    http = new this.request_class();
    multi_handle = curl_multi_init();
    handles_post = {};
    added = count(handles);
    last_handle = null;
    count = 0;
    i = 0;

    // Loop through the cURL handles and add as many as it set by the limit parameter.
    while (i < added)
    {
      if (limit > 0 && i >= limit) break;
      curl_multi_add_handle(multi_handle, array_shift(handles));
      i++;
    }

    do
    {
      active = false;

      // Start executing and wait for a response.
      while ((status = curl_multi_exec(multi_handle, active)) === CURLM_CALL_MULTI_PERFORM)
      {
        // Start looking for possible responses immediately when we have to add more handles
        if (count(handles) > 0) break;
      }

      // Figure out which requests finished.
      to_process = {};

      while (done = curl_multi_info_read(multi_handle))
      {
        // Since curl_errno() isn't reliable for handles that were in multirequests, we check the 'result' of the info read, which contains the curl error number, (listed here http://curl.haxx.se/libcurl/c/libcurl-errors.html )
        if (done['result'] > 0)
        {
          throw new cURL_Multi_Exception('cURL resource: ' . (string) done['handle'] . '; cURL error: ' . curl_error(done['handle']) . ' (cURL error code ' . done['result'] . '). See http://curl.haxx.se/libcurl/c/libcurl-errors.html for an explanation of error codes.');
        }

        // Because curl_multi_info_read() might return more than one message about a request, we check to see if this request is already in our array of completed requests
        elseif (!isset(to_process[(int) done['handle']]))
        {
          to_process[(int) done['handle']] = done;
        }
      }

      // Actually deal with the request
      foreach (to_process as pkey => done)
      {
        response = http->process_response(done['handle'], curl_multi_getcontent(done['handle']));
        key = array_search(done['handle'], handle_list, true);
        handles_post[key] = response;

        if (count(handles) > 0)
        {
          curl_multi_add_handle(multi_handle, array_shift(handles));
        }

        curl_multi_remove_handle(multi_handle, done['handle']);
        curl_close(done['handle']);
      }
    }
    while (active || count(handles_post) < added);

    curl_multi_close(multi_handle);

    ksort(handles_post, SORT_NUMERIC);
    return handles_post;
  },


  /*%******************************************************************************************%*/
  // RESPONSE METHODS

  /**
   * Get the HTTP response headers from the request.
   *
   * @param string header (Optional) A specific header value to return. Defaults to all headers.
   * @return string|array All or selected header values.
   */
  get_response_header:function(header ){
    if (header != undefined)
    {
      return this.response_headers[strtolower(header)];
    }
    return this.response_headers;
  },

  /**
   * Get the HTTP response body from the request.
   *
   * @return string The response body.
   */
  get_response_body:function(){
    return this.response_body;
  },

  /**
   * Get the HTTP response code from the request.
   *
   * @return string The HTTP response code.
   */
  get_response_code:function(){
    return this.response_code;
  },
}


/**
 * Container for all response-related methods.
 */
class ResponseCore
{
  /**
   * Stores the HTTP header information.
   */
  header;

  /**
   * Stores the SimpleXML response.
   */
  body;

  /**
   * Stores the HTTP response code.
   */
  status;

  /**
   * Constructs a new instance of this class.
   *
   * @param array header (Required) Associative array of HTTP headers (typically returned by <RequestCore::get_response_header()>).
   * @param string body (Required) XML-formatted response from AWS.
   * @param integer status (Optional) HTTP response status code from the request.
   * @return object Contains an <php:array> `header` property (HTTP headers as an associative array), a <php:SimpleXMLElement> or <php:string> `body` property, and an <php:integer> `status` code.
   */
  __construct:function(header, body, status = null){
    this.header = header;
    this.body = body;
    this.status = status;

    return this;
  }

  /**
   * Did we receive the status code we expected?
   *
   * @param integer|array codes (Optional) The status code(s) to expect. Pass an <php:integer> for a single acceptable value, or an <php:array> of integers for multiple acceptable values.
   * @return boolean Whether we received the expected status code or not.
   */
  isOK:function(codes = array(200, 201, 204, 206)){
    if (is_array(codes))
    {
      return in_array(this.status, codes);
    }

    return this.status === codes;
  }
}

class cURL_Exception extends Exception {}
class cURL_Multi_Exception extends cURL_Exception {}
class RequestCore_Exception extends Exception {}

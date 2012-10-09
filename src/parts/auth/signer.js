var Signer = function(endpoint, operation, payload, access_key, secret_key){
};
Signer.prototype = {
  /**
   * The endpoint to direct the request to.
   */
  endpoint:"",

  /**
   * The operation to execute as a result of this request.
   */
  operation:"",

  /**
   * The options to use as part of the payload in the request.
   */
  payload:"",

  /**
   * The access_key to use for signing and making requests.
   */
  access_key:'',
  
  /**
   * The secret_key to use for signing and making requests.
   */
  secret_key:'',
  /**
   * Constructs a new instance of the implementing class.
   *
   * @param string $endpoint (Required) The endpoint to direct the request to.
   * @param string $operation (Required) The operation to execute as a result of this request.
   * @param array $payload (Required) The options to use as part of the payload in the request.
   * @param CFCredential $credentials (Required) The credentials to use for signing and making requests.
   * @return void
   */
  initialize:function(endpoint, operation, payload,access_key,secret_key){
    this.endpoint = endpoint;
    this.operation = operation;
    this.payload = payload;
    this.access_key = access_key;
    this.secret_key = secret_key;
  },
  authenticate:function(){
    
  },
  get_date_RFC2616:function(timestamp){
    //D, d M Y H:i:s \G\M\T
    if(timestamp == undefined){
      timestamp = this.time();
    }
    var d = new Date(timestamp);
    return '$D'+', '+'$d' + ' '+d.getUTCDate()+ ' ' + '$M' + d.getUTCFullYear() + ' '
    d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds() + " GMT";
  },
  get_date_ISO8601:function(timestamp){
    // Y-m-d\TH:i:s\Z
    if(timestamp == undefined){
      timestamp = this.time();
    }
    var d = new Date(timestamp);
    return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate() + 'T'
    d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds();
  },
  time:function(){
    return  Math.round(new Date().getTime() / 1000);;
  }
};

var Request = function(){
  this.initialize();
};

Request.protytpe = {
  
};
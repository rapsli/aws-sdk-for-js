/* use jquery 1.7.0  */
function EC2(access_key,secret_key,region){
  this.initialize(access_key, secret_key, region);
}

EC2.prototype = {
  access_key:'',
  secret_key:'',
  subdomain:'ec2',
  amazonlinux:{
    ap_north_east_1:{
      _64bit:"ami-e47acbe5",
      _32bit:"ami-087acb09"
    }
  },
  initialize : function(access_key,secret_key,region){
    if(access_key == undefined || secret_key == undefined){
      throw "access_key and secret_key have to require.";
    }
    if(region != undefined){
      this.region = region;
    }else{
      this.region = 'us-east-1';
    }
    this.access_key = access_key;
    this.secret_key = secret_key; 
    this.request = new RequestCore();
  },
  run_instance:function(ImageId,MinCount,MaxCount,InstanceType,KeyName){
    if(InstanceType == undefined){
      InstanceType = "t1.micro";
    }
    if(KeyName == undefined ){
      KeyName = "id_rsa";
    }
    if(MaxCount == undefined){
      MaxCount = 1;
    }
    if(MinCount == undefined){
      MinCount = 1;
    }
    if(ImageId == undefined){
      ImageId = this.amazonlinux.ap_north_east_1._64bit;
    }
    
    var param = {
      "ImageId":ImageId,
      "MinCount":MinCount,
      "MaxCount":MaxCount,
      "KeyName":KeyName
    //    "InstanceType":InstanceType

    };
    var post_param = {
      "InstanceType":InstanceType
    }
    
    var endpoint = "https://"+this.subdomain+".";
    if(this.region != undefined){
      endpoint += this.region+".";
    }
    endpoint += "amazonaws.com";
    var url = this.request.generateSignedURL('RunInstances',param,this.access_key,this.secret_key,endpoint,"2012-05-01")
    var response = {};
    $.ajax({
      url:url,
      //      data:param,
      type:"POST",
      async:false,
      dataType:'xml',
      success:function(xhr){
        response = $.xml2json(xhr);
      }
    });
    return response;
  },

  describe_instances: function(){
    var param = {};
    var endpoint = "https://"+this.subdomain+".";
    if(this.region != undefined){
      endpoint += this.region+".";
    }
    endpoint += "amazonaws.com";
    var instances = {};
    var url = this.request.generateSignedURL("DescribeInstances",param, this.access_key, this.secret_key, endpoint, "2009-08-15");
    $.ajax({
      url:url,
      type:"GET",
      async:false,
      dataType:'xml',
      success:function(xhr){
        instances = $.xml2json(xhr);
        instances = instances;
      },
      error:function(xhr){
        instances =  false;
      }
    });
    return instances;
  }
};
















function urlEncode(url) {
  return encodeURIComponent(url)
  .replace(/!/g, '%21')
  .replace(/'/g, '%27')
  .replace(/\(/g, '%28')
  .replace(/\)/g, '%29')
  .replace(/\*/g, '%2A');
}
function check_authorize(access_key,secret_key){
  var e = new EC2(access_key,secret_key,'ap-northeast-1');
  var result = e.describe_instances();
  if(result == false){
    return false;
  }else{
    return true;
  }
};

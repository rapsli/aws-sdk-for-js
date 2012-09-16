function AmazonSDB(access_key,secret_key,region){
  this.initialize(access_key, secret_key, region);
}
AmazonSDB.prototype = {
  access_key:'',
  secret_key:'',
  subdomain:'sdb',
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
  }
}
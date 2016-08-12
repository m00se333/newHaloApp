function Options(url, size){
  this.url = url,
  this.method= "GET",
  this.qs= { size: size},
  this.headers=
  {'postman-token': '63e6c80b-a37c-2097-d8b7-6fbf86cf5216',
     'cache-control': 'no-cache',
     'ocp-apim-subscription-key': 'a9433cb3d47b4f7d9dca856b2c3f1809' }
  };

  module.exports = Options; 
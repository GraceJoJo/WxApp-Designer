
var defaultUrl = 'http://api.xiangqu.com/category/out/children';

var requestData = {
  params:{},
  success:function(res){

  },
  fail:function(){

  }
}

//get
function getRequest(requestData){
  request('GET',requestData);
}
//post
function postRequest(requestData){
  request('POST',requestData);
}

function request(method,requestData){
  var data = requestData.params;

  wx.request({
    url: defaultUrl,
    data: data,
    header: {
      'content-type': 'application/json',
      'Authorization': 'APPCODE 49cfb7e0b9a94317ac7d821a18a7d645'
    },
    method: method,
    success: function(res) {
      requestData.success(res);
    },
    fail: function(res) {},
    complete: function(res) {},
  })
}

module.exports = {
  getReq: getRequest,
  postReq: postRequest
}
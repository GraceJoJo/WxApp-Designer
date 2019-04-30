var api = {
  baseUrl: "http://api.xiangqu.com/",
  urlCategoryList: "category/out/children",
  urlCategoryDetail: "search/list?keyword=&page=0&sort=0&key=0db6ffd00372064035ef33763dd1c61e&t=1547700576328",
  urlHomeList: "shopping/banner/list",
}

var requestData = {
  url: {},
  params: {},
  success: function(res) {

  },
  error: function(res) {

  },
  fail: function(res) {

  }
}

//get
function getRequest(requestData) {
  request('GET', requestData);
}
//post
function postRequest(requestData) {
  request('POST', requestData);
}

function request(method, requestData) {
  wx.showLoading({
    title: '拼命加载中',
  })
  wx.request({
    url: api.baseUrl + requestData.url,
    data: requestData.params,
    header: {
      'content-type': 'application/json'
    },
    method: method,
    success: function(res) {
      wx.hideLoading()
      if (res.data.code == 200) {
        console.log(res.data)
        requestData.success(res.data.data);
      } else {
        var errorBean = {
          code: res.data.code,
          msg: res.data.msg
        }
        showToast(res.data.msg)
        requestData.error(errorBean);
      }
    },
    fail: function(res) {
      wx.hideLoading()
      requestData.fail(res)
    },
    complete: function(res) {
      wx.hideLoading()
    },
  })
}

module.exports = {
  getReq: getRequest,
  postReq: postRequest,
  apiConfig: api,
}
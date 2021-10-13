// const root = '/platform/api/';
const app = getApp();
const GetFullUrl = (imgurl) => {
  let fullurl = 'https://www.eastzebra.cn/servicepicture/' + imgurl;
  return fullurl;
}
const GetZipPicUrl = (imgurl) => {
  let zipPicUrl = 'https://www.eastzebra.cn/zippicture/' + imgurl + '.jpg';
  return zipPicUrl;
}
const API_LOCAL_URL = app.globalData.RequestlocalUrl;
const API_BASE_URL = app.globalData.RequestUrl;
module.exports = {
  GetFullUrl,
  GetZipPicUrl,
  /* 
  支付模块
 */
  Qfpay: API_BASE_URL + 'qfpay',//钱方支付
  Wxpay: API_BASE_URL + 'wxpay',//微信支付
  /* 
  用户模块
 */
  
  Geshophome: API_BASE_URL + '/geshophome',//获取用户首页店铺数据
  Getwxuserinfo: API_BASE_URL + '/getwxuserinfo',//获所有分类
  Wxuserinfo: API_BASE_URL + '/wxuserinfo',//提交用户信息
  // 收货地址相关
  Addaddress: API_BASE_URL + 'addaddress',//添加地址
  Deleteaddress: API_BASE_URL + '/deleteaddress',//删除地址
  Editaddress: API_BASE_URL + '/editaddress',//编辑地址
  Getaddressbyid: API_BASE_URL + '/getaddressbyid',//获取单个收货地址数据
  Getaddresslist: API_BASE_URL + '/getaddresslist',//获取用户所有收货地址列表
  Getdefaultaddress: API_BASE_URL + '/getdefaultaddress',//获取用户默认收货地址接口
  Updatadstate: API_BASE_URL + '/updatadstate',//修改收货地址是否默认状态接口
// formID
  Addformid: API_BASE_URL + '/addformid',//插入formId接口
  Getwxuserphone: API_BASE_URL + '/getwxuserphone',//修改收货地址是否默认状态接口

  /* 
  店铺模块
 */

  Getshopbyuser: API_BASE_URL + '/getshopbyuser',//获取自己的店铺
  Addshop: API_BASE_URL + '/addshop',//新增店铺
  Updateshopinfo: API_BASE_URL + '/updateshopinfo',//更新店铺
  Getshopbanner: API_BASE_URL + '/getshopbanner',//获取店铺banner
  Updateshopbanner: API_BASE_URL + '/updateshopbanner',//更改店铺banner
  Useraccessshop: API_BASE_URL + '/useraccessshop',//记录用户进店铺
  Addshopvisits: API_BASE_URL + '/addshopvisits',//获取访问数量
  Getshopbyid: API_BASE_URL + '/getshopbyid',//获取店铺详情
  Getwxacode: API_BASE_URL + '/getwxacode',//获取店铺详情

  /* 
  商品模块
 */
  Addcommodity: API_BASE_URL + '/addcommodity',//新增商品返回商品id
  Updatecommodity: API_BASE_URL + '/updatecommodity',//更新商品信息
  Getstorcolist: API_BASE_URL + '/getstorcolist',//根据分类获取商品列表
  Getcolist: API_BASE_URL + '/getcolist',//获取所有商品的列表，无分类包裹
  Getsortco: API_BASE_URL + '/getsortco',//获商品详情
  Deletecommodity: API_BASE_URL + '/deletecommodity',//删除商品
  Updatecostate: API_BASE_URL + '/updatecostate',//上下架管理
  Moveupcoturn: API_BASE_URL + '/moveupcoturn',//上移商品
  Toppingcoturn: API_BASE_URL + '/toppingcoturn',//置顶商品
  Getcommodity: API_BASE_URL + '/getcommodity',//获取单个商品的详情数据
  Updatspec: API_BASE_URL + '/updatspec',//更新修改规格


  
  
  // 分类
  Getsortlist: API_BASE_URL + '/getsortlist',//获所有分类
  Deletesort: API_BASE_URL + '/deletesort',//删除分类
  Editsortname: API_BASE_URL + '/editsortname',//更新分类
  Editsortorder: API_BASE_URL + '/editsortorder',//更新分类位置
  Addsort: API_BASE_URL + '/addsort',//更新分类位置

  
  


  /* 
  活动模块
 */
  
  Getactivityinfo: API_BASE_URL + '/getactivityinfo',//获取活动详情传参
  Getactivityinfo2: API_BASE_URL + '/getactivityinfo2',//获取活动详情传参
  SelectActivityRecordByOpenId: API_BASE_URL + '/selectActivityRecordByOpenId',//我参加的活动
  SelectActivityRecordByOpenId_ActivityId: API_BASE_URL + '/selectActivityRecordByOpenId_ActivityId',//判断用户是否参加过此次活动
  InsertActivityrecord: API_BASE_URL + '/insertActivityrecord',//参加活动
  SelectActivityRecordByOrder: API_BASE_URL + '/selectActivityRecordByOrder',//rank 排行榜
  InsertSupportrecord: API_BASE_URL + '/insertSupportrecord',//点赞
  AddsupportCount: API_BASE_URL + '/addsupportCount',//增加点赞数量
  GetActivityrecordById: API_BASE_URL + '/getActivityrecordById',//获取activityrecord详情
  SelecSupportRecordList: API_BASE_URL + '/selecSupportRecordList',//查询所有支持者的列表
  UpdateRecordWxcode: API_BASE_URL + 'updateRecordWxcode',//更新活动record的小程序码
  InsertFans_phone: API_BASE_URL + 'insertFans_phone',//获客粉丝的插入
  SelectFansPhoneByshopId: API_BASE_URL + 'selectFansPhoneByshopId',//根据shopId获取所拥有的获客粉丝
  Getactivitylist: API_BASE_URL + 'getactivitylist',//根据shopId所创建的活动
  ChangeRecordstatus: API_BASE_URL + 'changeRecordstatus',//根据recordId更改record状态

  
  /* 
  订单模块
 */
  Ordersubmit: API_BASE_URL + 'ordersubmit',//提交订单
  Getuserorders: API_BASE_URL + '/getuserorders',//订单列表
  Getorder: API_BASE_URL + '/getorder',//订单详情
  Getshopnopayorders: API_BASE_URL + '/getshopnopayorders',//获取店铺未支付订单
  Getshopreadyorders: API_BASE_URL + '/getshopreadyorders',//获取店铺待完成订单
  Getshoptakenorders: API_BASE_URL + '/getshoptakenorders',//获取店铺的已接单列表（按订单分类）
  Getshopcancelledorders: API_BASE_URL + '/getshopcancelledorders',//获取店铺已取消的订单
  Getshoptakenordersbyco: API_BASE_URL + '/getshoptakenordersbyco',//获取店铺的已接单列表(按商品分类)
  Gethistoryorders: API_BASE_URL + '/gethistoryorders',//获取店铺的历史订单
  Updateorderstate: API_BASE_URL + '/updateorderstate',//更新订单状态
  DeleteOrder: API_BASE_URL + '/deleteorder',//删除
  Getstatisticsorders: API_BASE_URL + '/getstatisticsorders',//
  Gethistoryorderbydate: API_BASE_URL + '/gethistoryorderbydate',//根据日期查找店铺订单管理中历史订单
  Getstatisticsorderbydate: API_BASE_URL + '/getstatisticsorderbydate',//根据日期查找店铺经营数据中各类型的历史订单

/*
* 经营数据
*/
  Getstatistics: API_BASE_URL + '/getshopstatistics',//经营数据概览

/*
* 钱包模块
*/
  
  Shopamount: API_BASE_URL + 'wallet/shopamount',//钱包余额
  Withdrawamount: API_BASE_URL + 'wallet/withdrawamount',//钱包日期列表
  Withdrawallamount: API_BASE_URL + 'wallet/withdrawallamount',//钱包所有列表
  Wxpayforper: API_BASE_URL + 'wxpayforper',//企业支付到个人（提现）
  Querywithdrawrestatus: API_BASE_URL + 'querywithdrawrestatus',//查询提现状态
/*
* 版本模块
*/
  SelectVersionById: API_BASE_URL + 'selectVersionById',//查询版本号信息
/*
* 公共模块
*/
  Zipservicepic: API_BASE_URL + '/zipservicepic',//更新修改规格
/*
* 物流信息模块
*/
  Expressadd: API_BASE_URL + '/express/add',//在订单中插入运单号
  Expressids: API_BASE_URL + '/express/ids',//获取运单号
};
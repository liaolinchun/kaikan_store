if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/status?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/home/base/pageHeader?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/home/base/pageHot?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/popupPay?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/pay/base/payHeader?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/category/base/head?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/tki-qrcode/tki-qrcode?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/wechat?hash=2a47a855ea45fffe0e7b4f4ab1bdb5514df55884');
require('../../pages/good/goodsHeader?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/counter?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/good/base/popupSpec?hash=7ffafa2924060d33ae0506378d8ad054c6e0fbd4');
require('../../pages/good/goodsEval?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/address/base/popupSite?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/game/share?hash=a995852105fa8b1e17a7c632a78194f84cfd617b');
require('../../pages/home/home?hash=7a7399d58af40533eb9f3a1891128d11cc48361e');
require('../../pages/order/base/createOrder?hash=9388042d2c1ff0a09df632e86d08417f1f76d1b7');
require('../../pages/pay/toPay?hash=b5cfa3be2b2018f389e404be697dcbbe53437fde');
require('../../pages/pay/endOrder?hash=b5cfa3be2b2018f389e404be697dcbbe53437fde');
require('../../pages/category/category?hash=f3579c33463829e2fc1e5399a83ba962d660bdc0');
require('../../pages/category/toCategory?hash=02a740bd8e47de5e5226a8b3bb33cd5e858922c7');
require('../../pages/user/user?hash=dd9a6a14762a75721f6e1aa531af16328239c13d');
require('../../pages/user/base/gameOrder?hash=37f4f40a374f4e68eb2a3de01878597756098480');
require('../../pages/set/set?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/set/base/setPhone?hash=dd9a6a14762a75721f6e1aa531af16328239c13d');
require('../../pages/public/login?hash=dd9a6a14762a75721f6e1aa531af16328239c13d');
require('../../pages/public/register?hash=dd9a6a14762a75721f6e1aa531af16328239c13d');
require('../../pages/good/goods?hash=de9d852abb87f74f36be7bcc62cd6f6895e9c7ae');
require('../../pages/good/base/ratings?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cart/cart?hash=a21d3673239538af9b14012097a11eb0e7dc5e11');
require('../../pages/order/order?hash=9388042d2c1ff0a09df632e86d08417f1f76d1b7');
require('../../pages/order/base/afterSale?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/base/orderComment?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/address/address?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/address/addressManage?hash=e30b6ea021692e526036d6e053d3846b5c130f82');
require('../../pages/game/index?hash=405433eb4970bd95cc24511c4b09e3cadac36357');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
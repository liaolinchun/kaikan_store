(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _my$getSystemInfoSync =




  my.getSystemInfoSync(),platform = _my$getSystemInfoSync.platform,pixelRatio = _my$getSystemInfoSync.pixelRatio,windowWidth = _my$getSystemInfoSync.windowWidth; // uni=>my runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


// 不支持的 API 列表
var todos = [
  // 'getRecorderManager',
  // 'getBackgroundAudioManager',
  // 'createInnerAudioContext',
  // 'createCameraContext',
  // 'createLivePlayerContext',
  // 'startAccelerometer',
  // 'startCompass',
  // 'authorize',
  // 'chooseInvoiceTitle',
  // 'addTemplate',
  // 'deleteTemplate',
  // 'getTemplateLibraryById',
  // 'getTemplateLibraryList',
  // 'getTemplateList',
  // 'sendTemplateMessage',
  // 'setEnableDebug',
  // 'getExtConfig',
  // 'getExtConfigSync',
  // 'onWindowResize',
  // 'offWindowResize'
];

// 存在兼容性的 API 列表
var canIUses = [
'startPullDownRefresh',
'setTabBarItem',
'setTabBarStyle',
'hideTabBar',
'showTabBar',
'setTabBarBadge',
'removeTabBarBadge',
'showTabBarRedDot',
'hideTabBarRedDot',
'openSetting',
'getSetting',
'createIntersectionObserver',
'getUpdateManager',
'setBackgroundColor',
'setBackgroundTextStyle',
'checkIsSupportSoterAuthentication',
'startSoterAuthentication',
'checkIsSoterEnrolledInDevice',
'openDocument',
'createVideoContext',
'onMemoryWarning',
'addPhoneContact'];


function _handleNetworkInfo(result) {
  switch (result.networkType) {
    case 'NOTREACHABLE':
      result.networkType = 'none';
      break;
    case 'WWAN':
      // TODO ?
      result.networkType = '3g';
      break;
    default:
      result.networkType = result.networkType.toLowerCase();
      break;}

  return {};
}

function _handleSystemInfo(result) {
  var platform = result.platform ? result.platform.toLowerCase() : 'devtools';
  if (!~['android', 'ios'].indexOf(platform)) {
    platform = 'devtools';
  }
  result.platform = platform;
}

var protocols = { // 需要做转换的 API 列表
  returnValue: function returnValue(methodName) {var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // 通用 returnValue 解析
    if (res.error || res.errorMessage) {
      res.errMsg = "".concat(methodName, ":fail ").concat(res.errorMessage || res.error);
      delete res.error;
      delete res.errorMessage;
    } else {
      res.errMsg = "".concat(methodName, ":ok");
    }
    return res;
  },
  request: {
    name: my.canIUse('request') ? 'request' : 'httpRequest',
    args: function args(fromArgs) {
      if (!fromArgs.header) {// 默认增加 header 参数，方便格式化 content-type
        fromArgs.header = {};
      }
      var headers = {
        'content-type': 'application/json' };

      Object.keys(fromArgs.header).forEach(function (key) {
        headers[key.toLocaleLowerCase()] = fromArgs.header[key];
      });
      return {
        header: function header() {var _header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var toArgs = arguments.length > 1 ? arguments[1] : undefined;
          return {
            name: 'headers',
            value: headers };

        },
        data: function data(_data) {
          // 钉钉在content-type为application/json时，不会自动序列化
          if (my.dd && headers['content-type'].indexOf('application/json') === 0) {
            return {
              name: 'data',
              value: JSON.stringify(_data) };

          }
          return {
            name: 'data',
            value: _data };

        },
        method: 'method', // TODO 支付宝小程序仅支持 get,post
        responseType: false };

    },
    returnValue: {
      status: 'statusCode',
      headers: 'header' } },


  setNavigationBarColor: {
    name: 'setNavigationBar',
    args: {
      frontColor: false,
      animation: false } },


  setNavigationBarTitle: {
    name: 'setNavigationBar' },

  showModal: function showModal()

  {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$showCancel = _ref.showCancel,showCancel = _ref$showCancel === void 0 ? true : _ref$showCancel;
    if (showCancel) {
      return {
        name: 'confirm',
        args: {
          cancelColor: false,
          confirmColor: false,
          cancelText: 'cancelButtonText',
          confirmText: 'confirmButtonText' },

        returnValue: function returnValue(fromRes, toRes) {
          toRes.confirm = fromRes.confirm;
          toRes.cancel = !fromRes.confirm;
        } };

    }
    return {
      name: 'alert',
      args: {
        confirmColor: false,
        confirmText: 'buttonText' },

      returnValue: function returnValue(fromRes, toRes) {
        toRes.confirm = true;
        toRes.cancel = false;
      } };

  },
  showToast: function showToast()

  {var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref2$icon = _ref2.icon,icon = _ref2$icon === void 0 ? 'success' : _ref2$icon;
    var args = {
      title: 'content',
      icon: 'type',
      duration: false,
      image: false,
      mask: false };

    if (icon === 'loading') {
      return {
        name: 'showLoading',
        args: args };

    }
    return {
      name: 'showToast',
      args: args };

  },
  showActionSheet: {
    name: 'showActionSheet',
    args: {
      itemList: 'items',
      itemColor: false },

    returnValue: {
      index: 'tapIndex' } },


  showLoading: {
    args: {
      title: 'content',
      mask: false } },


  uploadFile: {
    args: {
      name: 'fileName'

      // 从测试结果看，是有返回对象的，文档上没有说明。
    } },
  downloadFile: {
    returnValue: {
      apFilePath: 'tempFilePath' } },


  chooseVideo: {
    // 支付宝小程序文档中未找到（仅在getSetting处提及），但实际可用
    returnValue: {
      apFilePath: 'tempFilePath' } },


  connectSocket: {
    args: {
      method: false,
      protocols: false

      // TODO 有没有返回值还需要测试下
    } },
  chooseImage: {
    returnValue: {
      apFilePaths: 'tempFilePaths' } },


  previewImage: {
    args: function args(fromArgs) {
      // 支付宝小程序的 current 是索引值，而非图片地址。
      var currentIndex = Number(fromArgs.current);
      if (isNaN(currentIndex)) {
        if (fromArgs.current && Array.isArray(fromArgs.urls)) {
          var index = fromArgs.urls.indexOf(fromArgs.current);
          fromArgs.current = ~index ? index : 0;
        }
      } else {
        fromArgs.current = currentIndex;
      }
      return {
        indicator: false,
        loop: false };

    } },

  saveFile: {
    args: {
      tempFilePath: 'apFilePath' },

    returnValue: {
      apFilePath: 'savedFilePath' } },


  getSavedFileInfo: {
    args: {
      filePath: 'apFilePath' },

    returnValue: function returnValue(result) {
      if (result.fileList && result.fileList.length) {
        result.fileList.forEach(function (file) {
          file.filePath = file.apFilePath;
          delete file.apFilePath;
        });
      }
      return {};
    } },

  removeSavedFile: {
    args: {
      filePath: 'apFilePath' } },


  getLocation: {
    args: {
      type: false,
      altitude: false } },


  openLocation: {
    args: {
      // TODO address 参数在阿里上是必传的
    } },

  getNetworkType: {
    returnValue: _handleNetworkInfo },

  onNetworkStatusChange: {
    returnValue: _handleNetworkInfo },

  stopAccelerometer: {
    name: 'offAccelerometerChange' },

  stopCompass: {
    name: 'offCompassChange' },

  scanCode: {
    name: 'scan',
    args: function args(fromArgs) {
      if (fromArgs.scanType === 'qrCode') {
        fromArgs.type = 'qr';
        return {
          onlyFromCamera: 'hideAlbum' };

      } else if (fromArgs.scanType === 'barCode') {
        fromArgs.type = 'bar';
        return {
          onlyFromCamera: 'hideAlbum' };

      } else {
        return {
          scanType: false,
          onlyFromCamera: 'hideAlbum' };

      }
    },
    returnValue: {
      code: 'result' } },


  setClipboardData: {
    name: 'setClipboard',
    args: {
      data: 'text' } },


  getClipboardData: {
    name: 'getClipboard',
    returnValue: {
      text: 'data' } },


  pageScrollTo: {
    args: {
      duration: false } },


  login: {
    name: 'getAuthCode',
    returnValue: function returnValue(result) {
      result.code = result.authCode;
    } },

  getUserInfo: {
    name: my.canIUse('getOpenUserInfo') ? 'getOpenUserInfo' : 'getAuthUserInfo',
    returnValue: function returnValue(result) {
      if (my.canIUse('getOpenUserInfo')) {
        var response = {};
        try {
          response = JSON.parse(result.response).response;
        } catch (e) {}
        result.nickName = response.nickName;
        result.avatar = response.avatar;
      }
      result.userInfo = {
        nickName: result.nickName,
        avatarUrl: result.avatar };

    } },

  requestPayment: {
    name: 'tradePay',
    args: {
      orderInfo: 'tradeNO' } },


  getBLEDeviceServices: {
    returnValue: function returnValue(result) {
      result.services.forEach(function (item) {
        item.uuid = item.serviceId;
      });
    } },

  createBLEConnection: {
    name: 'connectBLEDevice',
    args: {
      timeout: false } },


  closeBLEConnection: {
    name: 'disconnectBLEDevice' },

  onBLEConnectionStateChange: {
    name: 'onBLEConnectionStateChanged' },

  makePhoneCall: {
    args: {
      phoneNumber: 'number' } },


  stopGyroscope: {
    name: 'offGyroscopeChange' },

  getSystemInfo: {
    returnValue: _handleSystemInfo },

  getSystemInfoSync: {
    returnValue: _handleSystemInfo },

  // 文档没提到，但是实测可用。
  canvasToTempFilePath: {
    returnValue: function returnValue(result) {
      // 真机的情况下会有 tempFilePath 这个值，因此需要主动修改。
      result.tempFilePath = result.apFilePath;
    } },

  setScreenBrightness: {
    args: {
      value: 'brightness' } },


  getScreenBrightness: {
    returnValue: {
      brightness: 'value' } },


  showShareMenu: {
    name: 'showSharePanel' },

  hideHomeButton: {
    name: 'hideBackHome' },

  saveImageToPhotosAlbum: {
    name: 'saveImage',
    args: {
      filePath: 'url' } },


  saveVideoToPhotosAlbum: {
    args: {
      filePath: 'src' } },


  chooseAddress: {
    name: 'getAddress',
    returnValue: function returnValue(result) {
      var info = result.result || {};
      result.userName = info.fullname;
      result.provinceName = info.prov;
      result.cityName = info.city;
      result.detailInfo = info.address;
      result.telNumber = info.mobilePhone;
      result.errMsg = result.resultStatus;
    } } };



var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = my[options.name || methodName].apply(my, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref3)


  {var fail = _ref3.fail,complete = _ref3.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['alipay'],
  share: ['alipay'],
  payment: ['alipay'],
  push: ['alipay'] };


function getProvider(_ref4)




{var service = _ref4.service,success = _ref4.success,fail = _ref4.fail,complete = _ref4.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function setStorageSync(key, data) {
  return my.setStorageSync({
    key: key,
    data: data });

}
function getStorageSync(key) {
  var result = my.getStorageSync({
    key: key });

  // 支付宝平台会返回一个 success 值，但是目前测试的结果这个始终是 true。当没有存储数据的时候，其它平台会返回空字符串。
  return result.data !== null ? result.data : '';
}
function removeStorageSync(key) {
  return my.removeStorageSync({
    key: key });

}

function startGyroscope(params) {
  if (hasOwn(params, 'interval')) {
    console.warn('支付宝小程序 startGyroscope暂不支持interval');
  }
  params.success && params.success({
    errMsg: 'startGyroscope:ok' });

  params.complete && params.complete({
    errMsg: 'startGyroscope:ok' });

}

function createExecCallback(execCallback) {
  return function wrapperExecCallback(res) {
    this.actions.forEach(function (action, index) {
      (action._$callbacks || []).forEach(function (callback) {
        callback(res[index]);
      });
    });
    if (isFn(execCallback)) {
      execCallback(res);
    }
  };
}

function addCallback(callback) {
  if (isFn(callback)) {
    var action = this.actions[this.actions.length - 1];
    if (action) {
      (action._$callbacks || (action._$callbacks = [])).push(callback);
    }
  }
}

function createSelectorQuery() {
  var query = my.createSelectorQuery();

  var oldExec = query.exec;
  var oldScrollOffset = query.scrollOffset;
  var oldBoundingClientRect = query.boundingClientRect;
  query.exec = function exec(callback) {
    return oldExec.call(this, createExecCallback(callback).bind(this));
  };
  query.scrollOffset = function scrollOffset(callback) {
    var ret = oldScrollOffset.call(this);
    addCallback.call(this, callback);
    return ret;
  };
  query.boundingClientRect = function boundingClientRect(callback) {
    var ret = oldBoundingClientRect.call(this);
    addCallback.call(this, callback);
    return ret;
  };

  if (!query.fields) {
    query.fields = function () {var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},rect = _ref5.rect,size = _ref5.size,scrollOffset = _ref5.scrollOffset;var callback = arguments.length > 1 ? arguments[1] : undefined;
      if (rect || size) {
        this.boundingClientRect();
      }
      if (scrollOffset) {
        this.scrollOffset();
      }
      addCallback.call(this, callback);
      return this;
    };
  }

  if (!query.in) {
    query.in = function () {
      return this;
    };
  }
  return query;
}

function createIntersectionObserver(component, options) {
  if (options && options.observeAll) {
    options.selectAll = options.observeAll;
    delete options.observeAll;
  }
  return my.createIntersectionObserver(options);
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setStorageSync: setStorageSync,
  getStorageSync: getStorageSync,
  removeStorageSync: removeStorageSync,
  startGyroscope: startGyroscope,
  createSelectorQuery: createSelectorQuery,
  createIntersectionObserver: createIntersectionObserver });


var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-alipay","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "my".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref6)


{var mocks = _ref6.mocks,initRefs = _ref6.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-alipay";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function handleLink(event) {var _ref7 =



  event.detail || event.value,vuePid = _ref7.vuePid,vueOptions = _ref7.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var isArray = Array.isArray;
var keyList = Object.keys;

function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var arrA = isArray(a);
    var arrB = isArray(b);
    var i, length, key;
    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }
      return true;
    }
    if (arrA !== arrB) return false;

    var dateA = a instanceof Date;
    var dateB = b instanceof Date;
    if (dateA !== dateB) return false;
    if (dateA && dateB) return a.getTime() === b.getTime();

    var regexpA = a instanceof RegExp;
    var regexpB = b instanceof RegExp;
    if (regexpA !== regexpB) return false;
    if (regexpA && regexpB) return a.toString() === b.toString();

    var keys = keyList(a);
    length = keys.length;
    if (length !== keyList(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!hasOwn.call(b, keys[i])) return false;
    }
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
}

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

var isComponent2 = my.canIUse('component2');

var mocks = ['$id'];

function initRefs() {

}

function initBehavior(_ref8)

{var properties = _ref8.properties;
  var props = {};

  Object.keys(properties).forEach(function (key) {
    props[key] = properties[key].value;
  });

  return {
    props: props };

}

function initRelation(detail) {
  this.props.onVueInit(detail);
}

function initSpecialMethods(mpInstance) {
  if (!mpInstance.$vm) {
    return;
  }
  var path = mpInstance.is || mpInstance.route;
  if (!path) {
    return;
  }
  if (path.indexOf('/') === 0) {
    path = path.substr(1);
  }
  var specialMethods = my.specialMethods && my.specialMethods[path];
  if (specialMethods) {
    specialMethods.forEach(function (method) {
      if (isFn(mpInstance.$vm[method])) {
        mpInstance[method] = function (event) {
          // TODO normalizeEvent
          mpInstance.$vm[method](event);
        };
      }
    });
  }
}

function initChildVues(mpInstance) {
  // 此时需保证当前 mpInstance 已经存在 $vm
  if (!mpInstance.$vm) {
    return;
  }
  mpInstance._$childVues && mpInstance._$childVues.forEach(function (_ref9)




  {var vuePid = _ref9.vuePid,vueOptions = _ref9.vueOptions,VueComponent = _ref9.VueComponent,childMPInstance = _ref9.mpInstance;
    // 父子关系
    handleLink.call(mpInstance, {
      detail: {
        vuePid: vuePid,
        vueOptions: vueOptions } });



    childMPInstance.$vm = new VueComponent(vueOptions);

    initSpecialMethods(childMPInstance);

    handleRef.call(vueOptions.parent.$scope, childMPInstance);

    childMPInstance.$vm.$mount();

    initChildVues(childMPInstance);

    childMPInstance.$vm._isMounted = true;
    childMPInstance.$vm.__call_hook('mounted');
    childMPInstance.$vm.__call_hook('onReady');
  });

  delete mpInstance._$childVues;
}

function handleRef(ref) {
  if (!ref) {
    return;
  }
  var refName = ref.props['data-ref'];
  var refInForName = ref.props['data-ref-in-for'];
  if (refName) {
    this.$vm.$refs[refName] = ref.$vm || ref;
  } else if (refInForName) {
    (this.$vm.$refs[refInForName] || (this.$vm.$refs[refInForName] = [])).push(ref.$vm || ref);
  }
}

function triggerEvent(type, detail, options) {
  var handler = this.props[customize('on-' + type)];
  if (!handler) {
    return;
  }

  var eventOpts = this.props['data-event-opts'];

  var target = {
    dataset: {
      eventOpts: eventOpts } };



  handler({
    type: customize(type),
    target: target,
    currentTarget: target,
    detail: detail });

}

var IGNORES = ['$slots', '$scopedSlots'];

function createObserver$1(isDidUpdate) {
  return function observe(props) {var _this2 = this;
    var prevProps = isDidUpdate ? props : this.props;
    var nextProps = isDidUpdate ? this.props : props;
    if (equal(prevProps, nextProps)) {
      return;
    }
    Object.keys(prevProps).forEach(function (name) {
      if (IGNORES.indexOf(name) === -1) {
        var prevValue = prevProps[name];
        var nextValue = nextProps[name];
        if (!isFn(prevValue) && !isFn(nextValue) && !equal(prevValue, nextValue)) {
          _this2.$vm[name] = nextProps[name];
        }
      }
    });
  };
}

var handleLink$1 = function () {
  if (isComponent2) {
    return function handleLink$1(detail) {
      return handleLink.call(this, {
        detail: detail });

    };
  }
  return function handleLink$1(detail) {
    if (this.$vm && this.$vm._isMounted) {// 父已初始化
      return handleLink.call(this, {
        detail: {
          vuePid: detail.vuePid,
          vueOptions: detail.vueOptions } });


    }
    // 支付宝通过 didMount 来实现，先子后父，故等父 ready 之后，统一初始化
    (this._$childVues || (this._$childVues = [])).unshift(detail);
  };
}();

function parseApp(vm) {
  Object.defineProperty(_vue.default.prototype, '$slots', {
    get: function get() {
      return this.$scope && this.$scope.props.$slots;
    },
    set: function set() {

    } });

  Object.defineProperty(_vue.default.prototype, '$scopedSlots', {
    get: function get() {
      return this.$scope && this.$scope.props.$scopedSlots;
    },
    set: function set() {

    } });


  _vue.default.prototype.$onAliGetAuthorize = function onAliGetAuthorize(method, $event) {var _this3 = this;
    my.getPhoneNumber({
      success: function success(res) {
        $event.type = 'getphonenumber';
        var response = JSON.parse(res.response).response;
        if (response.code === '10000') {// success
          $event.detail.errMsg = 'getPhoneNumber:ok';
          $event.detail.encryptedData = res.response;
        } else {
          $event.detail.errMsg = 'getPhoneNumber:fail Error: ' + res.response;
        }
        _this3[method]($event);
      },
      fail: function fail(res) {
        $event.type = 'getphonenumber';
        $event.detail.errMsg = 'getPhoneNumber:fail';
        _this3[method]($event);
      } });

  };

  _vue.default.prototype.$onAliAuthError = function $onAliAuthError(method, $event) {
    $event.type = 'getphonenumber';
    $event.detail.errMsg = 'getPhoneNumber:fail Error: ' + $event.detail.errorMessage;
    this[method]($event);
  };

  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var hooks$1 = [
'onShow',
'onHide',
// mp-alipay 特有
'onTitleClick',
'onOptionMenuClick',
'onPopMenuClick',
'onPullIntercept'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parsePage(vuePageOptions) {var _initVueComponent =
  initVueComponent(_vue.default, vuePageOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var pageOptions = {
    mixins: initBehaviors(vueOptions, initBehavior),
    data: initData(vueOptions, _vue.default.prototype),
    onLoad: function onLoad(args) {
      var properties = this.props;

      var options = {
        mpType: 'page',
        mpInstance: this,
        propsData: properties };


      // 初始化 vue 实例
      this.$vm = new VueComponent(options);

      initSpecialMethods(this);

      // 触发首次 setData
      this.$vm.$mount();

      this.$vm.$mp.query = args; // 兼容 mpvue
      this.$vm.__call_hook('onLoad', args);
    },
    onReady: function onReady() {
      initChildVues(this);
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    },
    onUnload: function onUnload() {
      this.$vm.__call_hook('onUnload');
      this.$vm.$destroy();
    },
    events: {
      // 支付宝小程序有些页面事件只能放在events下
      onBack: function onBack() {
        this.$vm.__call_hook('onBackPress');
      } },

    __r: handleRef,
    __e: handleEvent,
    __l: handleLink$1 };


  initHooks(pageOptions, hooks$1, vuePageOptions);

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Page(parsePage(vuePageOptions));
  }
}

function initVm(VueComponent) {
  if (this.$vm) {
    return;
  }
  var properties = this.props;

  var options = {
    mpType: 'component',
    mpInstance: this,
    propsData: properties };


  initVueIds(properties.vueId, this);

  if (isComponent2) {
    // 处理父子关系
    initRelation.call(this, {
      vuePid: this._$vuePid,
      vueOptions: options });


    // 初始化 vue 实例
    this.$vm = new VueComponent(options);

    // 触发首次 setData
    this.$vm.$mount();
  } else {
    // 处理父子关系
    initRelation.call(this, {
      vuePid: this._$vuePid,
      vueOptions: options,
      VueComponent: VueComponent,
      mpInstance: this });


    if (options.parent) {// 父组件已经初始化，直接初始化子，否则放到父组件的 didMount 中处理
      // 初始化 vue 实例
      this.$vm = new VueComponent(options);
      handleRef.call(options.parent.$scope, this);
      // 触发首次 setData
      this.$vm.$mount();

      initChildVues(this);

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    }
  }
}

function parseComponent(vueComponentOptions) {var _initVueComponent3 =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent4 = _slicedToArray(_initVueComponent3, 2),VueComponent = _initVueComponent4[0],vueOptions = _initVueComponent4[1];

  var properties = initProperties(vueOptions.props, false, vueOptions.__file);

  var props = {
    onVueInit: function onVueInit() {} };


  Object.keys(properties).forEach(function (key) {
    if (key !== 'vueSlots') {
      props[key] = properties[key].value;
    }
  });

  var componentOptions = {
    mixins: initBehaviors(vueOptions, initBehavior),
    data: initData(vueOptions, _vue.default.prototype),
    props: props,
    didMount: function didMount() {var _this4 = this;
      if (my.dd) {// 钉钉小程序底层基础库有 bug,组件嵌套使用时,在 didMount 中无法及时调用 props 中的方法
        setTimeout(function () {
          initVm.call(_this4, VueComponent);
        }, 4);
      } else {
        initVm.call(this, VueComponent);
      }

      initSpecialMethods(this);

      if (isComponent2) {
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      }
    },
    didUnmount: function didUnmount() {
      this.$vm && this.$vm.$destroy();
    },
    methods: {
      __r: handleRef,
      __e: handleEvent,
      __l: handleLink$1,
      triggerEvent: triggerEvent } };



  if (isComponent2) {
    componentOptions.onInit = function onInit() {
      initVm.call(this, VueComponent);
    };
    componentOptions.deriveDataFromProps = createObserver$1();
  } else {
    componentOptions.didUpdate = createObserver$1(true);
  }

  return componentOptions;
}

function createComponent(vueOptions) {
  {
    return my.defineComponent(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!my.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-alipay" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(my, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, my[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(my).forEach(function (name) {
    if (hasOwn(my, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, my[name]));
    }
  });
}

my.createApp = createApp;
my.createPage = createPage;
my.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ 13:
/*!*********************************************!*\
  !*** D:/uni-app/eryue26/utils/interface.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var domain = "https://www.tiktokshopee.com/";
var interfaces = {


  //登录注册
  login: domain + "apk/Login/act_login", //登录
  get_yan: domain + "apk/Login/get_yan", //获取注册验证码
  zhuce: domain + "apk/Login/zhuce", //注册
  set_password: domain + "apk/Login/set_password", //设置密码
  get_code: domain + "apk/Login/get_code", //修改密码时获取验证码
  edit_password: domain + "apk/Login/edit_password", //修改密码
  login_out: domain + "apk/Login/logout", //退出登录
  isLogin: domain + "apk/index/is_online",

  // 获取首页数据
  search: domain + "apk/Index/search",
  get_banner: domain + 'apk/Index/get_ad',
  get_bigclass: domain + 'apk/Index/get_bigclass',
  get_hotgoods: domain + 'apk/Index/get_hotgoods',

  //分类
  get_bc_goods: domain + 'apk/Classe/get_bc_goods', //点击一级分类获取商品
  get_goods_detail: domain + 'apk/Classe/get_goods_detail', //获取商品详情规格
  get_goods_assess: domain + 'apk/Classe/goods_assess', //获取商品评价
  add_assess: domain + 'apk/Classe/add_assess', //评价商品

  //订单
  all_order: domain + 'apk/Order/all_order', //获取个人所有订单

  //我的
  get_jifen: domain + 'apk/Mine/get_jifen', //积分
  get_news: domain + 'apk/Mine/get_news', //消息
  add_address: domain + 'apk/Mine/add_address', //添加收货地址
  get_address: domain + 'apk/Mine/get_address', //获取收货地址
  del_address: domain + 'apk/Mine/del_address', //删除收货地址
  set_moren: domain + 'apk/Mine/set_moren', //设置默认收货地址
  get_kefu: domain + 'apk/Mine/get_kefu', //获取客服电话

  //购物车
  add_car: domain + 'apk/Car/add_car', //加入购物车
  get_car: domain + 'apk/Car/get_car', //获取购物车的商品
  add_order: domain + 'apk/Car/add_order', //购物车产品中加入订单
  del_car: domain + 'apk/Car/del_car', //删除购物车
  on_buy: domain + 'apk/Car/on_buy', //直接购买

  //游戏
  action_kan: domain + 'apk/Play/action_kan', //发起人进入
  friend_kan: domain + 'apk/Play/friend_kan', //好友通过扫码进入砍砍页面
  set_play: domain + 'apk/Play/set_play', // 发起游戏&分享帮砍 发起人已经玩过
  help_power: domain + 'apk/Play/help_power', // 朋友助力
  kan_gou: domain + 'apk/Play/kan_gou' //游戏后直接购买
};


module.exports = interfaces;

/***/ }),

/***/ 16:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 17:
/*!*****************************************!*\
  !*** D:/uni-app/eryue26/store/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    hasLogin: false,
    userInfo: {} },

  mutations: {
    login: function login(state, provider) {
      state.hasLogin = true;
      state.userInfo = provider;
      uni.setStorage({ //缓存用户登陆状态
        key: 'userInfo',
        data: provider });


    },
    logout: function logout(state) {
      state.hasLogin = false;
      state.userInfo = {};
      uni.removeStorage({
        key: 'userInfo' });

    } } });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 18:
/*!*****************************************!*\
  !*** D:/uni-app/eryue26/utils/https.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {module.exports = function (param) {
  var _self = this,
  url = param.url,
  method = param.method,
  header = param.header || {},
  data = param.data || {};


  //请求方式:GET或POST(POST需配置header: {'content-type' : "application/x-www-form-urlencoded"},)
  if (method) {
    method = method.toUpperCase(); //小写改为大写
    if (method == "POST") {
      header = { 'content-type': "application/x-www-form-urlencoded" };




    }
  }

  //用户交互:加载圈
  if (!param.hideLoading) {
    uni.showLoading({ title: '加载中...' });
  }

  //网络请求
  uni.request({
    url: url,
    method: method || 'GET',
    // xhrFields:{
    //         withCredentials:true
    // },
    header: header,
    data: data,
    success: function success(res) {
      if (res.statusCode && res.statusCode != 200) {//api错误
        uni.showModal({
          content: "" + res.msg });

        return;
      }
      // wx.setStorageSync('cookieKey', res.header['Set-Cookie']);//保存Cookie到Storage
      typeof param.success == "function" && param.success(res.data);
    },
    fail: function fail(e) {
      uni.showModal({
        content: "" + e.msg });

      typeof param.fail == "function" && param.fail(e.data);
    },
    complete: function complete() {
      // console.log("网络请求complete");
      uni.hideLoading();
      typeof param.complete == "function" && param.complete();
      return;
    } });


};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!************************************************!*\
  !*** D:/uni-app/eryue26/static/mock/home.json ***!
  \************************************************/
/*! exports provided: statusCode, msg, data, default */
/***/ (function(module) {

module.exports = {"statusCode":"200","msg":"success","data":{"swiperList":[{"id":1,"src":"url1","img":"/static/img/home/1.jpg"},{"id":2,"src":"url2","img":"/static/img/home/2.jpg"},{"id":3,"src":"url3","img":"/static/img/home/3.jpg"}],"categoryList":[{"id":1,"name":"服饰内衣","img":"/static/img/category/1.png"},{"id":2,"name":"美妆个护","img":"/static/img/category/2.png"},{"id":3,"name":"珠宝配饰","img":"/static/img/category/3.png"},{"id":4,"name":"3C数码","img":"/static/img/category/4.png"},{"id":5,"name":"家用电器","img":"/static/img/category/5.png"},{"id":6,"name":"家居家具","img":"/static/img/category/6.png"},{"id":7,"name":"母婴用品","img":"/static/img/category/7.png"},{"id":8,"name":"美食零食","img":"/static/img/category/8.png"},{"id":9,"name":"旅行箱包","img":"/static/img/category/9.png"},{"id":10,"name":"宠物用品","img":"/static/img/category/10.png"},{"id":11,"name":"户外运动","img":"/static/img/category/11.png"},{"id":12,"name":"汽车用品","img":"/static/img/category/12.png"}],"orderLists":[{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"待付款","price":"999.00","img":"/static/img/home/s1.jpg","time":"2012-10-15","number":2,"iconTitle":"去付款"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"待付款","price":"899.00","img":"/static/img/home/s1.jpg","time":"2012-10-15","number":2,"iconTitle":"去付款"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"已取消","price":"119.00","img":"/static/img/home/s1.jpg","time":"2022-10-15","number":2,"iconTitle":"删除订单"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"待发货","price":"999.00","img":"/static/img/home/s1.jpg","time":"2012-10-15","number":2,"iconTitle":"提醒发货"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"待付款","price":"9549.00","img":"/static/img/home/s1.jpg","time":"2018-20-15","number":2,"iconTitle":"去付款"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"待收货","price":"999.00","img":"/static/img/home/s1.jpg","time":"2012-10-15","number":2,"iconTitle":"确认收货"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"已完成","price":"99559.00","img":"/static/img/home/s1.jpg","time":"2020-10-15","number":22,"iconTitle":"去评价"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","status":"已完成","price":"99.00","img":"/static/img/home/s1.jpg","time":"2020-10-15","number":42,"iconTitle":"去评价"}],"hotlists":[{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":138,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":1628,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","img":"/static/img/home/s1.jpg"},{"title":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","img":"/static/img/home/s1.jpg"}]}};

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-alipay","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-alipay","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-alipay","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-alipay","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************!*\
  !*** D:/uni-app/eryue26/static/mock/listdata.json ***!
  \****************************************************/
/*! exports provided: statusCode, msg, data, default */
/***/ (function(module) {

module.exports = {"statusCode":"200","msg":"success","data":[{"id":1,"title":"服饰内衣","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":3,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":4,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":5,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":6,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":7,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":228,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":8,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":9,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":10,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":11,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":12,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1},{"id":13,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":328,"new":"￥99.00","soldOut":500,"img":"s1.jpg","number":1}]},{"id":2,"title":"美妆个护","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":2228,"new":"￥99.00","soldOut":600,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":3,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":4,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":5,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":6,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":7,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":8,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":9,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":3,"title":"珠宝配饰","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":4,"title":"3C数码","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":5,"title":"家用电器","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":6,"title":"家居家具","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":7,"title":"母婴用品","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":8,"title":"美食零食","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":9,"title":"旅行箱包","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":10,"title":"宠物用品","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":11,"title":"运动户外","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]},{"id":12,"title":"汽车用品","banner":"/static/img/category/banner.jpg","list":[{"id":1,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"},{"id":2,"name":"小叶紫檀绿檀血檀崖柏檀香沉香老山檀木质多宝手串高档男佛珠手链","old":128,"new":"￥99.00","soldOut":500,"img":"s1.jpg"}]}]};

/***/ }),

/***/ 21:
/*!*************************************************!*\
  !*** D:/uni-app/eryue26/static/mock/citys.json ***!
  \*************************************************/
/*! exports provided: statusCode, msg, data, default */
/***/ (function(module) {

module.exports = {"statusCode":"200","msg":"success","data":[{"value":"110000","label":"北京市","children":[{"value":"110100","label":"北京市","children":[{"value":"110101","label":"东城区"},{"value":"110102","label":"西城区"},{"value":"110105","label":"朝阳区"},{"value":"110106","label":"丰台区"},{"value":"110107","label":"石景山区"},{"value":"110108","label":"海淀区"},{"value":"110109","label":"门头沟区"},{"value":"110111","label":"房山区"},{"value":"110112","label":"通州区"},{"value":"110113","label":"顺义区"},{"value":"110114","label":"昌平区"},{"value":"110115","label":"大兴区"},{"value":"110116","label":"怀柔区"},{"value":"110117","label":"平谷区"}]},{"value":"110200","label":"北京市辖县","children":[{"value":"110228","label":"密云县"},{"value":"110229","label":"延庆县"}]}]},{"value":"120000","label":"天津市","children":[{"value":"120100","label":"天津市","children":[{"value":"120101","label":"和平区"},{"value":"120102","label":"河东区"},{"value":"120103","label":"河西区"},{"value":"120104","label":"南开区"},{"value":"120105","label":"河北区"},{"value":"120106","label":"红桥区"},{"value":"120110","label":"东丽区"},{"value":"120111","label":"西青区"},{"value":"120112","label":"津南区"},{"value":"120113","label":"北辰区"},{"value":"120114","label":"武清区"},{"value":"120115","label":"宝坻区"},{"value":"120116","label":"滨海新区"}]},{"value":"120200","label":"天津市辖县","children":[{"value":"120221","label":"宁河县"},{"value":"120223","label":"静海县"},{"value":"120225","label":"蓟县"}]}]},{"value":"130000","label":"河北省","children":[{"value":"130100","label":"石家庄市","children":[{"value":"130102","label":"长安区"},{"value":"130104","label":"桥西区"},{"value":"130105","label":"新华区"},{"value":"130107","label":"井陉矿区"},{"value":"130108","label":"裕华区"},{"value":"130109","label":"藁城区"},{"value":"130110","label":"鹿泉区"},{"value":"130111","label":"栾城区"},{"value":"130121","label":"井陉县"},{"value":"130123","label":"正定县"},{"value":"130125","label":"行唐县"},{"value":"130126","label":"灵寿县"},{"value":"130127","label":"高邑县"},{"value":"130128","label":"深泽县"},{"value":"130129","label":"赞皇县"},{"value":"130130","label":"无极县"},{"value":"130131","label":"平山县"},{"value":"130132","label":"元氏县"},{"value":"130133","label":"赵县"},{"value":"130181","label":"辛集市"},{"value":"130183","label":"晋州市"},{"value":"130184","label":"新乐市"}]},{"value":"130200","label":"唐山市","children":[{"value":"130202","label":"路南区"},{"value":"130203","label":"路北区"},{"value":"130204","label":"古冶区"},{"value":"130205","label":"开平区"},{"value":"130207","label":"丰南区"},{"value":"130208","label":"丰润区"},{"value":"130209","label":"曹妃甸区"},{"value":"130223","label":"滦县"},{"value":"130224","label":"滦南县"},{"value":"130225","label":"乐亭县"},{"value":"130227","label":"迁西县"},{"value":"130229","label":"玉田县"},{"value":"130281","label":"遵化市"},{"value":"130283","label":"迁安市"}]},{"value":"130300","label":"秦皇岛市","children":[{"value":"130302","label":"海港区"},{"value":"130303","label":"山海关区"},{"value":"130304","label":"北戴河区"},{"value":"130321","label":"青龙满族自治县"},{"value":"130322","label":"昌黎县"},{"value":"130323","label":"抚宁县"},{"value":"130324","label":"卢龙县"}]},{"value":"130400","label":"邯郸市","children":[{"value":"130402","label":"邯山区"},{"value":"130403","label":"丛台区"},{"value":"130404","label":"复兴区"},{"value":"130406","label":"峰峰矿区"},{"value":"130421","label":"邯郸县"},{"value":"130423","label":"临漳县"},{"value":"130424","label":"成安县"},{"value":"130425","label":"大名县"},{"value":"130426","label":"涉县"},{"value":"130427","label":"磁县"},{"value":"130428","label":"肥乡县"},{"value":"130429","label":"永年县"},{"value":"130430","label":"邱县"},{"value":"130431","label":"鸡泽县"},{"value":"130432","label":"广平县"},{"value":"130433","label":"馆陶县"},{"value":"130434","label":"魏县"},{"value":"130435","label":"曲周县"},{"value":"130481","label":"武安市"}]},{"value":"130500","label":"邢台市","children":[{"value":"130502","label":"桥东区"},{"value":"130503","label":"桥西区"},{"value":"130521","label":"邢台县"},{"value":"130522","label":"临城县"},{"value":"130523","label":"内丘县"},{"value":"130524","label":"柏乡县"},{"value":"130525","label":"隆尧县"},{"value":"130526","label":"任县"},{"value":"130527","label":"南和县"},{"value":"130528","label":"宁晋县"},{"value":"130529","label":"巨鹿县"},{"value":"130530","label":"新河县"},{"value":"130531","label":"广宗县"},{"value":"130532","label":"平乡县"},{"value":"130533","label":"威县"},{"value":"130534","label":"清河县"},{"value":"130535","label":"临西县"},{"value":"130581","label":"南宫市"},{"value":"130582","label":"沙河市"}]},{"value":"130600","label":"保定市","children":[{"value":"130602","label":"新市区"},{"value":"130603","label":"北市区"},{"value":"130604","label":"南市区"},{"value":"130621","label":"满城县"},{"value":"130622","label":"清苑县"},{"value":"130623","label":"涞水县"},{"value":"130624","label":"阜平县"},{"value":"130625","label":"徐水县"},{"value":"130626","label":"定兴县"},{"value":"130627","label":"唐县"},{"value":"130628","label":"高阳县"},{"value":"130629","label":"容城县"},{"value":"130630","label":"涞源县"},{"value":"130631","label":"望都县"},{"value":"130632","label":"安新县"},{"value":"130633","label":"易县"},{"value":"130634","label":"曲阳县"},{"value":"130635","label":"蠡县"},{"value":"130636","label":"顺平县"},{"value":"130637","label":"博野县"},{"value":"130638","label":"雄县"},{"value":"130681","label":"涿州市"},{"value":"130682","label":"定州市"},{"value":"130683","label":"安国市"},{"value":"130684","label":"高碑店市"}]},{"value":"130700","label":"张家口市","children":[{"value":"130702","label":"桥东区"},{"value":"130703","label":"桥西区"},{"value":"130705","label":"宣化区"},{"value":"130706","label":"下花园区"},{"value":"130721","label":"宣化县"},{"value":"130722","label":"张北县"},{"value":"130723","label":"康保县"},{"value":"130724","label":"沽源县"},{"value":"130725","label":"尚义县"},{"value":"130726","label":"蔚县"},{"value":"130727","label":"阳原县"},{"value":"130728","label":"怀安县"},{"value":"130729","label":"万全县"},{"value":"130730","label":"怀来县"},{"value":"130731","label":"涿鹿县"},{"value":"130732","label":"赤城县"},{"value":"130733","label":"崇礼县"}]},{"value":"130800","label":"承德市","children":[{"value":"130802","label":"双桥区"},{"value":"130803","label":"双滦区"},{"value":"130804","label":"鹰手营子矿区"},{"value":"130821","label":"承德县"},{"value":"130822","label":"兴隆县"},{"value":"130823","label":"平泉县"},{"value":"130824","label":"滦平县"},{"value":"130825","label":"隆化县"},{"value":"130826","label":"丰宁满族自治县"},{"value":"130827","label":"宽城满族自治县"},{"value":"130828","label":"围场满族蒙古族自治县"}]},{"value":"130900","label":"沧州市","children":[{"value":"130902","label":"新华区"},{"value":"130903","label":"运河区"},{"value":"130921","label":"沧县"},{"value":"130922","label":"青县"},{"value":"130923","label":"东光县"},{"value":"130924","label":"海兴县"},{"value":"130925","label":"盐山县"},{"value":"130926","label":"肃宁县"},{"value":"130927","label":"南皮县"},{"value":"130928","label":"吴桥县"},{"value":"130929","label":"献县"},{"value":"130930","label":"孟村回族自治县"},{"value":"130981","label":"泊头市"},{"value":"130982","label":"任丘市"},{"value":"130983","label":"黄骅市"},{"value":"130984","label":"河间市"}]},{"value":"131000","label":"廊坊市","children":[{"value":"131002","label":"安次区"},{"value":"131003","label":"广阳区"},{"value":"131022","label":"固安县"},{"value":"131023","label":"永清县"},{"value":"131024","label":"香河县"},{"value":"131025","label":"大城县"},{"value":"131026","label":"文安县"},{"value":"131028","label":"大厂回族自治县"},{"value":"131081","label":"霸州市"},{"value":"131082","label":"三河市"}]},{"value":"131100","label":"衡水市","children":[{"value":"131102","label":"桃城区"},{"value":"131121","label":"枣强县"},{"value":"131122","label":"武邑县"},{"value":"131123","label":"武强县"},{"value":"131124","label":"饶阳县"},{"value":"131125","label":"安平县"},{"value":"131126","label":"故城县"},{"value":"131127","label":"景县"},{"value":"131128","label":"阜城县"},{"value":"131181","label":"冀州市"},{"value":"131182","label":"深州市"}]}]},{"value":"140000","label":"山西省","children":[{"value":"140100","label":"太原市","children":[{"value":"140105","label":"小店区"},{"value":"140106","label":"迎泽区"},{"value":"140107","label":"杏花岭区"},{"value":"140108","label":"尖草坪区"},{"value":"140109","label":"万柏林区"},{"value":"140110","label":"晋源区"},{"value":"140121","label":"清徐县"},{"value":"140122","label":"阳曲县"},{"value":"140123","label":"娄烦县"},{"value":"140181","label":"古交市"}]},{"value":"140200","label":"大同市","children":[{"value":"140202","label":"城区"},{"value":"140203","label":"矿区"},{"value":"140211","label":"南郊区"},{"value":"140212","label":"新荣区"},{"value":"140221","label":"阳高县"},{"value":"140222","label":"天镇县"},{"value":"140223","label":"广灵县"},{"value":"140224","label":"灵丘县"},{"value":"140225","label":"浑源县"},{"value":"140226","label":"左云县"},{"value":"140227","label":"大同县"}]},{"value":"140300","label":"阳泉市","children":[{"value":"140302","label":"城区"},{"value":"140303","label":"矿区"},{"value":"140311","label":"郊区"},{"value":"140321","label":"平定县"},{"value":"140322","label":"盂县"}]},{"value":"140400","label":"长治市","children":[{"value":"140402","label":"城区"},{"value":"140411","label":"郊区"},{"value":"140421","label":"长治县"},{"value":"140423","label":"襄垣县"},{"value":"140424","label":"屯留县"},{"value":"140425","label":"平顺县"},{"value":"140426","label":"黎城县"},{"value":"140427","label":"壶关县"},{"value":"140428","label":"长子县"},{"value":"140429","label":"武乡县"},{"value":"140430","label":"沁县"},{"value":"140431","label":"沁源县"},{"value":"140481","label":"潞城市"}]},{"value":"140500","label":"晋城市","children":[{"value":"140502","label":"城区"},{"value":"140521","label":"沁水县"},{"value":"140522","label":"阳城县"},{"value":"140524","label":"陵川县"},{"value":"140525","label":"泽州县"},{"value":"140581","label":"高平市"}]},{"value":"140600","label":"朔州市","children":[{"value":"140602","label":"朔城区"},{"value":"140603","label":"平鲁区"},{"value":"140621","label":"山阴县"},{"value":"140622","label":"应县"},{"value":"140623","label":"右玉县"},{"value":"140624","label":"怀仁县"}]},{"value":"140700","label":"晋中市","children":[{"value":"140702","label":"榆次区"},{"value":"140721","label":"榆社县"},{"value":"140722","label":"左权县"},{"value":"140723","label":"和顺县"},{"value":"140724","label":"昔阳县"},{"value":"140725","label":"寿阳县"},{"value":"140726","label":"太谷县"},{"value":"140727","label":"祁县"},{"value":"140728","label":"平遥县"},{"value":"140729","label":"灵石县"},{"value":"140781","label":"介休市"}]},{"value":"140800","label":"运城市","children":[{"value":"140802","label":"盐湖区"},{"value":"140821","label":"临猗县"},{"value":"140822","label":"万荣县"},{"value":"140823","label":"闻喜县"},{"value":"140824","label":"稷山县"},{"value":"140825","label":"新绛县"},{"value":"140826","label":"绛县"},{"value":"140827","label":"垣曲县"},{"value":"140828","label":"夏县"},{"value":"140829","label":"平陆县"},{"value":"140830","label":"芮城县"},{"value":"140881","label":"永济市"},{"value":"140882","label":"河津市"}]},{"value":"140900","label":"忻州市","children":[{"value":"140902","label":"忻府区"},{"value":"140921","label":"定襄县"},{"value":"140922","label":"五台县"},{"value":"140923","label":"代县"},{"value":"140924","label":"繁峙县"},{"value":"140925","label":"宁武县"},{"value":"140926","label":"静乐县"},{"value":"140927","label":"神池县"},{"value":"140928","label":"五寨县"},{"value":"140929","label":"岢岚县"},{"value":"140930","label":"河曲县"},{"value":"140931","label":"保德县"},{"value":"140932","label":"偏关县"},{"value":"140981","label":"原平市"}]},{"value":"141000","label":"临汾市","children":[{"value":"141002","label":"尧都区"},{"value":"141021","label":"曲沃县"},{"value":"141022","label":"翼城县"},{"value":"141023","label":"襄汾县"},{"value":"141024","label":"洪洞县"},{"value":"141025","label":"古县"},{"value":"141026","label":"安泽县"},{"value":"141027","label":"浮山县"},{"value":"141028","label":"吉县"},{"value":"141029","label":"乡宁县"},{"value":"141030","label":"大宁县"},{"value":"141031","label":"隰县"},{"value":"141032","label":"永和县"},{"value":"141033","label":"蒲县"},{"value":"141034","label":"汾西县"},{"value":"141081","label":"侯马市"},{"value":"141082","label":"霍州市"}]},{"value":"141100","label":"吕梁市","children":[{"value":"141102","label":"离石区"},{"value":"141121","label":"文水县"},{"value":"141122","label":"交城县"},{"value":"141123","label":"兴县"},{"value":"141124","label":"临县"},{"value":"141125","label":"柳林县"},{"value":"141126","label":"石楼县"},{"value":"141127","label":"岚县"},{"value":"141128","label":"方山县"},{"value":"141129","label":"中阳县"},{"value":"141130","label":"交口县"},{"value":"141181","label":"孝义市"},{"value":"141182","label":"汾阳市"}]}]},{"value":"150000","label":"内蒙古自治区","children":[{"value":"150100","label":"呼和浩特市","children":[{"value":"150102","label":"新城区"},{"value":"150103","label":"回民区"},{"value":"150104","label":"玉泉区"},{"value":"150105","label":"赛罕区"},{"value":"150121","label":"土默特左旗"},{"value":"150122","label":"托克托县"},{"value":"150123","label":"和林格尔县"},{"value":"150124","label":"清水河县"},{"value":"150125","label":"武川县"}]},{"value":"150200","label":"包头市","children":[{"value":"150202","label":"东河区"},{"value":"150203","label":"昆都仑区"},{"value":"150204","label":"青山区"},{"value":"150205","label":"石拐区"},{"value":"150206","label":"白云鄂博矿区"},{"value":"150207","label":"九原区"},{"value":"150221","label":"土默特右旗"},{"value":"150222","label":"固阳县"},{"value":"150223","label":"达尔罕茂明安联合旗"}]},{"value":"150300","label":"乌海市","children":[{"value":"150302","label":"海勃湾区"},{"value":"150303","label":"海南区"},{"value":"150304","label":"乌达区"}]},{"value":"150400","label":"赤峰市","children":[{"value":"150402","label":"红山区"},{"value":"150403","label":"元宝山区"},{"value":"150404","label":"松山区"},{"value":"150421","label":"阿鲁科尔沁旗"},{"value":"150422","label":"巴林左旗"},{"value":"150423","label":"巴林右旗"},{"value":"150424","label":"林西县"},{"value":"150425","label":"克什克腾旗"},{"value":"150426","label":"翁牛特旗"},{"value":"150428","label":"喀喇沁旗"},{"value":"150429","label":"宁城县"},{"value":"150430","label":"敖汉旗"}]},{"value":"150500","label":"通辽市","children":[{"value":"150502","label":"科尔沁区"},{"value":"150521","label":"科尔沁左翼中旗"},{"value":"150522","label":"科尔沁左翼后旗"},{"value":"150523","label":"开鲁县"},{"value":"150524","label":"库伦旗"},{"value":"150525","label":"奈曼旗"},{"value":"150526","label":"扎鲁特旗"},{"value":"150581","label":"霍林郭勒市"}]},{"value":"150600","label":"鄂尔多斯市","children":[{"value":"150602","label":"东胜区"},{"value":"150621","label":"达拉特旗"},{"value":"150622","label":"准格尔旗"},{"value":"150623","label":"鄂托克前旗"},{"value":"150624","label":"鄂托克旗"},{"value":"150625","label":"杭锦旗"},{"value":"150626","label":"乌审旗"},{"value":"150627","label":"伊金霍洛旗"}]},{"value":"150700","label":"呼伦贝尔市","children":[{"value":"150702","label":"海拉尔区"},{"value":"150703","label":"扎赉诺尔区"},{"value":"150721","label":"阿荣旗"},{"value":"150722","label":"莫力达瓦达斡尔族自治旗"},{"value":"150723","label":"鄂伦春自治旗"},{"value":"150724","label":"鄂温克族自治旗"},{"value":"150725","label":"陈巴尔虎旗"},{"value":"150726","label":"新巴尔虎左旗"},{"value":"150727","label":"新巴尔虎右旗"},{"value":"150781","label":"满洲里市"},{"value":"150782","label":"牙克石市"},{"value":"150783","label":"扎兰屯市"},{"value":"150784","label":"额尔古纳市"},{"value":"150785","label":"根河市"}]},{"value":"150800","label":"巴彦淖尔市","children":[{"value":"150802","label":"临河区"},{"value":"150821","label":"五原县"},{"value":"150822","label":"磴口县"},{"value":"150823","label":"乌拉特前旗"},{"value":"150824","label":"乌拉特中旗"},{"value":"150825","label":"乌拉特后旗"},{"value":"150826","label":"杭锦后旗"}]},{"value":"150900","label":"乌兰察布市","children":[{"value":"150902","label":"集宁区"},{"value":"150921","label":"卓资县"},{"value":"150922","label":"化德县"},{"value":"150923","label":"商都县"},{"value":"150924","label":"兴和县"},{"value":"150925","label":"凉城县"},{"value":"150926","label":"察哈尔右翼前旗"},{"value":"150927","label":"察哈尔右翼中旗"},{"value":"150928","label":"察哈尔右翼后旗"},{"value":"150929","label":"四子王旗"},{"value":"150981","label":"丰镇市"}]},{"value":"152200","label":"兴安盟","children":[{"value":"152201","label":"乌兰浩特市"},{"value":"152202","label":"阿尔山市"},{"value":"152221","label":"科尔沁右翼前旗"},{"value":"152222","label":"科尔沁右翼中旗"},{"value":"152223","label":"扎赉特旗"},{"value":"152224","label":"突泉县"}]},{"value":"152500","label":"锡林郭勒盟","children":[{"value":"152501","label":"二连浩特市"},{"value":"152502","label":"锡林浩特市"},{"value":"152522","label":"阿巴嘎旗"},{"value":"152523","label":"苏尼特左旗"},{"value":"152524","label":"苏尼特右旗"},{"value":"152525","label":"东乌珠穆沁旗"},{"value":"152526","label":"西乌珠穆沁旗"},{"value":"152527","label":"太仆寺旗"},{"value":"152528","label":"镶黄旗"},{"value":"152529","label":"正镶白旗"},{"value":"152530","label":"正蓝旗"},{"value":"152531","label":"多伦县"}]},{"value":"152900","label":"阿拉善盟","children":[{"value":"152921","label":"阿拉善左旗"},{"value":"152922","label":"阿拉善右旗"},{"value":"152923","label":"额济纳旗"}]}]},{"value":"210000","label":"辽宁省","children":[{"value":"210100","label":"沈阳市","children":[{"value":"210102","label":"和平区"},{"value":"210103","label":"沈河区"},{"value":"210104","label":"大东区"},{"value":"210105","label":"皇姑区"},{"value":"210106","label":"铁西区"},{"value":"210111","label":"苏家屯区"},{"value":"210112","label":"浑南区"},{"value":"210113","label":"沈北新区"},{"value":"210114","label":"于洪区"},{"value":"210122","label":"辽中县"},{"value":"210123","label":"康平县"},{"value":"210124","label":"法库县"},{"value":"210181","label":"新民市"}]},{"value":"210200","label":"大连市","children":[{"value":"210202","label":"中山区"},{"value":"210203","label":"西岗区"},{"value":"210204","label":"沙河口区"},{"value":"210211","label":"甘井子区"},{"value":"210212","label":"旅顺口区"},{"value":"210213","label":"金州区"},{"value":"210224","label":"长海县"},{"value":"210281","label":"瓦房店市"},{"value":"210282","label":"普兰店市"},{"value":"210283","label":"庄河市"}]},{"value":"210300","label":"鞍山市","children":[{"value":"210302","label":"铁东区"},{"value":"210303","label":"铁西区"},{"value":"210304","label":"立山区"},{"value":"210311","label":"千山区"},{"value":"210321","label":"台安县"},{"value":"210323","label":"岫岩满族自治县"},{"value":"210381","label":"海城市"}]},{"value":"210400","label":"抚顺市","children":[{"value":"210402","label":"新抚区"},{"value":"210403","label":"东洲区"},{"value":"210404","label":"望花区"},{"value":"210411","label":"顺城区"},{"value":"210421","label":"抚顺县"},{"value":"210422","label":"新宾满族自治县"},{"value":"210423","label":"清原满族自治县"}]},{"value":"210500","label":"本溪市","children":[{"value":"210502","label":"平山区"},{"value":"210503","label":"溪湖区"},{"value":"210504","label":"明山区"},{"value":"210505","label":"南芬区"},{"value":"210521","label":"本溪满族自治县"},{"value":"210522","label":"桓仁满族自治县"}]},{"value":"210600","label":"丹东市","children":[{"value":"210602","label":"元宝区"},{"value":"210603","label":"振兴区"},{"value":"210604","label":"振安区"},{"value":"210624","label":"宽甸满族自治县"},{"value":"210681","label":"东港市"},{"value":"210682","label":"凤城市"}]},{"value":"210700","label":"锦州市","children":[{"value":"210702","label":"古塔区"},{"value":"210703","label":"凌河区"},{"value":"210711","label":"太和区"},{"value":"210726","label":"黑山县"},{"value":"210727","label":"义县"},{"value":"210781","label":"凌海市"},{"value":"210782","label":"北镇市"}]},{"value":"210800","label":"营口市","children":[{"value":"210802","label":"站前区"},{"value":"210803","label":"西市区"},{"value":"210804","label":"鲅鱼圈区"},{"value":"210811","label":"老边区"},{"value":"210881","label":"盖州市"},{"value":"210882","label":"大石桥市"}]},{"value":"210900","label":"阜新市","children":[{"value":"210902","label":"海州区"},{"value":"210903","label":"新邱区"},{"value":"210904","label":"太平区"},{"value":"210905","label":"清河门区"},{"value":"210911","label":"细河区"},{"value":"210921","label":"阜新蒙古族自治县"},{"value":"210922","label":"彰武县"}]},{"value":"211000","label":"辽阳市","children":[{"value":"211002","label":"白塔区"},{"value":"211003","label":"文圣区"},{"value":"211004","label":"宏伟区"},{"value":"211005","label":"弓长岭区"},{"value":"211011","label":"太子河区"},{"value":"211021","label":"辽阳县"},{"value":"211081","label":"灯塔市"}]},{"value":"211100","label":"盘锦市","children":[{"value":"211102","label":"双台子区"},{"value":"211103","label":"兴隆台区"},{"value":"211121","label":"大洼县"},{"value":"211122","label":"盘山县"}]},{"value":"211200","label":"铁岭市","children":[{"value":"211202","label":"银州区"},{"value":"211204","label":"清河区"},{"value":"211221","label":"铁岭县"},{"value":"211223","label":"西丰县"},{"value":"211224","label":"昌图县"},{"value":"211281","label":"调兵山市"},{"value":"211282","label":"开原市"}]},{"value":"211300","label":"朝阳市","children":[{"value":"211302","label":"双塔区"},{"value":"211303","label":"龙城区"},{"value":"211321","label":"朝阳县"},{"value":"211322","label":"建平县"},{"value":"211324","label":"喀喇沁左翼蒙古族自治县"},{"value":"211381","label":"北票市"},{"value":"211382","label":"凌源市"}]},{"value":"211400","label":"葫芦岛市","children":[{"value":"211402","label":"连山区"},{"value":"211403","label":"龙港区"},{"value":"211404","label":"南票区"},{"value":"211421","label":"绥中县"},{"value":"211422","label":"建昌县"},{"value":"211481","label":"兴城市"}]}]},{"value":"220000","label":"吉林省","children":[{"value":"220100","label":"长春市","children":[{"value":"220102","label":"南关区"},{"value":"220103","label":"宽城区"},{"value":"220104","label":"朝阳区"},{"value":"220105","label":"二道区"},{"value":"220106","label":"绿园区"},{"value":"220112","label":"双阳区"},{"value":"220113","label":"九台区"},{"value":"220122","label":"农安县"},{"value":"220182","label":"榆树市"},{"value":"220183","label":"德惠市"}]},{"value":"220200","label":"吉林市","children":[{"value":"220202","label":"昌邑区"},{"value":"220203","label":"龙潭区"},{"value":"220204","label":"船营区"},{"value":"220211","label":"丰满区"},{"value":"220221","label":"永吉县"},{"value":"220281","label":"蛟河市"},{"value":"220282","label":"桦甸市"},{"value":"220283","label":"舒兰市"},{"value":"220284","label":"磐石市"}]},{"value":"220300","label":"四平市","children":[{"value":"220302","label":"铁西区"},{"value":"220303","label":"铁东区"},{"value":"220322","label":"梨树县"},{"value":"220323","label":"伊通满族自治县"},{"value":"220381","label":"公主岭市"},{"value":"220382","label":"双辽市"}]},{"value":"220400","label":"辽源市","children":[{"value":"220402","label":"龙山区"},{"value":"220403","label":"西安区"},{"value":"220421","label":"东丰县"},{"value":"220422","label":"东辽县"}]},{"value":"220500","label":"通化市","children":[{"value":"220502","label":"东昌区"},{"value":"220503","label":"二道江区"},{"value":"220521","label":"通化县"},{"value":"220523","label":"辉南县"},{"value":"220524","label":"柳河县"},{"value":"220581","label":"梅河口市"},{"value":"220582","label":"集安市"}]},{"value":"220600","label":"白山市","children":[{"value":"220602","label":"浑江区"},{"value":"220605","label":"江源区"},{"value":"220621","label":"抚松县"},{"value":"220622","label":"靖宇县"},{"value":"220623","label":"长白朝鲜族自治县"},{"value":"220681","label":"临江市"}]},{"value":"220700","label":"松原市","children":[{"value":"220702","label":"宁江区"},{"value":"220721","label":"前郭尔罗斯蒙古族自治县"},{"value":"220722","label":"长岭县"},{"value":"220723","label":"乾安县"},{"value":"220781","label":"扶余市"}]},{"value":"220800","label":"白城市","children":[{"value":"220802","label":"洮北区"},{"value":"220821","label":"镇赉县"},{"value":"220822","label":"通榆县"},{"value":"220881","label":"洮南市"},{"value":"220882","label":"大安市"}]},{"value":"222400","label":"延边朝鲜族自治州","children":[{"value":"222401","label":"延吉市"},{"value":"222402","label":"图们市"},{"value":"222403","label":"敦化市"},{"value":"222404","label":"珲春市"},{"value":"222405","label":"龙井市"},{"value":"222406","label":"和龙市"},{"value":"222424","label":"汪清县"},{"value":"222426","label":"安图县"}]}]},{"value":"230000","label":"黑龙江省","children":[{"value":"230100","label":"哈尔滨市","children":[{"value":"230102","label":"道里区"},{"value":"230103","label":"南岗区"},{"value":"230104","label":"道外区"},{"value":"230108","label":"平房区"},{"value":"230109","label":"松北区"},{"value":"230110","label":"香坊区"},{"value":"230111","label":"呼兰区"},{"value":"230112","label":"阿城区"},{"value":"230123","label":"依兰县"},{"value":"230124","label":"方正县"},{"value":"230125","label":"宾县"},{"value":"230126","label":"巴彦县"},{"value":"230127","label":"木兰县"},{"value":"230128","label":"通河县"},{"value":"230129","label":"延寿县"},{"value":"230182","label":"双城市"},{"value":"230183","label":"尚志市"},{"value":"230184","label":"五常市"}]},{"value":"230200","label":"齐齐哈尔市","children":[{"value":"230202","label":"龙沙区"},{"value":"230203","label":"建华区"},{"value":"230204","label":"铁锋区"},{"value":"230205","label":"昂昂溪区"},{"value":"230206","label":"富拉尔基区"},{"value":"230207","label":"碾子山区"},{"value":"230208","label":"梅里斯达斡尔族区"},{"value":"230221","label":"龙江县"},{"value":"230223","label":"依安县"},{"value":"230224","label":"泰来县"},{"value":"230225","label":"甘南县"},{"value":"230227","label":"富裕县"},{"value":"230229","label":"克山县"},{"value":"230230","label":"克东县"},{"value":"230231","label":"拜泉县"},{"value":"230281","label":"讷河市"}]},{"value":"230300","label":"鸡西市","children":[{"value":"230302","label":"鸡冠区"},{"value":"230303","label":"恒山区"},{"value":"230304","label":"滴道区"},{"value":"230305","label":"梨树区"},{"value":"230306","label":"城子河区"},{"value":"230307","label":"麻山区"},{"value":"230321","label":"鸡东县"},{"value":"230381","label":"虎林市"},{"value":"230382","label":"密山市"}]},{"value":"230400","label":"鹤岗市","children":[{"value":"230402","label":"向阳区"},{"value":"230403","label":"工农区"},{"value":"230404","label":"南山区"},{"value":"230405","label":"兴安区"},{"value":"230406","label":"东山区"},{"value":"230407","label":"兴山区"},{"value":"230421","label":"萝北县"},{"value":"230422","label":"绥滨县"}]},{"value":"230500","label":"双鸭山市","children":[{"value":"230502","label":"尖山区"},{"value":"230503","label":"岭东区"},{"value":"230505","label":"四方台区"},{"value":"230506","label":"宝山区"},{"value":"230521","label":"集贤县"},{"value":"230522","label":"友谊县"},{"value":"230523","label":"宝清县"},{"value":"230524","label":"饶河县"}]},{"value":"230600","label":"大庆市","children":[{"value":"230602","label":"萨尔图区"},{"value":"230603","label":"龙凤区"},{"value":"230604","label":"让胡路区"},{"value":"230605","label":"红岗区"},{"value":"230606","label":"大同区"},{"value":"230621","label":"肇州县"},{"value":"230622","label":"肇源县"},{"value":"230623","label":"林甸县"},{"value":"230624","label":"杜尔伯特蒙古族自治县"}]},{"value":"230700","label":"伊春市","children":[{"value":"230702","label":"伊春区"},{"value":"230703","label":"南岔区"},{"value":"230704","label":"友好区"},{"value":"230705","label":"西林区"},{"value":"230706","label":"翠峦区"},{"value":"230707","label":"新青区"},{"value":"230708","label":"美溪区"},{"value":"230709","label":"金山屯区"},{"value":"230710","label":"五营区"},{"value":"230711","label":"乌马河区"},{"value":"230712","label":"汤旺河区"},{"value":"230713","label":"带岭区"},{"value":"230714","label":"乌伊岭区"},{"value":"230715","label":"红星区"},{"value":"230716","label":"上甘岭区"},{"value":"230722","label":"嘉荫县"},{"value":"230781","label":"铁力市"}]},{"value":"230800","label":"佳木斯市","children":[{"value":"230803","label":"向阳区"},{"value":"230804","label":"前进区"},{"value":"230805","label":"东风区"},{"value":"230811","label":"郊区"},{"value":"230822","label":"桦南县"},{"value":"230826","label":"桦川县"},{"value":"230828","label":"汤原县"},{"value":"230833","label":"抚远县"},{"value":"230881","label":"同江市"},{"value":"230882","label":"富锦市"}]},{"value":"230900","label":"七台河市","children":[{"value":"230902","label":"新兴区"},{"value":"230903","label":"桃山区"},{"value":"230904","label":"茄子河区"},{"value":"230921","label":"勃利县"}]},{"value":"231000","label":"牡丹江市","children":[{"value":"231002","label":"东安区"},{"value":"231003","label":"阳明区"},{"value":"231004","label":"爱民区"},{"value":"231005","label":"西安区"},{"value":"231024","label":"东宁县"},{"value":"231025","label":"林口县"},{"value":"231081","label":"绥芬河市"},{"value":"231083","label":"海林市"},{"value":"231084","label":"宁安市"},{"value":"231085","label":"穆棱市"}]},{"value":"231100","label":"黑河市","children":[{"value":"231102","label":"爱辉区"},{"value":"231121","label":"嫩江县"},{"value":"231123","label":"逊克县"},{"value":"231124","label":"孙吴县"},{"value":"231181","label":"北安市"},{"value":"231182","label":"五大连池市"}]},{"value":"231200","label":"绥化市","children":[{"value":"231202","label":"北林区"},{"value":"231221","label":"望奎县"},{"value":"231222","label":"兰西县"},{"value":"231223","label":"青冈县"},{"value":"231224","label":"庆安县"},{"value":"231225","label":"明水县"},{"value":"231226","label":"绥棱县"},{"value":"231281","label":"安达市"},{"value":"231282","label":"肇东市"},{"value":"231283","label":"海伦市"}]},{"value":"232700","label":"大兴安岭地区","children":[{"value":"232721","label":"呼玛县"},{"value":"232722","label":"塔河县"},{"value":"232723","label":"漠河县"}]}]},{"value":"310000","label":"上海市","children":[{"value":"310100","label":"上海市","children":[{"value":"310101","label":"黄浦区"},{"value":"310104","label":"徐汇区"},{"value":"310105","label":"长宁区"},{"value":"310106","label":"静安区"},{"value":"310107","label":"普陀区"},{"value":"310108","label":"闸北区"},{"value":"310109","label":"虹口区"},{"value":"310110","label":"杨浦区"},{"value":"310112","label":"闵行区"},{"value":"310113","label":"宝山区"},{"value":"310114","label":"嘉定区"},{"value":"310115","label":"浦东新区"},{"value":"310116","label":"金山区"},{"value":"310117","label":"松江区"},{"value":"310118","label":"青浦区"},{"value":"310120","label":"奉贤区"}]},{"value":"310200","label":"上海市辖县","children":[{"value":"310230","label":"崇明县"}]}]},{"value":"320000","label":"江苏省","children":[{"value":"320100","label":"南京市","children":[{"value":"320102","label":"玄武区"},{"value":"320104","label":"秦淮区"},{"value":"320105","label":"建邺区"},{"value":"320106","label":"鼓楼区"},{"value":"320111","label":"浦口区"},{"value":"320113","label":"栖霞区"},{"value":"320114","label":"雨花台区"},{"value":"320115","label":"江宁区"},{"value":"320116","label":"六合区"},{"value":"320117","label":"溧水区"},{"value":"320118","label":"高淳区"}]},{"value":"320200","label":"无锡市","children":[{"value":"320202","label":"崇安区"},{"value":"320203","label":"南长区"},{"value":"320204","label":"北塘区"},{"value":"320205","label":"锡山区"},{"value":"320206","label":"惠山区"},{"value":"320211","label":"滨湖区"},{"value":"320281","label":"江阴市"},{"value":"320282","label":"宜兴市"}]},{"value":"320300","label":"徐州市","children":[{"value":"320302","label":"鼓楼区"},{"value":"320303","label":"云龙区"},{"value":"320305","label":"贾汪区"},{"value":"320311","label":"泉山区"},{"value":"320312","label":"铜山区"},{"value":"320321","label":"丰县"},{"value":"320322","label":"沛县"},{"value":"320324","label":"睢宁县"},{"value":"320381","label":"新沂市"},{"value":"320382","label":"邳州市"}]},{"value":"320400","label":"常州市","children":[{"value":"320402","label":"天宁区"},{"value":"320404","label":"钟楼区"},{"value":"320405","label":"戚墅堰区"},{"value":"320411","label":"新北区"},{"value":"320412","label":"武进区"},{"value":"320481","label":"溧阳市"},{"value":"320482","label":"金坛市"}]},{"value":"320500","label":"苏州市","children":[{"value":"320505","label":"虎丘区"},{"value":"320506","label":"吴中区"},{"value":"320507","label":"相城区"},{"value":"320508","label":"姑苏区"},{"value":"320509","label":"吴江区"},{"value":"320581","label":"常熟市"},{"value":"320582","label":"张家港市"},{"value":"320583","label":"昆山市"},{"value":"320585","label":"太仓市"}]},{"value":"320600","label":"南通市","children":[{"value":"320602","label":"崇川区"},{"value":"320611","label":"港闸区"},{"value":"320612","label":"通州区"},{"value":"320621","label":"海安县"},{"value":"320623","label":"如东县"},{"value":"320681","label":"启东市"},{"value":"320682","label":"如皋市"},{"value":"320684","label":"海门市"}]},{"value":"320700","label":"连云港市","children":[{"value":"320703","label":"连云区"},{"value":"320705","label":"新浦"},{"value":"320706","label":"海州区"},{"value":"320707","label":"赣榆区"},{"value":"320722","label":"东海县"},{"value":"320723","label":"灌云县"},{"value":"320724","label":"灌南县"}]},{"value":"320800","label":"淮安市","children":[{"value":"320802","label":"清河区"},{"value":"320803","label":"淮安区"},{"value":"320804","label":"淮阴区"},{"value":"320811","label":"清浦区"},{"value":"320826","label":"涟水县"},{"value":"320829","label":"洪泽县"},{"value":"320830","label":"盱眙县"},{"value":"320831","label":"金湖县"}]},{"value":"320900","label":"盐城市","children":[{"value":"320902","label":"亭湖区"},{"value":"320903","label":"盐都区"},{"value":"320921","label":"响水县"},{"value":"320922","label":"滨海县"},{"value":"320923","label":"阜宁县"},{"value":"320924","label":"射阳县"},{"value":"320925","label":"建湖县"},{"value":"320981","label":"东台市"},{"value":"320982","label":"大丰市"}]},{"value":"321000","label":"扬州市","children":[{"value":"321002","label":"广陵区"},{"value":"321003","label":"邗江区"},{"value":"321012","label":"江都区"},{"value":"321023","label":"宝应县"},{"value":"321081","label":"仪征市"},{"value":"321084","label":"高邮市"}]},{"value":"321100","label":"镇江市","children":[{"value":"321102","label":"京口区"},{"value":"321111","label":"润州区"},{"value":"321112","label":"丹徒区"},{"value":"321181","label":"丹阳市"},{"value":"321182","label":"扬中市"},{"value":"321183","label":"句容市"}]},{"value":"321200","label":"泰州市","children":[{"value":"321202","label":"海陵区"},{"value":"321203","label":"高港区"},{"value":"321204","label":"姜堰区"},{"value":"321281","label":"兴化市"},{"value":"321282","label":"靖江市"},{"value":"321283","label":"泰兴市"}]},{"value":"321300","label":"宿迁市","children":[{"value":"321302","label":"宿城区"},{"value":"321311","label":"宿豫区"},{"value":"321322","label":"沭阳县"},{"value":"321323","label":"泗阳县"},{"value":"321324","label":"泗洪县"}]}]},{"value":"330000","label":"浙江省","children":[{"value":"330100","label":"杭州市","children":[{"value":"330102","label":"上城区"},{"value":"330103","label":"下城区"},{"value":"330104","label":"江干区"},{"value":"330105","label":"拱墅区"},{"value":"330106","label":"西湖区"},{"value":"330108","label":"滨江区"},{"value":"330109","label":"萧山区"},{"value":"330110","label":"余杭区"},{"value":"330122","label":"桐庐县"},{"value":"330127","label":"淳安县"},{"value":"330182","label":"建德市"},{"value":"330183","label":"富阳市"},{"value":"330185","label":"临安市"}]},{"value":"330200","label":"宁波市","children":[{"value":"330203","label":"海曙区"},{"value":"330204","label":"江东区"},{"value":"330205","label":"江北区"},{"value":"330206","label":"北仑区"},{"value":"330211","label":"镇海区"},{"value":"330212","label":"鄞州区"},{"value":"330225","label":"象山县"},{"value":"330226","label":"宁海县"},{"value":"330281","label":"余姚市"},{"value":"330282","label":"慈溪市"},{"value":"330283","label":"奉化市"}]},{"value":"330300","label":"温州市","children":[{"value":"330302","label":"鹿城区"},{"value":"330303","label":"龙湾区"},{"value":"330304","label":"瓯海区"},{"value":"330322","label":"洞头县"},{"value":"330324","label":"永嘉县"},{"value":"330326","label":"平阳县"},{"value":"330327","label":"苍南县"},{"value":"330328","label":"文成县"},{"value":"330329","label":"泰顺县"},{"value":"330381","label":"瑞安市"},{"value":"330382","label":"乐清市"}]},{"value":"330400","label":"嘉兴市","children":[{"value":"330402","label":"南湖区"},{"value":"330411","label":"秀洲区"},{"value":"330421","label":"嘉善县"},{"value":"330424","label":"海盐县"},{"value":"330481","label":"海宁市"},{"value":"330482","label":"平湖市"},{"value":"330483","label":"桐乡市"}]},{"value":"330500","label":"湖州市","children":[{"value":"330502","label":"吴兴区"},{"value":"330503","label":"南浔区"},{"value":"330521","label":"德清县"},{"value":"330522","label":"长兴县"},{"value":"330523","label":"安吉县"}]},{"value":"330600","label":"绍兴市","children":[{"value":"330602","label":"越城区"},{"value":"330603","label":"柯桥区"},{"value":"330604","label":"上虞区"},{"value":"330624","label":"新昌县"},{"value":"330681","label":"诸暨市"},{"value":"330683","label":"嵊州市"}]},{"value":"330700","label":"金华市","children":[{"value":"330702","label":"婺城区"},{"value":"330703","label":"金东区"},{"value":"330723","label":"武义县"},{"value":"330726","label":"浦江县"},{"value":"330727","label":"磐安县"},{"value":"330781","label":"兰溪市"},{"value":"330782","label":"义乌市"},{"value":"330783","label":"东阳市"},{"value":"330784","label":"永康市"}]},{"value":"330800","label":"衢州市","children":[{"value":"330802","label":"柯城区"},{"value":"330803","label":"衢江区"},{"value":"330822","label":"常山县"},{"value":"330824","label":"开化县"},{"value":"330825","label":"龙游县"},{"value":"330881","label":"江山市"}]},{"value":"330900","label":"舟山市","children":[{"value":"330902","label":"定海区"},{"value":"330903","label":"普陀区"},{"value":"330921","label":"岱山县"},{"value":"330922","label":"嵊泗县"}]},{"value":"331000","label":"台州市","children":[{"value":"331002","label":"椒江区"},{"value":"331003","label":"黄岩区"},{"value":"331004","label":"路桥区"},{"value":"331021","label":"玉环县"},{"value":"331022","label":"三门县"},{"value":"331023","label":"天台县"},{"value":"331024","label":"仙居县"},{"value":"331081","label":"温岭市"},{"value":"331082","label":"临海市"}]},{"value":"331100","label":"丽水市","children":[{"value":"331102","label":"莲都区"},{"value":"331121","label":"青田县"},{"value":"331122","label":"缙云县"},{"value":"331123","label":"遂昌县"},{"value":"331124","label":"松阳县"},{"value":"331125","label":"云和县"},{"value":"331126","label":"庆元县"},{"value":"331127","label":"景宁畲族自治县"},{"value":"331181","label":"龙泉市"}]}]},{"value":"340000","label":"安徽省","children":[{"value":"340100","label":"合肥市","children":[{"value":"340102","label":"瑶海区"},{"value":"340103","label":"庐阳区"},{"value":"340104","label":"蜀山区"},{"value":"340111","label":"包河区"},{"value":"340121","label":"长丰县"},{"value":"340122","label":"肥东县"},{"value":"340123","label":"肥西县"},{"value":"340124","label":"庐江县"},{"value":"340181","label":"巢湖市"}]},{"value":"340200","label":"芜湖市","children":[{"value":"340202","label":"镜湖区"},{"value":"340203","label":"弋江区"},{"value":"340207","label":"鸠江区"},{"value":"340208","label":"三山区"},{"value":"340221","label":"芜湖县"},{"value":"340222","label":"繁昌县"},{"value":"340223","label":"南陵县"},{"value":"340225","label":"无为县"}]},{"value":"340300","label":"蚌埠市","children":[{"value":"340302","label":"龙子湖区"},{"value":"340303","label":"蚌山区"},{"value":"340304","label":"禹会区"},{"value":"340311","label":"淮上区"},{"value":"340321","label":"怀远县"},{"value":"340322","label":"五河县"},{"value":"340323","label":"固镇县"}]},{"value":"340400","label":"淮南市","children":[{"value":"340402","label":"大通区"},{"value":"340403","label":"田家庵区"},{"value":"340404","label":"谢家集区"},{"value":"340405","label":"八公山区"},{"value":"340406","label":"潘集区"},{"value":"340421","label":"凤台县"}]},{"value":"340500","label":"马鞍山市","children":[{"value":"340503","label":"花山区"},{"value":"340504","label":"雨山区"},{"value":"340506","label":"博望区"},{"value":"340521","label":"当涂县"},{"value":"340522","label":"含山县"},{"value":"340523","label":"和县"}]},{"value":"340600","label":"淮北市","children":[{"value":"340602","label":"杜集区"},{"value":"340603","label":"相山区"},{"value":"340604","label":"烈山区"},{"value":"340621","label":"濉溪县"}]},{"value":"340700","label":"铜陵市","children":[{"value":"340702","label":"铜官山区"},{"value":"340703","label":"狮子山区"},{"value":"340711","label":"郊区"},{"value":"340721","label":"铜陵县"}]},{"value":"340800","label":"安庆市","children":[{"value":"340802","label":"迎江区"},{"value":"340803","label":"大观区"},{"value":"340811","label":"宜秀区"},{"value":"340822","label":"怀宁县"},{"value":"340823","label":"枞阳县"},{"value":"340824","label":"潜山县"},{"value":"340825","label":"太湖县"},{"value":"340826","label":"宿松县"},{"value":"340827","label":"望江县"},{"value":"340828","label":"岳西县"},{"value":"340881","label":"桐城市"}]},{"value":"341000","label":"黄山市","children":[{"value":"341002","label":"屯溪区"},{"value":"341003","label":"黄山区"},{"value":"341004","label":"徽州区"},{"value":"341021","label":"歙县"},{"value":"341022","label":"休宁县"},{"value":"341023","label":"黟县"},{"value":"341024","label":"祁门县"}]},{"value":"341100","label":"滁州市","children":[{"value":"341102","label":"琅琊区"},{"value":"341103","label":"南谯区"},{"value":"341122","label":"来安县"},{"value":"341124","label":"全椒县"},{"value":"341125","label":"定远县"},{"value":"341126","label":"凤阳县"},{"value":"341181","label":"天长市"},{"value":"341182","label":"明光市"}]},{"value":"341200","label":"阜阳市","children":[{"value":"341202","label":"颍州区"},{"value":"341203","label":"颍东区"},{"value":"341204","label":"颍泉区"},{"value":"341221","label":"临泉县"},{"value":"341222","label":"太和县"},{"value":"341225","label":"阜南县"},{"value":"341226","label":"颍上县"},{"value":"341282","label":"界首市"}]},{"value":"341300","label":"宿州市","children":[{"value":"341302","label":"埇桥区"},{"value":"341321","label":"砀山县"},{"value":"341322","label":"萧县"},{"value":"341323","label":"灵璧县"},{"value":"341324","label":"泗县"}]},{"value":"341500","label":"六安市","children":[{"value":"341502","label":"金安区"},{"value":"341503","label":"裕安区"},{"value":"341521","label":"寿县"},{"value":"341522","label":"霍邱县"},{"value":"341523","label":"舒城县"},{"value":"341524","label":"金寨县"},{"value":"341525","label":"霍山县"}]},{"value":"341600","label":"亳州市","children":[{"value":"341602","label":"谯城区"},{"value":"341621","label":"涡阳县"},{"value":"341622","label":"蒙城县"},{"value":"341623","label":"利辛县"}]},{"value":"341700","label":"池州市","children":[{"value":"341702","label":"贵池区"},{"value":"341721","label":"东至县"},{"value":"341722","label":"石台县"},{"value":"341723","label":"青阳县"}]},{"value":"341800","label":"宣城市","children":[{"value":"341802","label":"宣州区"},{"value":"341821","label":"郎溪县"},{"value":"341822","label":"广德县"},{"value":"341823","label":"泾县"},{"value":"341824","label":"绩溪县"},{"value":"341825","label":"旌德县"},{"value":"341881","label":"宁国市"}]}]},{"value":"350000","label":"福建省","children":[{"value":"350100","label":"福州市","children":[{"value":"350102","label":"鼓楼区"},{"value":"350103","label":"台江区"},{"value":"350104","label":"仓山区"},{"value":"350105","label":"马尾区"},{"value":"350111","label":"晋安区"},{"value":"350121","label":"闽侯县"},{"value":"350122","label":"连江县"},{"value":"350123","label":"罗源县"},{"value":"350124","label":"闽清县"},{"value":"350125","label":"永泰县"},{"value":"350128","label":"平潭县"},{"value":"350181","label":"福清市"},{"value":"350182","label":"长乐市"}]},{"value":"350200","label":"厦门市","children":[{"value":"350203","label":"思明区"},{"value":"350205","label":"海沧区"},{"value":"350206","label":"湖里区"},{"value":"350211","label":"集美区"},{"value":"350212","label":"同安区"},{"value":"350213","label":"翔安区"}]},{"value":"350300","label":"莆田市","children":[{"value":"350302","label":"城厢区"},{"value":"350303","label":"涵江区"},{"value":"350304","label":"荔城区"},{"value":"350305","label":"秀屿区"},{"value":"350322","label":"仙游县"}]},{"value":"350400","label":"三明市","children":[{"value":"350402","label":"梅列区"},{"value":"350403","label":"三元区"},{"value":"350421","label":"明溪县"},{"value":"350423","label":"清流县"},{"value":"350424","label":"宁化县"},{"value":"350425","label":"大田县"},{"value":"350426","label":"尤溪县"},{"value":"350427","label":"沙县"},{"value":"350428","label":"将乐县"},{"value":"350429","label":"泰宁县"},{"value":"350430","label":"建宁县"},{"value":"350481","label":"永安市"}]},{"value":"350500","label":"泉州市","children":[{"value":"350502","label":"鲤城区"},{"value":"350503","label":"丰泽区"},{"value":"350504","label":"洛江区"},{"value":"350505","label":"泉港区"},{"value":"350521","label":"惠安县"},{"value":"350524","label":"安溪县"},{"value":"350525","label":"永春县"},{"value":"350526","label":"德化县"},{"value":"350527","label":"金门县"},{"value":"350581","label":"石狮市"},{"value":"350582","label":"晋江市"},{"value":"350583","label":"南安市"}]},{"value":"350600","label":"漳州市","children":[{"value":"350602","label":"芗城区"},{"value":"350603","label":"龙文区"},{"value":"350622","label":"云霄县"},{"value":"350623","label":"漳浦县"},{"value":"350624","label":"诏安县"},{"value":"350625","label":"长泰县"},{"value":"350626","label":"东山县"},{"value":"350627","label":"南靖县"},{"value":"350628","label":"平和县"},{"value":"350629","label":"华安县"},{"value":"350681","label":"龙海市"}]},{"value":"350700","label":"南平市","children":[{"value":"350702","label":"延平区"},{"value":"350721","label":"顺昌县"},{"value":"350722","label":"浦城县"},{"value":"350723","label":"光泽县"},{"value":"350724","label":"松溪县"},{"value":"350725","label":"政和县"},{"value":"350781","label":"邵武市"},{"value":"350782","label":"武夷山市"},{"value":"350783","label":"建瓯市"},{"value":"350784","label":"建阳市"}]},{"value":"350800","label":"龙岩市","children":[{"value":"350802","label":"新罗区"},{"value":"350821","label":"长汀县"},{"value":"350822","label":"永定县"},{"value":"350823","label":"上杭县"},{"value":"350824","label":"武平县"},{"value":"350825","label":"连城县"},{"value":"350881","label":"漳平市"}]},{"value":"350900","label":"宁德市","children":[{"value":"350902","label":"蕉城区"},{"value":"350921","label":"霞浦县"},{"value":"350922","label":"古田县"},{"value":"350923","label":"屏南县"},{"value":"350924","label":"寿宁县"},{"value":"350925","label":"周宁县"},{"value":"350926","label":"柘荣县"},{"value":"350981","label":"福安市"},{"value":"350982","label":"福鼎市"}]}]},{"value":"360000","label":"江西省","children":[{"value":"360100","label":"南昌市","children":[{"value":"360102","label":"东湖区"},{"value":"360103","label":"西湖区"},{"value":"360104","label":"青云谱区"},{"value":"360105","label":"湾里区"},{"value":"360111","label":"青山湖区"},{"value":"360121","label":"南昌县"},{"value":"360122","label":"新建县"},{"value":"360123","label":"安义县"},{"value":"360124","label":"进贤县"}]},{"value":"360200","label":"景德镇市","children":[{"value":"360202","label":"昌江区"},{"value":"360203","label":"珠山区"},{"value":"360222","label":"浮梁县"},{"value":"360281","label":"乐平市"}]},{"value":"360300","label":"萍乡市","children":[{"value":"360302","label":"安源区"},{"value":"360313","label":"湘东区"},{"value":"360321","label":"莲花县"},{"value":"360322","label":"上栗县"},{"value":"360323","label":"芦溪县"}]},{"value":"360400","label":"九江市","children":[{"value":"360402","label":"庐山区"},{"value":"360403","label":"浔阳区"},{"value":"360421","label":"九江县"},{"value":"360423","label":"武宁县"},{"value":"360424","label":"修水县"},{"value":"360425","label":"永修县"},{"value":"360426","label":"德安县"},{"value":"360427","label":"星子县"},{"value":"360428","label":"都昌县"},{"value":"360429","label":"湖口县"},{"value":"360430","label":"彭泽县"},{"value":"360481","label":"瑞昌市"},{"value":"360482","label":"共青城市"}]},{"value":"360500","label":"新余市","children":[{"value":"360502","label":"渝水区"},{"value":"360521","label":"分宜县"}]},{"value":"360600","label":"鹰潭市","children":[{"value":"360602","label":"月湖区"},{"value":"360622","label":"余江县"},{"value":"360681","label":"贵溪市"}]},{"value":"360700","label":"赣州市","children":[{"value":"360702","label":"章贡区"},{"value":"360703","label":"南康区"},{"value":"360721","label":"赣县"},{"value":"360722","label":"信丰县"},{"value":"360723","label":"大余县"},{"value":"360724","label":"上犹县"},{"value":"360725","label":"崇义县"},{"value":"360726","label":"安远县"},{"value":"360727","label":"龙南县"},{"value":"360728","label":"定南县"},{"value":"360729","label":"全南县"},{"value":"360730","label":"宁都县"},{"value":"360731","label":"于都县"},{"value":"360732","label":"兴国县"},{"value":"360733","label":"会昌县"},{"value":"360734","label":"寻乌县"},{"value":"360735","label":"石城县"},{"value":"360781","label":"瑞金市"}]},{"value":"360800","label":"吉安市","children":[{"value":"360802","label":"吉州区"},{"value":"360803","label":"青原区"},{"value":"360821","label":"吉安县"},{"value":"360822","label":"吉水县"},{"value":"360823","label":"峡江县"},{"value":"360824","label":"新干县"},{"value":"360825","label":"永丰县"},{"value":"360826","label":"泰和县"},{"value":"360827","label":"遂川县"},{"value":"360828","label":"万安县"},{"value":"360829","label":"安福县"},{"value":"360830","label":"永新县"},{"value":"360881","label":"井冈山市"}]},{"value":"360900","label":"宜春市","children":[{"value":"360902","label":"袁州区"},{"value":"360921","label":"奉新县"},{"value":"360922","label":"万载县"},{"value":"360923","label":"上高县"},{"value":"360924","label":"宜丰县"},{"value":"360925","label":"靖安县"},{"value":"360926","label":"铜鼓县"},{"value":"360981","label":"丰城市"},{"value":"360982","label":"樟树市"},{"value":"360983","label":"高安市"}]},{"value":"361000","label":"抚州市","children":[{"value":"361002","label":"临川区"},{"value":"361021","label":"南城县"},{"value":"361022","label":"黎川县"},{"value":"361023","label":"南丰县"},{"value":"361024","label":"崇仁县"},{"value":"361025","label":"乐安县"},{"value":"361026","label":"宜黄县"},{"value":"361027","label":"金溪县"},{"value":"361028","label":"资溪县"},{"value":"361029","label":"东乡县"},{"value":"361030","label":"广昌县"}]},{"value":"361100","label":"上饶市","children":[{"value":"361102","label":"信州区"},{"value":"361121","label":"上饶县"},{"value":"361122","label":"广丰县"},{"value":"361123","label":"玉山县"},{"value":"361124","label":"铅山县"},{"value":"361125","label":"横峰县"},{"value":"361126","label":"弋阳县"},{"value":"361127","label":"余干县"},{"value":"361128","label":"鄱阳县"},{"value":"361129","label":"万年县"},{"value":"361130","label":"婺源县"},{"value":"361181","label":"德兴市"}]}]},{"value":"370000","label":"山东省","children":[{"value":"370100","label":"济南市","children":[{"value":"370102","label":"历下区"},{"value":"370103","label":"市中区"},{"value":"370104","label":"槐荫区"},{"value":"370105","label":"天桥区"},{"value":"370112","label":"历城区"},{"value":"370113","label":"长清区"},{"value":"370124","label":"平阴县"},{"value":"370125","label":"济阳县"},{"value":"370126","label":"商河县"},{"value":"370181","label":"章丘市"}]},{"value":"370200","label":"青岛市","children":[{"value":"370202","label":"市南区"},{"value":"370203","label":"市北区"},{"value":"370211","label":"黄岛区"},{"value":"370212","label":"崂山区"},{"value":"370213","label":"李沧区"},{"value":"370214","label":"城阳区"},{"value":"370281","label":"胶州市"},{"value":"370282","label":"即墨市"},{"value":"370283","label":"平度市"},{"value":"370285","label":"莱西市"}]},{"value":"370300","label":"淄博市","children":[{"value":"370302","label":"淄川区"},{"value":"370303","label":"张店区"},{"value":"370304","label":"博山区"},{"value":"370305","label":"临淄区"},{"value":"370306","label":"周村区"},{"value":"370321","label":"桓台县"},{"value":"370322","label":"高青县"},{"value":"370323","label":"沂源县"}]},{"value":"370400","label":"枣庄市","children":[{"value":"370402","label":"市中区"},{"value":"370403","label":"薛城区"},{"value":"370404","label":"峄城区"},{"value":"370405","label":"台儿庄区"},{"value":"370406","label":"山亭区"},{"value":"370481","label":"滕州市"}]},{"value":"370500","label":"东营市","children":[{"value":"370502","label":"东营区"},{"value":"370503","label":"河口区"},{"value":"370521","label":"垦利县"},{"value":"370522","label":"利津县"},{"value":"370523","label":"广饶县"}]},{"value":"370600","label":"烟台市","children":[{"value":"370602","label":"芝罘区"},{"value":"370611","label":"福山区"},{"value":"370612","label":"牟平区"},{"value":"370613","label":"莱山区"},{"value":"370634","label":"长岛县"},{"value":"370681","label":"龙口市"},{"value":"370682","label":"莱阳市"},{"value":"370683","label":"莱州市"},{"value":"370684","label":"蓬莱市"},{"value":"370685","label":"招远市"},{"value":"370686","label":"栖霞市"},{"value":"370687","label":"海阳市"}]},{"value":"370700","label":"潍坊市","children":[{"value":"370702","label":"潍城区"},{"value":"370703","label":"寒亭区"},{"value":"370704","label":"坊子区"},{"value":"370705","label":"奎文区"},{"value":"370724","label":"临朐县"},{"value":"370725","label":"昌乐县"},{"value":"370781","label":"青州市"},{"value":"370782","label":"诸城市"},{"value":"370783","label":"寿光市"},{"value":"370784","label":"安丘市"},{"value":"370785","label":"高密市"},{"value":"370786","label":"昌邑市"}]},{"value":"370800","label":"济宁市","children":[{"value":"370802","label":"市中区"},{"value":"370811","label":"任城区"},{"value":"370812","label":"兖州区"},{"value":"370826","label":"微山县"},{"value":"370827","label":"鱼台县"},{"value":"370828","label":"金乡县"},{"value":"370829","label":"嘉祥县"},{"value":"370830","label":"汶上县"},{"value":"370831","label":"泗水县"},{"value":"370832","label":"梁山县"},{"value":"370881","label":"曲阜市"},{"value":"370883","label":"邹城市"}]},{"value":"370900","label":"泰安市","children":[{"value":"370902","label":"泰山区"},{"value":"370911","label":"岱岳区"},{"value":"370921","label":"宁阳县"},{"value":"370923","label":"东平县"},{"value":"370982","label":"新泰市"},{"value":"370983","label":"肥城市"}]},{"value":"371000","label":"威海市","children":[{"value":"371002","label":"环翠区"},{"value":"371003","label":"文登区"},{"value":"371082","label":"荣成市"},{"value":"371083","label":"乳山市"}]},{"value":"371100","label":"日照市","children":[{"value":"371102","label":"东港区"},{"value":"371103","label":"岚山区"},{"value":"371121","label":"五莲县"},{"value":"371122","label":"莒县"}]},{"value":"371200","label":"莱芜市","children":[{"value":"371202","label":"莱城区"},{"value":"371203","label":"钢城区"}]},{"value":"371300","label":"临沂市","children":[{"value":"371302","label":"兰山区"},{"value":"371311","label":"罗庄区"},{"value":"371312","label":"河东区"},{"value":"371321","label":"沂南县"},{"value":"371322","label":"郯城县"},{"value":"371323","label":"沂水县"},{"value":"371324","label":"兰陵县"},{"value":"371325","label":"费县"},{"value":"371326","label":"平邑县"},{"value":"371327","label":"莒南县"},{"value":"371328","label":"蒙阴县"},{"value":"371329","label":"临沭县"}]},{"value":"371400","label":"德州市","children":[{"value":"371402","label":"德城区"},{"value":"371403","label":"陵城区"},{"value":"371422","label":"宁津县"},{"value":"371423","label":"庆云县"},{"value":"371424","label":"临邑县"},{"value":"371425","label":"齐河县"},{"value":"371426","label":"平原县"},{"value":"371427","label":"夏津县"},{"value":"371428","label":"武城县"},{"value":"371481","label":"乐陵市"},{"value":"371482","label":"禹城市"}]},{"value":"371500","label":"聊城市","children":[{"value":"371502","label":"东昌府区"},{"value":"371521","label":"阳谷县"},{"value":"371522","label":"莘县"},{"value":"371523","label":"茌平县"},{"value":"371524","label":"东阿县"},{"value":"371525","label":"冠县"},{"value":"371526","label":"高唐县"},{"value":"371581","label":"临清市"}]},{"value":"371600","label":"滨州市","children":[{"value":"371602","label":"滨城区"},{"value":"371603","label":"沾化区"},{"value":"371621","label":"惠民县"},{"value":"371622","label":"阳信县"},{"value":"371623","label":"无棣县"},{"value":"371625","label":"博兴县"},{"value":"371626","label":"邹平县"}]},{"value":"371700","label":"菏泽市","children":[{"value":"371702","label":"牡丹区"},{"value":"371721","label":"曹县"},{"value":"371722","label":"单县"},{"value":"371723","label":"成武县"},{"value":"371724","label":"巨野县"},{"value":"371725","label":"郓城县"},{"value":"371726","label":"鄄城县"},{"value":"371727","label":"定陶县"},{"value":"371728","label":"东明县"}]}]},{"value":"410000","label":"河南省","children":[{"value":"410100","label":"郑州市","children":[{"value":"410102","label":"中原区"},{"value":"410103","label":"二七区"},{"value":"410104","label":"管城回族区"},{"value":"410105","label":"金水区"},{"value":"410106","label":"上街区"},{"value":"410108","label":"惠济区"},{"value":"410122","label":"中牟县"},{"value":"410181","label":"巩义市"},{"value":"410182","label":"荥阳市"},{"value":"410183","label":"新密市"},{"value":"410184","label":"新郑市"},{"value":"410185","label":"登封市"}]},{"value":"410200","label":"开封市","children":[{"value":"410202","label":"龙亭区"},{"value":"410203","label":"顺河回族区"},{"value":"410204","label":"鼓楼区"},{"value":"410205","label":"禹王台区"},{"value":"410211","label":"金明区"},{"value":"410221","label":"杞县"},{"value":"410222","label":"通许县"},{"value":"410223","label":"尉氏县"},{"value":"410224","label":"开封县"},{"value":"410225","label":"兰考县"}]},{"value":"410300","label":"洛阳市","children":[{"value":"410302","label":"老城区"},{"value":"410303","label":"西工区"},{"value":"410304","label":"瀍河回族区"},{"value":"410305","label":"涧西区"},{"value":"410306","label":"吉利区"},{"value":"410311","label":"洛龙区"},{"value":"410322","label":"孟津县"},{"value":"410323","label":"新安县"},{"value":"410324","label":"栾川县"},{"value":"410325","label":"嵩县"},{"value":"410326","label":"汝阳县"},{"value":"410327","label":"宜阳县"},{"value":"410328","label":"洛宁县"},{"value":"410329","label":"伊川县"},{"value":"410381","label":"偃师市"}]},{"value":"410400","label":"平顶山市","children":[{"value":"410402","label":"新华区"},{"value":"410403","label":"卫东区"},{"value":"410404","label":"石龙区"},{"value":"410411","label":"湛河区"},{"value":"410421","label":"宝丰县"},{"value":"410422","label":"叶县"},{"value":"410423","label":"鲁山县"},{"value":"410425","label":"郏县"},{"value":"410481","label":"舞钢市"},{"value":"410482","label":"汝州市"}]},{"value":"410500","label":"安阳市","children":[{"value":"410502","label":"文峰区"},{"value":"410503","label":"北关区"},{"value":"410505","label":"殷都区"},{"value":"410506","label":"龙安区"},{"value":"410522","label":"安阳县"},{"value":"410523","label":"汤阴县"},{"value":"410526","label":"滑县"},{"value":"410527","label":"内黄县"},{"value":"410581","label":"林州市"}]},{"value":"410600","label":"鹤壁市","children":[{"value":"410602","label":"鹤山区"},{"value":"410603","label":"山城区"},{"value":"410611","label":"淇滨区"},{"value":"410621","label":"浚县"},{"value":"410622","label":"淇县"}]},{"value":"410700","label":"新乡市","children":[{"value":"410702","label":"红旗区"},{"value":"410703","label":"卫滨区"},{"value":"410704","label":"凤泉区"},{"value":"410711","label":"牧野区"},{"value":"410721","label":"新乡县"},{"value":"410724","label":"获嘉县"},{"value":"410725","label":"原阳县"},{"value":"410726","label":"延津县"},{"value":"410727","label":"封丘县"},{"value":"410728","label":"长垣县"},{"value":"410781","label":"卫辉市"},{"value":"410782","label":"辉县市"}]},{"value":"410800","label":"焦作市","children":[{"value":"410802","label":"解放区"},{"value":"410803","label":"中站区"},{"value":"410804","label":"马村区"},{"value":"410811","label":"山阳区"},{"value":"410821","label":"修武县"},{"value":"410822","label":"博爱县"},{"value":"410823","label":"武陟县"},{"value":"410825","label":"温县"},{"value":"410882","label":"沁阳市"},{"value":"410883","label":"孟州市"}]},{"value":"410900","label":"濮阳市","children":[{"value":"410902","label":"华龙区"},{"value":"410922","label":"清丰县"},{"value":"410923","label":"南乐县"},{"value":"410926","label":"范县"},{"value":"410927","label":"台前县"},{"value":"410928","label":"濮阳县"}]},{"value":"411000","label":"许昌市","children":[{"value":"411002","label":"魏都区"},{"value":"411023","label":"许昌县"},{"value":"411024","label":"鄢陵县"},{"value":"411025","label":"襄城县"},{"value":"411081","label":"禹州市"},{"value":"411082","label":"长葛市"}]},{"value":"411100","label":"漯河市","children":[{"value":"411102","label":"源汇区"},{"value":"411103","label":"郾城区"},{"value":"411104","label":"召陵区"},{"value":"411121","label":"舞阳县"},{"value":"411122","label":"临颍县"}]},{"value":"411200","label":"三门峡市","children":[{"value":"411202","label":"湖滨区"},{"value":"411221","label":"渑池县"},{"value":"411222","label":"陕县"},{"value":"411224","label":"卢氏县"},{"value":"411281","label":"义马市"},{"value":"411282","label":"灵宝市"}]},{"value":"411300","label":"南阳市","children":[{"value":"411302","label":"宛城区"},{"value":"411303","label":"卧龙区"},{"value":"411321","label":"南召县"},{"value":"411322","label":"方城县"},{"value":"411323","label":"西峡县"},{"value":"411324","label":"镇平县"},{"value":"411325","label":"内乡县"},{"value":"411326","label":"淅川县"},{"value":"411327","label":"社旗县"},{"value":"411328","label":"唐河县"},{"value":"411329","label":"新野县"},{"value":"411330","label":"桐柏县"},{"value":"411381","label":"邓州市"}]},{"value":"411400","label":"商丘市","children":[{"value":"411402","label":"梁园区"},{"value":"411403","label":"睢阳区"},{"value":"411421","label":"民权县"},{"value":"411422","label":"睢县"},{"value":"411423","label":"宁陵县"},{"value":"411424","label":"柘城县"},{"value":"411425","label":"虞城县"},{"value":"411426","label":"夏邑县"},{"value":"411481","label":"永城市"}]},{"value":"411500","label":"信阳市","children":[{"value":"411502","label":"浉河区"},{"value":"411503","label":"平桥区"},{"value":"411521","label":"罗山县"},{"value":"411522","label":"光山县"},{"value":"411523","label":"新县"},{"value":"411524","label":"商城县"},{"value":"411525","label":"固始县"},{"value":"411526","label":"潢川县"},{"value":"411527","label":"淮滨县"},{"value":"411528","label":"息县"}]},{"value":"411600","label":"周口市","children":[{"value":"411602","label":"川汇区"},{"value":"411621","label":"扶沟县"},{"value":"411622","label":"西华县"},{"value":"411623","label":"商水县"},{"value":"411624","label":"沈丘县"},{"value":"411625","label":"郸城县"},{"value":"411626","label":"淮阳县"},{"value":"411627","label":"太康县"},{"value":"411628","label":"鹿邑县"},{"value":"411681","label":"项城市"}]},{"value":"411700","label":"驻马店市","children":[{"value":"411702","label":"驿城区"},{"value":"411721","label":"西平县"},{"value":"411722","label":"上蔡县"},{"value":"411723","label":"平舆县"},{"value":"411724","label":"正阳县"},{"value":"411725","label":"确山县"},{"value":"411726","label":"泌阳县"},{"value":"411727","label":"汝南县"},{"value":"411728","label":"遂平县"},{"value":"411729","label":"新蔡县"}]},{"value":"419000","label":"河南省直辖县级行政区划","children":[{"value":"419001","label":"济源市"}]}]},{"value":"420000","label":"湖北省","children":[{"value":"420100","label":"武汉市","children":[{"value":"420102","label":"江岸区"},{"value":"420103","label":"江汉区"},{"value":"420104","label":"硚口区"},{"value":"420105","label":"汉阳区"},{"value":"420106","label":"武昌区"},{"value":"420107","label":"青山区"},{"value":"420111","label":"洪山区"},{"value":"420112","label":"东西湖区"},{"value":"420113","label":"汉南区"},{"value":"420114","label":"蔡甸区"},{"value":"420115","label":"江夏区"},{"value":"420116","label":"黄陂区"},{"value":"420117","label":"新洲区"}]},{"value":"420200","label":"黄石市","children":[{"value":"420202","label":"黄石港区"},{"value":"420203","label":"西塞山区"},{"value":"420204","label":"下陆区"},{"value":"420205","label":"铁山区"},{"value":"420222","label":"阳新县"},{"value":"420281","label":"大冶市"}]},{"value":"420300","label":"十堰市","children":[{"value":"420302","label":"茅箭区"},{"value":"420303","label":"张湾区"},{"value":"420304","label":"郧阳区"},{"value":"420322","label":"郧西县"},{"value":"420323","label":"竹山县"},{"value":"420324","label":"竹溪县"},{"value":"420325","label":"房县"},{"value":"420381","label":"丹江口市"}]},{"value":"420500","label":"宜昌市","children":[{"value":"420502","label":"西陵区"},{"value":"420503","label":"伍家岗区"},{"value":"420504","label":"点军区"},{"value":"420505","label":"猇亭区"},{"value":"420506","label":"夷陵区"},{"value":"420525","label":"远安县"},{"value":"420526","label":"兴山县"},{"value":"420527","label":"秭归县"},{"value":"420528","label":"长阳土家族自治县"},{"value":"420529","label":"五峰土家族自治县"},{"value":"420581","label":"宜都市"},{"value":"420582","label":"当阳市"},{"value":"420583","label":"枝江市"}]},{"value":"420600","label":"襄樊市","children":[{"value":"420602","label":"襄城区"},{"value":"420606","label":"樊城区"},{"value":"420607","label":"襄州区"},{"value":"420624","label":"南漳县"},{"value":"420625","label":"谷城县"},{"value":"420626","label":"保康县"},{"value":"420682","label":"老河口市"},{"value":"420683","label":"枣阳市"},{"value":"420684","label":"宜城市"}]},{"value":"420700","label":"鄂州市","children":[{"value":"420702","label":"梁子湖区"},{"value":"420703","label":"华容区"},{"value":"420704","label":"鄂城区"}]},{"value":"420800","label":"荆门市","children":[{"value":"420802","label":"东宝区"},{"value":"420804","label":"掇刀区"},{"value":"420821","label":"京山县"},{"value":"420822","label":"沙洋县"},{"value":"420881","label":"钟祥市"}]},{"value":"420900","label":"孝感市","children":[{"value":"420902","label":"孝南区"},{"value":"420921","label":"孝昌县"},{"value":"420922","label":"大悟县"},{"value":"420923","label":"云梦县"},{"value":"420981","label":"应城市"},{"value":"420982","label":"安陆市"},{"value":"420984","label":"汉川市"}]},{"value":"421000","label":"荆州市","children":[{"value":"421002","label":"沙市区"},{"value":"421003","label":"荆州区"},{"value":"421022","label":"公安县"},{"value":"421023","label":"监利县"},{"value":"421024","label":"江陵县"},{"value":"421081","label":"石首市"},{"value":"421083","label":"洪湖市"},{"value":"421087","label":"松滋市"}]},{"value":"421100","label":"黄冈市","children":[{"value":"421102","label":"黄州区"},{"value":"421121","label":"团风县"},{"value":"421122","label":"红安县"},{"value":"421123","label":"罗田县"},{"value":"421124","label":"英山县"},{"value":"421125","label":"浠水县"},{"value":"421126","label":"蕲春县"},{"value":"421127","label":"黄梅县"},{"value":"421181","label":"麻城市"},{"value":"421182","label":"武穴市"}]},{"value":"421200","label":"咸宁市","children":[{"value":"421202","label":"咸安区"},{"value":"421221","label":"嘉鱼县"},{"value":"421222","label":"通城县"},{"value":"421223","label":"崇阳县"},{"value":"421224","label":"通山县"},{"value":"421281","label":"赤壁市"}]},{"value":"421300","label":"随州市","children":[{"value":"421303","label":"曾都区"},{"value":"421321","label":"随县"},{"value":"421381","label":"广水市"}]},{"value":"422800","label":"恩施土家族苗族自治州","children":[{"value":"422801","label":"恩施市"},{"value":"422802","label":"利川市"},{"value":"422822","label":"建始县"},{"value":"422823","label":"巴东县"},{"value":"422825","label":"宣恩县"},{"value":"422826","label":"咸丰县"},{"value":"422827","label":"来凤县"},{"value":"422828","label":"鹤峰县"}]},{"value":"429000","label":"省直辖行政单位","children":[{"value":"429004","label":"仙桃市"},{"value":"429005","label":"潜江市"},{"value":"429006","label":"天门市"},{"value":"429021","label":"神农架林区"}]}]},{"value":"430000","label":"湖南省","children":[{"value":"430100","label":"长沙市","children":[{"value":"430102","label":"芙蓉区"},{"value":"430103","label":"天心区"},{"value":"430104","label":"岳麓区"},{"value":"430105","label":"开福区"},{"value":"430111","label":"雨花区"},{"value":"430112","label":"望城区"},{"value":"430121","label":"长沙县"},{"value":"430124","label":"宁乡县"},{"value":"430181","label":"浏阳市"}]},{"value":"430200","label":"株洲市","children":[{"value":"430202","label":"荷塘区"},{"value":"430203","label":"芦淞区"},{"value":"430204","label":"石峰区"},{"value":"430211","label":"天元区"},{"value":"430221","label":"株洲县"},{"value":"430223","label":"攸县"},{"value":"430224","label":"茶陵县"},{"value":"430225","label":"炎陵县"},{"value":"430281","label":"醴陵市"}]},{"value":"430300","label":"湘潭市","children":[{"value":"430302","label":"雨湖区"},{"value":"430304","label":"岳塘区"},{"value":"430321","label":"湘潭县"},{"value":"430381","label":"湘乡市"},{"value":"430382","label":"韶山市"}]},{"value":"430400","label":"衡阳市","children":[{"value":"430405","label":"珠晖区"},{"value":"430406","label":"雁峰区"},{"value":"430407","label":"石鼓区"},{"value":"430408","label":"蒸湘区"},{"value":"430412","label":"南岳区"},{"value":"430421","label":"衡阳县"},{"value":"430422","label":"衡南县"},{"value":"430423","label":"衡山县"},{"value":"430424","label":"衡东县"},{"value":"430426","label":"祁东县"},{"value":"430481","label":"耒阳市"},{"value":"430482","label":"常宁市"}]},{"value":"430500","label":"邵阳市","children":[{"value":"430502","label":"双清区"},{"value":"430503","label":"大祥区"},{"value":"430511","label":"北塔区"},{"value":"430521","label":"邵东县"},{"value":"430522","label":"新邵县"},{"value":"430523","label":"邵阳县"},{"value":"430524","label":"隆回县"},{"value":"430525","label":"洞口县"},{"value":"430527","label":"绥宁县"},{"value":"430528","label":"新宁县"},{"value":"430529","label":"城步苗族自治县"},{"value":"430581","label":"武冈市"}]},{"value":"430600","label":"岳阳市","children":[{"value":"430602","label":"岳阳楼区"},{"value":"430603","label":"云溪区"},{"value":"430611","label":"君山区"},{"value":"430621","label":"岳阳县"},{"value":"430623","label":"华容县"},{"value":"430624","label":"湘阴县"},{"value":"430626","label":"平江县"},{"value":"430681","label":"汨罗市"},{"value":"430682","label":"临湘市"}]},{"value":"430700","label":"常德市","children":[{"value":"430702","label":"武陵区"},{"value":"430703","label":"鼎城区"},{"value":"430721","label":"安乡县"},{"value":"430722","label":"汉寿县"},{"value":"430723","label":"澧县"},{"value":"430724","label":"临澧县"},{"value":"430725","label":"桃源县"},{"value":"430726","label":"石门县"},{"value":"430781","label":"津市市"}]},{"value":"430800","label":"张家界市","children":[{"value":"430802","label":"永定区"},{"value":"430811","label":"武陵源区"},{"value":"430821","label":"慈利县"},{"value":"430822","label":"桑植县"}]},{"value":"430900","label":"益阳市","children":[{"value":"430902","label":"资阳区"},{"value":"430903","label":"赫山区"},{"value":"430921","label":"南县"},{"value":"430922","label":"桃江县"},{"value":"430923","label":"安化县"},{"value":"430981","label":"沅江市"}]},{"value":"431000","label":"郴州市","children":[{"value":"431002","label":"北湖区"},{"value":"431003","label":"苏仙区"},{"value":"431021","label":"桂阳县"},{"value":"431022","label":"宜章县"},{"value":"431023","label":"永兴县"},{"value":"431024","label":"嘉禾县"},{"value":"431025","label":"临武县"},{"value":"431026","label":"汝城县"},{"value":"431027","label":"桂东县"},{"value":"431028","label":"安仁县"},{"value":"431081","label":"资兴市"}]},{"value":"431100","label":"永州市","children":[{"value":"431102","label":"零陵区"},{"value":"431103","label":"冷水滩区"},{"value":"431121","label":"祁阳县"},{"value":"431122","label":"东安县"},{"value":"431123","label":"双牌县"},{"value":"431124","label":"道县"},{"value":"431125","label":"江永县"},{"value":"431126","label":"宁远县"},{"value":"431127","label":"蓝山县"},{"value":"431128","label":"新田县"},{"value":"431129","label":"江华瑶族自治县"}]},{"value":"431200","label":"怀化市","children":[{"value":"431202","label":"鹤城区"},{"value":"431221","label":"中方县"},{"value":"431222","label":"沅陵县"},{"value":"431223","label":"辰溪县"},{"value":"431224","label":"溆浦县"},{"value":"431225","label":"会同县"},{"value":"431226","label":"麻阳苗族自治县"},{"value":"431227","label":"新晃侗族自治县"},{"value":"431228","label":"芷江侗族自治县"},{"value":"431229","label":"靖州苗族侗族自治县"},{"value":"431230","label":"通道侗族自治县"},{"value":"431281","label":"洪江市"}]},{"value":"431300","label":"娄底市","children":[{"value":"431302","label":"娄星区"},{"value":"431321","label":"双峰县"},{"value":"431322","label":"新化县"},{"value":"431381","label":"冷水江市"},{"value":"431382","label":"涟源市"}]},{"value":"433100","label":"湘西土家族苗族自治州","children":[{"value":"433101","label":"吉首市"},{"value":"433122","label":"泸溪县"},{"value":"433123","label":"凤凰县"},{"value":"433124","label":"花垣县"},{"value":"433125","label":"保靖县"},{"value":"433126","label":"古丈县"},{"value":"433127","label":"永顺县"},{"value":"433130","label":"龙山县"}]}]},{"value":"440000","label":"广东省","children":[{"value":"440100","label":"广州市","children":[{"value":"440103","label":"荔湾区"},{"value":"440104","label":"越秀区"},{"value":"440105","label":"海珠区"},{"value":"440106","label":"天河区"},{"value":"440111","label":"白云区"},{"value":"440112","label":"黄埔区"},{"value":"440113","label":"番禺区"},{"value":"440114","label":"花都区"},{"value":"440115","label":"南沙区"},{"value":"440116","label":"萝岗区"},{"value":"440117","label":"从化区"},{"value":"440118","label":"增城区"}]},{"value":"440200","label":"韶关市","children":[{"value":"440203","label":"武江区"},{"value":"440204","label":"浈江区"},{"value":"440205","label":"曲江区"},{"value":"440222","label":"始兴县"},{"value":"440224","label":"仁化县"},{"value":"440229","label":"翁源县"},{"value":"440232","label":"乳源瑶族自治县"},{"value":"440233","label":"新丰县"},{"value":"440281","label":"乐昌市"},{"value":"440282","label":"南雄市"}]},{"value":"440300","label":"深圳市","children":[{"value":"440303","label":"罗湖区"},{"value":"440304","label":"福田区"},{"value":"440305","label":"南山区"},{"value":"440306","label":"宝安区"},{"value":"440307","label":"龙岗区"},{"value":"440308","label":"盐田区"}]},{"value":"440400","label":"珠海市","children":[{"value":"440402","label":"香洲区"},{"value":"440403","label":"斗门区"},{"value":"440404","label":"金湾区"}]},{"value":"440500","label":"汕头市","children":[{"value":"440507","label":"龙湖区"},{"value":"440511","label":"金平区"},{"value":"440512","label":"濠江区"},{"value":"440513","label":"潮阳区"},{"value":"440514","label":"潮南区"},{"value":"440515","label":"澄海区"},{"value":"440523","label":"南澳县"}]},{"value":"440600","label":"佛山市","children":[{"value":"440604","label":"禅城区"},{"value":"440605","label":"南海区"},{"value":"440606","label":"顺德区"},{"value":"440607","label":"三水区"},{"value":"440608","label":"高明区"}]},{"value":"440700","label":"江门市","children":[{"value":"440703","label":"蓬江区"},{"value":"440704","label":"江海区"},{"value":"440705","label":"新会区"},{"value":"440781","label":"台山市"},{"value":"440783","label":"开平市"},{"value":"440784","label":"鹤山市"},{"value":"440785","label":"恩平市"}]},{"value":"440800","label":"湛江市","children":[{"value":"440802","label":"赤坎区"},{"value":"440803","label":"霞山区"},{"value":"440804","label":"坡头区"},{"value":"440811","label":"麻章区"},{"value":"440823","label":"遂溪县"},{"value":"440825","label":"徐闻县"},{"value":"440881","label":"廉江市"},{"value":"440882","label":"雷州市"},{"value":"440883","label":"吴川市"}]},{"value":"440900","label":"茂名市","children":[{"value":"440902","label":"茂南区"},{"value":"440904","label":"电白区"},{"value":"440981","label":"高州市"},{"value":"440982","label":"化州市"},{"value":"440983","label":"信宜市"}]},{"value":"441200","label":"肇庆市","children":[{"value":"441202","label":"端州区"},{"value":"441203","label":"鼎湖区"},{"value":"441223","label":"广宁县"},{"value":"441224","label":"怀集县"},{"value":"441225","label":"封开县"},{"value":"441226","label":"德庆县"},{"value":"441283","label":"高要市"},{"value":"441284","label":"四会市"}]},{"value":"441300","label":"惠州市","children":[{"value":"441302","label":"惠城区"},{"value":"441303","label":"惠阳区"},{"value":"441322","label":"博罗县"},{"value":"441323","label":"惠东县"},{"value":"441324","label":"龙门县"}]},{"value":"441400","label":"梅州市","children":[{"value":"441402","label":"梅江区"},{"value":"441403","label":"梅县区"},{"value":"441422","label":"大埔县"},{"value":"441423","label":"丰顺县"},{"value":"441424","label":"五华县"},{"value":"441426","label":"平远县"},{"value":"441427","label":"蕉岭县"},{"value":"441481","label":"兴宁市"}]},{"value":"441500","label":"汕尾市","children":[{"value":"441502","label":"城区"},{"value":"441521","label":"海丰县"},{"value":"441523","label":"陆河县"},{"value":"441581","label":"陆丰市"}]},{"value":"441600","label":"河源市","children":[{"value":"441602","label":"源城区"},{"value":"441621","label":"紫金县"},{"value":"441622","label":"龙川县"},{"value":"441623","label":"连平县"},{"value":"441624","label":"和平县"},{"value":"441625","label":"东源县"}]},{"value":"441700","label":"阳江市","children":[{"value":"441702","label":"江城区"},{"value":"441721","label":"阳西县"},{"value":"441723","label":"阳东县"},{"value":"441781","label":"阳春市"}]},{"value":"441800","label":"清远市","children":[{"value":"441802","label":"清城区"},{"value":"441803","label":"清新区"},{"value":"441821","label":"佛冈县"},{"value":"441823","label":"阳山县"},{"value":"441825","label":"连山壮族瑶族自治县"},{"value":"441826","label":"连南瑶族自治县"},{"value":"441881","label":"英德市"},{"value":"441882","label":"连州市"}]},{"value":"441900","label":"东莞市","children":[{"value":"441900","label":"东莞市"}]},{"value":"442000","label":"中山市","children":[{"value":"442000","label":"中山市"}]},{"value":"445100","label":"潮州市","children":[{"value":"445102","label":"湘桥区"},{"value":"445103","label":"潮安区"},{"value":"445122","label":"饶平县"}]},{"value":"445200","label":"揭阳市","children":[{"value":"445202","label":"榕城区"},{"value":"445203","label":"揭东区"},{"value":"445222","label":"揭西县"},{"value":"445224","label":"惠来县"},{"value":"445281","label":"普宁市"}]},{"value":"445300","label":"云浮市","children":[{"value":"445302","label":"云城区"},{"value":"445303","label":"云安区"},{"value":"445321","label":"新兴县"},{"value":"445322","label":"郁南县"},{"value":"445381","label":"罗定市"}]}]},{"value":"450000","label":"广西壮族自治区","children":[{"value":"450100","label":"南宁市","children":[{"value":"450102","label":"兴宁区"},{"value":"450103","label":"青秀区"},{"value":"450105","label":"江南区"},{"value":"450107","label":"西乡塘区"},{"value":"450108","label":"良庆区"},{"value":"450109","label":"邕宁区"},{"value":"450122","label":"武鸣县"},{"value":"450123","label":"隆安县"},{"value":"450124","label":"马山县"},{"value":"450125","label":"上林县"},{"value":"450126","label":"宾阳县"},{"value":"450127","label":"横县"}]},{"value":"450200","label":"柳州市","children":[{"value":"450202","label":"城中区"},{"value":"450203","label":"鱼峰区"},{"value":"450204","label":"柳南区"},{"value":"450205","label":"柳北区"},{"value":"450221","label":"柳江县"},{"value":"450222","label":"柳城县"},{"value":"450223","label":"鹿寨县"},{"value":"450224","label":"融安县"},{"value":"450225","label":"融水苗族自治县"},{"value":"450226","label":"三江侗族自治县"}]},{"value":"450300","label":"桂林市","children":[{"value":"450302","label":"秀峰区"},{"value":"450303","label":"叠彩区"},{"value":"450304","label":"象山区"},{"value":"450305","label":"七星区"},{"value":"450311","label":"雁山区"},{"value":"450312","label":"临桂区"},{"value":"450321","label":"阳朔县"},{"value":"450323","label":"灵川县"},{"value":"450324","label":"全州县"},{"value":"450325","label":"兴安县"},{"value":"450326","label":"永福县"},{"value":"450327","label":"灌阳县"},{"value":"450328","label":"龙胜各族自治县"},{"value":"450329","label":"资源县"},{"value":"450330","label":"平乐县"},{"value":"450331","label":"荔浦县"},{"value":"450332","label":"恭城瑶族自治县"}]},{"value":"450400","label":"梧州市","children":[{"value":"450403","label":"万秀区"},{"value":"450405","label":"长洲区"},{"value":"450406","label":"龙圩区"},{"value":"450421","label":"苍梧县"},{"value":"450422","label":"藤县"},{"value":"450423","label":"蒙山县"},{"value":"450481","label":"岑溪市"}]},{"value":"450500","label":"北海市","children":[{"value":"450502","label":"海城区"},{"value":"450503","label":"银海区"},{"value":"450512","label":"铁山港区"},{"value":"450521","label":"合浦县"}]},{"value":"450600","label":"防城港市","children":[{"value":"450602","label":"港口区"},{"value":"450603","label":"防城区"},{"value":"450621","label":"上思县"},{"value":"450681","label":"东兴市"}]},{"value":"450700","label":"钦州市","children":[{"value":"450702","label":"钦南区"},{"value":"450703","label":"钦北区"},{"value":"450721","label":"灵山县"},{"value":"450722","label":"浦北县"}]},{"value":"450800","label":"贵港市","children":[{"value":"450802","label":"港北区"},{"value":"450803","label":"港南区"},{"value":"450804","label":"覃塘区"},{"value":"450821","label":"平南县"},{"value":"450881","label":"桂平市"}]},{"value":"450900","label":"玉林市","children":[{"value":"450902","label":"玉州区"},{"value":"450903","label":"福绵区"},{"value":"450921","label":"容县"},{"value":"450922","label":"陆川县"},{"value":"450923","label":"博白县"},{"value":"450924","label":"兴业县"},{"value":"450981","label":"北流市"}]},{"value":"451000","label":"百色市","children":[{"value":"451002","label":"右江区"},{"value":"451021","label":"田阳县"},{"value":"451022","label":"田东县"},{"value":"451023","label":"平果县"},{"value":"451024","label":"德保县"},{"value":"451025","label":"靖西县"},{"value":"451026","label":"那坡县"},{"value":"451027","label":"凌云县"},{"value":"451028","label":"乐业县"},{"value":"451029","label":"田林县"},{"value":"451030","label":"西林县"},{"value":"451031","label":"隆林各族自治县"}]},{"value":"451100","label":"贺州市","children":[{"value":"451102","label":"八步区"},{"value":"451121","label":"昭平县"},{"value":"451122","label":"钟山县"},{"value":"451123","label":"富川瑶族自治县"}]},{"value":"451200","label":"河池市","children":[{"value":"451202","label":"金城江区"},{"value":"451221","label":"南丹县"},{"value":"451222","label":"天峨县"},{"value":"451223","label":"凤山县"},{"value":"451224","label":"东兰县"},{"value":"451225","label":"罗城仫佬族自治县"},{"value":"451226","label":"环江毛南族自治县"},{"value":"451227","label":"巴马瑶族自治县"},{"value":"451228","label":"都安瑶族自治县"},{"value":"451229","label":"大化瑶族自治县"},{"value":"451281","label":"宜州市"}]},{"value":"451300","label":"来宾市","children":[{"value":"451302","label":"兴宾区"},{"value":"451321","label":"忻城县"},{"value":"451322","label":"象州县"},{"value":"451323","label":"武宣县"},{"value":"451324","label":"金秀瑶族自治县"},{"value":"451381","label":"合山市"}]},{"value":"451400","label":"崇左市","children":[{"value":"451402","label":"江州区"},{"value":"451421","label":"扶绥县"},{"value":"451422","label":"宁明县"},{"value":"451423","label":"龙州县"},{"value":"451424","label":"大新县"},{"value":"451425","label":"天等县"},{"value":"451481","label":"凭祥市"}]}]},{"value":"460000","label":"海南省","children":[{"value":"460100","label":"海口市","children":[{"value":"460105","label":"秀英区"},{"value":"460106","label":"龙华区"},{"value":"460107","label":"琼山区"},{"value":"460108","label":"美兰区"}]},{"value":"460200","label":"三亚市","children":[{"value":"460202","label":"海棠区"},{"value":"460203","label":"吉阳区"},{"value":"460204","label":"天涯区"},{"value":"460205","label":"崖州区"}]},{"value":"469000","label":"省直辖县级行政单位","children":[{"value":"469001","label":"五指山市"},{"value":"469002","label":"琼海市"},{"value":"469003","label":"儋州市"},{"value":"469005","label":"文昌市"},{"value":"469006","label":"万宁市"},{"value":"469007","label":"东方市"},{"value":"469021","label":"定安县"},{"value":"469022","label":"屯昌县"},{"value":"469023","label":"澄迈县"},{"value":"469024","label":"临高县"},{"value":"469025","label":"白沙黎族自治县"},{"value":"469026","label":"昌江黎族自治县"},{"value":"469027","label":"乐东黎族自治县"},{"value":"469028","label":"陵水黎族自治县"},{"value":"469029","label":"保亭黎族苗族自治县"},{"value":"469030","label":"琼中黎族苗族自治县"}]}]},{"value":"500000","label":"重庆市","children":[{"value":"500100","label":"重庆市","children":[{"value":"500101","label":"万州区"},{"value":"500102","label":"涪陵区"},{"value":"500103","label":"渝中区"},{"value":"500104","label":"大渡口区"},{"value":"500105","label":"江北区"},{"value":"500106","label":"沙坪坝区"},{"value":"500107","label":"九龙坡区"},{"value":"500108","label":"南岸区"},{"value":"500109","label":"北碚区"},{"value":"500110","label":"綦江区"},{"value":"500111","label":"大足区"},{"value":"500112","label":"渝北区"},{"value":"500113","label":"巴南区"},{"value":"500114","label":"黔江区"},{"value":"500115","label":"长寿区"},{"value":"500116","label":"江津区"},{"value":"500117","label":"合川区"},{"value":"500118","label":"永川区"},{"value":"500119","label":"南川区"},{"value":"500120","label":"璧山区"},{"value":"500151","label":"铜梁区"}]},{"value":"500200","label":"重庆市辖县","children":[{"value":"500223","label":"潼南县"},{"value":"500226","label":"荣昌县"},{"value":"500228","label":"梁平县"},{"value":"500229","label":"城口县"},{"value":"500230","label":"丰都县"},{"value":"500231","label":"垫江县"},{"value":"500232","label":"武隆县"},{"value":"500233","label":"忠县"},{"value":"500234","label":"开县"},{"value":"500235","label":"云阳县"},{"value":"500236","label":"奉节县"},{"value":"500237","label":"巫山县"},{"value":"500238","label":"巫溪县"},{"value":"500240","label":"石柱土家族自治县"},{"value":"500241","label":"秀山土家族苗族自治县"},{"value":"500242","label":"酉阳土家族苗族自治县"},{"value":"500243","label":"彭水苗族土家族自治县"}]}]},{"value":"510000","label":"四川省","children":[{"value":"510100","label":"成都市","children":[{"value":"510104","label":"锦江区"},{"value":"510105","label":"青羊区"},{"value":"510106","label":"金牛区"},{"value":"510107","label":"武侯区"},{"value":"510108","label":"成华区"},{"value":"510112","label":"龙泉驿区"},{"value":"510113","label":"青白江区"},{"value":"510114","label":"新都区"},{"value":"510115","label":"温江区"},{"value":"510121","label":"金堂县"},{"value":"510122","label":"双流县"},{"value":"510124","label":"郫县"},{"value":"510129","label":"大邑县"},{"value":"510131","label":"蒲江县"},{"value":"510132","label":"新津县"},{"value":"510181","label":"都江堰市"},{"value":"510182","label":"彭州市"},{"value":"510183","label":"邛崃市"},{"value":"510184","label":"崇州市"}]},{"value":"510300","label":"自贡市","children":[{"value":"510302","label":"自流井区"},{"value":"510303","label":"贡井区"},{"value":"510304","label":"大安区"},{"value":"510311","label":"沿滩区"},{"value":"510321","label":"荣县"},{"value":"510322","label":"富顺县"}]},{"value":"510400","label":"攀枝花市","children":[{"value":"510402","label":"东区"},{"value":"510403","label":"西区"},{"value":"510411","label":"仁和区"},{"value":"510421","label":"米易县"},{"value":"510422","label":"盐边县"}]},{"value":"510500","label":"泸州市","children":[{"value":"510502","label":"江阳区"},{"value":"510503","label":"纳溪区"},{"value":"510504","label":"龙马潭区"},{"value":"510521","label":"泸县"},{"value":"510522","label":"合江县"},{"value":"510524","label":"叙永县"},{"value":"510525","label":"古蔺县"}]},{"value":"510600","label":"德阳市","children":[{"value":"510603","label":"旌阳区"},{"value":"510623","label":"中江县"},{"value":"510626","label":"罗江县"},{"value":"510681","label":"广汉市"},{"value":"510682","label":"什邡市"},{"value":"510683","label":"绵竹市"}]},{"value":"510700","label":"绵阳市","children":[{"value":"510703","label":"涪城区"},{"value":"510704","label":"游仙区"},{"value":"510722","label":"三台县"},{"value":"510723","label":"盐亭县"},{"value":"510724","label":"安县"},{"value":"510725","label":"梓潼县"},{"value":"510726","label":"北川羌族自治县"},{"value":"510727","label":"平武县"},{"value":"510781","label":"江油市"}]},{"value":"510800","label":"广元市","children":[{"value":"510802","label":"利州区"},{"value":"510811","label":"昭化区"},{"value":"510812","label":"朝天区"},{"value":"510821","label":"旺苍县"},{"value":"510822","label":"青川县"},{"value":"510823","label":"剑阁县"},{"value":"510824","label":"苍溪县"}]},{"value":"510900","label":"遂宁市","children":[{"value":"510903","label":"船山区"},{"value":"510904","label":"安居区"},{"value":"510921","label":"蓬溪县"},{"value":"510922","label":"射洪县"},{"value":"510923","label":"大英县"}]},{"value":"511000","label":"内江市","children":[{"value":"511002","label":"市中区"},{"value":"511011","label":"东兴区"},{"value":"511024","label":"威远县"},{"value":"511025","label":"资中县"},{"value":"511028","label":"隆昌县"}]},{"value":"511100","label":"乐山市","children":[{"value":"511102","label":"市中区"},{"value":"511111","label":"沙湾区"},{"value":"511112","label":"五通桥区"},{"value":"511113","label":"金口河区"},{"value":"511123","label":"犍为县"},{"value":"511124","label":"井研县"},{"value":"511126","label":"夹江县"},{"value":"511129","label":"沐川县"},{"value":"511132","label":"峨边彝族自治县"},{"value":"511133","label":"马边彝族自治县"},{"value":"511181","label":"峨眉山市"}]},{"value":"511300","label":"南充市","children":[{"value":"511302","label":"顺庆区"},{"value":"511303","label":"高坪区"},{"value":"511304","label":"嘉陵区"},{"value":"511321","label":"南部县"},{"value":"511322","label":"营山县"},{"value":"511323","label":"蓬安县"},{"value":"511324","label":"仪陇县"},{"value":"511325","label":"西充县"},{"value":"511381","label":"阆中市"}]},{"value":"511400","label":"眉山市","children":[{"value":"511402","label":"东坡区"},{"value":"511421","label":"仁寿县"},{"value":"511422","label":"彭山县"},{"value":"511423","label":"洪雅县"},{"value":"511424","label":"丹棱县"},{"value":"511425","label":"青神县"}]},{"value":"511500","label":"宜宾市","children":[{"value":"511502","label":"翠屏区"},{"value":"511503","label":"南溪区"},{"value":"511521","label":"宜宾县"},{"value":"511523","label":"江安县"},{"value":"511524","label":"长宁县"},{"value":"511525","label":"高县"},{"value":"511526","label":"珙县"},{"value":"511527","label":"筠连县"},{"value":"511528","label":"兴文县"},{"value":"511529","label":"屏山县"}]},{"value":"511600","label":"广安市","children":[{"value":"511602","label":"广安区"},{"value":"511603","label":"前锋区"},{"value":"511621","label":"岳池县"},{"value":"511622","label":"武胜县"},{"value":"511623","label":"邻水县"},{"value":"511681","label":"华蓥市"}]},{"value":"511700","label":"达州市","children":[{"value":"511702","label":"通川区"},{"value":"511703","label":"达川区"},{"value":"511722","label":"宣汉县"},{"value":"511723","label":"开江县"},{"value":"511724","label":"大竹县"},{"value":"511725","label":"渠县"},{"value":"511781","label":"万源市"}]},{"value":"511800","label":"雅安市","children":[{"value":"511802","label":"雨城区"},{"value":"511803","label":"名山区"},{"value":"511822","label":"荥经县"},{"value":"511823","label":"汉源县"},{"value":"511824","label":"石棉县"},{"value":"511825","label":"天全县"},{"value":"511826","label":"芦山县"},{"value":"511827","label":"宝兴县"}]},{"value":"511900","label":"巴中市","children":[{"value":"511902","label":"巴州区"},{"value":"511903","label":"恩阳区"},{"value":"511921","label":"通江县"},{"value":"511922","label":"南江县"},{"value":"511923","label":"平昌县"}]},{"value":"512000","label":"资阳市","children":[{"value":"512002","label":"雁江区"},{"value":"512021","label":"安岳县"},{"value":"512022","label":"乐至县"},{"value":"512081","label":"简阳市"}]},{"value":"513200","label":"阿坝藏族羌族自治州","children":[{"value":"513221","label":"汶川县"},{"value":"513222","label":"理县"},{"value":"513223","label":"茂县"},{"value":"513224","label":"松潘县"},{"value":"513225","label":"九寨沟县"},{"value":"513226","label":"金川县"},{"value":"513227","label":"小金县"},{"value":"513228","label":"黑水县"},{"value":"513229","label":"马尔康县"},{"value":"513230","label":"壤塘县"},{"value":"513231","label":"阿坝县"},{"value":"513232","label":"若尔盖县"},{"value":"513233","label":"红原县"}]},{"value":"513300","label":"甘孜藏族自治州","children":[{"value":"513321","label":"康定县"},{"value":"513322","label":"泸定县"},{"value":"513323","label":"丹巴县"},{"value":"513324","label":"九龙县"},{"value":"513325","label":"雅江县"},{"value":"513326","label":"道孚县"},{"value":"513327","label":"炉霍县"},{"value":"513328","label":"甘孜县"},{"value":"513329","label":"新龙县"},{"value":"513330","label":"德格县"},{"value":"513331","label":"白玉县"},{"value":"513332","label":"石渠县"},{"value":"513333","label":"色达县"},{"value":"513334","label":"理塘县"},{"value":"513335","label":"巴塘县"},{"value":"513336","label":"乡城县"},{"value":"513337","label":"稻城县"},{"value":"513338","label":"得荣县"}]},{"value":"513400","label":"凉山彝族自治州","children":[{"value":"513401","label":"西昌市"},{"value":"513422","label":"木里藏族自治县"},{"value":"513423","label":"盐源县"},{"value":"513424","label":"德昌县"},{"value":"513425","label":"会理县"},{"value":"513426","label":"会东县"},{"value":"513427","label":"宁南县"},{"value":"513428","label":"普格县"},{"value":"513429","label":"布拖县"},{"value":"513430","label":"金阳县"},{"value":"513431","label":"昭觉县"},{"value":"513432","label":"喜德县"},{"value":"513433","label":"冕宁县"},{"value":"513434","label":"越西县"},{"value":"513435","label":"甘洛县"},{"value":"513436","label":"美姑县"},{"value":"513437","label":"雷波县"}]}]},{"value":"520000","label":"贵州省","children":[{"value":"520100","label":"贵阳市","children":[{"value":"520102","label":"南明区"},{"value":"520103","label":"云岩区"},{"value":"520111","label":"花溪区"},{"value":"520112","label":"乌当区"},{"value":"520113","label":"白云区"},{"value":"520115","label":"观山湖区"},{"value":"520121","label":"开阳县"},{"value":"520122","label":"息烽县"},{"value":"520123","label":"修文县"},{"value":"520181","label":"清镇市"}]},{"value":"520200","label":"六盘水市","children":[{"value":"520201","label":"钟山区"},{"value":"520203","label":"六枝特区"},{"value":"520221","label":"水城县"},{"value":"520222","label":"盘县"}]},{"value":"520300","label":"遵义市","children":[{"value":"520302","label":"红花岗区"},{"value":"520303","label":"汇川区"},{"value":"520321","label":"遵义县"},{"value":"520322","label":"桐梓县"},{"value":"520323","label":"绥阳县"},{"value":"520324","label":"正安县"},{"value":"520325","label":"道真仡佬族苗族自治县"},{"value":"520326","label":"务川仡佬族苗族自治县"},{"value":"520327","label":"凤冈县"},{"value":"520328","label":"湄潭县"},{"value":"520329","label":"余庆县"},{"value":"520330","label":"习水县"},{"value":"520381","label":"赤水市"},{"value":"520382","label":"仁怀市"}]},{"value":"520400","label":"安顺市","children":[{"value":"520402","label":"西秀区"},{"value":"520421","label":"平坝县"},{"value":"520422","label":"普定县"},{"value":"520423","label":"镇宁布依族苗族自治县"},{"value":"520424","label":"关岭布依族苗族自治县"},{"value":"520425","label":"紫云苗族布依族自治县"}]},{"value":"522200","label":"铜仁地区","children":[{"value":"520602","label":"碧江区"},{"value":"520603","label":"万山区"},{"value":"520621","label":"江口县"},{"value":"520622","label":"玉屏侗族自治县"},{"value":"520623","label":"石阡县"},{"value":"520624","label":"思南县"},{"value":"520625","label":"印江土家族苗族自治县"},{"value":"520626","label":"德江县"},{"value":"520627","label":"沿河土家族自治县"},{"value":"520628","label":"松桃苗族自治县"}]},{"value":"522300","label":"黔西南布依族苗族自治州","children":[{"value":"522301","label":"兴义市"},{"value":"522322","label":"兴仁县"},{"value":"522323","label":"普安县"},{"value":"522324","label":"晴隆县"},{"value":"522325","label":"贞丰县"},{"value":"522326","label":"望谟县"},{"value":"522327","label":"册亨县"},{"value":"522328","label":"安龙县"}]},{"value":"522400","label":"毕节地区","children":[{"value":"520502","label":"七星关区"},{"value":"520521","label":"大方县"},{"value":"520522","label":"黔西县"},{"value":"520523","label":"金沙县"},{"value":"520524","label":"织金县"},{"value":"520525","label":"纳雍县"},{"value":"520526","label":"威宁彝族回族苗族自治县"},{"value":"520527","label":"赫章县"}]},{"value":"522600","label":"黔东南苗族侗族自治州","children":[{"value":"522601","label":"凯里市"},{"value":"522622","label":"黄平县"},{"value":"522623","label":"施秉县"},{"value":"522624","label":"三穗县"},{"value":"522625","label":"镇远县"},{"value":"522626","label":"岑巩县"},{"value":"522627","label":"天柱县"},{"value":"522628","label":"锦屏县"},{"value":"522629","label":"剑河县"},{"value":"522630","label":"台江县"},{"value":"522631","label":"黎平县"},{"value":"522632","label":"榕江县"},{"value":"522633","label":"从江县"},{"value":"522634","label":"雷山县"},{"value":"522635","label":"麻江县"},{"value":"522636","label":"丹寨县"}]},{"value":"522700","label":"黔南布依族苗族自治州","children":[{"value":"522701","label":"都匀市"},{"value":"522702","label":"福泉市"},{"value":"522722","label":"荔波县"},{"value":"522723","label":"贵定县"},{"value":"522725","label":"瓮安县"},{"value":"522726","label":"独山县"},{"value":"522727","label":"平塘县"},{"value":"522728","label":"罗甸县"},{"value":"522729","label":"长顺县"},{"value":"522730","label":"龙里县"},{"value":"522731","label":"惠水县"},{"value":"522732","label":"三都水族自治县"}]}]},{"value":"530000","label":"云南省","children":[{"value":"530100","label":"昆明市","children":[{"value":"530102","label":"五华区"},{"value":"530103","label":"盘龙区"},{"value":"530111","label":"官渡区"},{"value":"530112","label":"西山区"},{"value":"530113","label":"东川区"},{"value":"530114","label":"呈贡区"},{"value":"530122","label":"晋宁县"},{"value":"530124","label":"富民县"},{"value":"530125","label":"宜良县"},{"value":"530126","label":"石林彝族自治县"},{"value":"530127","label":"嵩明县"},{"value":"530128","label":"禄劝彝族苗族自治县"},{"value":"530129","label":"寻甸回族彝族自治县"},{"value":"530181","label":"安宁市"}]},{"value":"530300","label":"曲靖市","children":[{"value":"530302","label":"麒麟区"},{"value":"530321","label":"马龙县"},{"value":"530322","label":"陆良县"},{"value":"530323","label":"师宗县"},{"value":"530324","label":"罗平县"},{"value":"530325","label":"富源县"},{"value":"530326","label":"会泽县"},{"value":"530328","label":"沾益县"},{"value":"530381","label":"宣威市"}]},{"value":"530400","label":"玉溪市","children":[{"value":"530402","label":"红塔区"},{"value":"530421","label":"江川县"},{"value":"530422","label":"澄江县"},{"value":"530423","label":"通海县"},{"value":"530424","label":"华宁县"},{"value":"530425","label":"易门县"},{"value":"530426","label":"峨山彝族自治县"},{"value":"530427","label":"新平彝族傣族自治县"},{"value":"530428","label":"元江哈尼族彝族傣族自治县"}]},{"value":"530500","label":"保山市","children":[{"value":"530502","label":"隆阳区"},{"value":"530521","label":"施甸县"},{"value":"530522","label":"腾冲县"},{"value":"530523","label":"龙陵县"},{"value":"530524","label":"昌宁县"}]},{"value":"530600","label":"昭通市","children":[{"value":"530602","label":"昭阳区"},{"value":"530621","label":"鲁甸县"},{"value":"530622","label":"巧家县"},{"value":"530623","label":"盐津县"},{"value":"530624","label":"大关县"},{"value":"530625","label":"永善县"},{"value":"530626","label":"绥江县"},{"value":"530627","label":"镇雄县"},{"value":"530628","label":"彝良县"},{"value":"530629","label":"威信县"},{"value":"530630","label":"水富县"}]},{"value":"530700","label":"丽江市","children":[{"value":"530702","label":"古城区"},{"value":"530721","label":"玉龙纳西族自治县"},{"value":"530722","label":"永胜县"},{"value":"530723","label":"华坪县"},{"value":"530724","label":"宁蒗彝族自治县"}]},{"value":"530800","label":"思茅市","children":[{"value":"530802","label":"思茅区"},{"value":"530821","label":"宁洱哈尼族彝族自治县"},{"value":"530822","label":"墨江哈尼族自治县"},{"value":"530823","label":"景东彝族自治县"},{"value":"530824","label":"景谷傣族彝族自治县"},{"value":"530825","label":"镇沅彝族哈尼族拉祜族自治县"},{"value":"530826","label":"江城哈尼族彝族自治县"},{"value":"530827","label":"孟连傣族拉祜族佤族自治县"},{"value":"530828","label":"澜沧拉祜族自治县"},{"value":"530829","label":"西盟佤族自治县"}]},{"value":"530900","label":"临沧市","children":[{"value":"530902","label":"临翔区"},{"value":"530921","label":"凤庆县"},{"value":"530922","label":"云县"},{"value":"530923","label":"永德县"},{"value":"530924","label":"镇康县"},{"value":"530925","label":"双江拉祜族佤族布朗族傣族自治县"},{"value":"530926","label":"耿马傣族佤族自治县"},{"value":"530927","label":"沧源佤族自治县"}]},{"value":"532300","label":"楚雄彝族自治州","children":[{"value":"532301","label":"楚雄市"},{"value":"532322","label":"双柏县"},{"value":"532323","label":"牟定县"},{"value":"532324","label":"南华县"},{"value":"532325","label":"姚安县"},{"value":"532326","label":"大姚县"},{"value":"532327","label":"永仁县"},{"value":"532328","label":"元谋县"},{"value":"532329","label":"武定县"},{"value":"532331","label":"禄丰县"}]},{"value":"532500","label":"红河哈尼族彝族自治州","children":[{"value":"532501","label":"个旧市"},{"value":"532502","label":"开远市"},{"value":"532503","label":"蒙自市"},{"value":"532504","label":"弥勒市"},{"value":"532523","label":"屏边苗族自治县"},{"value":"532524","label":"建水县"},{"value":"532525","label":"石屏县"},{"value":"532527","label":"泸西县"},{"value":"532528","label":"元阳县"},{"value":"532529","label":"红河县"},{"value":"532530","label":"金平苗族瑶族傣族自治县"},{"value":"532531","label":"绿春县"},{"value":"532532","label":"河口瑶族自治县"}]},{"value":"532600","label":"文山壮族苗族自治州","children":[{"value":"532601","label":"文山市"},{"value":"532622","label":"砚山县"},{"value":"532623","label":"西畴县"},{"value":"532624","label":"麻栗坡县"},{"value":"532625","label":"马关县"},{"value":"532626","label":"丘北县"},{"value":"532627","label":"广南县"},{"value":"532628","label":"富宁县"}]},{"value":"532800","label":"西双版纳傣族自治州","children":[{"value":"532801","label":"景洪市"},{"value":"532822","label":"勐海县"},{"value":"532823","label":"勐腊县"}]},{"value":"532900","label":"大理白族自治州","children":[{"value":"532901","label":"大理市"},{"value":"532922","label":"漾濞彝族自治县"},{"value":"532923","label":"祥云县"},{"value":"532924","label":"宾川县"},{"value":"532925","label":"弥渡县"},{"value":"532926","label":"南涧彝族自治县"},{"value":"532927","label":"巍山彝族回族自治县"},{"value":"532928","label":"永平县"},{"value":"532929","label":"云龙县"},{"value":"532930","label":"洱源县"},{"value":"532931","label":"剑川县"},{"value":"532932","label":"鹤庆县"}]},{"value":"533100","label":"德宏傣族景颇族自治州","children":[{"value":"533102","label":"瑞丽市"},{"value":"533103","label":"芒市"},{"value":"533122","label":"梁河县"},{"value":"533123","label":"盈江县"},{"value":"533124","label":"陇川县"}]},{"value":"533300","label":"怒江傈僳族自治州","children":[{"value":"533321","label":"泸水县"},{"value":"533323","label":"福贡县"},{"value":"533324","label":"贡山独龙族怒族自治县"},{"value":"533325","label":"兰坪白族普米族自治县"}]},{"value":"533400","label":"迪庆藏族自治州","children":[{"value":"533421","label":"香格里拉县"},{"value":"533422","label":"德钦县"},{"value":"533423","label":"维西傈僳族自治县"}]}]},{"value":"540000","label":"西藏自治区","children":[{"value":"540100","label":"拉萨市","children":[{"value":"540102","label":"城关区"},{"value":"540121","label":"林周县"},{"value":"540122","label":"当雄县"},{"value":"540123","label":"尼木县"},{"value":"540124","label":"曲水县"},{"value":"540125","label":"堆龙德庆县"},{"value":"540126","label":"达孜县"},{"value":"540127","label":"墨竹工卡县"}]},{"value":"542100","label":"昌都地区","children":[{"value":"542121","label":"昌都县"},{"value":"542122","label":"江达县"},{"value":"542123","label":"贡觉县"},{"value":"542124","label":"类乌齐县"},{"value":"542125","label":"丁青县"},{"value":"542126","label":"察雅县"},{"value":"542127","label":"八宿县"},{"value":"542128","label":"左贡县"},{"value":"542129","label":"芒康县"},{"value":"542132","label":"洛隆县"},{"value":"542133","label":"边坝县"}]},{"value":"542200","label":"山南地区","children":[{"value":"542221","label":"乃东县"},{"value":"542222","label":"扎囊县"},{"value":"542223","label":"贡嘎县"},{"value":"542224","label":"桑日县"},{"value":"542225","label":"琼结县"},{"value":"542226","label":"曲松县"},{"value":"542227","label":"措美县"},{"value":"542228","label":"洛扎县"},{"value":"542229","label":"加查县"},{"value":"542231","label":"隆子县"},{"value":"542232","label":"错那县"},{"value":"542233","label":"浪卡子县"}]},{"value":"542300","label":"日喀则地区","children":[{"value":"540202","label":"桑珠孜区"},{"value":"540221","label":"南木林县"},{"value":"540222","label":"江孜县"},{"value":"540223","label":"定日县"},{"value":"540224","label":"萨迦县"},{"value":"540225","label":"拉孜县"},{"value":"540226","label":"昂仁县"},{"value":"540227","label":"谢通门县"},{"value":"540228","label":"白朗县"},{"value":"540229","label":"仁布县"},{"value":"540230","label":"康马县"},{"value":"540231","label":"定结县"},{"value":"540232","label":"仲巴县"},{"value":"540233","label":"亚东县"},{"value":"540234","label":"吉隆县"},{"value":"540235","label":"聂拉木县"},{"value":"540236","label":"萨嘎县"},{"value":"540237","label":"岗巴县"}]},{"value":"542400","label":"那曲地区","children":[{"value":"542421","label":"那曲县"},{"value":"542422","label":"嘉黎县"},{"value":"542423","label":"比如县"},{"value":"542424","label":"聂荣县"},{"value":"542425","label":"安多县"},{"value":"542426","label":"申扎县"},{"value":"542427","label":"索县"},{"value":"542428","label":"班戈县"},{"value":"542429","label":"巴青县"},{"value":"542430","label":"尼玛县"},{"value":"542431","label":"双湖县"}]},{"value":"542500","label":"阿里地区","children":[{"value":"542521","label":"普兰县"},{"value":"542522","label":"札达县"},{"value":"542523","label":"噶尔县"},{"value":"542524","label":"日土县"},{"value":"542525","label":"革吉县"},{"value":"542526","label":"改则县"},{"value":"542527","label":"措勤县"}]},{"value":"542600","label":"林芝地区","children":[{"value":"542621","label":"林芝县"},{"value":"542622","label":"工布江达县"},{"value":"542623","label":"米林县"},{"value":"542624","label":"墨脱县"},{"value":"542625","label":"波密县"},{"value":"542626","label":"察隅县"},{"value":"542627","label":"朗县"}]}]},{"value":"610000","label":"陕西省","children":[{"value":"610100","label":"西安市","children":[{"value":"610102","label":"新城区"},{"value":"610103","label":"碑林区"},{"value":"610104","label":"莲湖区"},{"value":"610111","label":"灞桥区"},{"value":"610112","label":"未央区"},{"value":"610113","label":"雁塔区"},{"value":"610114","label":"阎良区"},{"value":"610115","label":"临潼区"},{"value":"610116","label":"长安区"},{"value":"610122","label":"蓝田县"},{"value":"610124","label":"周至县"},{"value":"610125","label":"户县"},{"value":"610126","label":"高陵县"}]},{"value":"610200","label":"铜川市","children":[{"value":"610202","label":"王益区"},{"value":"610203","label":"印台区"},{"value":"610204","label":"耀州区"},{"value":"610222","label":"宜君县"}]},{"value":"610300","label":"宝鸡市","children":[{"value":"610302","label":"渭滨区"},{"value":"610303","label":"金台区"},{"value":"610304","label":"陈仓区"},{"value":"610322","label":"凤翔县"},{"value":"610323","label":"岐山县"},{"value":"610324","label":"扶风县"},{"value":"610326","label":"眉县"},{"value":"610327","label":"陇县"},{"value":"610328","label":"千阳县"},{"value":"610329","label":"麟游县"},{"value":"610330","label":"凤县"},{"value":"610331","label":"太白县"}]},{"value":"610400","label":"咸阳市","children":[{"value":"610402","label":"秦都区"},{"value":"610403","label":"杨陵区"},{"value":"610404","label":"渭城区"},{"value":"610422","label":"三原县"},{"value":"610423","label":"泾阳县"},{"value":"610424","label":"乾县"},{"value":"610425","label":"礼泉县"},{"value":"610426","label":"永寿县"},{"value":"610427","label":"彬县"},{"value":"610428","label":"长武县"},{"value":"610429","label":"旬邑县"},{"value":"610430","label":"淳化县"},{"value":"610431","label":"武功县"},{"value":"610481","label":"兴平市"}]},{"value":"610500","label":"渭南市","children":[{"value":"610502","label":"临渭区"},{"value":"610521","label":"华县"},{"value":"610522","label":"潼关县"},{"value":"610523","label":"大荔县"},{"value":"610524","label":"合阳县"},{"value":"610525","label":"澄城县"},{"value":"610526","label":"蒲城县"},{"value":"610527","label":"白水县"},{"value":"610528","label":"富平县"},{"value":"610581","label":"韩城市"},{"value":"610582","label":"华阴市"}]},{"value":"610600","label":"延安市","children":[{"value":"610602","label":"宝塔区"},{"value":"610621","label":"延长县"},{"value":"610622","label":"延川县"},{"value":"610623","label":"子长县"},{"value":"610624","label":"安塞县"},{"value":"610625","label":"志丹县"},{"value":"610626","label":"吴起县"},{"value":"610627","label":"甘泉县"},{"value":"610628","label":"富县"},{"value":"610629","label":"洛川县"},{"value":"610630","label":"宜川县"},{"value":"610631","label":"黄龙县"},{"value":"610632","label":"黄陵县"}]},{"value":"610700","label":"汉中市","children":[{"value":"610702","label":"汉台区"},{"value":"610721","label":"南郑县"},{"value":"610722","label":"城固县"},{"value":"610723","label":"洋县"},{"value":"610724","label":"西乡县"},{"value":"610725","label":"勉县"},{"value":"610726","label":"宁强县"},{"value":"610727","label":"略阳县"},{"value":"610728","label":"镇巴县"},{"value":"610729","label":"留坝县"},{"value":"610730","label":"佛坪县"}]},{"value":"610800","label":"榆林市","children":[{"value":"610802","label":"榆阳区"},{"value":"610821","label":"神木县"},{"value":"610822","label":"府谷县"},{"value":"610823","label":"横山县"},{"value":"610824","label":"靖边县"},{"value":"610825","label":"定边县"},{"value":"610826","label":"绥德县"},{"value":"610827","label":"米脂县"},{"value":"610828","label":"佳县"},{"value":"610829","label":"吴堡县"},{"value":"610830","label":"清涧县"},{"value":"610831","label":"子洲县"}]},{"value":"610900","label":"安康市","children":[{"value":"610902","label":"汉滨区"},{"value":"610921","label":"汉阴县"},{"value":"610922","label":"石泉县"},{"value":"610923","label":"宁陕县"},{"value":"610924","label":"紫阳县"},{"value":"610925","label":"岚皋县"},{"value":"610926","label":"平利县"},{"value":"610927","label":"镇坪县"},{"value":"610928","label":"旬阳县"},{"value":"610929","label":"白河县"}]},{"value":"611000","label":"商洛市","children":[{"value":"611002","label":"商州区"},{"value":"611021","label":"洛南县"},{"value":"611022","label":"丹凤县"},{"value":"611023","label":"商南县"},{"value":"611024","label":"山阳县"},{"value":"611025","label":"镇安县"},{"value":"611026","label":"柞水县"}]}]},{"value":"620000","label":"甘肃省","children":[{"value":"620100","label":"兰州市","children":[{"value":"620102","label":"城关区"},{"value":"620103","label":"七里河区"},{"value":"620104","label":"西固区"},{"value":"620105","label":"安宁区"},{"value":"620111","label":"红古区"},{"value":"620121","label":"永登县"},{"value":"620122","label":"皋兰县"},{"value":"620123","label":"榆中县"}]},{"value":"620200","label":"嘉峪关市","children":[{"value":"620201","label":"嘉峪关市辖区"}]},{"value":"620300","label":"金昌市","children":[{"value":"620302","label":"金川区"},{"value":"620321","label":"永昌县"}]},{"value":"620400","label":"白银市","children":[{"value":"620402","label":"白银区"},{"value":"620403","label":"平川区"},{"value":"620421","label":"靖远县"},{"value":"620422","label":"会宁县"},{"value":"620423","label":"景泰县"}]},{"value":"620500","label":"天水市","children":[{"value":"620502","label":"秦州区"},{"value":"620503","label":"麦积区"},{"value":"620521","label":"清水县"},{"value":"620522","label":"秦安县"},{"value":"620523","label":"甘谷县"},{"value":"620524","label":"武山县"},{"value":"620525","label":"张家川回族自治县"}]},{"value":"620600","label":"武威市","children":[{"value":"620602","label":"凉州区"},{"value":"620621","label":"民勤县"},{"value":"620622","label":"古浪县"},{"value":"620623","label":"天祝藏族自治县"}]},{"value":"620700","label":"张掖市","children":[{"value":"620702","label":"甘州区"},{"value":"620721","label":"肃南裕固族自治县"},{"value":"620722","label":"民乐县"},{"value":"620723","label":"临泽县"},{"value":"620724","label":"高台县"},{"value":"620725","label":"山丹县"}]},{"value":"620800","label":"平凉市","children":[{"value":"620802","label":"崆峒区"},{"value":"620821","label":"泾川县"},{"value":"620822","label":"灵台县"},{"value":"620823","label":"崇信县"},{"value":"620824","label":"华亭县"},{"value":"620825","label":"庄浪县"},{"value":"620826","label":"静宁县"}]},{"value":"620900","label":"酒泉市","children":[{"value":"620902","label":"肃州区"},{"value":"620921","label":"金塔县"},{"value":"620922","label":"瓜州县"},{"value":"620923","label":"肃北蒙古族自治县"},{"value":"620924","label":"阿克塞哈萨克族自治县"},{"value":"620981","label":"玉门市"},{"value":"620982","label":"敦煌市"}]},{"value":"621000","label":"庆阳市","children":[{"value":"621002","label":"西峰区"},{"value":"621021","label":"庆城县"},{"value":"621022","label":"环县"},{"value":"621023","label":"华池县"},{"value":"621024","label":"合水县"},{"value":"621025","label":"正宁县"},{"value":"621026","label":"宁县"},{"value":"621027","label":"镇原县"}]},{"value":"621100","label":"定西市","children":[{"value":"621102","label":"安定区"},{"value":"621121","label":"通渭县"},{"value":"621122","label":"陇西县"},{"value":"621123","label":"渭源县"},{"value":"621124","label":"临洮县"},{"value":"621125","label":"漳县"},{"value":"621126","label":"岷县"}]},{"value":"621200","label":"陇南市","children":[{"value":"621202","label":"武都区"},{"value":"621221","label":"成县"},{"value":"621222","label":"文县"},{"value":"621223","label":"宕昌县"},{"value":"621224","label":"康县"},{"value":"621225","label":"西和县"},{"value":"621226","label":"礼县"},{"value":"621227","label":"徽县"},{"value":"621228","label":"两当县"}]},{"value":"622900","label":"临夏回族自治州","children":[{"value":"622901","label":"临夏市"},{"value":"622921","label":"临夏县"},{"value":"622922","label":"康乐县"},{"value":"622923","label":"永靖县"},{"value":"622924","label":"广河县"},{"value":"622925","label":"和政县"},{"value":"622926","label":"东乡族自治县"},{"value":"622927","label":"积石山保安族东乡族撒拉族自治县"}]},{"value":"623000","label":"甘南藏族自治州","children":[{"value":"623001","label":"合作市"},{"value":"623021","label":"临潭县"},{"value":"623022","label":"卓尼县"},{"value":"623023","label":"舟曲县"},{"value":"623024","label":"迭部县"},{"value":"623025","label":"玛曲县"},{"value":"623026","label":"碌曲县"},{"value":"623027","label":"夏河县"}]}]},{"value":"630000","label":"青海省","children":[{"value":"630100","label":"西宁市","children":[{"value":"630102","label":"城东区"},{"value":"630103","label":"城中区"},{"value":"630104","label":"城西区"},{"value":"630105","label":"城北区"},{"value":"630121","label":"大通回族土族自治县"},{"value":"630122","label":"湟中县"},{"value":"630123","label":"湟源县"}]},{"value":"632100","label":"海东地区","children":[{"value":"632121","label":"平安县"},{"value":"632122","label":"民和回族土族自治县"},{"value":"632123","label":"乐都县"},{"value":"632126","label":"互助土族自治县"},{"value":"632127","label":"化隆回族自治县"},{"value":"632128","label":"循化撒拉族自治县"}]},{"value":"632200","label":"海北藏族自治州","children":[{"value":"632221","label":"门源回族自治县"},{"value":"632222","label":"祁连县"},{"value":"632223","label":"海晏县"},{"value":"632224","label":"刚察县"}]},{"value":"632300","label":"黄南藏族自治州","children":[{"value":"632321","label":"同仁县"},{"value":"632322","label":"尖扎县"},{"value":"632323","label":"泽库县"},{"value":"632324","label":"河南蒙古族自治县"}]},{"value":"632500","label":"海南藏族自治州","children":[{"value":"632521","label":"共和县"},{"value":"632522","label":"同德县"},{"value":"632523","label":"贵德县"},{"value":"632524","label":"兴海县"},{"value":"632525","label":"贵南县"}]},{"value":"632600","label":"果洛藏族自治州","children":[{"value":"632621","label":"玛沁县"},{"value":"632622","label":"班玛县"},{"value":"632623","label":"甘德县"},{"value":"632624","label":"达日县"},{"value":"632625","label":"久治县"},{"value":"632626","label":"玛多县"}]},{"value":"632700","label":"玉树藏族自治州","children":[{"value":"632701","label":"玉树市"},{"value":"632722","label":"杂多县"},{"value":"632723","label":"称多县"},{"value":"632724","label":"治多县"},{"value":"632725","label":"囊谦县"},{"value":"632726","label":"曲麻莱县"}]},{"value":"632800","label":"海西蒙古族藏族自治州","children":[{"value":"632801","label":"格尔木市"},{"value":"632802","label":"德令哈市"},{"value":"632821","label":"乌兰县"},{"value":"632822","label":"都兰县"},{"value":"632823","label":"天峻县"}]}]},{"value":"640000","label":"宁夏回族自治区","children":[{"value":"640100","label":"银川市","children":[{"value":"640104","label":"兴庆区"},{"value":"640105","label":"西夏区"},{"value":"640106","label":"金凤区"},{"value":"640121","label":"永宁县"},{"value":"640122","label":"贺兰县"},{"value":"640181","label":"灵武市"}]},{"value":"640200","label":"石嘴山市","children":[{"value":"640202","label":"大武口区"},{"value":"640205","label":"惠农区"},{"value":"640221","label":"平罗县"}]},{"value":"640300","label":"吴忠市","children":[{"value":"640302","label":"利通区"},{"value":"640303","label":"红寺堡区"},{"value":"640323","label":"盐池县"},{"value":"640324","label":"同心县"},{"value":"640381","label":"青铜峡市"}]},{"value":"640400","label":"固原市","children":[{"value":"640402","label":"原州区"},{"value":"640422","label":"西吉县"},{"value":"640423","label":"隆德县"},{"value":"640424","label":"泾源县"},{"value":"640425","label":"彭阳县"}]},{"value":"640500","label":"中卫市","children":[{"value":"640502","label":"沙坡头区"},{"value":"640521","label":"中宁县"},{"value":"640522","label":"海原县"}]}]},{"value":"650000","label":"新疆维吾尔自治区","children":[{"value":"650100","label":"乌鲁木齐市","children":[{"value":"650102","label":"天山区"},{"value":"650103","label":"沙依巴克区"},{"value":"650104","label":"新市区"},{"value":"650105","label":"水磨沟区"},{"value":"650106","label":"头屯河区"},{"value":"650107","label":"达坂城区"},{"value":"650109","label":"米东区"},{"value":"650121","label":"乌鲁木齐县"}]},{"value":"650200","label":"克拉玛依市","children":[{"value":"650202","label":"独山子区"},{"value":"650203","label":"克拉玛依区"},{"value":"650204","label":"白碱滩区"},{"value":"650205","label":"乌尔禾区"}]},{"value":"652100","label":"吐鲁番地区","children":[{"value":"652101","label":"吐鲁番市"},{"value":"652122","label":"鄯善县"},{"value":"652123","label":"托克逊县"}]},{"value":"652200","label":"哈密地区","children":[{"value":"652201","label":"哈密市"},{"value":"652222","label":"巴里坤哈萨克自治县"},{"value":"652223","label":"伊吾县"}]},{"value":"652300","label":"昌吉回族自治州","children":[{"value":"652301","label":"昌吉市"},{"value":"652302","label":"阜康市"},{"value":"652323","label":"呼图壁县"},{"value":"652324","label":"玛纳斯县"},{"value":"652325","label":"奇台县"},{"value":"652327","label":"吉木萨尔县"},{"value":"652328","label":"木垒哈萨克自治县"}]},{"value":"652700","label":"博尔塔拉蒙古自治州","children":[{"value":"652701","label":"博乐市"},{"value":"652702","label":"阿拉山口市"},{"value":"652722","label":"精河县"},{"value":"652723","label":"温泉县"}]},{"value":"652800","label":"巴音郭楞蒙古自治州","children":[{"value":"652801","label":"库尔勒市"},{"value":"652822","label":"轮台县"},{"value":"652823","label":"尉犁县"},{"value":"652824","label":"若羌县"},{"value":"652825","label":"且末县"},{"value":"652826","label":"焉耆回族自治县"},{"value":"652827","label":"和静县"},{"value":"652828","label":"和硕县"},{"value":"652829","label":"博湖县"}]},{"value":"652900","label":"阿克苏地区","children":[{"value":"652901","label":"阿克苏市"},{"value":"652922","label":"温宿县"},{"value":"652923","label":"库车县"},{"value":"652924","label":"沙雅县"},{"value":"652925","label":"新和县"},{"value":"652926","label":"拜城县"},{"value":"652927","label":"乌什县"},{"value":"652928","label":"阿瓦提县"},{"value":"652929","label":"柯坪县"}]},{"value":"653000","label":"克孜勒苏柯尔克孜自治州","children":[{"value":"653001","label":"阿图什市"},{"value":"653022","label":"阿克陶县"},{"value":"653023","label":"阿合奇县"},{"value":"653024","label":"乌恰县"}]},{"value":"653100","label":"喀什地区","children":[{"value":"653101","label":"喀什市"},{"value":"653121","label":"疏附县"},{"value":"653122","label":"疏勒县"},{"value":"653123","label":"英吉沙县"},{"value":"653124","label":"泽普县"},{"value":"653125","label":"莎车县"},{"value":"653126","label":"叶城县"},{"value":"653127","label":"麦盖提县"},{"value":"653128","label":"岳普湖县"},{"value":"653129","label":"伽师县"},{"value":"653130","label":"巴楚县"},{"value":"653131","label":"塔什库尔干塔吉克自治县"}]},{"value":"653200","label":"和田地区","children":[{"value":"653201","label":"和田市"},{"value":"653221","label":"和田县"},{"value":"653222","label":"墨玉县"},{"value":"653223","label":"皮山县"},{"value":"653224","label":"洛浦县"},{"value":"653225","label":"策勒县"},{"value":"653226","label":"于田县"},{"value":"653227","label":"民丰县"}]},{"value":"654000","label":"伊犁哈萨克自治州","children":[{"value":"654002","label":"伊宁市"},{"value":"654003","label":"奎屯市"},{"value":"654021","label":"伊宁县"},{"value":"654022","label":"察布查尔锡伯自治县"},{"value":"654023","label":"霍城县"},{"value":"654024","label":"巩留县"},{"value":"654025","label":"新源县"},{"value":"654026","label":"昭苏县"},{"value":"654027","label":"特克斯县"},{"value":"654028","label":"尼勒克县"}]},{"value":"654200","label":"塔城地区","children":[{"value":"654201","label":"塔城市"},{"value":"654202","label":"乌苏市"},{"value":"654221","label":"额敏县"},{"value":"654223","label":"沙湾县"},{"value":"654224","label":"托里县"},{"value":"654225","label":"裕民县"},{"value":"654226","label":"和布克赛尔蒙古自治县"}]},{"value":"654300","label":"阿勒泰地区","children":[{"value":"654301","label":"阿勒泰市"},{"value":"654321","label":"布尔津县"},{"value":"654322","label":"富蕴县"},{"value":"654323","label":"福海县"},{"value":"654324","label":"哈巴河县"},{"value":"654325","label":"青河县"},{"value":"654326","label":"吉木乃县"}]},{"value":"659000","label":"省直辖行政单位","children":[{"value":"659001","label":"石河子市"},{"value":"659002","label":"阿拉尔市"},{"value":"659003","label":"图木舒克市"}]}]},{"value":"710000","label":"台湾省","children":[{"value":"710000","label":"台湾省"}]},{"value":"810000","label":"香港特别行政区","children":[{"value":"810000","label":"香港特别行政区"}]},{"value":"820000","label":"澳门特别行政区","children":[{"value":"820000","label":"澳门特别行政区"}]}]};

/***/ }),

/***/ 28:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 29);


/***/ }),

/***/ 289:
/*!**********************************************************!*\
  !*** D:/uni-app/eryue26/components/tki-qrcode/qrcode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var QRCode = {};
(function () {
  /**
               * 获取单个字符的utf8编码
               * unicode BMP平面约65535个字符
               * @param {num} code
               * return {array}
               */
  function unicodeFormat8(code) {
    // 1 byte
    var c0, c1, c2;
    if (code < 128) {
      return [code];
      // 2 bytes
    } else if (code < 2048) {
      c0 = 192 + (code >> 6);
      c1 = 128 + (code & 63);
      return [c0, c1];
      // 3 bytes
    } else {
      c0 = 224 + (code >> 12);
      c1 = 128 + (code >> 6 & 63);
      c2 = 128 + (code & 63);
      return [c0, c1, c2];
    }
  }
  /**
     * 获取字符串的utf8编码字节串
     * @param {string} string
     * @return {array}
     */
  function getUTF8Bytes(string) {
    var utf8codes = [];
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      var utf8 = unicodeFormat8(code);
      for (var j = 0; j < utf8.length; j++) {
        utf8codes.push(utf8[j]);
      }
    }
    return utf8codes;
  }
  /**
     * 二维码算法实现
     * @param {string} data              要编码的信息字符串
     * @param {num} errorCorrectLevel 纠错等级
     */
  function QRCodeAlg(data, errorCorrectLevel) {
    this.typeNumber = -1; //版本
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null; //二维矩阵，存放最终结果
    this.moduleCount = 0; //矩阵大小
    this.dataCache = null; //数据缓存
    this.rsBlocks = null; //版本数据信息
    this.totalDataCount = -1; //可使用的数据量
    this.data = data;
    this.utf8bytes = getUTF8Bytes(data);
    this.make();
  }
  QRCodeAlg.prototype = {
    constructor: QRCodeAlg,
    /**
                             * 获取二维码矩阵大小
                             * @return {num} 矩阵大小
                             */
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    /**
        * 编码
        */
    make: function make() {
      this.getRightType();
      this.dataCache = this.createData();
      this.createQrcode();
    },
    /**
        * 设置二位矩阵功能图形
        * @param  {bool} test 表示是否在寻找最好掩膜阶段
        * @param  {num} maskPattern 掩膜的版本
        */
    makeImpl: function makeImpl(maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(true, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(true);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    /**
        * 设置二维码的位置探测图形
        * @param  {num} row 探测图形的中心横坐标
        * @param  {num} col 探测图形的中心纵坐标
        */
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    /**
        * 创建二维码
        * @return {[type]} [description]
        */
    createQrcode: function createQrcode() {
      var minLostPoint = 0;
      var pattern = 0;
      var bestModules = null;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
          bestModules = this.modules;
        }
      }
      this.modules = bestModules;
      this.setupTypeInfo(false, pattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(false);
      }
    },
    /**
        * 设置定位图形
        * @return {[type]} [description]
        */
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
        if (this.modules[6][r] != null) {
          continue;
        }
        this.modules[6][r] = r % 2 == 0;
      }
    },
    /**
        * 设置矫正图形
        * @return {[type]} [description]
        */
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    /**
        * 设置版本信息（7以上版本才有）
        * @param  {bool} test 是否处于判断最佳掩膜阶段
        * @return {[type]}      [description]
        */
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    /**
        * 设置格式信息（纠错等级和掩膜版本）
        * @param  {bool} test
        * @param  {num} maskPattern 掩膜版本
        * @return {}
        */
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      // vertical
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        // horizontal
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }
      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    /**
        * 数据编码
        * @return {[type]} [description]
        */
    createData: function createData() {
      var buffer = new QRBitBuffer();
      var lengthBits = this.typeNumber > 9 ? 16 : 8;
      buffer.put(4, 4); //添加模式
      buffer.put(this.utf8bytes.length, lengthBits);
      for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
        buffer.put(this.utf8bytes[i], 8);
      }
      if (buffer.length + 4 <= this.totalDataCount * 8) {
        buffer.put(0, 4);
      }
      // padding
      while (buffer.length % 8 != 0) {
        buffer.putBit(false);
      }
      // padding
      while (true) {
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD0, 8);
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD1, 8);
      }
      return this.createBytes(buffer);
    },
    /**
        * 纠错码编码
        * @param  {buffer} buffer 数据编码
        * @return {[type]}
        */
    createBytes: function createBytes(buffer) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var length = this.rsBlock.length / 3;
      var rsBlocks = new Array();
      for (var i = 0; i < length; i++) {
        var count = this.rsBlock[i * 3 + 0];
        var totalCount = this.rsBlock[i * 3 + 1];
        var dataCount = this.rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
          rsBlocks.push([dataCount, totalCount]);
        }
      }
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r][0];
        var ecCount = rsBlocks[r][1] - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
          dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var data = new Array(this.totalDataCount);
      var index = 0;
      for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < dcdata[r].length) {
            data[index++] = dcdata[r][i];
          }
        }
      }
      for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < ecdata[r].length) {
            data[index++] = ecdata[r][i];
          }
        }
      }
      return data;

    },
    /**
        * 布置模块，构建最终信息
        * @param  {} data
        * @param  {} maskPattern
        * @return {}
        */
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };

  /**
          * 填充字段
          */
  QRCodeAlg.PAD0 = 0xEC;
  QRCodeAlg.PAD1 = 0x11;
  //---------------------------------------------------------------------
  // 纠错等级对应的编码
  //---------------------------------------------------------------------
  var QRErrorCorrectLevel = [1, 0, 3, 2];
  //---------------------------------------------------------------------
  // 掩膜版本
  //---------------------------------------------------------------------
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7 };

  //---------------------------------------------------------------------
  // 工具类
  //---------------------------------------------------------------------
  var QRUtil = {
    /*
                 每个版本矫正图形的位置
                  */
    PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]],

    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    /*
                                                             BCH编码格式信息
                                                              */
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    /*
       BCH编码版本信息
        */
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    /*
       获取BCH位信息
        */
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    /*
       获取版本对应的矫正图形位置
        */
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    /*
       掩膜算法
        */
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);}

    },
    /*
       获取RS的纠错多项式
        */
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    /*
       获取评价
        */
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount(),
      lostPoint = 0,
      darkCount = 0;
      for (var row = 0; row < moduleCount; row++) {
        var sameCount = 0;
        var head = qrCode.modules[row][0];
        for (var col = 0; col < moduleCount; col++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (col < moduleCount - 6) {
            if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
              if (col < moduleCount - 10) {
                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                  lostPoint += 40;
                }
              } else if (col > 3) {
                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 2 评价
          if (row < moduleCount - 1 && col < moduleCount - 1) {
            var count = 0;
            if (current) count++;
            if (qrCode.modules[row + 1][col]) count++;
            if (qrCode.modules[row][col + 1]) count++;
            if (qrCode.modules[row + 1][col + 1]) count++;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
          //level 4 评价
          if (current) {
            darkCount++;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var head = qrCode.modules[0][col];
        for (var row = 0; row < moduleCount; row++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (row < moduleCount - 6) {
            if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
              if (row < moduleCount - 10) {
                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                  lostPoint += 40;
                }
              } else if (row > 3) {
                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
        }
      }
      // LEVEL4
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };


  //---------------------------------------------------------------------
  // QRMath使用的数学工具
  //---------------------------------------------------------------------
  var QRMath = {
    /*
                 将n转化为a^m
                  */
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    /*
       将a^m转化为n
        */
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256) };


  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
  //---------------------------------------------------------------------
  // QRPolynomial 多项式
  //---------------------------------------------------------------------
  /**
   * 多项式类
   * @param {Array} num   系数
   * @param {num} shift a^shift
   */
  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    /**
        * 多项式乘法
        * @param  {QRPolynomial} e 被乘多项式
        * @return {[type]}   [description]
        */
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    /**
        * 多项式模运算
        * @param  {QRPolynomial} e 模多项式
        * @return {}
        */
    mod: function mod(e) {
      var tl = this.getLength(),
      el = e.getLength();
      if (tl - el < 0) {
        return this;
      }
      var num = new Array(tl);
      for (var i = 0; i < tl; i++) {
        num[i] = this.get(i);
      }
      while (num.length >= el) {
        var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

        for (var i = 0; i < e.getLength(); i++) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        while (num[0] == 0) {
          num.shift();
        }
      }
      return new QRPolynomial(num, 0);
    } };


  //---------------------------------------------------------------------
  // RS_BLOCK_TABLE
  //---------------------------------------------------------------------
  /*
  二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
   */
  var RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],

  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],

  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],

  // 4
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],

  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],

  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],

  // 7
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],

  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],

  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],

  // 10
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],

  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],

  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],

  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],

  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],

  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],

  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],

  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],

  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],

  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],

  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],

  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],

  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],

  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],

  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],

  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],

  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],

  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],

  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],

  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],

  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],

  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],

  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],

  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],

  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],

  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],

  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],

  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],

  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],

  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],

  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]];


  /**
                              * 根据数据获取对应版本
                              * @return {[type]} [description]
                              */
  QRCodeAlg.prototype.getRightType = function () {
    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
      var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
      if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var totalDataCount = 0;
      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var dataCount = rsBlock[i * 3 + 2];
        totalDataCount += dataCount * count;
      }
      var lengthBytes = typeNumber > 9 ? 2 : 1;
      if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
        this.typeNumber = typeNumber;
        this.rsBlock = rsBlock;
        this.totalDataCount = totalDataCount;
        break;
      }
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------
  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit(num >>> length - i - 1 & 1);
      }
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    } };




  // xzedit
  var qrcodeAlgObjCache = [];
  /**
                               * 二维码构造函数，主要用于绘制
                               * @param  {参数列表} opt 传递参数
                               * @return {}
                               */
  QRCode = function QRCode(opt) {
    //设置默认参数
    this.options = {
      text: '',
      size: 256,
      correctLevel: 3,
      background: '#ffffff',
      foreground: '#000000',
      pdground: '#000000',
      image: '',
      imageSize: 30,
      canvasId: opt.canvasId,
      context: opt.context,
      usingComponents: opt.usingComponents,
      showLoading: opt.showLoading,
      loadingText: opt.loadingText };

    if (typeof opt === 'string') {// 只编码ASCII字符串
      opt = {
        text: opt };

    }
    if (opt) {
      for (var i in opt) {
        this.options[i] = opt[i];
      }
    }
    //使用QRCodeAlg创建二维码结构
    var qrCodeAlg = null;
    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
      if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
        qrCodeAlg = qrcodeAlgObjCache[i].obj;
        break;
      }
    }
    if (i == l) {
      qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
      qrcodeAlgObjCache.push({
        text: this.options.text,
        correctLevel: this.options.correctLevel,
        obj: qrCodeAlg });

    }
    /**
       * 计算矩阵点的前景色
       * @param {Obj} config
       * @param {Number} config.row 点x坐标
       * @param {Number} config.col 点y坐标
       * @param {Number} config.count 矩阵大小
       * @param {Number} config.options 组件的options
       * @return {String}
       */
    var getForeGround = function getForeGround(config) {
      var options = config.options;
      if (options.pdground && (
      config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
      config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
      config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
      {
        return options.pdground;
      }
      return options.foreground;
    };
    // 创建canvas
    var createCanvas = function createCanvas(options) {
      if (options.showLoading) {
        uni.showLoading({
          title: options.loadingText,
          mask: true });

      }
      var ctx = uni.createCanvasContext(options.canvasId, options.context);
      var count = qrCodeAlg.getModuleCount();
      var ratioSize = options.size;
      var ratioImgSize = options.imageSize;
      //计算每个点的长宽
      var tileW = (ratioSize / count).toPrecision(4);
      var tileH = (ratioSize / count).toPrecision(4);
      //绘制
      for (var row = 0; row < count; row++) {
        for (var col = 0; col < count; col++) {
          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
          var foreground = getForeGround({
            row: row,
            col: col,
            count: count,
            options: options });

          ctx.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        }
      }
      if (options.image) {




        // 画圆角矩形
        var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
          ctxi.setLineWidth(lineWidth);
          ctxi.setFillStyle(options.background);
          ctxi.setStrokeStyle(options.background);
          ctxi.beginPath(); // draw top and top right corner 
          ctxi.moveTo(x + r, y);
          ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
          ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
          ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
          ctxi.arcTo(x, y, x + r, y, r);
          ctxi.closePath();
          if (fill) {
            ctxi.fill();
          }
          if (stroke) {
            ctxi.stroke();
          }
        };var x = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(ctx, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);ctx.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
      }
      setTimeout(function () {
        ctx.draw(true, function () {
          // 保存到临时区域
          setTimeout(function () {
            uni.canvasToTempFilePath({
              width: options.width,
              height: options.height,
              destWidth: options.width,
              destHeight: options.height,
              canvasId: options.canvasId,
              quality: Number(1),
              success: function success(res) {
                if (options.cbResult) {
                  options.cbResult(res.tempFilePath);
                }
              },
              fail: function fail(res) {
                if (options.cbResult) {
                  options.cbResult(res);
                }
              },
              complete: function complete() {
                if (options.showLoading) {
                  uni.hideLoading();
                }
              } },
            options.context);
          }, options.text.length + 100);
        });
      }, options.usingComponents ? 0 : 150);
    };
    createCanvas(this.options);
    // 空判定
    var empty = function empty(v) {
      var tp = typeof v,
      rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    };
  };
  QRCode.prototype.clear = function (fn) {
    var ctx = uni.createCanvasContext(this.options.canvasId, this.options.context);
    ctx.clearRect(0, 0, this.options.size, this.options.size);
    ctx.draw(false, function () {
      if (fn) {
        fn();
      }
    });
  };
})();var _default =

QRCode;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 29:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 30);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** D:/uni-app/eryue26/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-alipay"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26420200313001","_inBundle":false,"_integrity":"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz","_shasum":"a006e329e033cd412accfa635f8933dbb822a9c3","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"b1fdbafab5dd4673cff64188a5203d0c947e4f50","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26420200313001"};

/***/ }),

/***/ 7:
/*!******************************************************!*\
  !*** D:/uni-app/eryue26/pages.json?{"type":"style"} ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/home/home": { "defaultTitle": "开砍商城" }, "pages/order/base/createOrder": { "defaultTitle": "提交订单" }, "pages/pay/toPay": { "defaultTitle": "订单详情", "titleBarColor": "#F7F7F7" }, "pages/pay/endOrder": { "defaultTitle": "订单详情", "titleBarColor": "#F7F7F7" }, "pages/category/category": { "defaultTitle": "分类", "pullRefresh": true }, "pages/category/toCategory": { "defaultTitle": "跳转分类", "pullRefresh": true }, "pages/user/user": { "defaultTitle": "我的" }, "pages/user/base/gameOrder": { "defaultTitle": "我的砍价" }, "pages/set/set": { "defaultTitle": "设置" }, "pages/set/base/setPhone": { "defaultTitle": "绑定手机" }, "pages/public/login": { "defaultTitle": "" }, "pages/public/register": { "defaultTitle": "" }, "pages/good/goods": { "defaultTitle": "商品" }, "pages/good/base/ratings": { "defaultTitle": "商品评论" }, "pages/cart/cart": { "defaultTitle": "购物车" }, "pages/order/order": { "defaultTitle": "我的订单", "titleBarColor": "#F7F7F7" }, "pages/order/base/afterSale": { "defaultTitle": "申请售后" }, "pages/order/base/orderComment": { "defaultTitle": "发表评价", "titleBarColor": "#F7F7F7" }, "pages/address/address": { "defaultTitle": "收货地址" }, "pages/address/addressManage": { "defaultTitle": "编辑收货地址" }, "pages/game/index": { "defaultTitle": "开砍" } }, "globalStyle": { "defaultTitle": "uni-app", "titleBarColor": "#fff", "backgroundColor": "#fff" } };exports.default = _default;

/***/ }),

/***/ 8:
/*!*****************************************************!*\
  !*** D:/uni-app/eryue26/pages.json?{"type":"stat"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__0606751" };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-alipay/common/vendor.js.map
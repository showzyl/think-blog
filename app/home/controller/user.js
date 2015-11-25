'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.



  init = function init(http) {
    _Base.prototype.init.call(this, http); // 调用父类的init方法
    this.userModelInstance = this.model('user');};_default.prototype.


  indexAction = function indexAction() {return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:case 'end':return context$2$0.stop();}}, null, this);};
  //auto render template file index_index.html
  //let info = await this.userModelInstance.select();
  //return this.success(info);
  _default.prototype.

  regAction = function regAction() {var 
    post, 
    user, 
    pass, 



    info, 




    res;return _regeneratorRuntime.async(function regAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:post = this.post();user = post.user;pass = think.md5(post.pass);if (!(!user || !pass)) {context$2$0.next = 5;break;}return context$2$0.abrupt('return', this.error('user or password can\'t null！'));case 5:info = { user: user, pass: pass };context$2$0.next = 8;return _regeneratorRuntime.awrap(this.userModelInstance.thenAdd(info, { user: user }));case 8:res = context$2$0.sent;if (!(
          res.type === 'exist')) {context$2$0.next = 13;break;}return context$2$0.abrupt('return', 
          this.fail('user exist！'));case 13:return context$2$0.abrupt('return', 

          this.success(res));case 14:case 'end':return context$2$0.stop();}}, null, this);};

  //this.userModelInstance.where({user: user}).find().then(async data => {
  //  if(data.id){
  //    return this.error('user exist！');
  //  }else{
  //    let res = await this.userModelInstance.add(info);
  //    return this.success(res);
  //  }
  //});
  _default.prototype.

  loginAction = function loginAction() {var 
    post, 
    user, 
    pass;return _regeneratorRuntime.async(function loginAction$(context$2$0) {var _this = this;while (1) switch (context$2$0.prev = context$2$0.next) {case 0:post = this.post();user = post.user;pass = think.md5(post.pass);if (!(

          !user || !pass)) {context$2$0.next = 5;break;}return context$2$0.abrupt('return', this.error('user or password can\'t null！'));case 5:

          this.userModelInstance.where({ user: user }).find().then(function callee$2$0(data) {return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {while (1) switch (context$3$0.prev = context$3$0.next) {case 0:if (!(
                  data.pass === pass)) {context$3$0.next = 6;break;}context$3$0.next = 3;return _regeneratorRuntime.awrap(
                  this.session("userInfo", { 
                    uid: data.uid, 
                    user: user, 
                    code: Math.random() }));case 3:return context$3$0.abrupt('return', 

                  this.success('login success!'));case 6:return context$3$0.abrupt('return', 

                  this.fail('password error!'));case 7:case 'end':return context$3$0.stop();}}, null, _this);});case 6:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.




  logoutAction = function logoutAction() {var 
    post, 
    res;return _regeneratorRuntime.async(function logoutAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:post = this.post();context$2$0.next = 3;return _regeneratorRuntime.awrap(this.session());case 3:res = context$2$0.sent;return context$2$0.abrupt('return', 
          this.success(res));case 5:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];
'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _moment = require(
'moment');var _moment2 = _interopRequireDefault(_moment);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.



	init = function init(http) {
		_Base.prototype.init.call(this, http); // 调用父类的init方法
		this.articleInstance = this.model('article');
		this.userInstance = this.model('user');};_default.prototype.


	indexAction = function indexAction() {return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:case 'end':return context$2$0.stop();}}, null, this);};
	//return this.display();
	_default.prototype.

	listAction = function listAction() {var 
		info, 
		user;return _regeneratorRuntime.async(function listAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.articleInstance.select());case 2:info = context$2$0.sent;context$2$0.next = 5;return _regeneratorRuntime.awrap(this.session('userInfo'));case 5:user = context$2$0.sent;
					this.assign('items', info);
					this.assign('user', user);return context$2$0.abrupt('return', 
					this.display());case 9:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.


	pubAction = function pubAction() {var 
		user;return _regeneratorRuntime.async(function pubAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:user = this.session("userInfo");
					this.assign('user', user);return context$2$0.abrupt('return', 
					this.display());case 3:case 'end':return context$2$0.stop();}}, null, this);};


	// 添加和更新
	_default.prototype.addAction = function addAction() {var 
		post, 













		res, author, info;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:post = this.post();if (!post.aid) {context$2$0.next = 8;break;}context$2$0.next = 4;return _regeneratorRuntime.awrap(this.articleInstance.where({ aid: post.aid }).update(post));case 4:res = context$2$0.sent;return context$2$0.abrupt('return', this.success(res));case 8:context$2$0.next = 10;return _regeneratorRuntime.awrap(this.userInstance.where({ uid: post.uid }).find());case 10:author = context$2$0.sent;info = { uid: post.uid, author: author.user, create_time: _moment2['default']().format('YYYY-MM-DD h:mm:ss'), title: post.title, content: post.content };context$2$0.next = 14;return _regeneratorRuntime.awrap(this.articleInstance.add(info));case 14:res = context$2$0.sent;return context$2$0.abrupt('return', 
					this.success(res));case 16:case 'end':return context$2$0.stop();}}, null, this);};



	// 修改
	_default.prototype.editAction = function editAction() {var 
		get, 
		info;return _regeneratorRuntime.async(function editAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:get = this.get();context$2$0.next = 3;return _regeneratorRuntime.awrap(this.articleInstance.where({ aid: get.aid }).find());case 3:info = context$2$0.sent;
					this.assign('article', info);return context$2$0.abrupt('return', 
					this.display('pub'));case 6:case 'end':return context$2$0.stop();}}, null, this);};


	// 删除
	_default.prototype.delAction = function delAction() {var 
		get, 
		res;return _regeneratorRuntime.async(function delAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:get = this.get();context$2$0.next = 3;return _regeneratorRuntime.awrap(this.articleInstance.where({ aid: get.aid })['delete']());case 3:res = context$2$0.sent;return context$2$0.abrupt('return', 
					this.success(res));case 5:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];
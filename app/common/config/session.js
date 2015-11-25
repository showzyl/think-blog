'use strict';

/**
 * session configs
 */exports.__esModule = true;exports['default'] = 
{ 
  name: 'thinkjs', //对应 cookie 的名称
  type: 'file', 
  secret: 'K^95G0W2', //Session 对应的 cookie 是否需要加密
  timeout: 24 * 3600, //过期时间，默认为一天
  cookie: { // cookie options
    length: 32, 
    httponly: true }, 

  adapter: { 
    file: { 
      path: think.getPath('common', 'runtime') + '/session' } } };module.exports = exports['default'];
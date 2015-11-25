'use strict';
/**
 * db config
 * @type {Object}
 */exports.__esModule = true;exports["default"] = 


{ 
  //socketPath: '/tmp/mysql.sock',
  type: "mysql", //数据库类型
  host: "127.0.0.1", //数据库 host
  port: "3306", //数据库端口，默认为 3306
  name: "think_test", //数据库名
  user: "root", //账号
  pwd: "root", //密码
  prefix: "think_", //数据表前缀，如果不想要数据表前缀，可以设置为空
  encoding: "utf8", //数据库编码
  nums_per_page: 10, //每页显示的条数
  log_sql: true, //是否记录执行的 sql 语句
  log_connect: true, //是否记录数据库连接信息
  cache: { // 数据库查询缓存配置
    on: true, 
    type: "", 
    timeout: 3600 } };module.exports = exports["default"];
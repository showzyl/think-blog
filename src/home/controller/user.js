'use strict';

import Base from './base.js';

export default class extends Base {

  init(http){
    super.init(http);  // 调用父类的init方法
    this.userModelInstance = this.model('user');
  }

  async indexAction(){
    //auto render template file index_index.html
    //let info = await this.userModelInstance.select();
    //return this.success(info);
  }

  async regAction(){
    let post = this.post();
    let user = post.user;
    let pass = think.md5( post.pass );

    if(!user || !pass) return this.error('user or password can\'t null！');

    let info = {
      user: user,
      pass: pass
    };

    let res = await this.userModelInstance.thenAdd(info, {user: user});
    if(res.type === 'exist'){
      return this.fail('user exist！');
    }else{
      return this.success(res);
    }
    //this.userModelInstance.where({user: user}).find().then(async data => {
    //  if(data.id){
    //    return this.error('user exist！');
    //  }else{
    //    let res = await this.userModelInstance.add(info);
    //    return this.success(res);
    //  }
    //});
  }

  async loginAction(){
    let post = this.post();
    let user = post.user;
    let pass = think.md5( post.pass );

    if(!user || !pass) return this.error('user or password can\'t null！');

    this.userModelInstance.where({user: user}).find().then(async data => {
      if(data.pass === pass){
        await this.session("userInfo", {
          uid: data.uid,
          user: user,
          code: Math.random()
        });
	      return this.success('login success!');
      }else{
	      return this.fail('password error!');
      }
    });
  }

  async logoutAction(){
    let post = this.post();
    let res = await this.session();
    return this.success(res);
  }

  

  

}
'use strict';

import Base from './base.js';
import moment from 'moment';

export default class extends Base {

  init(http){
    super.init(http);  // 调用父类的init方法
    this.articleInstance = this.model('article');
    this.userInstance = this.model('user');
  }

  async indexAction(){
    //return this.display();
  }

  async listAction(){
		let info = await this.articleInstance.select();
		let user = await this.session('userInfo');
		this.assign('items', info);
		this.assign('user', user);
		return this.display();
  }

  async pubAction(){
    let user = this.session("userInfo");
    this.assign('user', user);
    return this.display();
  }

	// 添加和更新
  async addAction(){
		let post = this.post();

		if(post.aid){
			let res = await this.articleInstance.where({aid: post.aid}).update(post);
			return this.success(res);
		}else{
			let author = await this.userInstance.where({uid: post.uid}).find();
			let info = {
				uid: post.uid,
				author: author.user,
				create_time: moment().format('YYYY-MM-DD h:mm:ss'),
				title: post.title,
				content: post.content
			};
			let res = await this.articleInstance.add(info);
			return this.success(res);
		}
  }

	// 修改
	async editAction(){
		let get = this.get();
		let info = await this.articleInstance.where({aid: get.aid}).find();
		this.assign('article', info);
		return this.display('pub');
	}

	// 删除
	async delAction(){
		let get = this.get();
		let res = await this.articleInstance.where({aid: get.aid}).delete();
		return this.success(res);
	}

}
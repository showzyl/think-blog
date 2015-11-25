'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let user = await this.session("userInfo");
    this.assign('user', user);
    return this.display();
  }

  


}
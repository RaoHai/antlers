import { observable } from 'mobx';

class Layout {
  @observable layout = [];
  @observable loading = false;

  constructor() {
    this.fetchLayout();
  }

  fetchLayout() {
    this.loading = true;
  }
}

export default Layout;

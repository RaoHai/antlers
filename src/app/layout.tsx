import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Layout from '../models/layout';

export interface LayoutProps {
  layout: Layout;
}

@observer
class LayoutView extends Component<LayoutProps, any> {
  state = {  }
  render() {
    return (
      <div> layout view 1</div>
    );
  }
}

export default LayoutView;

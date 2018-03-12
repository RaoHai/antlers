import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from "react-hot-loader";

import LayoutView from './app/layout';
import Layout from './models/layout';

const store = {
  // user: userStore,
  layout: new Layout(),
  // i18n: i18nStore,
}


const renderApp = (Component: React.ComponentClass<any>) => {
  render(
    <AppContainer>
      <Provider {...store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  )
}

renderApp(LayoutView);

if ((module as any).hot) {
	(module as any).hot.accept(() => renderApp(LayoutView));
}
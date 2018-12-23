import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { translateLanguageChange } from './state/reducers/index';
import { StoreState } from './state/types/index';
import { Provider } from 'react-redux';

const store = createStore<StoreState, any, any, any>(translateLanguageChange, {
  translate: {
    from: {
      language: ""
    },
    to: {
      language: ""
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

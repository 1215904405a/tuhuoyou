import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducer';
import * as serviceWorker from './serviceWorker';
import 'src/less/index.less';

// 1、创建 store
const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode> ,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

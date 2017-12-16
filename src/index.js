import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Reducers from './reducers';
import * as actions from './actions';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducers);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();

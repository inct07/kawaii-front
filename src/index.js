import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import MainList from './components/MainList';
import reducer from './reducers/reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
render(
    <Provider store={store}>
        <MainList />
    </Provider>,
    document.getElementById('root')
);

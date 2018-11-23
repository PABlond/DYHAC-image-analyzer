import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './../_reducers'
import initialState from './../_reducers/initialState'

const logger = createLogger({
    collapsed: true,
    diff: true
});

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

export default store
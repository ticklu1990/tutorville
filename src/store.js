
import {createStore,combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {tasks} from './reducer'


const reducer = combineReducers({
    tasks
})

const initialState = {}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
)

export default store;



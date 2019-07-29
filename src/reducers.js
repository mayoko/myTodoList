import todosReducer from './modules/todos';
import { combineReducers } from 'redux';

//const todoApp = (state, action) => combineReducers({
//    todos: todosReducer
//});

const todoApp = todosReducer;

export default todoApp;
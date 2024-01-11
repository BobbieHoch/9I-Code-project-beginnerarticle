import React from 'react';
import { createStore } from 'redux';

function countReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(countReducer);
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());

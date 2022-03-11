import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"
import {fetchUsers} from "./reducers/userSlice"
import {Provider} from "react-redux"
store.dispatch(fetchUsers())
ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>
 ,
  document.getElementById('root')
);



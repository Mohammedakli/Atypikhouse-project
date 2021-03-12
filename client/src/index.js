import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/usersAction";

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getPosts } from "./actions/postAction";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());
//store.dispatch(getPost());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
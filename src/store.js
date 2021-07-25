import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import { reactReduxFirebase } from "react-redux-firebase";

import { rootReducer, rootInitialState } from "./reducers";
import { epicMiddleWare } from "./epics";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  collapsed: true,
});

const router = routerMiddleware(browserHistory);

var config = {
  apiKey: "AIzaSyAyermMGjNdbf_rLYTOXSOBGbAoKB1jfug",
  authDomain: "oauthchatapp1-b6056.firebaseapp.com",
  databaseURL: "https://oauthchatapp1-b6056.firebaseio.com",
  projectId: "oauthchatapp1-b6056",
  storageBucket: "oauthchatapp1-b6056.appspot.com",
  messagingSenderId: "217316995473",
  appId: "1:217316995473:web:0746e17048f4680cd82a30",
  measurementId: "G-GZP7BM5H8K",
};

export const store = createStore(
  rootReducer,
  rootInitialState,
  composeEnhancers(
    reactReduxFirebase(config, { userProfile: "users" }),
    applyMiddleware(logger, router, epicMiddleWare)
  )
);

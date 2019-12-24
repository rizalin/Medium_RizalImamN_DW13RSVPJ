import { createStore, combineReducers, applyMiddleware } from "redux";
import { articles } from "../_reducers/home";
import { logger } from "../middleware";

const reducers = combineReducers({
  articles
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;

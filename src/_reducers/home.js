import {
  GET_ARTICLES,
  GET_ARTICLES_PENDING,
  GET_LATEST_ARTICLES,
  GET_LATEST_ARTICLES_PENDING
} from "../config/constant";

const initialState = {
  data: [],
  isLoading: false,
  isPost: false
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isPost: false
      };
    case GET_ARTICLES_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_LATEST_ARTICLES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isPost: false
      };
    case GET_LATEST_ARTICLES_PENDING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

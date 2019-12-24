import {
  GET_ARTICLES,
  GET_ARTICLES_PENDING,
  GET_LATEST_ARTICLES,
  GET_LATEST_ARTICLES_PENDING
} from "../config/constant";

export const getArticle = article => {
  return {
    type: GET_ARTICLES,
    payload: article
  };
};

export const getArticlePending = () => {
  return {
    type: GET_ARTICLES_PENDING
  };
};

export const getLatestArticle = article => {
  return {
    type: GET_LATEST_ARTICLES,
    payload: article
  };
};

export const getArticlePending = () => {
  return {
    type: GET_LATEST_ARTICLES_PENDING
  };
};

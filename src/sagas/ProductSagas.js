

import {
  call,
  put,
  fork,
  takeEvery
} from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import api from './api'
import axios from "axios";

import {
  LOAD_PRODUCT,
  loadProductSuccess,
  loadProductFailure,
  LOAD_CATEGORY,
  loadCategorySuccess,
  loadCategoryFailure
} from "../actions";

es6promise.polyfill();


function fetchCategory(action) {
  return axios({
    method: "get",
    url:
      `https://api.thecatapi.com/v1/categories`
  });
}
export function* productArchive(action) {
  try {
    const response = yield call(api.fetchCat, action);
    const cat = response.data;

    yield put(loadProductSuccess(cat));
  } catch (error) {
    yield put(loadProductFailure(error));
  }
}

function* categoryArchive(action) {

  try {
    const response = yield call(fetchCategory, action);
    const catCat = response.data;

    yield put(loadCategorySuccess(catCat));
  } catch (error) {
    yield put(loadCategoryFailure(error));
  }
}

function* watchProduct() {
  yield takeEvery(LOAD_PRODUCT, productArchive);
}
function* watchCategory() {

  yield takeEvery(LOAD_CATEGORY, categoryArchive);
}

export default function* ProductSagas() {
  yield fork(watchProduct);
  yield fork(watchCategory);
}


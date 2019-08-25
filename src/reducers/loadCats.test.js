import loadCats from './loadCats.js';
import {exampleInitialState} from './loadCats';
import {
  LOAD_PRODUCT_FAILURE,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT,
  DELETE
} from "../actions/index";
import { actionChannel } from 'redux-saga/effects';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = { products: [],
      loading: true,
      archivePage: 0,
      error: null, };

    expect(loadCats(undefined, action)).toEqual(initialState);
  });
});

describe('LOAD_PRODUCT', () => {
  test('returns the correct state', () => {
    const action = { type: LOAD_PRODUCT, payload: 1 };
    const expectedState = {   ...exampleInitialState,archivePage: action.data };

    expect(loadCats(undefined, action)).toEqual(expectedState);
  });
});


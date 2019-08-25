import configureStore from 'redux-mock-store';

// Actions to be tested
import * as actions from './index';
// import loadProductData from './index';
const mockStore = configureStore();
const store = mockStore();


describe('loadProductSuccess', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
         
          'type': 'LOAD_PRODUCT_SUCCESS',
           'data':1
        },
      ];
  
      store.dispatch(actions.loadProductSuccess(1));
    expect(store.getActions()).toEqual(expectedActions);
    });
  });
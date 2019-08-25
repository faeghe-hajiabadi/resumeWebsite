import { runSaga } from 'redux-saga';

import { productArchive } from './ProductSagas';
import api from '../sagas/api'; // we'll mock the fetchImages api
import { loadProductSuccess, loadProductFailure } from '../actions/index';



test('should load data in case of success', async () => {
    // we push all dispatched actions to make assertions easier
    // and our tests less brittle
    const dispatchedActions = [];

    // we don't want to perform an actual api call in our tests
    // so we will mock the fetchImages api with jest
    // this will mutate the dependency which we may reset if other tests
    // are dependent on it
    const mockedImages = [
        {
            "breeds": [],
            "categories": [
                {
                    "id": 6,
                    "name": "caturday"
                }
            ],
            "id": "40t",
            "url": "https://cdn2.thecatapi.com/images/40t.jpg",
            "width": 550,
            "height": 733
        },
        {
            "breeds": [],
            "categories": [
                {
                    "id": 2,
                    "name": "space"
                }
            ],
            "id": "5ht",
            "url": "https://cdn2.thecatapi.com/images/5ht.jpg",
            "width": 667,
            "height": 500
        },
    ];
    const mockedResponse = {
        data: mockedImages
    }
    api.fetchCat = jest.fn(() => Promise.resolve(mockedResponse));

    const fakeStore = {
        getState: () => ({}),
        dispatch: action => dispatchedActions.push(action),
    };

    // wait for saga to complete
    await runSaga(fakeStore, productArchive).done;


    expect(dispatchedActions).toContainEqual(loadProductSuccess(mockedImages));
});

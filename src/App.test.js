


import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import { Provider } from 'react-redux'
// Component to be tested
import App from './App';

const initialState = {
  products: 0,
  choosedFilter: null
  
};


const mockStore = configureStore();

const store = mockStore(initialState);


  describe('<App />', () => {
    describe('render()', () => {
      test('renders the component', () => {
        const wrapper = shallow(<Provider store={store}><App  /></Provider>);
        const component = wrapper.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
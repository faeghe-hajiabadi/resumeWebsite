import {
  LOAD_PRODUCT_FAILURE,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT,
  DELETE
} from "../actions/index";


export const exampleInitialState = {
  products: [],
  loading: true,
  archivePage: 0,
  error: null,

};

export default function loadCats(state = exampleInitialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        archivePage: action.data,
        loading: true
      };
    case LOAD_PRODUCT_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOAD_PRODUCT_SUCCESS:
      let tempState = JSON.parse(JSON.stringify(state.products))

      const moreProducts = tempState.concat(action.data);


      return {
        ...state,
        loading: false,
        archivePage: state.archivePage + 1,
        products: moreProducts,
        //   uniqueNumber: randomNum
      };

    case DELETE:
      return {
        ...state,
        archivePage: 0,
        products: []
      };

    default:
      return state;
  }
}

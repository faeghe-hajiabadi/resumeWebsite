import {
  LOAD_CATEGORY_FAILURE,
  LOAD_CATEGORY_SUCCESS,
  LOAD_CATEGORY
} from "../actions/index";


export const exampleInitialState = {
  category: [],
  loading: true,
  archivePage: 1,
  error: null,
  sortby: 0,
  ads: [],
  ended: false,
  fetchProducts: [],
  uniqueNumber: 0,
  endOfCatalog: "End Of Cataloge"
};

export default function loadCategory(state = exampleInitialState, action) {
  switch (action.type) {

    case LOAD_CATEGORY:

      return {
        ...state,
        archivePage: action.data,
        loading: true
      };
    case LOAD_CATEGORY_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOAD_CATEGORY_SUCCESS:

      return {
        ...state,
        loading: false,
        archivePage: state.archivePage + 1,
        category: action.data,
        //   uniqueNumber: randomNum
      };



    default:
      return state;
  }
}

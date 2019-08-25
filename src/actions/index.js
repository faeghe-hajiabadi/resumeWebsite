export const LOAD_PRODUCT_FAILURE = "LOAD_PRODUCT_FAILURE";
export const LOAD_PRODUCT_SUCCESS = "LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT = "LOAD_PRODUCT";

export const LOAD_CATEGORY_FAILURE = "LOAD_CATEGORY_FAILURE";
export const LOAD_CATEGORY_SUCCESS = "LOAD_CATEGORY_SUCCESS";
export const LOAD_CATEGORY = "LOAD_CATEGORY";
export const DELETE = "DELETE";

// export const SET_SORTBY = "SET_SORTBY";

export function loadProductData(data, order) {

  return {
    type: LOAD_PRODUCT,
    data,
    order

  };
}

export function loadProductSuccess(data) {

  return {
    type: LOAD_PRODUCT_SUCCESS,
    data
  };
}
export function loadProductFailure(err) {
  return {
    type: LOAD_PRODUCT_FAILURE,
    err
  };
}

export function loadCategory(data) {
  return {
    type: LOAD_CATEGORY,
    data,

  };
}

export function loadCategorySuccess(data) {

  return {

    type: LOAD_CATEGORY_SUCCESS,
    data
  };
}
export function loadCategoryFailure(err) {
  return {
    type: LOAD_CATEGORY_FAILURE,
    err
  };
}


export function deleteProducts(data) {
  return {
    type: DELETE,
    data,

  };
}
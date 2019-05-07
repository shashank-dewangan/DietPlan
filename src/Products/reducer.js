import axios from "axios";

var initialState = {
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPRODUCTS":
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};


export const actions = {
  getProducts: () => dispatch => {
    axios
      .get("http://localhost:5000/api/products")
      .then(res => {
        var products = res.data.data;
        dispatch({ type: "GETPRODUCTS", payload: products });
      })
      .catch(err => console.log("error", err));
    
  }
};

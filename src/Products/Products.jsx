import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./reducer";
import "./style.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getProducts();
    console.log("this.props", this.props);
  }
  render() {
    return (
      <div className="product-style">
        <h2>Products</h2>
        <br />
        <div>
          {!!this.props.products &&
            this.props.products.map((product, index) => {
              return (
                <div style={{ float: "left", padding: "20px" }}>
                  <div key={index} className={!product.inStock ? "product-not-available":"product-available"}>
                    <div><b>Brand : </b>{product.brand}</div>
                    <div><b>Model : </b>{product.model}</div>
                    <div><b>Price : </b>{product.price}</div>
                  </div>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { products: state.productReducer.products };
};
export default connect(
  mapStateToProps,
  { ...actions }
)(Products);

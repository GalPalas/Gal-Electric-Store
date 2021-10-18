import React from "react";
import data from "data";
import Rating from "components/Rating/rating";
import "./product.css";

const Product = () => {
  const { products } = data;
  return (
    <div className="container">
      <div className="row ">
        {products.map((product) => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 m-2">
            <div key={product._id} className="card">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

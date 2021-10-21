import React from "react";
import Rating from "components/Rating/rating";
import "./product.css";

const Product = ({ products }) => {
  return (
    <div className="container p-5 mt-3">
      <div className="row mt-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 m-2"
          >
            <div className="card">
              <a href={`/product/${product._id}`}>
                <img src={product.image} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <h5 className="card-text text-secondary">
                  model:{product.model}
                </h5>
                <p className="card-text text-secondary text-decoration-line-through fw-bolder mb-0">
                  ${product.originalPrice}
                </p>
                <p className="card-text fs-2 fw-bolder mb-0">
                  ${product.currentPrice}
                </p>
                <div className="d-flex">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                  <img
                    src={product.brandIcon}
                    alt="..."
                    className="brand-icon ms-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

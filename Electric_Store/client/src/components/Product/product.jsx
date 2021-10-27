import React from "react";
import { Link } from "react-router-dom";
import Rating from "components/Rating/rating";
import "./product.css";

const Product = ({ products }) => {
  if (!products) return <div>ProductS Not Found</div>;
  return (
    <section className="bg-white p-2">
      <div className="container-fluid">
        <h1 className="text-center text-dark mb-3">
          Electrical Products | Home Products | Cellular and Computers
        </h1>
        <div className="row gy-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6"
            >
              <div className="card">
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    className="card-img-top image-fluid w-75"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <Link
                    className="text-decoration-none"
                    to={`/product/${product._id}`}
                  >
                    <h4 className="card-title text-dark ">{product.name}</h4>
                  </Link>
                  <h5 className="card-model text-secondary">
                    model:{product.model}
                  </h5>
                  <p className="card-originalPrice text-secondary text-decoration-line-through fw-bolder mb-0">
                    ${product.originalPrice}
                  </p>
                  <p className="card-currentPrice fs-3 fw-bolder mb-0">
                    ${product.currentPrice}
                  </p>
                  <div className="d-xl-flex">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                    <img
                      src={product.brandIcon}
                      alt="brand icon"
                      className="brand-icon ms-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

import React from "react";
import data from "data";
import Rating from "components/Rating/rating";
import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  const product = data.products.find(
    (product) => product._id === props.match.params.id
  );

  if (!product) return <div>Product Not Found</div>;
  return (
    <div className="container-fluid p-3">
      <Link to="/">Back to result</Link>

      <div className="row mt-3">
        <div className="col-md-5">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-md-4">
          <ul className="list-unstyled">
            <li>
              <h5>{product.name}</h5>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Pirce : ${product.price}</li>
            <li>
              <p>Description: {product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="card card-body">
            <ul className="list-unstyled mb-0">
              <li>
                <div className="row">
                  <div class="d-flex justify-content-between">
                    <div>Price</div>
                    <div className="price fw-bold">${product.price}</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div class="d-flex justify-content-between">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="text-success">In Stock</span>
                      ) : (
                        <span className="text-danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-2 ">
                <button className="btn btn-primary w-100">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

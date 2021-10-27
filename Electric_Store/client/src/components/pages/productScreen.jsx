import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct, getProductDetails } from "store/productDetails";
import Rating from "components/Rating/rating";
import LoadingBox from "components/shared/loadingBox";
import MessageBox from "components/shared/messageBox";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productsDetails = useSelector(getProductDetails());
  const { loading, error, product } = productsDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  if (!product) return <div>Product Not Found</div>;
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
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
                      <div className="d-flex justify-content-between">
                        <div>Price</div>
                        <div className="price fw-bold">${product.price}</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="d-flex justify-content-between">
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
                    <button className="btn btn-primary w-100">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;

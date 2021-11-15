import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts, productList } from "store/products";
import Product from "components/Product/product";
import LoadingBox from "components/shared/loadingBox";
import MessageBox from "components/shared/messageBox";
import ShowCase from "components/ShowCase/showCase";
import Newsletter from "components/Newsletter/newsletter";
import Menu from "components/Menu/menu";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(productList());
  const { loading, error, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          <Menu />
          <ShowCase />
          <Newsletter />
          <Product products={products} />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "components/Product/product";
import LoadingBox from "components/shared/loadingBox";
import MessageBox from "components/shared/messageBox";
import ShowCase from "components/ShowCase/showCase";
import Newsletter from "components/Newsletter/newsletter";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ShowCase />
      <Newsletter />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <Product products={products} />
      )}
    </div>
  );
};

export default HomeScreen;

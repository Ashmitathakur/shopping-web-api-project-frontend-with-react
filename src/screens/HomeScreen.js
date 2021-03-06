import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Button } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/ProductActions";



const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  const allproducts = products && products.filter((p) => p.newArrival === false);


  const newArrivals = products && products.filter((p) => p.newArrival === true);
  console.log(newArrivals);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />

      <ProductCarousel />

      <h1 style={{ textAlign: "center" }}>Product Highlights</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {allproducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </div>
          <Link to='/allproducts'>
            <Button>{"Shop More >"} </Button>
          </Link>
          <h1 style={{ textAlign: "center" }}>New Arrivals</h1>
              <div className="row">
                  {newArrivals.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
              </div>
        

          <Link to='/allproducts'>
            <Button>{"Shop More >"} </Button>
          </Link>
        </>
      )}
      </>
  )
      
};

export default HomeScreen;

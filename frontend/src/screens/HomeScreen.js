import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Card } from "react-bootstrap";
import { addToCart } from "../actions/cartActions";

const HomeScreen = ({ match, location, history }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const [qty, setQty] = useState();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  const qtyChangeHandler = (e, product) => {
    console.log(e.target.value + " " + product.name);
    if (e.target.value > 0) {
      dispatch(addToCart(product._id, Number(e.target.value)));
    }
  };
  return (
    <>
      <h3>Happy Shopping!!</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Card border='dark' className='my-3 p-3 rounded'>
                  <Card.Body>
                    <Card.Title as='div'>
                      <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h3'>Rs.{product.price}</Card.Text>
                    {product.countInStock > 0 ? (
                      <Form.Control
                        as='select'
                        // value={product.countInStock}
                        onChange={(e) => {
                          setQty(qty);
                          qtyChangeHandler(e, product);
                        }}>
                        {[...Array(product.countInStock + 1).keys()].map(
                          (x) => (
                            <option key={x} value={x}>
                              {x}
                            </option>
                          )
                        )}
                      </Form.Control>
                    ) : (
                      <Message>Out of Stock</Message>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;

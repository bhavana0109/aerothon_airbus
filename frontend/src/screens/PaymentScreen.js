import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const listOfPaymentMethods = [
    "Credit Card",
    "Debit Card",
    "Google Pay",
    "Phone Pe",
    "Cash On Delivery",
  ];
  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState(cart.paymentMethod);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col>
            <Form.Control
              as='select'
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}>
              {listOfPaymentMethods.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </Form.Control>
            {/* <Form.Check
              type='radio'
              label='Credit Card'
              id='CreditCard'
              name='paymentMethod'
              value='Credit Card'
              onChange={(e) => {
                setPaymnetMethod(e.target.value);
              }}
            />
            <Form.Check
              type='radio'
              label='Debit Card'
              id='DeditCard'
              name='paymentMethod'
              value='Dedit Card'
              onChange={(e) => {
                setPaymnetMethod(e.target.value);
              }}
            />
            <Form.Check
              type='radio'
              label='Google Pay'
              id='GooglePay'
              name='paymentMethod'
              value='Google Pay'
              onChange={(e) => {
                setPaymnetMethod(e.target.value);
              }}
            />
            <Form.Check
              type='radio'
              label='Phone Pe'
              id='PhonePe'
              name='paymentMethod'
              value='Phone Pe'
              onChange={(e) => {
                setPaymnetMethod(e.target.value);
              }}
            />
            <Form.Check
              type='radio'
              label='Cash On Delivery'
              id='COD'
              name='paymentMethod'
              value='Cash On Delivery'
              checked
              onChange={(e) => {
                setPaymnetMethod(e.target.value);
              }}
            /> */}
          </Col>
        </Form.Group>
        <Button type='submit' varinat='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;

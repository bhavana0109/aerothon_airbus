import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState("Benguluru"); //shippingAddress.city
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [state, setState] = useState("Karnataka"); //shippingAddress.state
  const [contact, setContact] = useState(shippingAddress.contact);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, pincode, state, contact }));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='contact'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type='contact'
            placeholder='Enter Contact Number'
            value={contact}
            onChange={(e) => setContact(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='city'
            placeholder='Enter City'
            value={city} //'Benguluru'
            disabled={true}
            onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='state'
            placeholder='Enter State'
            value={state} //'Karnataka'
            disabled={true}
            onChange={(e) => setState(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='pincode'>
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            type='pincode'
            placeholder='Enter Pincode'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' varinat='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;

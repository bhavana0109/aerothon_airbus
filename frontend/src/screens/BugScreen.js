import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { createBug } from "../actions/bugActions";
import { bugCreateReducer } from "../reducers/bugReducers";

const BugScreen = ({ location, history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //   const bugRegister = useSelector((state) => state.bugRegister);
  //   const { loading, error, bugInfo } = bugRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    // if (bugInfo) {
    //   history.push(redirect);
    // }
  }, [history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    dispatch(createBug([title, description]));
  };

  return (
    <FormContainer>
      <h1>Create Bug</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Ttile'
            value={title}
            onChange={(e) => setTitle(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Create
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BugScreen;

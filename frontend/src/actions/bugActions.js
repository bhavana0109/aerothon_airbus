import {
  BUG_CREATE_FAIL,
  BUG_CREATE_REQUEST,
  BUG_CREATE_SUCCESS,
  BUG_DETAILS_FAIL,
  BUG_DETAILS_REQUEST,
  BUG_DETAILS_SUCCESS,
  BUG_LIST_FAIL,
  BUG_LIST_MY_FAIL,
  BUG_LIST_MY_REQUEST,
  BUG_LIST_MY_RESET,
  BUG_LIST_MY_SUCCESS,
  BUG_LIST_REQUEST,
  BUG_LIST_SUCCESS,
  BUG_ALLOCATED_FAIL,
  BUG_ALLOCATED_REQUEST,
  BUG_ALLOCATED_RESET,
  BUG_ALLOCATED_SUCCESS,
  BUG_SOLVED_SUCCESS,
  BUG_SOLVED_FAIL,
  BUG_SOLVED_REQUEST,
  BUG_SOLVED_RESET,
} from "../constants/bugConstants";

import axios from "axios";

export const createBug = (bug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUG_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/bugs`, bug, config);

    dispatch({
      type: BUG_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    dispatch({
      type: BUG_CREATE_FAIL,
      payload: message,
    });
  }
};

export const getBugDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUG_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/bugs/${id}`, config);

    dispatch({
      type: BUG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BUG_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const allocateBug = (bugId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUG_ALLOCATED_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/bugs/${bugId}/allocated`,
      {},
      config
    );

    dispatch({
      type: BUG_ALLOCATED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BUG_ALLOCATED_FAIL,
      payload: message,
    });
  }
};

export const solvedBug = (bug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUG_SOLVED_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/bugs/${bug._id}/solved`, {}, config);

    dispatch({
      type: BUG_ALLOCATED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BUG_ALLOCATED_FAIL,
      payload: message,
    });
  }
};
export const listMyBugs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUG_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/bugs/mybugs`, config);

    dispatch({
      type: BUG_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BUG_LIST_MY_FAIL,
      payload: message,
    });
  }
};

export const listBugs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUG_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/bugs`, config);

    dispatch({
      type: BUG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BUG_LIST_FAIL,
      payload: message,
    });
  }
};

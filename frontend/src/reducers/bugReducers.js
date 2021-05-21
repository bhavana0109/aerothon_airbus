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

export const bugCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BUG_CREATE_REQUEST:
      return {
        loading: true,
      };
    case BUG_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        bug: action.payload,
      };
    case BUG_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const bugDetailsReducer = (
  state = { loading: true, bugItems: [] },
  action
) => {
  switch (action.type) {
    case BUG_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BUG_DETAILS_SUCCESS:
      return {
        loading: false,
        bug: action.payload,
      };
    case BUG_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const bugAllocatedReducer = (state = {}, action) => {
  switch (action.type) {
    case BUG_ALLOCATED_REQUEST:
      return {
        loading: true,
      };
    case BUG_ALLOCATED_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case BUG_ALLOCATED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case BUG_ALLOCATED_RESET:
      return {};
    default:
      return state;
  }
};

export const bugSolvedReducer = (state = {}, action) => {
  switch (action.type) {
    case BUG_SOLVED_REQUEST:
      return {
        loading: true,
      };
    case BUG_SOLVED_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case BUG_SOLVED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case BUG_SOLVED_RESET:
      return {};
    default:
      return state;
  }
};

export const bugListMyReducer = (state = { bugs: [] }, action) => {
  switch (action.type) {
    case BUG_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case BUG_LIST_MY_SUCCESS:
      return {
        loading: false,
        bugs: action.payload,
      };
    case BUG_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case BUG_LIST_MY_RESET:
      return { bugs: [] };

    default:
      return state;
  }
};

export const bugListReducer = (state = { bugs: [] }, action) => {
  switch (action.type) {
    case BUG_LIST_REQUEST:
      return {
        loading: true,
      };
    case BUG_LIST_SUCCESS:
      return {
        loading: false,
        bugs: action.payload,
      };
    case BUG_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

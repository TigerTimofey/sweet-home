import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  showStart: false,
  passwordCheck: false,
  hideLogo: false,
  showMenuSelect: false,
};

export const setShowStart = createAction("setShowStart");
export const setPasswordCheck = createAction("setPasswordCheck");
export const setHideLogo = createAction("setLogoHide");
export const setShowMenuSelect = createAction("setShowMenuSelect");

const reducer = createReducer(initialState, {
  [setShowStart]: (state, action) => {
    state.showStart = action.payload;
  },
  [setPasswordCheck]: (state, action) => {
    state.passwordCheck = action.payload;
  },
  [setHideLogo]: (state, action) => {
    state.hideLogo = action.payload;
  },
  [setShowMenuSelect]: (state, action) => {
    state.showMenuSelect = action.payload;
  },
});

export const store = configureStore({ reducer });

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  showStart: false,
  passwordCheck: false,
  hideLogo: false,
  showMenuSelect: false,
  selectedOption: null,
  copied: false,
  showMiniRimi: false,
  showStockmann: false,
  showPrismaShop: false,
  showViruMall: false,
  show: false,
  showRein: false,
  showJaposha: false,
  showPrecious: false,
  showArgentina: false,
};

export const setShowStart = createAction("setShowStart");
export const setPasswordCheck = createAction("setPasswordCheck");
export const setHideLogo = createAction("setLogoHide");
export const setShowMenuSelect = createAction("setShowMenuSelect");
export const setSelectedOption = createAction("setSelectedOption");

export const setCopied = createAction("setCopied");

export const setShowMiniRimi = createAction("setShowMiniRimi");
export const setShowStockmann = createAction("setShowStockmann");
export const setShowPrismaShop = createAction("setShowPrismaShop");
export const setShowViruMall = createAction("setShowViruMall");

export const setShow = createAction("setShow");
export const setShowRein = createAction("setShowRein");
export const setShowJaposha = createAction("setShowJaposha");
export const setShowPrecious = createAction("setShowPrecious");
export const setShowArgentina = createAction("setShowArgentina");

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
  [setSelectedOption]: (state, action) => {
    state.selectedOption = action.payload;
  },
  [setCopied]: (state, action) => {
    state.copied = action.payload;
  },

  [setShowMiniRimi]: (state, action) => {
    state.showMiniRimi = action.payload;
  },
  [setShowStockmann]: (state, action) => {
    state.showStockmann = action.payload;
  },
  [setShowPrismaShop]: (state, action) => {
    state.showPrismaShop = action.payload;
  },
  [setShowViruMall]: (state, action) => {
    state.showViruMall = action.payload;
  },

  [setShow]: (state, action) => {
    state.show = action.payload;
  },
  [setShowRein]: (state, action) => {
    state.showRein = action.payload;
  },
  [setShowJaposha]: (state, action) => {
    state.showJaposha = action.payload;
  },
  [setShowPrecious]: (state, action) => {
    state.showPrecious = action.payload;
  },
  [setShowArgentina]: (state, action) => {
    state.showArgentina = action.payload;
  },
});

export const store = configureStore({ reducer });

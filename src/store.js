import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { setStatusServer } from "./features/statusServerSlice";

const errorMiddleWare = (store) => (next) => (action) => {
  if (action.type.endsWith("/rejected")) {
    store.dispatch(setStatusServer(false));
  }
  if (action.type.endsWith("/fulfilled")) {
    store.dispatch(setStatusServer(true));
  }
  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleWare),
});

export default store;

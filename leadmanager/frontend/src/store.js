import { configureStore } from "@reduxjs/toolkit";

import leadsReducer from "./features/leadsSlice";
import errorReducer from "./features/errorSlice";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    leads: leadsReducer,
    errors: errorReducer,
    auth: authReducer,
  },
});

export default store;

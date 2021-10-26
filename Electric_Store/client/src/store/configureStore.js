import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "store/reducer";
import api from "store/middleware/api";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}

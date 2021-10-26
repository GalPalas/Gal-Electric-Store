import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("productsList/callBegan");
export const apiCallSuccess = createAction("productsList/callSuccess");
export const apiCallFailed = createAction("productsList/callFailed");

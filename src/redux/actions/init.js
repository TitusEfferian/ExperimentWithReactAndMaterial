import { createAction } from "redux-actions";
import { INIT_API, INIT_API_SUCCESS, INIT_API_FAILED } from "./types";

export const initApi = createAction(INIT_API);
export const initApiSuccess = createAction(INIT_API_SUCCESS);
export const initApiFailed = createAction(INIT_API_FAILED);

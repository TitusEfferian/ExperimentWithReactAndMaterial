import { call, put } from "redux-saga/effects";
import { INIT_API_SUCCESS, INIT_API_FAILED } from "../redux/actions/types";
import { initApis } from "../apis/init";

export function* fetchInitApis() {
  try {
    const data = yield call(initApis);
    yield put({ type: INIT_API_SUCCESS, data });
  } catch (e) {
    yield put({ type: INIT_API_FAILED, errData: { message: e.message } });
  }
}

import { all, takeEvery } from "redux-saga/effects";
import * as Types from "../redux/actions/types";
import { fetchInitApis } from "./init";

export default function* watchSagas() {
  yield all([yield takeEvery(Types.INIT_API, fetchInitApis)]);
}

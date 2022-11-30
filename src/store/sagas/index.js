import { all, fork } from "redux-saga/effects";

import {
  watchLogin,
} from "./auth";

import {
  watchGetWilayah,
  watchCreateWilayah,
  watchUpdateWilayah
} from "./wilayah";


export default function* sagas() {
  yield all([
    fork(watchLogin),
    fork(watchGetWilayah),
    fork(watchCreateWilayah),
    fork(watchUpdateWilayah)
  ]);
}

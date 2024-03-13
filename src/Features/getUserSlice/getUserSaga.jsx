
import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchUser,fetchUserSuccess, fetchUserFailure, } from './getUserSlice'; 
import { ApiCall } from "../../ApiFunctions/ApiCall";

function* fetchUserSaga() {
  try {
    const response = yield call(ApiCall, { route: "products", verb: "get", baseurl: true, params: null });
    yield put(fetchUserSuccess(response));
    // console.log(response,"response in user saga")
  } catch (error) {
    yield put(fetchUserFailure(error));
    // console.log(error,"error in response userSgaa")
  }
}

export function* userSaga() {
  yield takeEvery(fetchUser.type, fetchUserSaga);
}

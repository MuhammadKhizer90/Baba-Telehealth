import { all } from 'redux-saga/effects';
import { userSaga } from '../Features/getUserSlice/getUserSaga';
import { createSaga } from '../Features/createUserSlice/createUserSaga';
import {doctorSaga} from '../Features/createDoctorSlice/createDoctorSaga'
import {professionalSaga} from "../Features/createProfessionalSlice/createProfessionalSaga"
import { loginSaga } from '../Features/loginSlice/loginSaga';
export default function* rootSaga() {
  yield all([
    userSaga(), 
    createSaga(),
    doctorSaga(),
    professionalSaga(),
    loginSaga(),
  ]);
}

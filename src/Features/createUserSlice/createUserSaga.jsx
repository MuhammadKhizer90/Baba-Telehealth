import { put,takeEvery,call } from "redux-saga/effects";
import {createUser,createUserSuccess,createUserFailure} from "../createUserSlice/createUserSlice"
import { ApiCall } from "../../ApiFunctions/ApiCall";

function* createUserSaga(action){
   try {
     const {
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        dob,
        gender
      }=action.payload;
     const userData={
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        dob,
        gender
      }
     console.log(userData,"data in the middle ware before api calling")
      const response=yield call(ApiCall,{ route:'auth/customer/signup', verb: "post", baseurl: true, params:userData })
      yield put(createUserSuccess(response));
      console.log(response,"response in the create user saga after api calling");
   } catch (error) {
      yield put(createUserFailure(error))
      console.log(error,"error in the middleware")
   }
   }
   export function* createSaga(){
      yield takeEvery(createUser.type,createUserSaga)
   }
  




 
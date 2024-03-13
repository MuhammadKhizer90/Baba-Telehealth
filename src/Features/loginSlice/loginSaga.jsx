import { put,takeEvery,call } from "redux-saga/effects";
import {userLogin,userLoginSuccess,userLoginFailure} from "../loginSlice/loginSlice"
import { ApiCall } from "../../ApiFunctions/ApiCall";

function* createLoginSaga(action){
   try {
     const {
        email,
        password,
      }=action.payload;
     const userLoginData={
        email,
        password,
      }
     console.log(userLoginData,"data in the middle ware before api calling")
      const response=yield call(ApiCall,{ route:'auth/login', verb: "post", baseurl: true, params:userLoginData })
      yield put(userLoginSuccess(response));
      console.log(response,"response after api call")
      console.log(response.response.token,"response token in saga after api calling");
   } catch (error) {
      yield put(userLoginFailure(error))
      console.log(error,"error in the middleware")
   }
   }
   export function* loginSaga(){
      yield takeEvery(userLogin.type,createLoginSaga)
   }
  




 
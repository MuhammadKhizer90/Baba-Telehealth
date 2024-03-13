import { put,takeEvery,call } from "redux-saga/effects";
import {createDoctor,createDoctorSuccess,createDoctorFailure} from "../createDoctorSlice/createDoctorSlice"
import { ApiCall } from "../../ApiFunctions/ApiCall";

function* createDoctorSaga(action){
   try {
     const {
      first_name,
      email,
      password,
      confirm_password,
      city,
      region,
      language,
      phone_number,
      description,
      speciality,
      experience,
      education,
      practice,
      hospital_affiliation,
      }=action.payload;
     const doctorData={
      first_name,
      email,
      password,
      confirm_password,
      city,
      region,
      language,
      phone_number,
      description,
      speciality,
      experience,
      education,
      practice,
      hospital_affiliation,
      }
     console.log(doctorData,"data in the middle ware before api calling")
      const response=yield call(ApiCall,{ route:'auth/provider/signup', verb: "post", baseurl: true, params:doctorData })
      yield put(createDoctorSuccess(response));
      console.log(response,"response in the create user saga after api calling");
   } catch (error) {
      yield put(createDoctorFailure(error))
      console.log(error,"error in the middleware")
   }
   }
   export function* doctorSaga(){
      yield takeEvery(createDoctor.type,createDoctorSaga)
   }
  




 
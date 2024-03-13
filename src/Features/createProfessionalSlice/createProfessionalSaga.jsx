import { put,takeEvery,call } from "redux-saga/effects";
import {createProfessional,createProfessionalSuccess,createProfessionalFailure} from "../createProfessionalSlice/createProfessionalSlice"
import { ApiCall } from "../../ApiFunctions/ApiCall";

function* createProfessionalSaga(action){
   try {
     const {
      first_name,
      email,
      password,
      confirm_password,
      language,
      phone_number,
      description,
      speciality,
      experience,
      education,
      practice,
      hospital_affiliation,
      }=action.payload;
     const professionalData={
      first_name,
      email,
      password,
      confirm_password,
      language,
      phone_number,
      description,
      speciality,
      experience,
      education,
      practice,
      hospital_affiliation,
      }
     console.log(professionalData,"data in the middle ware before api calling")
      const response=yield call(ApiCall,{ route:'auth/professional/signup', verb: "post", baseurl: true, params:professionalData })
      yield put(createProfessionalSuccess(response));
      console.log(response,"response in the create user saga after api calling");
   } catch (error) {
      yield put(createProfessionalFailure(error))
      console.log(error,"error in the middleware")
   }
   }
   export function* professionalSaga(){
      yield takeEvery(createProfessional.type,createProfessionalSaga)
   }
  




 
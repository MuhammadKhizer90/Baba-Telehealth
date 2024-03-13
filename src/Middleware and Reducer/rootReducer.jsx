
import { combineReducers } from '@reduxjs/toolkit';
import getUserSlice from '../Features/getUserSlice/getUserSlice';
import createUserSlice from '../Features/createUserSlice/createUserSlice';
import createDoctorSlice from '../Features/createDoctorSlice/createDoctorSlice'
import createProfessionalSlice from '../Features/createProfessionalSlice/createProfessionalSlice';
import loginSlice from '../Features/loginSlice/loginSlice';
const rootReducer = combineReducers({
  user: getUserSlice,
  userPost: createUserSlice,
  doctorPost:createDoctorSlice,
  professionalPost:createProfessionalSlice,
  login:loginSlice,
});

export default rootReducer;
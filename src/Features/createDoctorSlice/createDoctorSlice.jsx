import {createSlice} from "@reduxjs/toolkit"

export const createDoctorSlice = createSlice({
    name: "doctorPost",
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
      errorMessage: "",
    },
    reducers:{
       createDoctor(state){
        state.isLoading=true;
        state.isError=false;
       },
       createDoctorSuccess(state,action){
        state.isLoading=false;
        state.data=action.payload;

       },
       createDoctorFailure(state,action){
        state.isLoading=false;
        state.isError=true;
        state.errorMessage=action.payload;
       }
    }
})

export const {createDoctor,createDoctorSuccess,createDoctorFailure}=createDoctorSlice.actions;
export default createDoctorSlice.reducer
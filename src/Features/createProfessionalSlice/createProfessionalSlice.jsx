import {createSlice} from "@reduxjs/toolkit"

export const createProfessionalSlice = createSlice({
    name: "professionalPost",
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
      errorMessage: "",
    },
    reducers:{
       createProfessional(state){
        state.isLoading=true;
        state.isError=false;
       },
       createProfessionalSuccess(state,action){
        state.isLoading=false;
        state.data=action.payload;

       },
       createProfessionalFailure(state,action){
        state.isLoading=false;
        state.isError=true;
        state.errorMessage=action.payload;
       }
    }
})

export const {createProfessional,createProfessionalSuccess,createProfessionalFailure}=createProfessionalSlice.actions;
export default createProfessionalSlice.reducer
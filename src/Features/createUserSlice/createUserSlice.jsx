import {createSlice} from "@reduxjs/toolkit"

export const createUserSlice = createSlice({
    name: "userPost",
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
      errorMessage: "",
    },
    reducers:{
       createUser(state){
        state.isLoading=true;
        state.isError=false;
       },
       createUserSuccess(state,action){
        state.isLoading=false;
        state.data=action.payload;

       },
       createUserFailure(state,action){
        state.isLoading=false;
        state.isError=true;
        state.errorMessage=action.payload;
       }
    }
})

export const {createUser,createUserSuccess,createUserFailure}=createUserSlice.actions;
export default createUserSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState{
    jwt:string|null
}

const initialState : UserState = {
    jwt:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userLogin(state,action:PayloadAction<string>){
            state.jwt = action.payload
        },
        userLogOut(state){
            state.jwt = null
        }
    }
})

export const {userLogin,userLogOut} = userSlice.actions
export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        status:'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },

    reducers: {
        login: (state, {payload})=>{
            state.status = 'authenticated',
            state.email =  payload.email
            state.uid =  payload.uid
            state.displayName =  payload.displayName
            state.photoURL =  payload.photoURL
            state.errorMessage =  null          
        },

        logout: (state, action)=>{
            state.status ='not-authenticated',
            state.uid = null,
            state.email = null,
            state.displayName = null,
            state.photoURL = null,
            state.errorMessage = action.payload
        },

        checkinCredentials: (state)=>{
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkinCredentials } = authSlice.actions;
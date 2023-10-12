import { createSlice } from "@reduxjs/toolkit";

import Notiflix from 'notiflix';


const initialState = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            localStorage.setItem('reduxUser', JSON.stringify(state));
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;

            localStorage.setItem('reduxUser', JSON.stringify(state));
            Notiflix.Notify.success('Successfuly logout');
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
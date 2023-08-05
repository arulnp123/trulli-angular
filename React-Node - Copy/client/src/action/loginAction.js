import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = '';
// const initialStateValue = [{ id:'', first_name:'', last_name:'',email:'', password:'', api_token:'' }];

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value : initialStateValue,
   },
  reducers: {
    loginStore: (state, action) => {
      state.value = action.payload;
     },

     logoutStore: (state) => {
      state.value = initialStateValue;
     },

  },
})

// Action creators are generated for each case reducer function
export const { loginStore, logoutStore } = loginSlice.actions

export default loginSlice.reducer
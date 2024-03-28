import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectMail:null,
    sendMessageIsOpen:false,
  },
  reducers: {
    selectMail:(state,action)=>{
      state.selectedMail=action.payload;
    },
    openSendMessage: (state) => {
     
      state.sendMessageIsOpen=true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false;
    },
    
  },
 
  
});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;


export const selectOpenMail=(state)=>state.mail.selectedMail;

export default mailSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKey } from "../Features/ApiKey";
import ImageApi from "../Features/ImageApi";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    LOADING :'loading',
    ERROR : 'error'
  })

export const fetchAsyncImages = createAsyncThunk("images/fetchAsyncImages" , async (term) => {
  const res = await ImageApi.get(`page=1&query=${term}&client_id=${ApiKey}`)
  const data = await res.data;
  localStorage.setItem('Image' , JSON.stringify(data));
  return data;     
});

const ImageSlice = createSlice({
    name : 'ImageSlice',
    initialState : {
        images : {},
        status : STATUSES.IDLE
    },
    reducers : {
        addImage(state , action){
          state.images = action.payload
        },
        // addStatus(state , action){
        //   state.status = action.payload  
        // }
    },
    extraReducers:{
      [fetchAsyncImages.pending] : (state) => {
        console.log("...loading");
        return {...state ,status : STATUSES.LOADING  }
      },
      [fetchAsyncImages.fulfilled] : (state , action) => {
        console.log("fetched succesfully");
        return {...state , images : action.payload , status : STATUSES.IDLE};
      },
      [fetchAsyncImages.rejected]:(state) => {
        console.log("rejected");
        return {...state , status : STATUSES.ERROR};
     },
    }
})
export const {addImage,addStatus} = ImageSlice.actions;
export default ImageSlice.reducer;


// Thunks for Load Images ; First way to create thunk;

// export function fetchImages(url){
//     return async function fetchImageThunks(dispatch){
//       dispatch(addStatus(STATUSES.LOADING));
//       try {
//         const res = await ImageApi.get(url)
//         const data = await res.data;
//         dispatch(addImage(data));
//         dispatch(addStatus(STATUSES.IDLE));
//       } catch (error) {
//         dispatch(addStatus(STATUSES.ERROR));
//         console.log(error);
//       }
//     }
//   }
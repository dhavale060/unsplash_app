import { configureStore } from "@reduxjs/toolkit";
import ImageSclice from "../ImageSclice";


const store = configureStore({
 reducer : {
  imagestate : ImageSclice
  }
})

export default store;
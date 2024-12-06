import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../redux/ListSlice.js";


const store = configureStore({
    reducer: {
        etudiants: ListSlice,
        
    },
})
export default store;
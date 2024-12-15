import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../redux/ListSlice.js";
import EtudiantSlice from "../redux/StudentSlice.js";


const store = configureStore({
    reducer: {
        etudiants: ListSlice,
        etudiant: EtudiantSlice,
        
    },
})
export default store;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {useParams} from "react-router-dom";

export const fetchEtudiant = createAsyncThunk(
  "etudiant/fetchEtudiant",
  async (id, { rejectWithValue }) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.get(`${apiUrl}/etu/${id}`);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Erreur serveur");
    }
  }
);


const EtudiantSlice = createSlice({
  name: "etudiant",
  initialState: {
    etudiant: {}, 
    // loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEtudiant.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(fetchEtudiant.fulfilled, (state, action) => {
        // state.loading = false;
        state.etudiant = action.payload; 
      })
      .addCase(fetchEtudiant.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload; 
      });
  },
});

export const selectEtudiant = (state) => state.etudiant.etudiant; 
export const selectLoading = (state) => state.etudiant.loading;
export const selectError = (state) => state.etudiant.error;

export default EtudiantSlice.reducer;

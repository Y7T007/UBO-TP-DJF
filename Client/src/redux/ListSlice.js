  
    import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
    import axios from 'axios';
    
    export const fetchEtudiants = createAsyncThunk(
      'list/fetchEtudiants',
      async (_, { rejectWithValue }) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/etu`);
          return response.data; 
        } catch (error) {
          return rejectWithValue(error.response?.data || 'Erreur serveur');
        }
      }
    );
    
    const ListSlice = createSlice({
      name: 'list',
      initialState: {
        etudiants: [],
        // loading: false,
        error: null,
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchEtudiants.pending, (state) => {
            // state.loading = true;
            state.error = null;
          })
          .addCase(fetchEtudiants.fulfilled, (state, action) => {
            // state.loading = false;
            state.etudiants = action.payload; 
          })
          .addCase(fetchEtudiants.rejected, (state, action) => {
            // state.loading = false;
            state.error = action.payload; 
          });
      },
    });
    
    export const selectEtudiants = (state) => state.list.etudiants;
    // export const selectLoading = (state) => state.list.loading;
    export const selectError = (state) => state.list.error;
    
    export default ListSlice.reducer;
    
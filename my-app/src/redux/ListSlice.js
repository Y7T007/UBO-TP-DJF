    /*
    noEtudiantNat	
    nom	
    prenom	
    email	
    anneePro	
    estDiplome*/
    import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
    import axios from 'axios';
    
    export const fetchEtudiants = createAsyncThunk(
      'list/fetchEtudiants',
      async (_, { rejectWithValue }) => {
        try {
          const response = await axios.get('http://localhost:8080/api/read'); 
          return response.data; // Retourne les données récupérées
        } catch (error) {
          return rejectWithValue(error.response?.data || 'Erreur serveur');
        }
      }
    );
    
    const ListSlice = createSlice({
      name: 'list',
      initialState: {
        etudiants: [],
        loading: false,
        error: null,
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchEtudiants.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchEtudiants.fulfilled, (state, action) => {
            state.loading = false;
            state.etudiants = action.payload; // Met à jour la liste des étudiants
          })
          .addCase(fetchEtudiants.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Stocke le message d'erreur
          });
      },
    });
    
    export const selectEtudiants = (state) => state.list.etudiants;
    export const selectLoading = (state) => state.list.loading;
    export const selectError = (state) => state.list.error;
    
    export default ListSlice.reducer;
    
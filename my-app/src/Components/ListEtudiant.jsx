import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEtudiants, selectEtudiants, selectLoading, selectError } from '../redux/ListSlice';

const ListEtudiant = () => {
  
  return (
    <div>
      <h2>Liste des étudiants</h2>
     
    </div>
  );
};

export default ListEtudiant;

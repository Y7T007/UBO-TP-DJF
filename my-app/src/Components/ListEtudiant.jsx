import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEtudiants, selectEtudiants, selectLoading, selectError } from '../redux/ListSlice';

const ListEtudiant = () => {
  const dispatch = useDispatch();
  const etudiants = useSelector(selectEtudiants);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchEtudiants()); // Appelle l'API pour récupérer les étudiants
  }, [dispatch]);

  if (loading) return <p>Chargement des étudiants...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Liste des étudiants</h2>
      <ul>
        {etudiants.map((etudiant) => (
          <li key={etudiant.noEtudiantNat}>
            {etudiant.nom} {etudiant.prenom} - {etudiant.email} - Diplômé :{' '}
            {etudiant.estDiplome === 'Y' ? 'Oui' : 'Non'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListEtudiant;

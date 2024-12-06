import React from 'react';
import axios from 'axios';

const DeleteEtudiant = ({ noEtudiantNat, onDelete }) => {
  // Fonction pour supprimer l'étudiant
  const handleDelete = async () => {
    try {
      // Appel DELETE vers le backend
      await axios.delete(`http://localhost:8080/api/etudiants/${noEtudiantNat}`);
      // Appeler la fonction onDelete après suppression
      onDelete(noEtudiantNat);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'étudiant :", error);
      alert("Impossible de supprimer l'étudiant.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Supprimer
    </button>
  );
};

export default DeleteEtudiant;

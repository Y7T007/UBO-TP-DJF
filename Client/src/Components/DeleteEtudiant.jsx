import React from 'react';
import axios from 'axios';

const DeleteEtudiant = ({ noEtudiantNat, onDelete }) => {
  const handleDelete = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      await axios.delete(`${apiUrl}/etu/${noEtudiantNat}`);
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

import React from 'react';
import axios from 'axios';

const DeleteEtudiant = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/etudiants/${id}`);
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

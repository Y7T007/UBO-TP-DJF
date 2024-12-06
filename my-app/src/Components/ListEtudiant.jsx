import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteEtudiant from './DeleteEtudiant'; // Importer le composant

const ListEtudiant = () => {
  // Liste fictive d'étudiants pour tester l'affichage
  const [etudiants, setEtudiants] = useState([
    {
      noEtudiantNat: '123',
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@example.com',
      anneePro: '2024',
      estDiplome: 'N',
    },
    {
      noEtudiantNat: '124',
      nom: 'Martin',
      prenom: 'Marie',
      email: 'marie.martin@example.com',
      anneePro: '2023',
      estDiplome: 'Y',
    },
    {
      noEtudiantNat: '125',
      nom: 'Durand',
      prenom: 'Paul',
      email: 'paul.durand@example.com',
      anneePro: '2024',
      estDiplome: 'N',
    },
  ]);

  // Fonction pour mettre à jour la liste après suppression
  const handleDelete = (noEtudiantNat) => {
    setEtudiants((prev) =>
      prev.filter((etudiant) => etudiant.noEtudiantNat !== noEtudiantNat)
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liste des étudiants</h2>
      {etudiants.length > 0 ? (
        <table className="w-3/4 max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Numéro Étudiant</th>
              <th className="py-3 px-6 text-left">Nom</th>
              <th className="py-3 px-6 text-left">Prénom</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Année</th>
              <th className="py-3 px-6 text-left">Diplômé</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {etudiants.map((etudiant) => (
              <tr
                key={etudiant.noEtudiantNat}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  <Link
                    to={`/read/${etudiant.noEtudiantNat}`}
                    className="text-blue-500 hover:underline"
                  >
                    {etudiant.noEtudiantNat}
                  </Link>
                </td>
                <td className="py-3 px-6 text-left">{etudiant.nom}</td>
                <td className="py-3 px-6 text-left">{etudiant.prenom}</td>
                <td className="py-3 px-6 text-left">{etudiant.email}</td>
                <td className="py-3 px-6 text-left">{etudiant.anneePro}</td>
                <td className="py-3 px-6 text-left">
                  {etudiant.estDiplome === 'Y' ? 'Oui' : 'Non'}
                </td>
                <td className="py-3 px-6 text-left">
                  <DeleteEtudiant
                    noEtudiantNat={etudiant.noEtudiantNat}
                    onDelete={handleDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 mt-4">Aucun étudiant trouvé.</p>
      )}
    </div>
  );
};

export default ListEtudiant;

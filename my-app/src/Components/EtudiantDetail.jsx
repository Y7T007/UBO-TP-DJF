import React, { useState } from "react";

export const EtudiantDetail = () => {
  // Définir l'état modifiable pour gérer l'accès aux champs
  const [modifiable, setModifiable] = useState(false);

  const Etudiant = {
    noEtudiantNat: "1234567890",
    anneePro: 2024,
    codeCom: "56789",
    noEtudiantUbo: "UBO202400123",
    sexe: "M",
    nom: "Dupont",
    prenom: "Jean",
    dateNaissance: "1999-04-12",
    lieuNaissance: "Paris",
    situation: "Célibataire",
    nationalite: "Française",
    telPort: "0601020304",
    telFixe: "0147852369",
    email: "jean.dupont@example.com",
    actuAdresse: "12 Rue de Paris",
    actuCp: "75001",
    actuVille: "Paris",
    actuPays: "France",
    permAdresse: "10 Avenue des Champs-Élysées",
    permCp: "75008",
    permVille: "Paris",
    permPays: "France",
    dernierDiplome: "Baccalauréat",
    universite: "Université de Bretagne Occidentale",
    sigleEtu: "UBO123456",
    compteCri: "CRISTUD123456",
    uboEmail: "jean.dupont@univ-brest.fr",
    grpeAnglais: "B1",
    abandonMotif: "Non applicable",
    abandonDate: null,
    estDiplome: false,
  };

  return (
    <div className="p-6 font-sans space-y-6">
      <h2 className="text-2xl font-bold mb-4">Carte De Détail des Étudiants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Numéro Étudiant National:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.noEtudiantNat}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Année Professionnelle:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.anneePro}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Code Com:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.codeCom}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            <strong>Numéro Étudiant UBO:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.noEtudiantUbo}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Sexe:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.sexe}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Date de Naissance:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.dateNaissance}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            <strong>Lieu de Naissance:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.lieuNaissance}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Situation:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.situation}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Nationalité:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.nationalite}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            <strong>Téléphone Portable:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.telPort}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Téléphone Fixe:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.telFixe}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Email:</strong>
          </label>
          <input
            type="email"
            value={Etudiant.email}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            <strong>Adresse Actuelle:</strong>
          </label>
          <input
            type="text"
            value={`${Etudiant.actuAdresse}, ${Etudiant.actuCp}, ${Etudiant.actuVille}, ${Etudiant.actuPays}`}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Adresse Permanente:</strong>
          </label>
          <input
            type="text"
            value={`${Etudiant.permAdresse}, ${Etudiant.permCp}, ${Etudiant.permVille}, ${Etudiant.permPays}`}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Dernier Diplôme:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.dernierDiplome}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            <strong>Université:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.universite}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Sigle Étudiant:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.sigleEtu}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Compte CRI:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.compteCri}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            <strong>Email UBO:</strong>
          </label>
          <input
            type="email"
            value={Etudiant.uboEmail}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Groupe Anglais:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.grpeAnglais}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Motif d'Abandon:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.abandonMotif || "Non applicable"}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Date d'Abandon:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.abandonDate || "Non applicable"}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            <strong>Diplômé:</strong>
          </label>
          <input
            type="text"
            value={Etudiant.estDiplome ? "Oui" : "Non"}
            disabled={!modifiable}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EtudiantDetail;

import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { useSelector } from "react-redux";
import { selectEtudiant } from "../redux/StudentSlice";
import axios from "axios";
import { useParams } from "react-router-dom";

 const EtudiantDetail = () => {
  const [modifiable, setModifiable] = useState(false);
  const { id } = useParams();

  const initialEtudiant = useSelector(selectEtudiant);

  /*const initialEtudiant = {
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
*/
  const [etudiant, setEtudiant] = useState(initialEtudiant);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtudiant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEditMode = async () => {
    if (modifiable) {
      try {
        await axios.put(`http://localhost:8080/etudiants/${id}`, etudiant);
        alert("Modifications sauvegardées !");
      } catch (error) {
        alert("Erreur lors de la sauvegarde");
      }
    }
    setModifiable(!modifiable);
  };

  const renderField = (label, name, value, type = "text") => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">{label}:</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        disabled={!modifiable}
        className={`mt-1 block w-full p-2 text-sm border rounded-lg ${
          modifiable
            ? "border-blue-500 bg-white"
            : "border-gray-300 bg-gray-100"
        } focus:ring focus:ring-blue-200`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {etudiant.nom} {etudiant.prenom}
          </h2>
          <button
      onClick={toggleEditMode}
      className={`flex items-center px-4 py-2 text-white rounded-lg transition ${
        modifiable ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      <i
        className={`fa ${modifiable ? "fa-check" : "fa-pencil"} mr-2`}
        aria-hidden="true"
      ></i>
      {modifiable ? "Sauvegarder" : "Modifier"}
    </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderField("Numéro Étudiant National", "noEtudiantNat", etudiant.noEtudiantNat)}
          {renderField("Année Professionnelle", "anneePro", etudiant.anneePro)}
          {renderField("Code Com", "codeCom", etudiant.codeCom)}
          {renderField("Numéro Étudiant UBO", "noEtudiantUbo", etudiant.noEtudiantUbo)}
          {renderField("Sexe", "sexe", etudiant.sexe)}
          {renderField("Date de Naissance", "dateNaissance", etudiant.dateNaissance)}
          {renderField("Lieu de Naissance", "lieuNaissance", etudiant.lieuNaissance)}
          {renderField("Situation", "situation", etudiant.situation)}
          {renderField("Nationalité", "nationalite", etudiant.nationalite)}
          {renderField("Téléphone Portable", "telPort", etudiant.telPort)}
          {renderField("Téléphone Fixe", "telFixe", etudiant.telFixe)}
          {renderField("Email", "email", etudiant.email, "email")}
          {renderField("Adresse Actuelle", "actuAdresse", etudiant.actuAdresse)}
          {renderField("Adresse Permanente", "permAdresse", etudiant.permAdresse)}
          {renderField("Dernier Diplôme", "dernierDiplome", etudiant.dernierDiplome)}
          {renderField("Université", "universite", etudiant.universite)}
          {renderField("Sigle Étudiant", "sigleEtu", etudiant.sigleEtu)}
          {renderField("Compte CRI", "compteCri", etudiant.compteCri)}
          {renderField("Email UBO", "uboEmail", etudiant.uboEmail, "email")}
          {renderField("Groupe Anglais", "grpeAnglais", etudiant.grpeAnglais)}
          {renderField("Motif d'Abandon", "abandonMotif", etudiant.abandonMotif || "Non applicable")}
          {renderField("Date d'Abandon", "abandonDate", etudiant.abandonDate || "Non applicable")}
          {renderField("Diplômé", "estDiplome", etudiant.estDiplome ? "Oui" : "Non")}
        </div>
      </div>
    </div>
  );
};

export default EtudiantDetail;

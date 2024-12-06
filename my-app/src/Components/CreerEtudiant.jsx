import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

const EtudiantDetail = () => {
  const [modifiable, setModifiable] = useState(true);  // Allow editing by default
  const [etudiant, setEtudiant] = useState({
    noEtudiantNat: "",
    anneePro: "",
    codeCom: "",
    noEtudiantUbo: "",
    sexe: "",
    nom: "",
    prenom: "",
    dateNaissance: "",
    lieuNaissance: "",
    situation: "",
    nationalite: "",
    telPort: "",
    telFixe: "",
    email: "",
    actuAdresse: "",
    actuCp: "",
    actuVille: "",
    actuPays: "",
    permAdresse: "",
    permCp: "",
    permVille: "",
    permPays: "",
    dernierDiplome: "",
    universite: "",
    sigleEtu: "",
    compteCri: "",
    uboEmail: "",
    grpeAnglais: "",
    abandonMotif: "",
    abandonDate: null,
    estDiplome: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtudiant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:8080/api/create", etudiant); 
      alert("Étudiant créé avec succès !");
    } catch (error) {
      alert("Erreur lors de la création");
    }
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
          <h2 className="text-2xl font-bold text-gray-800">Création d'un étudiant</h2>
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

        <button
          onClick={handleCreate}
          className="mt-6 flex items-center px-4 py-2 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
        >
          <i className="fa fa-plus mr-2" aria-hidden="true"></i>
          Créer Étudiant
        </button>
      </div>
    </div>
  );
};

export default EtudiantDetail;

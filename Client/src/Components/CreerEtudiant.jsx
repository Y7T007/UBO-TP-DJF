import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

export const CreateEtudiant = () => {
  const [modifiable, setModifiable] = useState(true);
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
    estDiplome: "N",
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
      const apiUrl = process.env.REACT_APP_API_URL;
      await axios.post(`${apiUrl}/etu`, etudiant);
      alert("Étudiant créé avec succès !");
    } catch (error) {
      alert("Erreur lors de la création");
    }
  };

  const renderField = (label, name, value, type = "text", constraints = {}) => (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">{label}:</label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            disabled={!modifiable}
            maxLength={constraints.maxLength}
            required={constraints.required}
            pattern={constraints.pattern}
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
          {renderField("Numéro Étudiant National", "noEtudiantNat", etudiant.noEtudiantNat, "text", {
            maxLength: 50,
            required: true
          })}
          {renderField("Année Professionnelle", "anneePro", etudiant.anneePro, "text", {maxLength: 10, required: true})}
          {renderField("Code Com", "codeCom", etudiant.codeCom, "text", {maxLength: 10})}
          {renderField("Numéro Étudiant UBO", "noEtudiantUbo", etudiant.noEtudiantUbo, "text", {maxLength: 20})}
          {renderField("Sexe", "sexe", etudiant.sexe, "text", {maxLength: 1, required: true})}
          {renderField("Nom", "nom", etudiant.nom, "text", {maxLength: 50, required: true})}
          {renderField("Prénom", "prenom", etudiant.prenom, "text", {maxLength: 50, required: true})}
          {renderField("Date de Naissance", "dateNaissance", etudiant.dateNaissance, "date", {required: true})}
          {renderField("Lieu de Naissance", "lieuNaissance", etudiant.lieuNaissance, "text", {
            maxLength: 255,
            required: true
          })}
          {renderField("Situation", "situation", etudiant.situation, "text", {maxLength: 3, required: true})}
          {renderField("Nationalité", "nationalite", etudiant.nationalite || "Française", "text", {
            maxLength: 50,
            required: true
          })}
          {renderField("Téléphone Portable", "telPort", etudiant.telPort, "text", {maxLength: 20})}
          {renderField("Téléphone Fixe", "telFixe", etudiant.telFixe, "text", {maxLength: 20})}
          {renderField("Email", "email", etudiant.email, "email", {maxLength: 255})}
          {renderField("Adresse Actuelle", "actuAdresse", etudiant.actuAdresse, "text", {maxLength: 255})}
          {renderField("Code Postal Actuel", "actuCp", etudiant.actuCp, "text", {maxLength: 10})}
          {renderField("Ville Actuelle", "actuVille", etudiant.actuVille, "text", {maxLength: 255})}
          {renderField("Pays Actuel", "actuPays", etudiant.actuPays, "text", {maxLength: 255})}
          {renderField("Adresse Permanente", "permAdresse", etudiant.permAdresse, "text", {
            maxLength: 255,
            required: true
          })}
          {renderField("Code Postal Permanent", "permCp", etudiant.permCp, "text", {maxLength: 10, required: true})}
          {renderField("Ville Permanente", "permVille", etudiant.permVille, "text", {maxLength: 255, required: true})}
          {renderField("Pays Permanent", "permPays", etudiant.permPays, "text", {maxLength: 255, required: true})}
          {renderField("Dernier Diplôme", "dernierDiplome", etudiant.dernierDiplome, "text", {
            maxLength: 255,
            required: true
          })}
          {renderField("Université", "universite", etudiant.universite, "text", {maxLength: 255, required: true})}
          {renderField("Sigle Étudiant", "sigleEtu", etudiant.sigleEtu, "text", {maxLength: 3, required: true})}
          {renderField("Compte CRI", "compteCri", etudiant.compteCri, "text", {maxLength: 10, required: true})}
          {renderField("Email UBO", "uboEmail", etudiant.uboEmail, "email", {maxLength: 255})}
          {renderField("Groupe Anglais", "grpeAnglais", etudiant.grpeAnglais, "number")}
          {renderField("Motif d'Abandon", "abandonMotif", etudiant.abandonMotif, "text", {maxLength: 255})}
          {renderField("Date d'Abandon", "abandonDate", etudiant.abandonDate, "date")}
          {renderField("Diplômé", "estDiplome", etudiant.estDiplome, "text", { maxLength: 1, required: true })}
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
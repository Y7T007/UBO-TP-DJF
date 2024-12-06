package fr.ubo.tp_djf.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ETUDIANT", schema = "DOSI")
public class Etudiant {

    @Id
    @Column(name = "NO_ETUDIANT_NAT", nullable = false, length = 50)
    private String noEtudiantNat;

    @Column(name = "ANNEE_PRO", nullable = false, length = 10)
    private String anneePro;

    @Column(name = "CODE_COM", length = 10)
    private String codeCom;

    @Column(name = "NO_ETUDIANT_UBO", length = 20)
    private String noEtudiantUbo;

    @Column(name = "SEXE", nullable = false, length = 1)
    private String sexe;

    @Column(name = "NOM", nullable = false, length = 50)
    private String nom;

    @Column(name = "PRENOM", nullable = false, length = 50)
    private String prenom;

    @Column(name = "DATE_NAISSANCE", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dateNaissance;

    @Column(name = "LIEU_NAISSANCE", nullable = false, length = 255)
    private String lieuNaissance;

    @Column(name = "SITUATION", nullable = false, length = 3)
    private String situation;

    @Column(name = "NATIONALITE", nullable = false, length = 50)
    private String nationalite = "Française";

    @Column(name = "TEL_PORT", length = 20)
    private String telPort;

    @Column(name = "TEL_FIXE", length = 20)
    private String telFixe;

    @Column(name = "EMAIL", length = 255)
    private String email;

    @Column(name = "ACTU_ADRESSE", length = 255)
    private String actuAdresse;

    @Column(name = "ACTU_CP", length = 10)
    private String actuCp;

    @Column(name = "ACTU_VILLE", length = 255)
    private String actuVille;

    @Column(name = "ACTU_PAYS", length = 255)
    private String actuPays;

    @Column(name = "PERM_ADRESSE", nullable = false, length = 255)
    private String permAdresse;

    @Column(name = "PERM_CP", nullable = false, length = 10)
    private String permCp;

    @Column(name = "PERM_VILLE", nullable = false, length = 255)
    private String permVille;

    @Column(name = "PERM_PAYS", nullable = false, length = 255)
    private String permPays;

    @Column(name = "DERNIER_DIPLOME", nullable = false, length = 255)
    private String dernierDiplome;

    @Column(name = "UNIVERSITE", nullable = false, length = 255)
    private String universite;

    @Column(name = "SIGLE_ETU", nullable = false, length = 3)
    private String sigleEtu;

    @Column(name = "COMPTE_CRI", nullable = false, length = 10)
    private String compteCri;

    @Column(name = "UBO_EMAIL", length = 255)
    private String uboEmail;

    @Column(name = "GRPE_ANGLAIS")
    private Integer grpeAnglais;

    @Column(name = "ABANDON_MOTIF", length = 255)
    private String abandonMotif;

    @Column(name = "ABANDON_DATE")
    @Temporal(TemporalType.DATE)
    private Date abandonDate;

    @Column(name = "EST_DIPLOME", nullable = false, length = 1)
    private char estDiplome = 'N';

    // Getters and Setters
}
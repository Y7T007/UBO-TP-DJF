package fr.ubo.tp_djf.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

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


    public String getNoEtudiantNat() {
        return noEtudiantNat;
    }

    public void setNoEtudiantNat(String noEtudiantNat) {
        this.noEtudiantNat = noEtudiantNat;
    }

    public char getEstDiplome() {
        return estDiplome;
    }

    public void setEstDiplome(char estDiplome) {
        this.estDiplome = estDiplome;
    }

    public Date getAbandonDate() {
        return abandonDate;
    }

    public void setAbandonDate(Date abandonDate) {
        this.abandonDate = abandonDate;
    }

    public String getAbandonMotif() {
        return abandonMotif;
    }

    public void setAbandonMotif(String abandonMotif) {
        this.abandonMotif = abandonMotif;
    }

    public Integer getGrpeAnglais() {
        return grpeAnglais;
    }

    public void setGrpeAnglais(Integer grpeAnglais) {
        this.grpeAnglais = grpeAnglais;
    }

    public String getUboEmail() {
        return uboEmail;
    }

    public void setUboEmail(String uboEmail) {
        this.uboEmail = uboEmail;
    }

    public String getCompteCri() {
        return compteCri;
    }

    public void setCompteCri(String compteCri) {
        this.compteCri = compteCri;
    }

    public String getSigleEtu() {
        return sigleEtu;
    }

    public void setSigleEtu(String sigleEtu) {
        this.sigleEtu = sigleEtu;
    }

    public String getUniversite() {
        return universite;
    }

    public void setUniversite(String universite) {
        this.universite = universite;
    }

    public String getPermPays() {
        return permPays;
    }

    public void setPermPays(String permPays) {
        this.permPays = permPays;
    }

    public String getDernierDiplome() {
        return dernierDiplome;
    }

    public void setDernierDiplome(String dernierDiplome) {
        this.dernierDiplome = dernierDiplome;
    }

    public String getPermVille() {
        return permVille;
    }

    public void setPermVille(String permVille) {
        this.permVille = permVille;
    }

    public String getPermCp() {
        return permCp;
    }

    public void setPermCp(String permCp) {
        this.permCp = permCp;
    }

    public String getPermAdresse() {
        return permAdresse;
    }

    public void setPermAdresse(String permAdresse) {
        this.permAdresse = permAdresse;
    }

    public String getActuPays() {
        return actuPays;
    }

    public void setActuPays(String actuPays) {
        this.actuPays = actuPays;
    }

    public String getActuVille() {
        return actuVille;
    }

    public void setActuVille(String actuVille) {
        this.actuVille = actuVille;
    }

    public String getActuCp() {
        return actuCp;
    }

    public void setActuCp(String actuCp) {
        this.actuCp = actuCp;
    }

    public String getActuAdresse() {
        return actuAdresse;
    }

    public void setActuAdresse(String actuAdresse) {
        this.actuAdresse = actuAdresse;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }

    public String getTelPort() {
        return telPort;
    }

    public void setTelPort(String telPort) {
        this.telPort = telPort;
    }

    public String getTelFixe() {
        return telFixe;
    }

    public void setTelFixe(String telFixe) {
        this.telFixe = telFixe;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

    public String getLieuNaissance() {
        return lieuNaissance;
    }

    public void setLieuNaissance(String lieuNaissance) {
        this.lieuNaissance = lieuNaissance;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public String getNoEtudiantUbo() {
        return noEtudiantUbo;
    }

    public void setNoEtudiantUbo(String noEtudiantUbo) {
        this.noEtudiantUbo = noEtudiantUbo;
    }

    public String getCodeCom() {
        return codeCom;
    }

    public void setCodeCom(String codeCom) {
        this.codeCom = codeCom;
    }

    public String getAnneePro() {
        return anneePro;
    }

    public void setAnneePro(String anneePro) {
        this.anneePro = anneePro;
    }
}
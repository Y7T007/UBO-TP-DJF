package fr.ubo.tp_djf.services;

import fr.ubo.tp_djf.models.Etudiant;
import fr.ubo.tp_djf.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EtudiantService {

    @Autowired
    private final EtudiantRepository etudiantRepository;

    @Autowired
    public EtudiantService(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    public Etudiant getEtudiantById(String id) {
        Optional<Etudiant> etudiant = etudiantRepository.findById(id);
        return etudiant.orElse(null);
    }

    public Etudiant saveEtudiant(Etudiant etudiant) {
        if (etudiant.getNoEtudiantNat() == null || etudiant.getNoEtudiantNat().isEmpty()) {
            throw new IllegalArgumentException("The student ID (noEtudiantNat) must be provided.");
        }
        return etudiantRepository.save(etudiant);
    }

    public void deleteEtudiant(String id) {
        etudiantRepository.deleteById(id);
    }
}
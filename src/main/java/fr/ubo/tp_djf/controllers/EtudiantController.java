package fr.ubo.tp_djf.controllers;

import fr.ubo.tp_djf.models.Etudiant;
import fr.ubo.tp_djf.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/etudiants")
public class EtudiantController {
    private final EtudiantService etudiantService;

    @Autowired
    public EtudiantController(EtudiantService etudiantService) {
        this.etudiantService = etudiantService;
    }

    @GetMapping
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @GetMapping("/{id}")
    public Etudiant getEtudiantById(@PathVariable String id) {
        return etudiantService.getEtudiantById(id);
    }

    @PostMapping
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantService.saveEtudiant(etudiant);
    }

    @PutMapping("/{id}")
    public Etudiant updateEtudiant(@PathVariable String id, @RequestBody Etudiant etudiant) {
        return etudiantService.saveEtudiant(etudiant);
    }

    @DeleteMapping("/{id}")
    public void deleteEtudiant(@PathVariable String id) {
        etudiantService.deleteEtudiant(id);
    }
}
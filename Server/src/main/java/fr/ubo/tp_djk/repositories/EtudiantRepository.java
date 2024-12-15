package fr.ubo.tp_djk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import fr.ubo.tp_djk.models.Etudiant;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, String> {
}
package fr.ubo.tp_djk;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import fr.ubo.tp_djk.models.Etudiant;
import fr.ubo.tp_djk.services.EtudiantService;

import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(DemoApplication.class);

	@Autowired
	private EtudiantService etudiantService;

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		List<Etudiant> etudiants = etudiantService.getAllEtudiants();
		ObjectMapper objectMapper = new ObjectMapper();
		String json = objectMapper.writeValueAsString(etudiants);
		logger.info("All Etudiants: {}", json);
	}
}
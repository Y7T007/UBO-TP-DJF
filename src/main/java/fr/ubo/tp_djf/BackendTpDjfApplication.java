package fr.ubo.tp_djf;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendTpDjfApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().load();
        SpringApplication.run(BackendTpDjfApplication.class, args);
    }
}
package uz.legalos;

import org.springframework.boot.SpringApplication;

public class TestLegalosBackendApplication {

	public static void main(String[] args) {
		SpringApplication.from(LegalosBackendApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}

package com.pfa.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pfa.backend.entities.User;
import com.pfa.backend.repositories.UserRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(UserRepository userRepo){
		return args ->{ 
			User user = new User("John", "Doe", "john.doe@example.com", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "admin");

			userRepo.insert(user);
			System.out.println("user added succesfully");
		};
	}

}

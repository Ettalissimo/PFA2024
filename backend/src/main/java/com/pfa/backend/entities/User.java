package com.pfa.backend.entities;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class User {

    @Id
    private String idUser;
    
    public String firstName;
    public String lastName;
    public String email;
    public String bio;
    public String role;

    public User(String firstName, String lastName, String email, String bio, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.bio = bio;
        this.role = role;
    }

}

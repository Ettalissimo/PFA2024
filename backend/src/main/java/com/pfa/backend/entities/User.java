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
    
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String bio;
    private String role;

    public User(String firstName) {
        this.firstName = firstName;
    }

}

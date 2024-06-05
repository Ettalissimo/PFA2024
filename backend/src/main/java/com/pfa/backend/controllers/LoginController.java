package com.pfa.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.user.UserRegistryMessageHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pfa.backend.entities.User;
import com.pfa.backend.repositories.UserRepository;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user,HttpSession session) {
        User userFound = userRepo.findByEmail(user.getEmail()).orElse(null);
        if(userFound==null){
            userRepo.save(user);
            session.setAttribute("user", user);
            return new ResponseEntity<>("user registered !",HttpStatus.OK);
        }else{
            return new ResponseEntity<>("email already in use !",HttpStatus.OK);
        }
    }


    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user, HttpSession session) {
        User userFound = userRepo.findByEmail(user.getEmail()).orElse(null);
        if(userFound!=null){
            if(userFound.getPassword().equals(user.getPassword())){
                session.setAttribute("user", userFound);
                return new ResponseEntity<>("user logged in !",HttpStatus.OK);
            }else{
                return new ResponseEntity<>("bad cridentials !",HttpStatus.OK);
            }
        }else{
            return new ResponseEntity<>("bad cridentials !",HttpStatus.OK);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return new ResponseEntity<>("Logged out successfully!",HttpStatus.OK);
    }

    @GetMapping("/currentuser")
    public ResponseEntity<User> getCurrentUser(HttpSession session) {
        return new ResponseEntity<>((User) session.getAttribute("user"),HttpStatus.OK);
    }
    
}
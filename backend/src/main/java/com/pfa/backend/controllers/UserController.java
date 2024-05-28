package com.pfa.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pfa.backend.entities.*;
import com.pfa.backend.repositories.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private BlogRepository blogRepo;

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User savedUser = userRepo.save(user);
        return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") String id) {
        User user = userRepo.findById(id).orElse(null);
        return new ResponseEntity<>(user,HttpStatus.FOUND);
    }

    @PutMapping("user/{id}")
    public ResponseEntity<User> modifyUser(@PathVariable("id") String id, @RequestBody User user) {
        User userfound = userRepo.findById(id).orElse(null);
        if(userfound!=null){
            user.setIdUser(id);
            userRepo.save(user);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("user/{id}")
    public ResponseEntity<User> modifyPartiallyUser(@PathVariable("id") String id, @RequestBody User user) {
        User userfound = userRepo.findById(id).orElse(null);
        if(userfound!=null){
            Optional.ofNullable(user.getFirstName()).ifPresent(userfound::setFirstName);
            Optional.ofNullable(user.getLastName()).ifPresent(userfound::setLastName);
            Optional.ofNullable(user.getEmail()).ifPresent(userfound::setEmail);
            Optional.ofNullable(user.getBio()).ifPresent(userfound::setBio);
            Optional.ofNullable(user.getRole()).ifPresent(userfound::setRole);
            userRepo.save(userfound);
            return new ResponseEntity<>(userfound,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userRepo.findAll();
        return new ResponseEntity<>(users,HttpStatus.FOUND);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        userRepo.deleteById(id);
        return new ResponseEntity<String>("user deleted",HttpStatus.OK);
    }

    @GetMapping("/user/activity")
    public ResponseEntity<List<Blog>> getActivity() {
        List<Blog> blogs = blogRepo.findAll();
        return new ResponseEntity<>(blogs,HttpStatus.FOUND);
    }
    

}

package com.pfa.backend.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.pfa.backend.entities.Blog;
import com.pfa.backend.entities.Pathologie;
import com.pfa.backend.entities.User;
import com.pfa.backend.repositories.BlogRepository;
import com.pfa.backend.repositories.UserRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;


@RestController
public class BlogController {

    @Value("${serverpython.port}")
    private Integer port;

    @Autowired
    private BlogRepository blogRepo;
    @Autowired
    private UserRepository userRepo;


    @PostMapping("/blogs")
    public ResponseEntity<Blog> createBlog(@RequestBody Blog blog){
        Blog savedBlog = blogRepo.save(blog);
        User user = blog.getUser();
        User user1 = userRepo.findByEmail(user.getEmail()).orElse(null);
        if(user1==null){
            userRepo.save(user);
        }
        return new ResponseEntity<>(savedBlog,HttpStatus.CREATED);
    }

    @PutMapping("Blog/{id}")
    public ResponseEntity<Blog> modifyBlog(@PathVariable("id") String id, @RequestBody Blog Blog) {
        Blog Blogfound = blogRepo.findById(id).orElse(null);
        if(Blogfound!=null){
            Blog.setIdBlog(id);
            blogRepo.save(Blog);
            return new ResponseEntity<>(Blog,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("Blog/{id}")
    public ResponseEntity<Blog> modifyPartiallyBlog(@PathVariable("id") String id, @RequestBody Blog Blog) {
        Blog Blogfound = blogRepo.findById(id).orElse(null);
        if(Blogfound!=null){
            Optional.ofNullable(Blog.getPathologie()).ifPresent(Blogfound::setPathologie);
            Optional.ofNullable(Blog.getPostTime()).ifPresent(Blogfound::setPostTime);
            Optional.ofNullable(Blog.getTags()).ifPresent(Blogfound::setTags);
            Optional.ofNullable(Blog.getUser()).ifPresent(Blogfound::setUser);
            Optional.ofNullable(Blog.getUpvotes()).ifPresent(Blogfound::setUpvotes);
            Optional.ofNullable(Blog.getDownvotes()).ifPresent(Blogfound::setDownvotes);
            
            blogRepo.save(Blogfound);
            return new ResponseEntity<>(Blogfound,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/blog/{id}")
    public ResponseEntity<Blog> getBlog(@PathVariable("id") String id) {
        Blog blog = blogRepo.findById(id).orElse(null);
        return new ResponseEntity<>(blog,HttpStatus.FOUND);
    }

    @GetMapping("/blogs")
    public ResponseEntity<List<Blog>> getBlogs() {
        List<Blog> blogs = blogRepo.findAll();
        return new ResponseEntity<>(blogs,HttpStatus.FOUND);
    }

    @DeleteMapping("/blog/{id}")
    public ResponseEntity<String> deleteBlog(@PathVariable("id") String id) {
        blogRepo.deleteById(id);
        return new ResponseEntity<String>("blog deleted",HttpStatus.NO_CONTENT);
    }

    @PostMapping("/blog/{id}")
    public ResponseEntity<String> reactBlog(@PathVariable("id") String id,@RequestParam Long choice) {
        Blog blog = blogRepo.findById(id).orElse(null);
        if(choice>0) blog.upvotes++;
        else if(choice<0) blog.downvotes++;
        blogRepo.save(blog);
        return new ResponseEntity<>("reaction saved",HttpStatus.OK);
    }
}

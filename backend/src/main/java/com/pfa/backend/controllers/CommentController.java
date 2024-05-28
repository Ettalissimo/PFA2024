package com.pfa.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfa.backend.entities.Blog;
import com.pfa.backend.entities.Comment;
import com.pfa.backend.repositories.BlogRepository;
import com.pfa.backend.repositories.CommentRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {

    @Autowired
    private CommentRepository commentRepo;
    @Autowired
    private BlogRepository blogRepo;

    @PostMapping("/blogs/comments")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment){
        String idBlog = comment.getBlog().getIdBlog();
        Blog blog = blogRepo.findById(idBlog).orElse(null);
        if(blog!=null){
            Comment savedComment = commentRepo.save(comment);
            return new ResponseEntity<>(savedComment,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(comment,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("Comment/{id}")
    public ResponseEntity<Comment> modifyComment(@PathVariable("id") String id, @RequestBody Comment Comment) {
        Comment Commentfound = commentRepo.findById(id).orElse(null);
        if(Commentfound!=null){
            Comment.setIdComment(id);
            commentRepo.save(Comment);
            return new ResponseEntity<>(Comment,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("Comment/{id}")
    public ResponseEntity<Comment> modifyPartiallyComment(@PathVariable("id") String id, @RequestBody Comment Comment) {
        Comment Commentfound = commentRepo.findById(id).orElse(null);
        if(Commentfound!=null){
            Optional.ofNullable(Comment.getContent()).ifPresent(Commentfound::setContent);
            Optional.ofNullable(Comment.getUpvotes()).ifPresent(Commentfound::setUpvotes);
            Optional.ofNullable(Comment.getDownvotes()).ifPresent(Commentfound::setDownvotes);
            Optional.ofNullable(Comment.getPostTime()).ifPresent(Commentfound::setPostTime);
            Optional.ofNullable(Comment.getAuthor()).ifPresent(Commentfound::setAuthor);
            Optional.ofNullable(Comment.getBlog()).ifPresent(Commentfound::setBlog);

            commentRepo.save(Commentfound);
            return new ResponseEntity<>(Commentfound,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/blogs/comment/{id}")
    public ResponseEntity<Comment> getComment(@PathVariable("id") String id) {
        Comment comment = commentRepo.findById(id).orElse(null);
        if(comment!=null) return new ResponseEntity<>(comment,HttpStatus.FOUND);
        else return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    @GetMapping("/blogs/comments")
    public ResponseEntity<List<Comment>> getComments() {
        List<Comment> comments = commentRepo.findAll();
        return new ResponseEntity<>(comments,HttpStatus.FOUND);
    }

    @DeleteMapping("/blogs/comment/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable("id") String id) {
        commentRepo.deleteById(id);
        return new ResponseEntity<String>("comment deleted",HttpStatus.NO_CONTENT);
    }

    @PostMapping("/blogs/comment/{id}")
    public ResponseEntity<String> reactBlog(@PathVariable("id") String id,@RequestParam Long choice) {
        Comment comment = commentRepo.findById(id).orElse(null);
        if(choice>0) comment.upvotes++;
        else if(choice<0) comment.downvotes++;
        commentRepo.save(comment);
        return new ResponseEntity<>("reaction saved",HttpStatus.OK);
    }
    
}

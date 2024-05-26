package com.pfa.backend.entities;

import java.util.Date;

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
public class Comment {

    @Id
    private String idComment;
    
    public String content;
    public int upvotes;
    public int downvotes;
    public Date postTime;

    private User author;

    private Blog blog;
}

package com.pfa.backend.entities;

import java.util.Date;
import java.util.List;

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
public class Blog {

    @Id
    private String idBlog;
    
    private Pathologie pathologie;

    public List<String> tags;
    public int upvotes;
    public int downvotes;
    public Date postTime;

    private User user;
}

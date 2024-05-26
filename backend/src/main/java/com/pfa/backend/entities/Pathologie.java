package com.pfa.backend.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Pathologie {

    @Id
    private String idPathologie;

    private String name;
    private String cause;
    private String symptoms;
    private String treatment;
    private Long nbrSearch;
    
}
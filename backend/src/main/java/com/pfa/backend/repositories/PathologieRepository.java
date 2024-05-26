package com.pfa.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pfa.backend.entities.Pathologie;

@Repository
public interface PathologieRepository extends MongoRepository<Pathologie,String>{
    
}

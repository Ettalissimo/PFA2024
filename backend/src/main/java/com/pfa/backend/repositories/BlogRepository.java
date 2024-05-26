package com.pfa.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pfa.backend.entities.Blog;

@Repository
public interface BlogRepository extends MongoRepository<Blog,String>{

}

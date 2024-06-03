package com.pfa.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfa.backend.entities.Pathologie;
import com.pfa.backend.responseClass.LlamaResponse;
import com.pfa.backend.services.LlamaAiService;

@RestController
public class LlamaRestController {

    @Autowired
    private LlamaAiService llamaAiService;

    @GetMapping("api/v1/ai/generate")
    public ResponseEntity<LlamaResponse> generate(
            @RequestParam(value = "promptMessage", defaultValue = "Why is the sky blue?") String promptMessage) {

        String task = "Please i will give you a text"+
        "about a certain pathology experience, i want you to extract from the text i give you information that will map to"+ 
        "this object : '{name,cause,symptoms,treatment}', and i want you to only answer this prompt"+ 
        "by a JSON object only with no comments included, here is the text: "+promptMessage;
        final LlamaResponse aiResponse = llamaAiService.generateMessage(task);
        return ResponseEntity.status(HttpStatus.OK).body(aiResponse);
    }

    @GetMapping("api/v1/ai/generateTags")
    public ResponseEntity<LlamaResponse> generateTags(
            @RequestParam(value = "promptMessage", defaultValue = "Why is the sky blue?") String promptMessage) {

        String task = "Please i will give you a text"+
        "about a certain pathology experience, i want you to extract from the text i give you tags that are important"+
        "please dont exceed 5 tags"+ 
        "and i want you to only answer this prompt by a JSON object only containing the list of tags, here is the text: "+promptMessage;
        final LlamaResponse aiResponse = llamaAiService.generateMessage(task);
        return ResponseEntity.status(HttpStatus.OK).body(aiResponse);
    }

}
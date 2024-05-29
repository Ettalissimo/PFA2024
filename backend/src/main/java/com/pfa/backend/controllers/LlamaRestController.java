package com.pfa.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfa.backend.responseClass.LlamaResponse;
import com.pfa.backend.services.LlamaAiService;

@RestController
public class LlamaRestController {

    @Autowired
    private LlamaAiService llamaAiService;

    @GetMapping("api/v1/ai/generate")
    public ResponseEntity<LlamaResponse> generate(
            @RequestParam(value = "promptMessage", defaultValue = "Why is the sky blue?") String promptMessage) {
        final LlamaResponse aiResponse = llamaAiService.generateMessage(promptMessage);
        return ResponseEntity.status(HttpStatus.OK).body(aiResponse);
    }

}
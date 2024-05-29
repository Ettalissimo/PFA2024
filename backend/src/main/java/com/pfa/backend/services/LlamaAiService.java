package com.pfa.backend.services;

import com.pfa.backend.responseClass.LlamaResponse;

public interface LlamaAiService {

    LlamaResponse generateMessage(String prompt);
}

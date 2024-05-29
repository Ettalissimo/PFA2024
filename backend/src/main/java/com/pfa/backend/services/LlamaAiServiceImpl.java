package com.pfa.backend.services;

import org.springframework.ai.chat.ChatClient;
import org.springframework.stereotype.Service;

import com.pfa.backend.responseClass.LlamaResponse;

@Service
public class LlamaAiServiceImpl implements LlamaAiService {

    private final ChatClient chatClient;

    public LlamaAiServiceImpl(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @Override
    public LlamaResponse generateMessage(String promptMessage) {
        final String llamaMessage = chatClient.call(promptMessage);
        return new LlamaResponse().setMessage(llamaMessage);
    }
}

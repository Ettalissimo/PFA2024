package com.pfa.backend.responseClass;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class pythonApiResponse {
    private List<String> title;
    private List<String> link;
    private List<String> tags;
    private String text;
}

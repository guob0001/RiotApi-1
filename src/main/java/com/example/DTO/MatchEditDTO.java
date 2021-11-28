package com.example.DTO;

import com.example.models.Match;

public class MatchEditDTO {
    public Match match;
    public boolean failed;
    public String errorMessage;
    public String puuid;
    public Long id;

    public MatchEditDTO(Match match, String puuid, Long id){
        this.match = match;
        this.id = id;
        this.puuid = puuid;

    }

    public MatchEditDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }

}

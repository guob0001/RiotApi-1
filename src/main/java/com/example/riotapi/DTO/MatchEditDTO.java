package com.example.riotapi.DTO;

import com.example.riotapi.models.Champion;
import com.example.riotapi.models.Match;
import com.example.riotapi.models.Summoner;

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

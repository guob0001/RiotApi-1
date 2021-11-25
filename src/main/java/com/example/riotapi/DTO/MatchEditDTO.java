package com.example.riotapi.DTO;

import com.example.riotapi.models.Champion;
import com.example.riotapi.models.Match;
import com.example.riotapi.models.Summoner;

public class MatchEditDTO {
    public Match match;
    public boolean failed;
    public String errorMessage;
    public Summoner summoner;
    public Champion champion;

    public MatchEditDTO(Match match){
        this.match = match;
    }

    public MatchEditDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }

    public MatchEditDTO(Summoner summoner) {
        this.summoner = summoner;
    }

    public MatchEditDTO(Champion champion) {
        this.champion = champion;
    }
}

package com.example.DTO;

import com.example.models.Champion;
import com.example.models.Summoner;
import com.example.models.Match;

public class MatchCreateDTO {
    public Match match;
    public boolean failed;
    public String errorMessage;
    public Summoner summoner;
    public Champion champion;

    public MatchCreateDTO(Match match, Summoner summoner, Champion champion){
        this.match = match;
        this.summoner = summoner;
        this.champion = champion;

    }

    public MatchCreateDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }

}
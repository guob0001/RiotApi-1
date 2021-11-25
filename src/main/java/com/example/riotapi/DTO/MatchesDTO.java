package com.example.riotapi.DTO;

import com.example.riotapi.models.Champion;
import com.example.riotapi.models.Summoner;

public class MatchesDTO {
    public Summoner summoner;
    public Champion champion;
    public boolean failed;
    public String errorMessage;

    public MatchesDTO(Summoner summoner){
        this.summoner = summoner;
    }

    public MatchesDTO(Champion champion){
        this.champion = champion;
    }

}

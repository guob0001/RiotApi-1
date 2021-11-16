package com.example.riotapi.controllers;

import com.example.riotapi.models.Summoner;
import com.example.riotapi.repositories.MatchRepository;
import com.example.riotapi.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Summoners {

    @Autowired
    SummonerRepository summoners;

    @GetMapping("/summoners")
    public Iterable<Summoner> getChampions(){
        return summoners.findAll();
    }
}

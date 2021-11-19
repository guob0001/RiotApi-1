package com.example.riotapi.controllers;

import com.example.riotapi.models.Champion;
import com.example.riotapi.models.Summoner;
import com.example.riotapi.repositories.MatchRepository;
import com.example.riotapi.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Summoners {

    @Autowired
    SummonerRepository summoners;

    @GetMapping("/summoners")
    public Iterable<Summoner> getChampions(){
        return summoners.findAll();
    }

    @GetMapping("/summoners/{id}")
    public Summoner getSummonerById(@PathVariable String id){
        return summoners.findById(id).get();
    }

    @PostMapping("/summoners")
    public Summoner addSummoner(@RequestBody Summoner newSummoner){
        return summoners.save(newSummoner);
    }

    @DeleteMapping("/summoners/{id}")
    public void deleteSummonersById(@PathVariable String id){
        summoners.deleteById(id);
    }
}

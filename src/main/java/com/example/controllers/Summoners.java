package com.example.controllers;

import com.example.models.Summoner;
import com.example.repositories.SummonerRepository;
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

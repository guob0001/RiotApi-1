package com.example.riotapi.controllers;

import com.example.riotapi.DTO.MatchEditDTO;
import com.example.riotapi.models.Match;
import com.example.riotapi.repositories.ChampionRepository;
import com.example.riotapi.repositories.MatchRepository;
import com.example.riotapi.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Matches {

    @Autowired
    MatchRepository matches;

    @Autowired
    SummonerRepository summoners;

    @Autowired
    ChampionRepository champions;

    @GetMapping("/matches")
    public Iterable<Match> getMatches(){
        return matches.findAll();
    }

    @GetMapping("/matches/{id}")
    public Match getMatchesById(@PathVariable Long id){
        return matches.findById(id).get();
    }

    /*@PostMapping("/matches")
    public MatchEditDTO addMatch(@PathVariable Long id, @RequestBody Match newMatch){
        return matches.findById(id).map(match -> {
            newMatch.setId(null);
            newMatch.setM
        }
        )
    }*/


    @PatchMapping("/matches/{id}")
    public MatchEditDTO patchMatchesById(@PathVariable Long id, @RequestBody Match matchToUpdateWith) {
        return matches.findById(id).map(foundMatch -> {
            if (matchToUpdateWith.getBehavior() != null) foundMatch.setBehavior(matchToUpdateWith.getBehavior());
            if (matchToUpdateWith.getGameType() != null) foundMatch.setGameType(matchToUpdateWith.getGameType());
            if (matchToUpdateWith.getDuration() != 0) foundMatch.setDuration(matchToUpdateWith.getDuration());
            if (matchToUpdateWith.getStartDate() != null) foundMatch.setStartDate(matchToUpdateWith.getStartDate());
            if (matchToUpdateWith.getEndDate() != null) foundMatch.setEndDate(matchToUpdateWith.getEndDate());
            if (matchToUpdateWith.getSummoners() != null && matchToUpdateWith.getSummoners().getPuuid() != null) foundMatch.setSummoners(matchToUpdateWith.getSummoners());
            if (matchToUpdateWith.getChampions() != null && matchToUpdateWith.getChampions().getId() != null) foundMatch.setChampions(matchToUpdateWith.getChampions());



            Match createdMatch = matches.save(foundMatch);
            return new MatchEditDTO(createdMatch, matchToUpdateWith.getSummoners().getPuuid(), matchToUpdateWith.getChampions().getId());
        }).orElse(new MatchEditDTO("Cant save data"));
    }


    @DeleteMapping("/matches/{id}")
    public void deleteMatchById(@PathVariable Long id){
        matches.deleteById(id);
    }
}

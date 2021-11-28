package com.example.controllers;

import com.example.DTO.MatchEditDTO;
import com.example.models.Match;
import com.example.repositories.ChampionRepository;
import com.example.repositories.MatchRepository;
import com.example.repositories.SummonerRepository;
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

    /*@PostMapping("/matches/{id}")
    public MatchEditDTO addMatch(@PathVariable Long id, @RequestBody Match newMatch){
        return matches.findById(id).map(match -> {
            newMatch.setId(null);
            newMatch.setSummoners(match);
            newMatch.setChampions(match);
            Match createdMatch = matches.save(newMatch);
            return new MatchEditDTO(createdMatch);
        }
        ).orElse(new MatchEditDTO("Did not find match by id"));
    }*/
    @PostMapping("/matches/{puuId}/{champion_id}")
    public Match addMatch(@RequestBody Match newMatch, @PathVariable String puuId, @PathVariable Long champion_id){
        newMatch.setId(null);
        newMatch.setSummoners(summoners.findById(puuId).get());
        newMatch.setChampions(champions.findById(champion_id).get());

        return matches.save(newMatch);
    }


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

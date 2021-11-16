package com.example.riotapi.controllers;

import com.example.riotapi.models.Champion;
import com.example.riotapi.repositories.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Champions {

    @Autowired
    ChampionRepository champions;

    @GetMapping("/champions")
    public Iterable<Champion> getChampions(){
        return champions.findAll();
    }

    @GetMapping("/champions/{id}")
    public Champion getChampionById(@PathVariable Long id){
        return champions.findById(id).get();
    }

    @PostMapping("/champions")
    public Champion addChampion(@RequestBody Champion newChampion){
        newChampion.setId(null);
        return champions.save(newChampion);
    }

    @PutMapping("/champions/{id}")
    public String updateChampionById(@PathVariable Long id, @RequestBody Champion championToUpdateWith){
        if (champions.existsById(id)) {
            championToUpdateWith.setId(id);
            champions.save(championToUpdateWith);
            return "Champion was created";
        } else {
            return "Champion not found";
        }
    }

    @PatchMapping("/champions/{id}")
    public String patchChampionsById(@PathVariable Long id, @RequestBody Champion championToUpdateWith) {
        return champions.findById(id).map(foundChampion -> {
            if (championToUpdateWith.getName() != null) foundChampion.setName(championToUpdateWith.getName());
            if (championToUpdateWith.getPrice() != 0) foundChampion.setPrice(championToUpdateWith.getPrice());
            if (championToUpdateWith.getCurrentLevel() != 0) foundChampion.setCurrentLevel(championToUpdateWith.getCurrentLevel());
            if (championToUpdateWith.getCurrentItems() != null) foundChampion.setCurrentItems(championToUpdateWith.getCurrentItems());
            if (championToUpdateWith.getPickRate() != 0) foundChampion.setPickRate(championToUpdateWith.getPickRate());
            if (championToUpdateWith.getBanRate() != 0) foundChampion.setBanRate(championToUpdateWith.getBanRate());


           // champions.save(foundChampion);
            return "Champion updated";
        }).orElse("Champion not found");
    }


    @DeleteMapping("/champions/{id}")
    public void deleteChampionById(@PathVariable Long id){
        champions.deleteById(id);
    }

}

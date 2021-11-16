package com.example.riotapi.repositories;

import com.example.riotapi.models.Summoner;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SummonerRepository extends JpaRepository<Summoner, String>{
}

package com.example.repositories;

import com.example.models.Summoner;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SummonerRepository extends JpaRepository<Summoner, String>{
}

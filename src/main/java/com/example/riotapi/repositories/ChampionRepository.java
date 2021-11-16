package com.example.riotapi.repositories;

import com.example.riotapi.models.Champion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChampionRepository extends JpaRepository<Champion, Long> {
}

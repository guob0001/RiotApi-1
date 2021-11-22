package com.example.riotapi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;

@Data
@Table(name="matches")
@Entity
public class Match {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private Long matches_id;

    @Column
    private String gameType;

    @Column
    private double duration;

    @Column
    private String startDate;

    @Column 
    private String endDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "summoner_id")
    private Summoner summoners;

    /*@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "champion_id")
    private Champion champions;*/
}

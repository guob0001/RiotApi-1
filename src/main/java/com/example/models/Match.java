package com.example.models;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Data
@Table(name="matches")
@Entity
public class Match {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private Long id;

    @Column
    private String gameType;

    @Column
    private double duration;

    @Column
    private String startDate;

    @Column 
    private String endDate;

    @Column
    private String behavior;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "puuid")
    @Nullable
    private Summoner summoners;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "champion_id")
    private Champion champions;

}

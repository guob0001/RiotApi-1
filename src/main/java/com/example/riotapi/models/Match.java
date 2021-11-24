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

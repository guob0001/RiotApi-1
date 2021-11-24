package com.example.riotapi.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Table(name="summoners")
@Entity
public class Summoner {
    @Id
    private String puuid = "";

    @Column
    private String id;

    @Column
    private String accountId;

    @Column
    private String name;

    @Column
    private int profileIconId;

    @Column
    private Long revisionDate;

    @Column
    private Long summonerLevel;

    @JsonIgnore
    @OneToMany(mappedBy = "summoners", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Match> matches;
}

package com.example.riotapi.models;

import lombok.Data;

import javax.persistence.*;
@Data
@Table(name="summoners")
@Entity
public class Summoner {
    @Id
    private String id;

    @Column
    private String accountId;

    @Column
    private String name;

    @Column
    private int profileIconId;

    @Column
    private String puuId;

    @Column
    private long revisionDate;

    @Column
    private long summonerLevel;

}

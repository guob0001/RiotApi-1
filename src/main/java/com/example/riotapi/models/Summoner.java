package com.example.riotapi.models;

import lombok.Data;

import javax.persistence.*;
@Data
@Table(name="summoners")
@Entity
public class Summoner {
    @Column
    private String id;

    @Column
    private String accountId;

    @Column
    private String name;

    @Column
    private int profileIconId;

    @Id
    private String puuId = "xxx";

    @Column
    private Long revisionDate;

    @Column
    private Long summonerLevel;

}

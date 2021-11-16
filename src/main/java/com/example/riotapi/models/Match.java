package com.example.riotapi.models;

import lombok.Data;

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


}

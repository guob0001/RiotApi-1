package com.example.riotapi.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Table(name="champions")
@Entity
public class Champion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private int price;

    @Column
    private int currentLevel;

    @Column
    private String currentItems;

    @Column
    private double pickRate;

    @Column
    private double banRate;

}

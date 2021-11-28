package com.example.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

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
    private double pickRate;

    @Column
    private double banRate;

    @JsonIgnore
    @OneToMany(mappedBy = "champions", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Match> matches;

}

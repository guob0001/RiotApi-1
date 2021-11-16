package com.example.riotapi.models;

import lombok.Data;

import javax.persistence.*;
@Data
@Table(name="summoners")
@Entity
public class Summoner {
    @Id
    private String id;

}

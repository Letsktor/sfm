package com.example.demo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity(name = "animals")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Animal {
    @Id
    @GeneratedValue
    private Integer id;
    private String species;
    private Float  rating;
    private String name;
    private Float price;
    private String description;
    private String picurl;
}
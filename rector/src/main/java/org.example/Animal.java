package org.example;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // Ez jelöli, hogy az osztály egy entitás
public class Animal {

    @Id // Az adatbázisban az entitás elsődleges kulcsát jelöli
    @GeneratedValue(strategy = GenerationType.AUTO) // Automatikus kulcsgenerálási stratégiát jelöl
    private Long id; // Az entitás egyedi azonosítója

    private String name; // Az állat nevét tárolja
    private String  species; // Az állat fajtáját tárolja


    private  double rating;

    // Konstruktorok
    public Animal() {
        // Üres konstruktor szükséges a JPA specifikáció miatt
    }

    public Animal(String name, String species,double rating) {
        this.name = name;
        this.species = species;
        this.rating=rating;
    }

    // Getters és setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setRate(double rating) {
        this.rating = rating;
    }
    public double getRating() {
        return rating;
    }


    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    // toString metódus, opcionális, de hasznos a logoláshoz és debuggoláshoz
    @Override
    public String toString() {
        return "org.example.Animal{" + "id=" + id + ", name='" + name +  ", species=" + species;
    }
}
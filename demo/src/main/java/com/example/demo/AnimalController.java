package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@CrossOrigin
public class AnimalController {
    @Autowired
    AnimalRepository animalRepository;
    @PostMapping("/animal")
    Animal addAnimal(@RequestBody Animal animal) {
        return animalRepository.save(animal);
    }
    @GetMapping("/animal")
    Iterable<Animal> getAnimals() {
        return animalRepository.findAll();
    }

    @PutMapping("/animal/{id}")
    Animal updateAnimal(@RequestBody Animal animal, @PathVariable Integer id) {
        Optional<Animal> animalToUpdate = animalRepository.findById(id);
        if (animalToUpdate.isPresent()){
            animal.setId(id);
        }
        return animalRepository.save(animal);
    }


    @DeleteMapping("/animal/{id}")
    void deleteAnimal(@PathVariable Integer id) {
        animalRepository.deleteById(id);
    }

    @GetMapping("/animal/{id}")
    Animal getAnimal(@PathVariable Integer id) {
        return animalRepository.findById(id).get();
    }
}

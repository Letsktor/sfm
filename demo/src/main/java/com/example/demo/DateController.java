package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@CrossOrigin
public class DateController {
    @Autowired
    DateRepository dateRepository;
    @PostMapping("/date")
    Date addDate(@RequestBody Date date) {
        return dateRepository.save(date);
    }
    @GetMapping("/date")
    Iterable<Date> getDates() {
        return dateRepository.findAll();
    }

    @PutMapping("/date/{id}")
    Date updateDate(@RequestBody Date date, @PathVariable Integer id) {
        Optional<Date> dateToUpdate = dateRepository.findById(id);
        if (dateToUpdate.isPresent()){
            date.setId(id);
        }
        return dateRepository.save(date);
    }


    @DeleteMapping("/date/{id}")
    void deleteDate(@PathVariable Integer id) {
        dateRepository.deleteById(id);
    }

    @GetMapping("/date/{id}")
    Date getDate(@PathVariable Integer id) {
        return dateRepository.findById(id).get();
    }
}
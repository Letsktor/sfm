package com.example.demo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "dates")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Date {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String date;
    private String numb;
    private String email;
    private String tel;
    private Integer animal_id;

}

package com.example.final_project.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import com.example.final_project.repo.Citizen;
import com.example.final_project.repo.CitizenRepository;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api")
@RestController
public class CitizenController {

    @Autowired
    private CitizenRepository repository;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/getcitizens")
    public List<Citizen> getCitizens() {
        return repository.findAll();
    }

    @PostMapping("/addcitizen")
    public ResponseEntity<?> addCitizen(@Valid @RequestBody Citizen citizen, BindingResult result) {
        if(result.hasErrors()) {
            List<String> errors = result.getAllErrors().stream()
                    .map(ObjectError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errors);
        }
        repository.save(citizen);
        return ResponseEntity.ok().build();
    }
}

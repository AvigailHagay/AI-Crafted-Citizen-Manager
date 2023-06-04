package com.example.final_project.Controller;

import org.springframework.validation.BindingResult;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.final_project.repo.Citizen;
import com.example.final_project.repo.CitizenRepository;

import java.util.Date;
import java.util.List;

@RestController
public class CitizenController {

    @Autowired
    private CitizenRepository repository;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/citizens")
    public List<Citizen> getCitizens() {
        System.out.println("Getting citizens");
        return repository.findAll();
    }

    @PostMapping("/citizens")
    public Citizen addCitizen(@Valid @RequestBody Citizen citizen, BindingResult result) {
        if(result.hasErrors()) {
            // Handle validation errors here
        }
        return repository.save(citizen);
    }
}

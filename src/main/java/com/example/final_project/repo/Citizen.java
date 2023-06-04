package com.example.final_project.repo;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;

import java.util.Date;

@Entity
@Table(name = "citizens")
public class Citizen {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty(message = "First name is mandatory")
    @Column(name = "first_name")
    private String firstName;

    @NotEmpty(message = "Last name is mandatory")
    @Column(name = "last_name")
    private String lastName;

    @Past(message = "Date of birth must be a past date")
    @NotNull(message = "Date of birth is mandatory")
    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @NotEmpty(message = "Address is mandatory")
    @Column(name = "address")
    private String address;

    @NotEmpty(message = "City is mandatory")
    @Column(name = "city")
    private String city;

    @Pattern(regexp = "\\d{5}", message = "Zip code must be exactly 5 digits")
    @Column(name = "zip_code")
    private String zipCode;

    @Pattern(regexp = "\\d{10}", message = "Land line must be exactly 10 digits")
    @Column(name = "land_line")
    private String landLine;

    @Pattern(regexp = "\\d{10}", message = "Cell phone must be exactly 10 digits")
    @Column(name = "cell_phone")
    private String cellPhone;

    @NotNull(message = "Covid Infected mandatory")
    @Column(name = "covid_infected")
    private Boolean covidInfected;

    public long getId() { return id; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public Date getDateOfBirth() { return dateOfBirth; }
    public String getAddress() { return address; }
    public String getCity() { return city; }
    public String getZipCode() { return zipCode; }
    public String getLandLine() { return landLine; }
    public String getCellPhone() { return cellPhone; }
    public boolean isCovidInfected() { return covidInfected; }
    public void setId(Integer id) { this.id = id; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    public void setAddress(String address) { this.address = address; }
    public void setCity(String city) { this.city = city; }
    public void setZipCode(String zipCode) { this.zipCode = zipCode; }
    public void setLandLine(String landLine) { this.landLine = landLine; }
    public void setCellPhone(String cellPhone) { this.cellPhone = cellPhone; }
    public void setCovidInfected(boolean covidInfected) { this.covidInfected = covidInfected; }
}


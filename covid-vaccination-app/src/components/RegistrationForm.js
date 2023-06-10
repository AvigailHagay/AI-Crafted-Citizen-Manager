import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const initialFormData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    zipCode: '',
    landLine: '',
    cellPhone: '',
    covidInfected: false,
    preexistingConditions: [],
};



const RegistrationForm = () => {

    const [formData, setFormData] = useState(initialFormData);
    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');


    useEffect(() => {
        const fetchCountryOptions = async () => {
            try {
                const response = await axios.get(
                    'http://api.geonames.org/countryInfoJSON?lang=en&username=avigailhagay'
                );
                setCountryOptions(response.data.geonames);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCountryOptions();
    }, []);

    const handleCountryChange = (e) => {
        if(e.target.value !== 'Select a country')
            setSelectedCountry(e.target.value);
        else
            setSelectedCountry('');
    };

    useEffect(() => {
        if(selectedCountry === ''){
            setCityOptions([]);
            return;
        }
        const fetchCityOptions = async () => {
            try {
                const response = await axios.get(
                    `http://api.geonames.org/searchJSON?country=${selectedCountry}&lang=en&username=avigailhagay`
                );
                const uniqueCities = Array.from(
                    new Set(response.data.geonames.map(city => city.name))
                );          const sortedCities = uniqueCities.sort((a, b) =>
                    a.localeCompare(b)
                );      setCityOptions(sortedCities);
            } catch (error) {
                console.log(error);
            }
        };

        if (selectedCountry) {
            fetchCityOptions();
        }
    }, [selectedCountry]);

    const handleChange = (e) => {
        if (e.target.name === 'preexistingConditions') {
            if (e.target.checked) {
                setFormData({
                    ...formData,
                    preexistingConditions: [...formData.preexistingConditions, e.target.value]
                });
            } else {
                setFormData({
                    ...formData,
                    preexistingConditions: formData.preexistingConditions.filter(
                        condition => condition !== e.target.value
                    )
                });
            }
        } else if (e.target.type === 'checkbox') {
            setFormData({ ...formData, [e.target.name]: !formData.covidInfected });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('/api/addcitizen', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(response => {
                if(response.ok) {
                    setFormData(initialFormData);
                    window.location.href = '/';
                }
                else {
                    return response.json();
                }
            })
            .then(error => console.log(error))
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">First Name:</label>
                    <input type="text" name="firstName" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Last Name:</label>
                    <input type="text" name="lastName" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-12">
                    <label className="form-label">Date of Birth:</label>
                    <input type="date" name="dateOfBirth" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-12">
                    <label className="form-label">Address:</label>
                    <input type="text" name="address" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Country:</label>
                    <select name="country" value={selectedCountry} onChange={handleCountryChange} className="form-control">
                        <option value="">Select a country</option>
                        {countryOptions.map(country => (
                            <option key={country.countryCode} value={country.countryCode}>{country.countryName}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">City:</label>
                    <select name="city" onChange={handleChange} className="form-control">
                        {cityOptions.length === 0 ? (
                            <>
                                <option value="">Please select a country first</option>
                            </>
                        ) : (
                            <>
                                <option value="">Select a city</option>
                                {cityOptions.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </>
                        )}
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Zip Code:</label>
                    <input type="text" name="zipCode" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Land Line:</label>
                    <input type="text" name="landLine" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Cell Phone:</label>
                    <input type="text" name="cellPhone" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" name="covidInfected" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Covid Infected:</label>
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label">Preexisting Conditions:</label>
                    <div className="form-check">
                        <input type="checkbox" value="Diabetes" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Diabetes</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" value="Cardio-Vascular problems" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Cardio-Vascular problems</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" value="Allergies" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Allergies</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" value="Asthma" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Asthma</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" value="Cancer" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Cancer</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" value="HIV" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">HIV</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" value="Other" name="preexistingConditions" onChange={handleChange} className="form-check-input" />
                        <label className="form-check-label">Other</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
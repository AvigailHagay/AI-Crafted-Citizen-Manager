import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SummaryPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/getcitizens')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Land Line</th>
                    <th>Cell Phone</th>
                    <th>Covid Infected</th>
                    <th>Preexisting Conditions</th>
                </tr>
                </thead>
                <tbody>
                {data && data.length > 0 && data.map(item => (
                    <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.zipCode}</td>
                        <td>{item.landLine}</td>
                        <td>{item.cellPhone}</td>
                        <td>{item.covidInfected ? 'Yes' : 'No'}</td>
                        <td>{item.preexistingConditions && item.preexistingConditions.length > 0 && item.preexistingConditions.map(condition => condition).join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SummaryPage;

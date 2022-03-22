import React, { useEffect, useState } from 'react';
import CovidReport from '../CovidReport/CovidReport';
import logo from '../CovidReports/images/covid19.png'
import './CovidReports.css'

const CovidReports = () => {
    const [covidReports, setCovidReports] = useState([]);
    const [displayReports, setDisplayReports] = useState([]);

    useEffect(() => {
        const url = `https://coronavirus-19-api.herokuapp.com/countries`;
        fetch(url)
            .then(res => res.json())
            .then(data => 
                {setCovidReports(data);
                setDisplayReports(data)
            })
    }, []);
    
    //   handle input change & add to search field
    const handleInputChange = (e) => {
        const value = e.target.value;
        const matchedReports = covidReports.filter(covidReport => covidReport.country.toLowerCase().includes(value.toLowerCase()));
        setDisplayReports(matchedReports);
    };

    return (
        <div>
            <div>
            <img src={logo} alt="" />
            </div>
            <input
                onChange={handleInputChange}
                id="search-field"
                type="text"
                className="form-control"
                placeholder="Search your Country..."
                aria-label=""
                aria-describedby="button-addon2"
            ></input>
            <div className='report-container'>
                {
                    displayReports.map(covidReport => <CovidReport
                        covid={covidReport}
                        key={covidReport.country}
                    ></CovidReport>)
                }
            </div>
        </div>
    );
};

export default CovidReports;
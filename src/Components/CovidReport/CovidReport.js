import React from 'react';
import './CovidReport.css'

const CovidReport = (props) => {
    // console.log(props.covid)
    const {country, active, cases, casesPerOneMillion, critical, deaths, deathsPerOneMillion, recovered, testsPerOneMillion, todayCases, todayDeaths, totalTests} = props.covid;
    return (
        <div className='report'>
            <h2>{country}</h2>
            {/* <h4>{CountryCode}</h4> */}
            <p className='covid-info'>Active: <span className='deaths'>{active}</span></p>

            <p className='covid-info'>Cases: <span className='deaths'>{cases}</span></p>

            <p className='covid-info'>Cases Per One Million: <span className='deaths'>{casesPerOneMillion}</span></p>

            <p className='covid-info'>Critical: <span className='deaths'>{critical}</span></p>

            <p className='covid-info'>Deaths: <span className='deaths'>{deaths}</span></p>

            <p className='covid-info'>Deaths Per One Million: <span className='deaths'>{deathsPerOneMillion}</span></p>

            <p className='covid-info'>Total Recovered: <span className='recovered'>{recovered}</span></p>

            <p className='covid-info'>Tests Per One Million: <span className='deaths'>{testsPerOneMillion}</span></p>

            <p className='covid-info'>Today Cases: <span className='deaths'>{todayCases}</span></p>

            <p className='covid-info'>Total Deaths: <span className='deaths'>{todayDeaths}</span></p>

            <p className='covid-info'>Total Tests: <span className='deaths'>{totalTests}</span></p>
        </div>
    );
};

export default CovidReport;
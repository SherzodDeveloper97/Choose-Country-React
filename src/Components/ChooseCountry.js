import React, { useState } from 'react';
import './choose-country.css';

function ChooseCountry(){
    const [country, setCountry] = useState("Tashkent");

    // const changeCountry = (event) => {
    //     console.log(event.target.classList.contains("btn-primary"))
    //     if(event.target.classList.contains("btn-primary")){
    //         setCountry("Tashkent")
    //     }else if(event.target.classList.contains("btn-warning")){
    //         setCountry("Washington")
    //     }else if(event.target.classList.contains("btn-success")){
    //         setCountry("Warsaw")
    //     }
    // }
    
    return(
        <div className='container'>
            <h1 className="title">Choose your country</h1>
            <hr />
            <div className='select-country'>
                <button className='btn btn-primary' onClick={() => {setCountry("Tashkent")}}>Uzbekistan</button>
                <button className='btn btn-warning' onClick={() => {setCountry("Washington")}}>USA</button>
                <button className='btn btn-success' onClick={() => {setCountry("Warsaw")}}>Poland</button>
            </div>
            <hr />
            <p>{country}</p>
        </div>
    )
}

export default ChooseCountry;

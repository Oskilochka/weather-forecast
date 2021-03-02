import React, {useEffect, useState} from 'react'
import {weatherAPI} from "./api/api";
import './app.css'

type TWeatherData = {
    list: any
}

export const App = () => {
    const [city, setCity] = useState('Odessa')
    const [input, setInput] = useState('Odessa')
    const [weather, setWeather] = useState<TWeatherData | undefined>()
    const [units, setUnits] = useState('metric')
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        weatherAPI.getWeatherData(city, units).then(res => {
            setWeather(res.data)
        })
    }, [city, units])

    let x
    if (weather) {
        x = weather.list.map((item: any) => <div>{item.main.temp} <h1>{item.weather[0].main}</h1></div>)
    }

    let inputCity = (e: any) => {
        setInput(e.target.value)
    }
    const changeCityName = () => {
        setCity(input)
    }

    const changeTheme = (e: any) => {
        if(theme === "light") {
            setTheme("dark")
        }  else {
            setTheme('light')
        }
    }
    return (
        <div className={`wrap ${theme}`}>
            <h1>Find weather</h1>
            <label>Write you city</label>
            <input onChange={inputCity}/>
            <button onClick={changeCityName}> Find</button>
            <select name='temp'>
                <option onClick={() => setUnits('metric')}>Celsium</option>
                <option onClick={() => setUnits('imperial')}>Farengeight</option>
            </select>
            <button onClick={e=>changeTheme(e)}>Theme</button>
            <h1>{city}</h1>
            {x}
        </div>
    );
}
import React, {useEffect, useState} from 'react'
import {weatherAPI} from "./api/api";
import './style.css'
import {FindCity} from "./components/FindCity";
import {Units} from "./components/Units";
import {ThemeBtn} from "./components/ThemeBtn";
import {WeatherList} from "./components/WeatherCard";
import {Error} from "./components/Error";

type TWeatherData = {
    list: any,
    city: any
}

export const App = () => {
    const [city, setCity] = useState('Odessa')
    const [input, setInput] = useState('Odessa')
    const [weather, setWeather] = useState<TWeatherData | undefined>()
    const [units, setUnits] = useState('metric')
    const [theme, setTheme] = useState('dark');
    const [error, setError] = useState<{} | undefined>(undefined)

    useEffect(() => {
        weatherAPI.getWeatherData(city, units)
            .then(res => {
                setError(undefined);
                setWeather(res.data)
            })
            .catch(error => {
                setError(error)
            })
    }, [city, units])

    let countryName = weather?.city.country

    return (
        <div className={`app ${theme}`}>
            <div className='wrap'>
                <h1>Weather Forecast</h1>
                <FindCity input={input} setInput={setInput} setCity={setCity}/>
                <div className='tools'>
                    <ThemeBtn theme={theme} setTheme={setTheme}/>
                    <Units setUnits={setUnits}/>
                </div>

                <h3>{error ? null : <div>{city}, {countryName}</div>}</h3>
                <div className='weatherList'>
                    {error
                        ? <Error error={error} city={city}/>

                        : <WeatherList units={units} weather={weather}/>}
                </div>
            </div>
        </div>
    )
}






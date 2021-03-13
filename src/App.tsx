import React, {useEffect, useState} from 'react'
import {weatherAPI} from "./api/api"
import './style.css'
import {SearchCity} from "./components/SearchCity"
import {Units} from "./components/Units"
import {ThemeBtn} from "./components/ThemeBtn"
import {WeatherList} from "./components/CardsList"
import {Error} from "./components/Error"
import {Footer} from './components/Footer'
import {Preloader} from "./components/Preloader";

type TWeatherData = {
    list: any,
    city: any
}

export const App = () => {
    const [city, setCity] = useState('Kyiv')
    const [inputCity, setInputCity] = useState('Kyiv')
    const [weather, setWeather] = useState<TWeatherData | undefined>()
    const [units, setUnits] = useState('metric')
    const [theme, setTheme] = useState('dark')
    const [error, setError] = useState<{} | undefined>(undefined)

    useEffect(() => {
        weatherAPI.getWeatherData(city, units)
            .then(res => {
                setError(undefined)
                setWeather(res.data)
            })
            .catch(error => {
                setError(error)
            })
    }, [city, units])

    return (
        <div className={`app ${theme}`}>
            <div className='wrap'>
                <h1>Weather Forecast</h1>
                <SearchCity inputCity={inputCity} setInputCity={setInputCity} setCity={setCity}/>
                <div className='tools'>
                    <ThemeBtn theme={theme} setTheme={setTheme}/>
                    <Units setUnits={setUnits}/>
                </div>
                <div className='weatherList'>
                    {error
                        ? <Error error={error} city={city}/>
                        : <WeatherList units={units} city={city} weather={weather}/>
                    }
                </div>
                <Footer/>
            </div>
        </div>
    )
}






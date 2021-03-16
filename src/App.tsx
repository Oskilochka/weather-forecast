import React, {useState} from 'react'
import './style.css'
import {SearchCity} from "./components/SearchCity"
import {Units} from "./components/Units"
import {WeatherList} from "./components/CardsList"
import {Footer} from './components/Footer'
import {Header} from "./components/Header";

export const App = () => {
    const [city, setCity] = useState('Kyiv')
    const [inputCity, setInputCity] = useState('Kyiv')
    const [units, setUnits] = useState('metric')
    const [theme, setTheme] = useState('dark')

    return (
        <div className={`app ${theme}`}>
            <Header theme={theme} setTheme={setTheme}/>
            <div className='wrap'>
                <SearchCity inputCity={inputCity} setInputCity={setInputCity} setCity={setCity}/>
                <Units setUnits={setUnits}/>
                <WeatherList units={units} city={city}/>
                <Footer/>
            </div>
        </div>
    )
}






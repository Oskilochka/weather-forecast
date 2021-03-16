import React, {FC, useEffect, useState} from "react"
import {createUseStyles} from "react-jss"
import {Card} from "./Card"
import {Error} from "./Error"
import {weatherAPI} from "../api/api"
import {Preloader} from "./Preloader"

type PropsType = {
    units: string,
    city: string
}

type TWeatherData = {
    list: any,
    city: any
}

const useStyles = createUseStyles({
    cardWrap: {
        maxWidth: '1500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
})

export const WeatherList: FC<PropsType> = ({units, city}) => {
    const classes = useStyles()
    const [weather, setWeather] = useState<TWeatherData | undefined>()
    const [error, setError] = useState<{} | undefined>(undefined)
    const [isFetching, setIsFetching] = useState(true)
    const countryName = weather?.city.country

    useEffect(() => {
        setIsFetching(true)
        weatherAPI.getWeatherData(city, units)
            .then(res => {
                setError(undefined)
                setWeather(res.data)
                setIsFetching(false)
            })
            .catch(error => {
                setError(error)
                setIsFetching(false)
            })
    }, [city, units])

    let weatherList = []
    let dateBins: any = {}
    if (weather) {
        const today = new Date()
        const day = 60 * 60 * 24 * 1000
        const reports = weather.list
        const nBins = 6 //reports for up to 6 distinct dates
        for (let i = 0; i < nBins; i++) {
            // set up a bin (empty array) for each date
            const date = new Date(today.getTime() + i * day)
            dateBins[date.getDate()] = []
        }
        for (const report of reports) {
            const reportDate = new Date(report.dt * 1000).getDate()
            dateBins[reportDate].push(report)
        }
        let curDay = []
        const oneDay = dateBins[Object.keys(dateBins)[0]]
        const nextDay = dateBins[Object.keys(dateBins)[1]]
        if (oneDay.length < 5) {
            curDay = oneDay.concat(nextDay[0])
        } else if (oneDay.length === 0) {
            curDay = nextDay
        } else {
            curDay = oneDay
        }
        weatherList = curDay.map((item: any) => {
            return <Card item={item} units={units}/>
        })
    }

    return (
        <div>
            {isFetching
                ? <Preloader/>
                : error
                    ? <Error error={error} city={city}/>
                    : <>
                        <h3>{city + ', ' + countryName}</h3>
                        <div className={classes.cardWrap}>
                            {weatherList}
                        </div>
                    </>
            }
        </div>
    )
}


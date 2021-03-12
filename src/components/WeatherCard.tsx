import React, {FC} from "react";
import {createUseStyles} from "react-jss";

type PropsType = {
    weather: any,
    units: string
}

const useStyles = createUseStyles({
    cardWrap: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 4fr)"
    },
    "@media screen and (max-width: 1300px) ": {
        cardWrap: {
            gridTemplateColumns: "repeat(3, 4fr)"
        }
    },
    "@media screen and (max-width: 1000px) ": {
        cardWrap: {
            gridTemplateColumns: "repeat(2, 4fr)"
        }
    },
    "@media screen and (max-width: 660px) ": {
        cardWrap: {
            gridTemplateColumns: "repeat(1, 4fr)"
        }
    }
})

export const WeatherList: FC<PropsType> = ({weather, units}) => {
    const classes = useStyles()
    let imgPath = "https://openweathermap.org/img/wn/"
    let weatherList = []
    let dateBins: any = {}
    if (weather) {
        const today = new Date();
        const day = 60 * 60 * 24 * 1000
        const reports = weather.list
        const nBins = 6 // there can be reports for up to 6 distinct dates
        for (let i = 0; i < nBins; i++) {
            // set up a bin (empty array) for each date
            const date = new Date(today.getTime() + i * day);
            dateBins[date.getDate()] = [];
        }
        for (const report of reports) {
            const reportDate = new Date(report.dt * 1000).getDate();
            dateBins[reportDate].push(report);
        }
        const oneDay = dateBins[Object.keys(dateBins)[0]]
        weatherList = oneDay.map((item: any) => {
            return <div className='card'>
                <h3>{item.dt_txt}</h3>
                <h3>{Math.round(item.main.temp)} {units === "metric" ? "°C" : "°F"} </h3>
                <h4>Feels like: {Math.round(item.main.feels_like)} {units === "metric" ? "°C" : "°F"} </h4>
                <h4>
                    {item.weather[0].main}
                </h4>
                <img src={imgPath + item.weather[0].icon + ".png"} alt='weather-icon'/>
                <h5>{item.weather[0].description}</h5>
                <h5>Wind Speed {item.wind.speed}</h5>
            </div>
        })
    }
    return (
        <div className={classes.cardWrap}>
            {weatherList}
        </div>
    )
}


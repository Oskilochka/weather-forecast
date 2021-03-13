import React, {FC} from "react"
import {createUseStyles} from "react-jss"
import {Card} from "./Card"

type PropsType = {
    weather: any,
    units: string,
    city: string
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

export const WeatherList: FC<PropsType> = ({weather, units, city}) => {
    const classes = useStyles()
    let weatherList = []
    const countryName = weather?.city.country
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
        } else if (oneDay.length === 0 ) {
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
            <h3>{city}, {countryName}</h3>
            <div className={classes.cardWrap}>
                {weatherList}
            </div>
        </div>
    )
}


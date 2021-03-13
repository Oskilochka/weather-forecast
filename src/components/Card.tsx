import React, {FC} from "react"
import {createUseStyles} from "react-jss";

type CardType = {
    item: any,
    units: string
}

const imgPath = "https://openweathermap.org/img/wn/"

const useStyles = createUseStyles({
    card: {
        border: "2px solid black",
        width: "250px",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px 5px",
    },
    time: {
        marginBottom: "0px",
    },
    temperature: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        marginLeft: "15px",
    },
    detail: {
        margin: "0px",
        fontSize: "20px",
        fontWeight: "lighter"
    },
    description: {
        margin: "15px 0px",
    },
    date: {
        fontWeight: "lighter"
    }
})


export const Card: FC<CardType> = ({item, units}) => {
    const classes = useStyles()

    let date = item.dt_txt.slice(8, 10) + '.' + item.dt_txt.slice(5, 7)
    let time = item.dt_txt.slice(11, 16)

    return (
        <div className={classes.card}>
            <h3 className={classes.time}> {time} <span className={classes.date}>{date}</span></h3>
            <div className={classes.temperature}>
                <h3>{Math.round(item.main.temp)}
                    {units === "metric"
                        ? <span> &#176;C </span>
                        : <span> &#176;F </span>} </h3>
                <img src={imgPath + item.weather[0].icon + ".png"} className={classes.icon} alt='weather-icon'/>
            </div>
            <h4 className={classes.detail}>Feels
                like: {Math.round(item.main.feels_like)} {units === "metric" ? "°C" : "°F"} </h4>
            <h4 className={classes.description}> {item.weather[0].main} </h4>
            <h5 className={classes.detail}>{item.weather[0].description}</h5>
            <h5>Wind Speed: {item.wind.speed}</h5>
        </div>
    )
}
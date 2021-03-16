import React, {FC} from "react"
import {createUseStyles} from "react-jss"

type PropsType = {
    setUnits: (value: string) => void
}

const useStyles = createUseStyles({
    wrap: {
        display: "flex",
        textAlign: "center",
        margin: "20px 0px"
    },
    unitBtn: {
        cursor: "pointer",
        border: 'none',
        padding: "10px 20px",
        borderRadius: "20px",
        fontWeight: "bolder",
       /* "&:selected": {
            backgroundColor: "red"
        }*/
    },
    metricBtn: {
        marginRight: "10px"
    }
})

export const Units: FC<PropsType> = ({setUnits}) => {
    const classes = useStyles()

    return <div className={classes.wrap}>
        <button className={`${classes.unitBtn} + ${classes.metricBtn}`} onClick={() => setUnits('metric')}>Celsius</button>
        <button className={classes.unitBtn} onClick={() => setUnits('imperial')}>Fahrenheit</button>
    </div>
}
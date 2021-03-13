import React, {FC} from "react"
import {createUseStyles} from "react-jss"

type PropsType = {
    setUnits: (value: string) => void
}

const useStyles = createUseStyles({
    select: {
        width: "100px",
        textAlign: "center",
        border: "1px solid black",
        background: "#e1e1e1",
        padding: "5px",
        appearance: "none",
        cursor: "pointer"
    }
})

export const Units: FC<PropsType> = ({setUnits}) => {
    const classes = useStyles()

    return <select className={classes.select} name='temp'>
        <option onClick={() => setUnits('metric')}>Celsius</option>
        <option onClick={() => setUnits('imperial')}>Fahrenheit</option>
    </select>
}
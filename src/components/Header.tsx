import React, {FC} from "react"
import {ThemeBtn} from "./ThemeBtn"
import {createUseStyles} from "react-jss"

type PropsType = {
    theme: string,
    setTheme: (a: string) => void
}

const useStyles = createUseStyles({
    wrap: {
        display: "flex",
        justifyContent : "space-around",
        alignItems: "center",
        paddingTop: "25px"
    },
    logo: {
        fontSize: "28px",
        fontWeight: "500",
        fontStyle: "italic",
        transition: "1s"
    },
    "@media  (max-width: 500px)": {
        wrap: {
            justifyContent : "center",
            flexDirection: "column"
        },
    }

})

export const Header: FC<PropsType> = ({theme, setTheme}) => {
    const classes = useStyles()
    return <div className={classes.wrap}>
        <h1 className={classes.logo}>Weather Forecast</h1>
        <ThemeBtn theme={theme} setTheme={setTheme}/>
    </div>
}


import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC, MouseEvent} from "react";
import {createUseStyles} from "react-jss";

type PropsType = {
    theme: string,
    setTheme: (value: string) => void
}

const useStyles = createUseStyles({
    wrap: {
        cursor: "pointer",
        marginRight: "30px"
    }
})

export const ThemeBtn: FC<PropsType> = ({theme, setTheme}) => {
    const classes = useStyles()
    const changeTheme = (e: MouseEvent) => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme('light')
        }
    }
    return (
        <div className={classes.wrap} onClick={e => changeTheme(e)}>
            {theme === 'light'
                ? <FontAwesomeIcon size={"lg"} icon={faMoon}/>
                : <FontAwesomeIcon size={"lg"} icon={faSun}/>}
        </div>
    )
}

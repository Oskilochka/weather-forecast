import React, {FC} from "react"
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {createUseStyles} from "react-jss"

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

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className={classes.wrap} onClick={changeTheme}>
            {theme === 'light'
                ? <FontAwesomeIcon size={"lg"} icon={faMoon}/>
                : <FontAwesomeIcon size={"lg"} icon={faSun}/>}
        </div>
    )
}

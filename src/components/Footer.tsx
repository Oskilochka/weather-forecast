import React, {FC} from "react"
import {createUseStyles} from "react-jss"

const useStyles = createUseStyles({
    git: {
        textDecoration: "none",
        color: "unset",
        fontStyle: "italic",
        fontWeight: "700"

    },
    info: {
        fontWeight: "300",
        marginTop: "70px"
    }
})

export const Footer: FC = () => {
    const classes = useStyles()
    return <h5 className={classes.info}>Made by <a className={classes.git} href='https://github.com/Oskilochka'>oskilochka</a></h5>
}


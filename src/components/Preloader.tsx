import React, {FC} from "react"
import preloader from '../assets/preloader.svg'
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    preloadImg:{
        marginTop: "5em",
        width: "200px",
    }
})

export const Preloader: FC = () => {
    const classes = useStyles()
    return <img src={preloader} className={classes.preloadImg} />
}


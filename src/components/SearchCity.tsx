import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, {ChangeEvent, FC, KeyboardEvent} from "react"
import {createUseStyles} from 'react-jss'
import {faSearch} from "@fortawesome/free-solid-svg-icons"

type PropsType = {
    inputCity: string,
    setInputCity: (value: string) => void,
    setCity: (value: string) => void,
}

const useStyles = createUseStyles({
    findBtn: {
        width: "30px",
        height: "30px",
        cursor: "pointer",
    },
    inputCity: {
        border: "none",
        background: "none",
        fontSize: "20px",
        marginRight: "10px",
        '&:focus': {
            border: "none",
            outline: 'none',
        },
    },
    findBox: {
        borderBottom: '1px solid grey',
        paddingBottom: '10px',
    },
})

export const SearchCity: FC<PropsType> = ({inputCity, setInputCity, setCity}) => {
    const classes = useStyles()
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setCity(inputCity)
        }
    }
    const setCityName = (e: ChangeEvent<HTMLInputElement>) => {
        setInputCity(e.target.value)
    }
    const changeCityName = () => {
        setCity(inputCity)
    }

    return <>
        <h4>Write you city</h4>
        <div className={classes.findBox}>
            <input className={classes.inputCity} onChange={setCityName} onKeyDown={handleKeyDown}/>
            <FontAwesomeIcon className={classes.findBtn} icon={faSearch} size={"lg"} onClick={changeCityName}/>
        </div>
    </>
}


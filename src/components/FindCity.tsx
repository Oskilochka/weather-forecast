import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC, KeyboardEvent} from "react";
import {createUseStyles} from 'react-jss'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    input: string,
    setInput: (value: string) => void,
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
        }
    },
    findBox: {
        borderBottom: '1px solid black',
        paddingBottom: '10px'
    }
})

export const FindCity: FC<PropsType> = ({input, setInput, setCity}) => {
    const classes = useStyles()
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setCity(input)
        }
    }
    const inputCity = (e: any) => {
        setInput(e.target.value)
    }
    const changeCityName = () => {
        setCity(input)
    }
    return (
        <div>
            <h4> Write you city</h4>
            <div className={classes.findBox}>
                <input className={classes.inputCity} onChange={inputCity} onKeyDown={handleKeyDown}/>
                <FontAwesomeIcon className={classes.findBtn} icon={faSearch} size={"lg"} onClick={changeCityName}/>
            </div>
        </div>
    )
}


import React, {FC} from "react";

type PropsType = {
    error: any,
    city: string
}

export const Error: FC<PropsType> = ({error, city}) => {
    return (
        <div>
            {error.response.status === 404
                ? <h2> City <i>{city}</i> not found <br/> <br/> Check your spelling</h2>
                : null
            }
        </div>
    )
}


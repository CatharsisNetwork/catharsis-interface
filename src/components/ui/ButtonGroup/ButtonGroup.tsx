import React, {Dispatch, SetStateAction, useState} from 'react';

type ButtonGroup = {
    children: (active: boolean, setActive: Dispatch<SetStateAction<boolean>>) => React.ReactNode
}

function ButtonGroup({children}: ButtonGroup) {
    const [active, setActive] = useState(true)

    return (<>{children(active, setActive)}</>)
}

export default ButtonGroup;
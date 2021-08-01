import React, {Dispatch, SetStateAction, useState} from 'react';

type ButtonGroupType = {
    children: (active: boolean, setActive: Dispatch<SetStateAction<boolean>>) => React.ReactNode
}

function ButtonGroup({children}: ButtonGroupType) {
    const [active, setActive] = useState(true)

    return (<>{children(active, setActive)}</>)
}

export default ButtonGroup;
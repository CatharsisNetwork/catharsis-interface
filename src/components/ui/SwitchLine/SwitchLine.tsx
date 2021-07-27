import React, {useState} from 'react';
import style from './style.module.scss';
import SwitchLineButton from "./SwitchLineButton";



function SwitchLine() {
    const [width, setWidth] = useState("0")
    const [currentPosition, setCurrentPosition] = useState("left")

    return (

        <div className={style.switch}>
            <div className={style.switch_line}>

                <SwitchLineButton currentPosition={currentPosition}
                                  setCurrentPosition={setCurrentPosition}
                                  setWidth={setWidth}
                                  title={"The Body Fractionalization"}
                                  position={"left"}/>

                <SwitchLineButton currentPosition={currentPosition}
                                  setCurrentPosition={setCurrentPosition}
                                  setWidth={setWidth}
                                  title={"Auction"}
                                  position={"center"}/>

                <SwitchLineButton currentPosition={currentPosition}
                                  setCurrentPosition={setCurrentPosition}
                                  setWidth={setWidth}
                                  title={"Preview and transfer"}
                                  position={"right"}/>

                <span className={style.switch_ripple} style={{width: `${width}`}}/>
                <span className={style.switch_thumb} style={{left: `${width}`}}/>
            </div>
        </div>

    );
}

export default SwitchLine;
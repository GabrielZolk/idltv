/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const WindowsContext = createContext();

export function WindowsProvider(props) {
const [gameVisible, setGameVisible] = useState(true);
const [lendasVisible, setLendasVisible] = useState(true);
const [chatVisible, setChatVisible] = useState(true);

    return(
        <WindowsContext.Provider value={[gameVisible, setGameVisible, lendasVisible, setLendasVisible, chatVisible, setChatVisible]}>
            {props.children}
        </WindowsContext.Provider>
    )
}
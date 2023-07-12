/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const LendasContext = createContext();

export function LendasProvider(props) {
const [lendasVisible, setLendasVisible] = useState(true);

    return(
        <LendasContext.Provider value={[lendasVisible, setLendasVisible]}>
            {props.children}
        </LendasContext.Provider>
    )
}

export const LendasModeContext = createContext();

export function LendasModeProvider(props) {
    const [lendasMode, setLendasMode] = useState(true);

    return(
        <LendasModeContext.Provider value={[lendasMode, setLendasMode]}>
            {props.children}
        </LendasModeContext.Provider>
    )
}


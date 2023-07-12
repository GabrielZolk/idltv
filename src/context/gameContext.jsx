/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const GameContext = createContext();

export function GameProvider(props) {
const [gameVisible, setGameVisible] = useState(true);

    return(
        <GameContext.Provider value={[gameVisible, setGameVisible]}>
            {props.children}
        </GameContext.Provider>
    )
}

export const GameModeContext = createContext();

export function GameModeProvider(props) {
    const [gameMode, setGameMode] = useState(false);

    return(
        <GameModeContext.Provider value={[gameMode, setGameMode]}>
            {props.children}
        </GameModeContext.Provider>
    )
}
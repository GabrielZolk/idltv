/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ChatContext = createContext();

export function ChatProvider(props) {
const [chatVisible, setChatVisible] = useState(true);

    return(
        <ChatContext.Provider value={[chatVisible, setChatVisible]}>
            {props.children}
        </ChatContext.Provider>
    )
}

export const ChatModeContext = createContext();

export function ChatModeProvider(props) {
    const [chatMode, setChatMode] = useState(false);

    return(
        <ChatModeContext.Provider value={[chatMode, setChatMode]}>
            {props.children}
        </ChatModeContext.Provider>
    )
}
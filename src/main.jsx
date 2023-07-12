import React from 'react'
import ReactDOM from 'react-dom/client'

import router from './router';
import { RouterProvider } from "react-router-dom";

import './index.css'
import { LendasModeProvider, LendasProvider } from './context/lendasContext';
import { GameModeProvider, GameProvider } from './context/gameContext';
import { ChatModeProvider, ChatProvider } from './context/chatContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatModeProvider>
      <GameModeProvider>
        <LendasModeProvider>
          <LendasProvider>
            <GameProvider>
              <ChatProvider>
                <RouterProvider router={router} />
              </ChatProvider>
            </GameProvider>
          </LendasProvider>
        </LendasModeProvider>
      </GameModeProvider>
    </ChatModeProvider>
  </React.StrictMode>,
)

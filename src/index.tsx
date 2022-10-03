import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./App";
import {GeneralStyles} from "./GeneralStyles";
import {BrowserRouter as Router} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GeneralStyles/>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);
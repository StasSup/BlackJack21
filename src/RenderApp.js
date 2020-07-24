import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    dillerTakesCards,
    newGame,
    updateBetBalance,
    PlayerCard,
    newPaymentBalance,
    btnChange
} from "./Components/Store";

export let renderApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} PlayerCard={PlayerCard} dillerTakesCards={dillerTakesCards} newGame={newGame}
                 updateBetBalance={updateBetBalance} newPaymentBalance={newPaymentBalance} btnChange={btnChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

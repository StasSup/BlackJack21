import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import PlayerField from "./Components/PlayerCards/PlayerField";
import DillerField from "./Components/DillerField/DillerField";
import NewBetForm from "./Components/NewBetForm/NewBetForm";

const App = (props) => {
  return (
    <div className="App">
      <Header state={props.state}/>
      <NewBetForm state={props.state} newGame={props.newGame} updateBetBalance={props.updateBetBalance} newPaymentBalance={props.newPaymentBalance} btnChange={props.btnChange}/>
      <PlayerField state={props.state} PlayerCard={props.PlayerCard} />
      <DillerField state={props.state} dillerTakesCards={props.dillerTakesCards} btnChange={props.btnChange}/>
    </div>
  );
}

export default App;

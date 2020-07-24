import React from "react";
import style from "./DillerField.module.css"
import Card from "../PlayerCards/Card/Card";

const DillerField = (props) => {
    let dillerCards = props.state.dillerCards.map ( p => (<Card src={p.src}/>) )
    return (
        <div>
            <div className={style.score}>
                Счет: {props.state.dillerScore}
            </div>
            <div className={style.cardPosition}>
                <div className={style.firstCardPosition}>
                    {dillerCards[0]}
                </div>
                <div className={style.secondCardPosition}>
                    {dillerCards[1]}
                </div>
                <div className={style.thirdCardPosition}>
                    {dillerCards[2]}
                </div>
                <div className={style.fourthCardPosition}>
                    {dillerCards[3]}
                </div>
                <div className={style.fifthCardPosition}>
                    {dillerCards[4]}
                </div>
            </div>
            <div className={style.btnPosition}>
            <button disabled={props.state.btnDisabled} onClick={ () => props.dillerTakesCards() }>Стоп</button>
            </div>
        </div>
    )
}

export default DillerField
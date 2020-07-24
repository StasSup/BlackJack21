import React from "react";
import style from "./PlayerField.module.css"
import Card from "./Card/Card";

const PlayerField = (props) => {
    let playerCards = props.state.playerCards.map(p => (<Card src={p.src}/>))
    return (
        <div>
            <div className={style.score}>
                Счет: {props.state.playerScore}
            </div>
            <div className={style.cardPosition}>
                <div className={style.firstCardPosition}>
                    {playerCards[0]}
                </div>
                <div className={style.secondCardPosition}>
                    {playerCards[1]}
                </div>
                <div className={style.thirdCardPosition}>
                    {playerCards[2]}
                </div>
                <div className={style.fourthCardPosition}>
                    {playerCards[3]}
                </div>
                <div className={style.fifthCardPosition}>
                    {playerCards[4]}
                </div>
            </div>
            <div className={style.btnPosition}>
                <button disabled={props.state.btnDisabled} onClick={() => props.PlayerCard()}>Взять</button>
            </div>
        </div>
    )
}

export default PlayerField
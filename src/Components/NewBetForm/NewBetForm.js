import React from "react";
import style from "../PlayerCards/PlayerField.module.css";

const NewBetForm = (props) =>{

    const validateBet = () => {
        if (props.state.bet == "" || props.state.bet == 0 || props.state.bet > props.state.paymentBalance){
            alert("Неккоректная сумма ставки")
            return false
        } else{
            props.newPaymentBalance()
            props.newGame()
            props.btnChange()
        }
    }
    const onChangefunction = (e) =>{
        let bet = e.target.value
        props.updateBetBalance(bet)
    }
    return (
        <div className={style.credit}>
            Сделайте ставку:&nbsp;
            <form>
                <div>
                    <input placeholder={"Сумма ставки"} name="newBet" value={props.state.bet} onChange={onChangefunction} type="number" />
                </div>
                <div className={style.newgameBtn}>
                    <button name="btn" type={"button"} onClick={() => validateBet()}>
                        Новая игра
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewBetForm
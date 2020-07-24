import React from "react";
import logo from '../../Images/logo.png'
import style from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={style.mainWrapper}>
            <div className={style.HeaderWrapper}>
                <div>
                    <img src={logo} className={style.logo}/>
                </div>
                <div>
                    Баланс: {props.state.paymentBalance}
                </div>
            </div>
        </div>
    )
}

export default Header
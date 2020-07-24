import {renderApp} from "../RenderApp";

let state = {
    buben: [
        {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-buben.png"},
        {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-buben.png"},
        {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-buben.png"},
        {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-buben.png"},
        {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-buben.png"},
        {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-buben.png"},
        {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-buben.png"},
        {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-buben.png"},
        {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-buben.png"},
    ],
    chervi: [
        {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-chervei.png"},
        {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-chervei.png"},
        {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-chervei.png"},
        {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-chervei.png"},
        {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-chervei.png"},
        {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-chervei.png"},
        {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-chervei.png"},
        {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-chervei.png"},
        {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-chervei.png"},
    ],
    pik: [
        {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-pik.png"},
        {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-pik.png"},
        {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-pik.png"},
        {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-pik.png"},
        {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-pik.png"},
        {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-pik.png"},
        {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-pik.png"},
        {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-pik.png"},
        {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-pik.png"},
    ],
    tref: [
        {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-tref.png"},
        {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-tref.png"},
        {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-tref.png"},
        {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-tref.png"},
        {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-tref.png"},
        {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-tref.png"},
        {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-tref.png"},
        {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-tref.png"},
        {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-tref.png"},
    ],
    playerCards: [],
    playerScore: 0,
    dillerCards: [],
    dillerScore: 0,
    paymentBalance: 100,
    bet: "",
    intermediateBet: "",
    btnDisabled: "disabled"
}



const randomSuit = () => {
    let min = 1
    let max = 5
    return Math.floor(Math.random() * (max - min)) + min
}

const randomPlayerCard = (suit) => {
    let obj = {relevance: 0, src: ""}
    let min = 0
    let max = suit.length
    let relevance = Math.floor(Math.random() * (max - min)) + min
    obj = suit[relevance]
    state.playerScore = state.playerScore + obj.relevance
    state.playerCards = [...state.playerCards, obj]
    suit.splice(relevance, 1)
}

const randomDillerCard = (suit) => {
    let obj = {relevance: 0, src: ""}
    let min = 0
    let max = suit.length
    let relevance = Math.floor(Math.random() * (max - min)) + min
    obj = suit[relevance]
    state.dillerScore = state.dillerScore + obj.relevance
    state.dillerCards = [...state.dillerCards, obj]
    suit.splice(relevance, 1)
}

export const PlayerCard = () => {
    let suit = randomSuit()
    let obj = {relevance: 0, src: ""}
    if (suit == 1) {
        randomPlayerCard(state.buben)
    } else if (suit == 2) {
        randomPlayerCard(state.chervi)
    } else if (suit == 3) {
        randomPlayerCard(state.pik)
    } else if (suit == 4) {
        randomPlayerCard(state.tref)
    }
    renderApp(state)
}

export const DillerCard = () => {
    if (state.dillerScore < 17) {
        let suit = randomSuit()
        let obj = {relevance: 0, src: ""}
        if (suit == 1) {
            randomDillerCard(state.buben)
        } else if (suit == 2) {
            randomDillerCard(state.chervi)
        } else if (suit == 3) {
            randomDillerCard(state.pik)
        } else if (suit == 4) {
            randomDillerCard(state.tref)
        }
        renderApp(state)
}
}

const playerExodus = () => {
    if (state.playerScore > 21 || state.playerScore < state.dillerScore && state.dillerScore < 22) {
        state.bet = ""
        state.btnDisabled = "disabled"
        alert("Вы проиграли")
    } else if (state.dillerScore > 21 || state.dillerScore < state.playerScore && state.playerScore < 22) {
        state.paymentBalance = state.paymentBalance + (state.bet * 2)
        state.bet = ""
        state.btnDisabled = "disabled"
        alert("Вы выиграли")
    } else if (state.playerScore == state.dillerScore) {
        state.paymentBalance = state.paymentBalance*1 + state.bet*1
        state.bet = ""
        state.btnDisabled = "disabled"
        alert("Ничья")
    }
}

export const dillerTakesCards = () => {
    DillerCard()
    DillerCard()
    DillerCard()
    playerExodus()
}

export const newGame = () => {
    state = {
        buben: [
            {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-buben.png"},
            {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-buben.png"},
            {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-buben.png"},
            {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-buben.png"},
            {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-buben.png"},
            {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-buben.png"},
            {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-buben.png"},
            {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-buben.png"},
            {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-buben.png"},
        ],
        chervi: [
            {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-chervei.png"},
            {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-chervei.png"},
            {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-chervei.png"},
            {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-chervei.png"},
            {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-chervei.png"},
            {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-chervei.png"},
            {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-chervei.png"},
            {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-chervei.png"},
            {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-chervei.png"},
        ],
        pik: [
            {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-pik.png"},
            {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-pik.png"},
            {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-pik.png"},
            {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-pik.png"},
            {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-pik.png"},
            {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-pik.png"},
            {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-pik.png"},
            {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-pik.png"},
            {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-pik.png"},
        ],
        tref: [
            {relevance: 2, src: "https://astrometa.ru/images/winds/karty2/valet-tref.png"},
            {relevance: 3, src: "https://astrometa.ru/images/winds/karty2/dama-tref.png"},
            {relevance: 4, src: "https://astrometa.ru/images/winds/karty2/korol-tref.png"},
            {relevance: 6, src: "https://astrometa.ru/images/winds/karty2/6-tref.png"},
            {relevance: 7, src: "https://astrometa.ru/images/winds/karty2/7-tref.png"},
            {relevance: 8, src: "https://astrometa.ru/images/winds/karty2/8-tref.png"},
            {relevance: 9, src: "https://astrometa.ru/images/winds/karty2/9-tref.png"},
            {relevance: 10, src: "https://astrometa.ru/images/winds/karty2/10-tref.png"},
            {relevance: 11, src: "https://astrometa.ru/images/winds/karty2/tuz-tref.png"},
        ],
        playerCards: [],
        playerScore: 0,
        dillerCards: [],
        dillerScore: 0,
        paymentBalance: state.paymentBalance,
        bet: state.bet
    }
    console.log(state.bet)
    PlayerCard()
    DillerCard()
    PlayerCard()
    DillerCard()
    renderApp(state)
}

export const newPaymentBalance = () => {
    state.paymentBalance = state.paymentBalance - state.bet
    renderApp(state)
}

export const updateBetBalance = (bet) => {
    state.bet = bet
    renderApp(state)
}

export const btnChange = () =>{
    state.btnDisabled = ""
}


export default state
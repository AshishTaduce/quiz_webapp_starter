import './styles.css';
import Confetti from 'react-dom-confetti';
import React from "react";

export default function Option(props) {
    function handleClick() {
        props.triggerClick(props.option, props.correct);
    }
    return (

        <div onClick= {!props.disableClick ? handleClick : null}
            className={`option ${props.selected? props.correct ? 'correct-option' : 'wrong-option' : ''}`}>
            <Confetti active={props.disableClick && props.correct && props.selected} />
            {props.text}
        </div>
    );
}
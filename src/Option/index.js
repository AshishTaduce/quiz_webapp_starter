import React, {useState} from "react";
import './styles.css';
import Confetti from 'react-dom-confetti';

export default function Option(props) {
    // let [show, showAnswers] = useState(false);
    // console.log(show, 'show status');
    function handleClick() {
        // showAnswers(true);
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
import * as React from "react";
import './style.css'

function ResultRow(props) {
    return(<div className={"result-row"}>
        <div className={'question-column'}>
            {props.question}
        </div>
        <div className={'correct-choices'}>
            {props.correctChoice}
        </div>
        <div className={`user-choices  ${(props.userChoice === props.correctChoice) 
            ? 'correct-option' 
            : props.userChoice !== 'Timed out' 
                ? props.userChoice !== 'YOUR CHOICE' 
                    ? 'wrong-option'
                    : '' 
                : 'timed-out'}`
        }>
            {props.userChoice}
        </div>
    </div>);
}

function QuizResult(props){


        console.log(props);
        return (<div>
            <head>
                <title>Result Page</title>
            </head>
            <body>
            <div>Your total score is : {props.location.state.score}</div>

            <div className={'result-table'}>
                <ResultRow question = {'QUESTION'} correctChoice = {'CORRECT CHOICE'} userChoice = {'YOUR CHOICE'}/>
                {props.location.state.questions.map(
                    (question, index) =>
                        <ResultRow question = {question.text} correctChoice = {question.options[question.correct_choice]} userChoice = {props.location.state.userChoices[index]}/>
                    // question.options[question.text]
                )}
            </div>
            </body>
        </div>);

}

export default QuizResult;
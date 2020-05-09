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
    return (<div>
            <head>
                <title>Result Page</title>
            </head>
            <body>
            <div>Your total score is : {props.location.state.score}</div>

            <table className={'result-table'}>
                {/*<ResultRow question = {'QUESTION'} correctChoice = {'CORRECT CHOICE'} userChoice = {'YOUR CHOICE'}/>*/}
                <tr>
                    <th>QUESTION</th>
                    <th>CORRECT CHOICE</th>
                    <th>YOUR CHOICE</th>
                </tr>
                {props.location.state.questions.map(
                    (question, index) =>
                        // <ResultRow question = {question.text} correctChoice = {question.options[question.correct_choice]} userChoice = {props.location.state.userChoices[index]}/>
                        <tr>
                            <td>{question.text}</td>
                            <td>{question.options[question.correct_choice]}</td>
                            <td>{props.location.state.userChoices[index]}</td>
                        </tr>
                    // question.options[question.text]
                )}
            </table>
            </body>
        </div>);

}

export default QuizResult;
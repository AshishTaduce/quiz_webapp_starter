import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';
import TimerClass from "../TimerClass";

class Quiz extends React.Component {
    state = {
        score: 0,
        showAnswers: false,
        selection: null,
        displayedQuestionIndex: 0,
        disableClick: false,
        status: null,
        userChoices: [],
    };

    questions = [
        {
            'text': "Who is current PM of India?",
            'options': ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Sonia Gandhi'],
            'correct_choice': 0
        },
        {
            'text': "What is capital of Orissa?",
            'options': ['Chandigarh', 'Bhubaneshwar', 'Tripura', 'Nagaland'],
            'correct_choice': 1
        },
        {
            'text': `In the context to India's wild life, the flying fox is a __?`,
            'options': ['Bat', 'Vulture', 'Stok', 'Kite'],
            'correct_choice': 0
        },
        {
            'text': 'What percentage of land area should remain covered by forest to maintain Ecological balance?',
            'options': ['10%', '33%', '5%', 'None of these'],
            'correct_choice': 1
        },
        {
            'text': ' The purest form of iron is',
            'options': ['Wrought iron', 'Steel', 'Pig iron', 'Nickel steel'],
            'correct_choice': 0
        },
        {
            'text': 'Layer of atmosphere in which Ozone layer lies is',
            'options': ['Exosphere', 'Mesosphere', 'Troposphere', 'Stratosphere'],
            'correct_choice': 3
        },
    ];

    async triggerClick(option, isCorrect) {
        this.state.userChoices.push(option !== null ? this.questions[this.state.displayedQuestionIndex].options[option]: 'Timed out');
        if(this.state.displayedQuestionIndex === this.questions.length - 1){
            this.props.history.push({
                pathname: '/result',
                state: {
                    score: this.state.score,
                    questions: this.questions,
                    userChoices: this.state.userChoices,
                }
            });
            return;
        }

        console.log('Entered triggerClick with:', option, isCorrect);
        if (isCorrect) {
            this.setState({
                status: 'Yayy!! Correct Answer!',
                score: this.state.score + 10,
            })
        }
        else if(option === null){
            this.setState({
                status: 'Sorry. Timed Out',
            })
        }
        else if(!isCorrect){
            this.setState({
                status: 'Sorry. Wrong Answer!',
            })
        }
        this.setState({
            selection: option,
            disableClick: true,
        });
        await setTimeout(() => {
            this.setState({
                displayedQuestionIndex: this.state.displayedQuestionIndex + 1,
                disableClick: false,
                selection: null,
                status: null,
            });
             }, 3000);

        console.log(this.state.selection, ' is the selected option');
    }

    render() {
            return this.state.displayedQuestionIndex < this.questions.length ?
                <div className="header">
                    <div className="score">Score: {this.state.score}</div>
                    <Question question={this.questions[this.state.displayedQuestionIndex].text}/>
                    <div className="options-container">
                        {this.questions[this.state.displayedQuestionIndex].options.map((element, index) => {
                            return (<
                                Option text={element}
                                       correct={this.questions[this.state.displayedQuestionIndex].correct_choice === index}
                                       option={index} selected={this.state.selection === index}
                                       disableClick ={this.state.disableClick}
                                       triggerClick={this.triggerClick.bind(this)}
                            />);
                        })}
                    </div>
                    <div className={'status'}>{this.state.status}</div>
                    <TimerClass
                        key = {this.state.displayedQuestionIndex}
                        disableClick ={this.state.disableClick}
                        callBackFn = {this.triggerClick.bind(this)}
                    />
                </div> : null;
    }
}

export default Quiz;
import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';

class Quiz extends React.Component {
    state = {
        score: 0,
        showAnswers: false,
        selection: null,
        displayedQuestionIndex: 0,
        disableClick: false,
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
        if (isCorrect) {
            this.setState({
                score: this.state.score + 10,
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
            });
             }, 3000);

        console.log(this.state.selection, ' is the selected option');
    }

    render() {
        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question question={this.questions[this.state.displayedQuestionIndex].text}/>
                <div className="options-container">
                    {this.questions[this.state.displayedQuestionIndex].options.map((element, index) => {
                        return (<
                            Option text={element}
                                   correct={this.questions[this.state.displayedQuestionIndex].correct_choice === index}
                                   option={index} selected={this.state.selection === index}
                                   triggerClick={this.triggerClick.bind(this)}
                                   disableClick={this.state.disableClick}
                        />);
                    })}
                </div>
            </div>
        );
    }
}

// <Option text={'Narendra Modi'} correct = {true} option = {1} selected = {this.state.selection === 1} triggerClick = {this.triggerClick.bind(this)}/>
// <Option text={'Rahul Gandhi'} correct = {false} option = {2} selected = {this.state.selection === 2} triggerClick = {this.triggerClick.bind(this)}/>
// <Option text={'Manmohan Singh'} correct = {false} option = {3} selected = {this.state.selection === 3} triggerClick = {this.triggerClick.bind(this)}/>
// <Option text={'Sonia Gandhi'} correct = {false} option = {4} selected = {this.state.selection === 4} triggerClick = {this.triggerClick.bind(this)}/>

export default Quiz;


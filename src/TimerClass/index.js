import React from "react";
import './style.css'

class TimerClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            timeRemaining:10,
            timer: null
        });
    }

    componentDidMount() {
        this.state.timer = setTimeout(() => {
            // if(this.props.optionSubmitted || this.state.timeRemaining === 1)
                this.props.callBackFn(null, false);
            this.state.timeRemaining--;
            console.log(this.state.timeRemaining, 'time rem');
            // clearTimeout(a);
        }, 10000);
    }

    componentWillUnmount() {
        console.log('com2');
        this.state.timer = null;
        clearTimeout(this.state.timer);
    }

    render() {
        if(!this.props.optionSubmitted){
            return (<div className={"timer"}/>);
        }
        else{
            clearTimeout(this.state.timer);
            return null;
        }
    }
}

export default TimerClass;
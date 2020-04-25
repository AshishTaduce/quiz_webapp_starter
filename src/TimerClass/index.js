import React from "react";
import './style.css'

class TimerClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            timer: null
        });
    }

    componentDidMount() {
        this.setState({
            timer: setTimeout(() => {
                this.props.callBackFn(null, false);
            }, 10000),
        })
    }

    componentWillUnmount() {
        console.log('com2');
        this.state.timer = null;
        clearTimeout(this.state.timer);
    }

    render() {
        if(!this.props.disableClick){
            return (<div className={"timer"}/>);
        }
        else{
            clearTimeout(this.state.timer);
            return null;
        }
    }
}

export default TimerClass;
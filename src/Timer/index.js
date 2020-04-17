import  './style.css';
import React, {useEffect, useState} from "react";

function Timer(props) {
    let a;


    useEffect(() => {
        if(props.disableTimer){
            clearTimeout(a);
        }
        a = setTimeout(() => {

            props.callBackFn(null, false);
            clearTimeout(a);
        }, 10000);
    }, [props.option]);


    return (!props.optionSubmitted
        ? <div className={"timer"}>

        </div>
        : null);
}

export  default Timer;
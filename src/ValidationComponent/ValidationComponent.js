import React from 'react';

const validationComponent = (props) => {
    const message = props.currentLenght < 5 ? 
        "Text too short" :
        "Text long enough";
    
    return (
        <div>{message}</div>
    )
}

export default validationComponent;
import React from 'react'
import './Split.css';

function Split(props) {
    const combinedClassName = `split ${props.className}`
    const newStyles = {flex: props.flexBasis, color: props.myColor, textAlign: props.justification}
    return (
        <div 
            className={combinedClassName}  
            style={newStyles}
        >
            {props.children}
        </div>
    )
}

export default Split
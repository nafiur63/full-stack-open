import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleClick} className={props.className}>
                {props.name}
            </button>
        </div>
    )
}

export default Button

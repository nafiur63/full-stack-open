import React from 'react'

const Statistics = (props) => {
    let good = props.good
    let neutral = props.neutral
    let bad = props.bad
    let total = good+neutral+bad
    let avg = (good*1+neutral*0+bad*(-1))/total
    let positive = ((good+neutral)/total)*100
    return (
        <div>
            <p>{props.text} : {props.value}</p>
        </div>
    )
}

export default Statistics

import React, { useState } from 'react'
import Button from '../Buttons/Button'
import Statistics from '../Statistics/Statistics'

const ShowFeedback = (props) => {
    let goods = props.good
    let neutrals = props.neutral
    let bads = props.bad
    let total = (goods+neutrals+bads)+0
    let avg = (goods*1+neutrals*0+bads*(-1))/total
    const perc = 100
    let positive = (((goods+neutrals)/total)*100)
    if(total===0){return (<p>No Feedback Given Yet</p>)}
    else{
        return(
        <div>
        <Statistics text="All" value={total}/>
        <Statistics text="Average" value={avg}/>
        <Statistics text="Positive" value={positive}/>
    </div>)}
    }

const GetReview= () => {
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)

    const goodClick = () => {
        setGood(good+1)
    }
    const neutralClick = () => {
        setNeutral(neutral+1)
    }
    const badClick = () => {
        setBad(bad+1)
    }

    return (
        <div>
            <div>
            <Button name="Good" handleClick={goodClick}/>
            <Button name="Neutral" handleClick={neutralClick}/>
            <Button name="Bad" handleClick={badClick}/>
            </div>
            <div>
                <Statistics text="Good" value={good}/>
                <Statistics text="Neutral" value={neutral}/>
                <Statistics text="Bad" value={bad}/>
                <ShowFeedback good={good} neutral={neutral} bad={bad}/>
                
            </div>
        </div>
    )
}



export default GetReview

import React from 'react'

const Statistics = (props) => {
    return (
        <tr>
            <td style={{paddingRight:"100px"}}>{props.text}</td><td>{props.value}</td>
        </tr>
    )
}

export default Statistics

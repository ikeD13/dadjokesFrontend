import React from 'react'

const Joke = (props) => {
    return (
        <div className="joke-box">
            <p>{props.joke}</p>
        </div>
    )
}

export default Joke
import React from 'react'

const Banner = (props) => {
    return (
        <div>
            <h1>{(props.Heading).toUpperCase()}</h1>
        </div>
    )
}

export default Banner
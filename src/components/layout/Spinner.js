import React, { Fragment } from 'react'

import spinner from "./spinner.gif"

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="spinner" style={spinnerStyle} />
        </Fragment>
    )
}

const spinnerStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%'
}

export default Spinner;
import React from 'react'
import PropTypes from 'prop-types'

function Statistics({state, fnPositivePerсent, fnTotal}) {
    return (
        <ul>
        <li>Good: {state.good}</li>
        <li>Neutral: {state.neutral}</li>
        <li>Bad: {state.bad}</li>
        <li>Total: {fnTotal()}</li>                                               {/*//----->  запустили ф-ю при отрисовке*/}
        <li>Positive feedback: {fnPositivePerсent()} %</li>                       {/*//----->  запустили ф-ю при отрисовке*/}
        </ul>
    )
}

Statistics.propTypes = {

}

export default Statistics


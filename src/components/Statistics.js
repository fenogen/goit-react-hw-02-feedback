import React from 'react'
import PropTypes from 'prop-types'

function Statistics({state, fnPositivePerсent, fnTotal}) {
    return (
        <ul className="list_statistic">
        <li className="item">Good: <b>{state.good}</b></li>
        <li className="item">Neutral: <b>{state.neutral}</b></li>
        <li className="item">Bad: <b>{state.bad}</b></li>
        <li className="item">Total: <b>{fnTotal()}</b></li>                                               {/*//----->  запустили ф-ю при отрисовке*/}
        <li className="item">Positive feedback: <b>{fnPositivePerсent()} %</b></li>                       {/*//----->  запустили ф-ю при отрисовке*/}
        </ul>
    )
}

Statistics.propTypes = {

}

export default Statistics


import React from 'react'
import PropTypes from 'prop-types'

function FeedbackOptions({fnPlus}) {
    return (
        <div className="flex__button">
          <button className="button" id="plus" onClick={fnPlus}>Good</button>
          <button className="button" id="neutral" onClick={fnPlus}>Neutral</button>
          <button className="button" id="bad" onClick={fnPlus}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {

}

export default FeedbackOptions


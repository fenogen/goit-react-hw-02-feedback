import React from 'react'
import PropTypes from 'prop-types'

function FeedbackOptions({fnPlus}) {
    return (
        <div>
          <button id="plus" onClick={fnPlus}>Good</button>
          <button id="neutral" onClick={fnPlus}>Neutral</button>
          <button id="bad" onClick={fnPlus}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {

}

export default FeedbackOptions


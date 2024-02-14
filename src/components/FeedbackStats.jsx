import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
  const totalRating = feedback.reduce((sum, item) =>  sum + item.rating, 0)
  const avarage = totalRating/feedback.length
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}
export default FeedbackStats
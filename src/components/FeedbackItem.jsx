import PropTypes from "prop-types"
import Card from "./shared/Card"

export default function FeedbackItem({rating, text}) {

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">
        {text}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

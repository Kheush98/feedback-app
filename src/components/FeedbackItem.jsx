import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from "prop-types"
import Card from "./shared/Card"
import FeedbackContext from './context/FeedbackContext'

export default function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes/>
      </button>
      <div className="text-display">
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

import PropTypes from 'prop-types'

export default function Header({text, bgClor, color}) {
    const styleHeader = {
        backgroundColor: bgClor, 
        color: color
    }
  return (
    <header style={styleHeader}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// Set a default property
Header.defaultProps = {
    text: 'Feedback UI',
    bgClor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

// Set the property type
Header.propTypes = {
    text: PropTypes.string.isRequired
}
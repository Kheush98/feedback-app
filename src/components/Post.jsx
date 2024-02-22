import {Navigate, useNavigate} from 'react-router-dom'

function Post() {
    const status = 200
    const navigate = useNavigate()

    const click = () => {
        navigate('/about')
    }
    if (status === 404) {
        return <Navigate to='/notfound'/>
    }
  return (
    <div>
        Post
        <button onClick={click}>Click</button>
    </div>
  )
}

export default Post
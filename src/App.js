import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';
import NotFound from './components/NotFound';
import {FeedbackProvider} from './components/context/FeedbackContext'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path='/'
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback}/>
                                    <FeedbackStats/>
                                    <FeedbackList handleDelete={deleteFeedback}/>
                                </>
                            }
                        />
                        <Route path='/about' element={<AboutPage/>}/> 
                        <Route path='/post' element={<Post/>}/> 
                        <Route path='/notfound' element={<NotFound/>}/> 
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}
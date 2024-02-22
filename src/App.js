import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';
import NotFound from './components/NotFound';
import {FeedbackProvider} from './components/context/FeedbackContext'

export default function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path='/'
                            element={
                                <>
                                    <FeedbackForm/>
                                    <FeedbackStats/>
                                    <FeedbackList />
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
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

export default function App() {
    return (
        <>
            <Header text="Hello world"/>
            <div className='container'>
                   <FeedbackItem/>
            </div>
        </>
    )
}
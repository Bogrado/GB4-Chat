import React from 'react';
import './App.css';
import Message from "./Message";

const text = "lo rem";

function App() {
    return (
        <div>
            <Message text = {text}/>
            <Message text = {text}/>
        </div>
    );
}
export default App;

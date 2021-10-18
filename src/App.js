import React, {
    useState
} from 'react';
import './App.css';
import Message from './Message';

function App() {
    const [messageList, setMessageList] = useState([]);
    const [input, setInput] = useState('')
    function onClickHandler() {
        setMessageList (messageList => [...messageList, { author: 'User', text: input }])
        setInput('');
    }
    function onMessageRendered() {

        setMessageList (messageList => [...messageList, { author: 'Bot', text: 'lorem' }])
    }
    // 19 строка msg: отправляю целиком и автора и текст (передаю весь объект)
    return (
        <div>
            {messageList.map((message, i) => <Message msg={message} key={i} onRendered={onMessageRendered} />)}
            <input value={input} onInput={e => setInput(e.target.value)}/>
            <button onClick={onClickHandler}>Test</button>
        </div>
    );
}

export default App;

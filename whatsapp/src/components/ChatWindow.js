import React, {useState, useEffect, useRef} from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import MessageItem from './MessageItem';

import './ChatWindow.css';


export default ({user}) => {
    const body = useRef();

    // INICIO -  Preparando a funcionalidade do microfone
    let recognition = null;
    //Validando  se o navegador em questão tem a funcionalidade de gravação
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    //Caso tenha é criado o obejeto reponsável pela funcionalidade
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }
    // FIM -  Preparando a funcionalidade do microfone

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false); // State que vai fazer o controle de quando o botão está sendo clicado (microfone)
    const [list, setList] = useState([
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'},
        {author: 1234, body: 'thiaog jose da silva'},
        {author: 123, body: 'thiaog jose da silva'} 
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight ;
        }
    },[list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji);
    }

    const handleOpenEmoji = () => {
            setEmojiOpen(true);    
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    const handleSendClick = () => {

    }

    // INICIO - Função de captura de voz pelo microfone
    const handleMicClick = () => {
        if(recognition !== null){
            
            recognition.onstart = () => {
                console.log('entrou01');
                setListening(true);
            }
            recognition.onend = () => {
                console.log('entrou02');
                setListening(false);
            }
            recognition.onresult = (e) =>{
                console.log('entrou03');
                setText(e.results[0][0].transcript);
                console.log(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

    return(
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://img.favpng.com/20/11/10/computer-icons-icon-design-png-favpng-8Hk26AsZVcQbfXKf83GxDkCZS.jpg" alt="" />
                    <div className="chatWindow--name">Thiago jose da silva</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />                        
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />                        
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />                        
                    </div>
                </div>
            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            

            </div>
            <div 
                className="chatWindow--emojiarea" 
                style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div className="chatWindow--footer">

                <div className="chatWindow--pre">
                    <div 
                        className="chatWindow--btn" 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40: 0}}
                    >
                        <CloseIcon style={{color: '#919191'}} />                        
                    </div>
                    <div className="chatWindow--btn" onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />                        
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    ></input>
                </div>
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}} />                        
                        </div>
                    }   
                    {text !== '' &&
                    <div onClick={handleSendClick} className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}} />                        
                    </div>
                    }
                </div>

            </div>
            
        </div>
    );
}
import React from 'react';
import Api from '../Api';
import './Login.css';

export default ({onReceive}) =>{

    const handleFacebooKLogin = async () => {
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Algo deu muito errado!!"); 
        }
    }


    return(
        <div className="login">
            <button onClick={handleFacebooKLogin}>Logar com FaceBook</button>
        </div>
    );
}
import React from 'react';

const AmazingNumberButton = ({kunta}) => {
   
        
    
    return (
        <div className="numbers">
            <button onClick={kunta} id="0">0</button>
            <button onClick={kunta} id="1">1</button>
            <button onClick={kunta} id="2">2</button>
            <button onClick={kunta} id="3">3</button>
            <button onClick={kunta} id="4">4</button>
            <button onClick={kunta} id="5">5</button>
            <button onClick={kunta} id="6">6</button>
            <button onClick={kunta} id="7">7</button>
            <button onClick={kunta} id="8">8</button>
            <button onClick={kunta} id="9">9</button>
           
            
        </div>
    );
};

export default AmazingNumberButton;
import React, {useState} from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import Clear from './Clear';
import GreatOperationButton from './GreatOperationButton';
import ItSOverNineThousand from './ItSOverNineThousand';
import MagnificientEqualButton from './MagnificientEqualButton';

const Calculator = () => {

    //create de hookstate
    const [value, setValue] = useState([]);
    const [value2, setValue2] = useState([]);

    const cal = function(e){
        setValue(value + e.target.id)
        setValue2("")
    }

    const result = function(){
        try {
            const data = eval(value);
            setValue(data);
            if(data > 9000){
                setValue2('Its Over 9000 !!!')
               }else{
                   setValue2("");
               }
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert('calcul erroné');
                setValue('');
            }
        }
        
    }
    const clear = function () {
        setValue('');
    }

    return (
        <div>            
           <BeautifullScreen answer={value} />
           <ItSOverNineThousand answer2={value2} />
           <AmazingNumberButton  kunta={cal}/>
           <GreatOperationButton kunta={cal}/>
           <MagnificientEqualButton calculer={result}/>
           <Clear del={clear}/>
        </div>
    );
};

export default Calculator;
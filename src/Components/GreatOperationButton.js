

const GreatOperationButton = ({kunta}) => {
    
    
   
    
    return (

        <>
<div className="operators">
    <button onClick={kunta} id="/">/</button>
    <button onClick={kunta} id="*">*</button>
    <button onClick={kunta} id="+">+</button>
    <button onClick={kunta} id="-">-</button>
    <button onClick={kunta} id=".">.</button>
   

   
</div>
        </>
    )
}

export default GreatOperationButton;
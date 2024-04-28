import React , {useState} from 'react';

function InputForm({setName, setCourse}){
    const [showTextData, setShowTextData] = useState(false);
    return(
        <>
        <button onClick={()=> setShowTextData(true)}>Create one</button>
        {showTextData ? 
        <div id="newTextData">
            <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            <input type="text" placeholder="Course" onChange={(e)=> setCourse(e.target.value)}/>
            <button onClick={()=> setShowTextData(false)}>X</button>
        </div>
         : 
         null}
        
        </>
    );
}

export default InputForm;
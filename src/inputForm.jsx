import React , {useState} from 'react';

function InputForm({setName, setCourse}){
    const [showTextData, setShowTextData] = useState(false);
    return(
        <>
        <button onClick={()=> setShowTextData(true)} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create one</button>
        {showTextData ? 
        <div id="newTextData">
            <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            <input type="text" placeholder="Course" onChange={(e)=> setCourse(e.target.value)}/>
            <button onClick={()=> setShowTextData(false)} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">X</button>
        </div>
         : 
         null}
        
        </>
    );
}

export default InputForm;
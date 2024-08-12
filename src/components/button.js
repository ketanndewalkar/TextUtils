import React,{useState} from 'react'

export default function Button() {
    let [Mode, setMode] = useState("Dark Mode");
    let [i,setText] =useState(true);
const colorMode = () =>{
    if(i===true){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        setMode('Light Mode');
        
        setText(false);
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setMode('Dark Mode')
        setText(true);
    }

    
}

  return (
    <div>
        <button className="btn btn-primary mx-2" onClick={colorMode}>{Mode}</button>
    </div>
  )
}


import React,{useState} from 'react';
import Button from './button.js';




export default function TextForm
(ket) {
  var letter;

 
  const [Text,setText] = useState("");

  

  const HandleonChange = (e) =>{
    setText(e.target.value);
  }

  const HandleUpchange = () => {
    if(Text===""){
      {ket.fun("NO Input Value","warning")};
    }else{
    console.log("The Upper case clicked");
    ket.fun("The Input is concverted to the Uppercase.","success");
    letter = "UpperCase:";
    let NewText = Text.toUpperCase();
    document.querySelector("h2").innerText="UpperCase :"
    document.querySelector("#Ans").value=`${NewText}`;
  }}

  const Handleclearchange= () => {
    if(Text===""){
      {ket.fun("No Input","warning")}
    }
    setText("");    
    document.querySelector("#Ans").value="";
    
  }

  const Handlecopy = () =>{
    let text = document.querySelector("#mybox");
    text.select();
    // text.setSelectionRange(0,3);
    navigator.clipboard.writeText(text.value);
    {ket.fun("copied","success");}
   
  }

  return (
    <div>
    
      <h1>{ket.heading}</h1>
    <textarea  className="form-control" value={Text} onChange={HandleonChange} id="mybox" row="8"></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={Handleclearchange}>Clear Text</button>
    <button className="btn btn-primary my-3" onClick={HandleUpchange}>For Upper Case</button>
    <button className="btn btn-primary my-3 mx-2" onClick={Handlecopy}>Copy Text</button>
    <Button />
    <h2 className="my-2">Answer:</h2>
    <textarea className="form-control my-2" id="Ans" placeholder=''></textarea>
    </div>
    
  );
}

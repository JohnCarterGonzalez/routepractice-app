import React from 'react';
import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Hello = (props) => { 
  const { word, color, bgColor } = useParams();
    
  return (
    <>
    {
       isNaN(word)? // if the param isnt a number 
      <h1 style={ color? { color: color, backgroundColor: bgColor }
        :null
    }> And the word is : { word } </h1>
      : // if the param is a number
      <h1> The number is: { word } </h1>
    }
    </>
    )
  }
export default Hello 

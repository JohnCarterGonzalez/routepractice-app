import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Hello = (props) => { 
  const { word } = useParams();
    
  return (
    <h1>The number is: { word }</h1>
  );
}
export default Hello 

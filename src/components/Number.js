import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Number = (props) => { 
  const { number } = useParams();
    
  return (
    <h1>The number is: { number }</h1>
  );
}
export default Number

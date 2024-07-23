import logo from './logo.svg';
import './App.css';

function App() {
  let score = 0
  return (
    <div className="App">
      <button onClick={()=>{
       let a=45+56+72+10;
       console.log(a);
      }}>Arithmetic Operators</button>
      <button onClick={()=>{
        score++;
        console.log(score);
      }}>Increment</button>
      <button onClick={()=>{
        let a = 50 % 5;
        console.log(a)
      }}>Modulus</button>
      <button onClick={()=>{
        let a = 567;
           a += 25;
           a -= 40;
           a *= 22;
           console.log(a);
      }}>Assignment Operators</button>
      <button onClick={()=>{
         let mathsMarks = 56;
            
         if(mathsMarks >=40){
          console.log("Student passed in maths");
         }else{
          console.log("Student failed in maths");
         }

        //  console.log(mathsMarks >=10);
        //  console.log(mathsMarks <=10);
        //  console.log(mathsMarks ==60);
        //  console.log(mathsMarks >=40);
        //  console.log(mathsMarks !=56);
        //  console.log(mathsMarks <90);
        //  console.log(mathsMarks >33);



      }}>Comparison Operator </button>
    </div>
  );
}

export default App;

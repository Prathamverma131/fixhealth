import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import Testimonial from './Testimonial';
import { useState } from 'react';


function App() {

  var [form,setForm] = useState(0);

  var current = ()=>{

    switch (form){

      case 0 : 
      return <Form setForm={setForm }/>;
      break;
      case 1 : 
      return <Form2 setForm={setForm}/>
      break;
      case 2 : 
      return <Form3 setForm={setForm}/>
      break;

      default:
        return <Form/>

    }


  }


  return (
    <div className="App">
      <Hero/>
      {current()}
      <Testimonial/>
    </div>
  );
}

export default App;

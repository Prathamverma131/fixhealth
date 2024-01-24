import styles from "./Form.module.css";
import { useState } from "react";


function Form2({setForm}){

    var [age,setAge] = useState(0);

    function validate(){

        if(!age){
            return false;
        }if(parseInt(age)<100&&parseInt(age)>0){
            return true;
        }else{
            return false;
        }

    }

    console.log(typeof(age));

    return <div className={styles.form}>
        
        <div className={styles.heading}>Book an appointment</div>
        <div className={styles.detail}>60+ Expert Physiotherapists for 200+ Conditions</div>
        <form className={styles.fo}>
            <input type="" onChange={(e)=>{setAge(e.target.value)}} placeholder="Age"/>
            <input type="" placeholder="City"/>
            <input type="" placeholder="Company"/>
        </form>
        <button onClick={()=>{
            if(validate()){

                if(parseInt(age)<40){
                    alert("Showing result for best doctors")
                }
                
            setForm(2);}
            else{
                alert("Enter correct age");
            }
        }} className={styles.btn}>Start your recovery</button>
        </div>
    
}

export default Form2;
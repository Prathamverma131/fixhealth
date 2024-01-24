import styles from "./Form.module.css";


function Form({setForm}){

    return <div className={styles.form}>
        
        <div className={styles.heading}>Book an appointment</div>
        <div className={styles.detail}>60+ Expert Physiotherapists for 200+ Conditions</div>
        <form className={styles.fo}>
            <input type="" placeholder="Your name" required/>
            <input type="" placeholder="+91" required/>
            
        </form>
        <button onClick={()=>{
            setForm(1);
        }}  className={styles.btn}>Start your recovery</button>
        </div>
    
}

export default Form;
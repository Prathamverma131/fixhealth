import styles from "./Form.module.css";


function Form3(){

    return <div className={styles.form}>
        
        <div className={styles.heading}>Book an appointment</div>
        <div className={styles.detail}>60+ Expert Physiotherapists for 200+ Conditions</div>
        <form className={styles.fo}>
            <input type="" placeholder="Any previous experience with physiotherapy"/>       
        </form>
        <button onClick={()=>{
            alert("Showing result for best doctor's")
        }} className={styles.btn}>Start your recovery</button>
        </div>
    
}

export default Form3;
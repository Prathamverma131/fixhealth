import styles from './First.module.css';
import Hero from './Hero';
import Form from './Form';

function First(){

    return <div className={styles.first}>
        <Hero/>
      <Form/>
    </div>
}

export default First;
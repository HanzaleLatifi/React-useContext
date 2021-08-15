import styles from './Product.module.css'
import { FiTrash2 } from 'react-icons/fi'


const Product = (props) => {
    return (
        <div className={styles.product}  >
            <p>name:{props.name}</p>
            <p>price:{props.price}</p>
            {/* <input className={styles.input} value={props.name} onChange={props.onChange}></input> */}

            <span className={styles.inc} >{props.quantity} </span>

            <button className={styles.button} onClick={props.onInc}>+</button>
            <button className={`${styles.button} ${props.quantity === 1 && styles.remove}`} onClick={props.onDec}> {props.quantity > 1 ? "-" : <FiTrash2 />}</button>
            <button className={styles.button2} onClick={props.onDelete}>delete</button>

        </div>
    );
}

export default Product;
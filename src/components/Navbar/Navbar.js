import Styles from './Navbar.module.css';
import { useProducts } from '../Provider/ProductProvider';

const Navbar = () => {
    const products = useProducts();


    return (
        <header className={Styles.navbar}>
            <span>{products.length}</span>
        </header>
    );
}

export default Navbar;
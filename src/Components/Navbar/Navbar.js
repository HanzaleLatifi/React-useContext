import Styles from './Navbar.module.css';

const Navbar = ({ totalItems }) => {

    return (
        <header className={Styles.navbar}>
            <span>{totalItems.length}</span>
        </header>
    );
}

export default Navbar;
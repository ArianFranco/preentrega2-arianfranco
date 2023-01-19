import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="menu-container">
            <img src={require('./img/messi.jpg')} />
            <ul>
                <li><a href="#">OPCION 1</a></li>
                <li><a href="#">OPCION 2</a></li>
                <li><a href="#">OPCION 3</a></li>
                <li><a href="#">OPCION 4</a></li>                             
            </ul>
            <CartWidget/>
        </div>
    );
};

export default NavBar;
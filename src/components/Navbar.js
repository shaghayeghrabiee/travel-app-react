import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';



const Navbar = () => {

    const [click,setClick]= useState(false);
    const [button,setButton]=useState(true);

    const handleIcon=()=>{
        setClick(!click);
    }
    const closeMobileMenu=()=>{
        setClick(false);
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };
    useEffect(() => {
    showButton();
 
    }, []);

    window.addEventListener('resize', showButton);
    return ( 
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo'>
                        TRAVEL <i class="fas fa-route"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleIcon}>
                       {click ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i> } 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><Link className='nav-links' to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'><Link className='nav-links' to="/services" onClick={closeMobileMenu}>Services</Link></li>
                        <li className='nav-item'><Link className='nav-links' to="/products" onClick={closeMobileMenu}>Products</Link></li>
                        <li className='nav-item'><Link className='nav-links-mobile' to="/signUp" onClick={closeMobileMenu}>SignUp</Link></li>
                    </ul>
                     {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
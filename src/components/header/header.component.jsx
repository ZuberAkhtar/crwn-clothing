import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

//Checking git add -p command
//comment 1 
//comment 2 
//comment 3 
//comment 4

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className ='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className = 'options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser
                ?(
                    <div className='option' onClick = {()=>auth.signOut()}>SIGN OUT</div>
                ):(
                    <Link className='option' to='signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)

//hunk 2 
//hunk 3
export default Header
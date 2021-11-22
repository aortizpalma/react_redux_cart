import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to='/'>
                <h2 className={styles.navbar__logo}>Redux Shoppping Cart</h2>
            </Link>
            <Link to='/cart'>
                <div className={styles.navbar__cart}>
                    <h3 className={styles.navbar__title}>Cart</h3>
                    <img className={styles.navbar__image} src="https://image.flaticon.com/icons/svg/102/102276.svg" alt="shopping cart"/>

                    <div className={styles.navbar__counter}>1</div>
                </div>
            </Link>
            
        </div>
    );
};

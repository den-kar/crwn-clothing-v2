import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

// import './navigation.styles.scss';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
    // console.log(res);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
          {/* <div>Logo</div> */}
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop/">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );

  // return (
  //   <>
  //     <div className="navigation">
  //       <Link className="logo-container" to="/">
  //         <CrwnLogo />
  //         {/* <div>Logo</div> */}
  //       </Link>
  //       <div className="nav-links-container">
  //         <Link className="nav-link" to="/shop/">
  //           SHOP
  //         </Link>
  //         {currentUser ? (
  //           <span className="nav-link" onClick={signOutHandler}>
  //             SIGN OUT
  //           </span>
  //         ) : (
  //           <Link className="nav-link" to="/auth">
  //             SIGN IN
  //           </Link>
  //         )}
  //         <CartIcon />
  //       </div>
  //       {isCartOpen && <CartDropdown />}
  //     </div>
  //     <Outlet />
  //   </>
  // );
};

export default Navigation;

// import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { CartContext } from '../../contexts/cart.context';
// import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { signOutUser } from '../../utils/firebase/firebase.utils';

import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { selectCart } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

// import './navigation.styles.scss';
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  // const { isCartOpen } = useSelector(selectIsCartOpen);
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

  const dispatch = useDispatch();

  const signOutHandler = async () => {
    dispatch(signOutStart());
    // await signOutUser();
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

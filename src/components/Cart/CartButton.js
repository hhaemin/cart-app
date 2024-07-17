import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity || 0);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  if (cartQuantity === undefined) {
    return null;
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>내 카트</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

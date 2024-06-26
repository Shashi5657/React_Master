import { uiActions } from '../../store/ui-slice';
import { useDispatch , useSelector} from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch();
  function toggleCartHandler(){
   dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

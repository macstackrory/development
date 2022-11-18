import addItem from "../App.js"
import setCartItems from "../App.js"
import cartItems from "../App.js"
export default function FoodItem(props) {
  const item = props.item;
  return(
    <div className="FoodItem">
      <img src={item.image}></img>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p></p>
      <button onClick={() => props.setCartItems(item)}>Add to cart</button>
      <button onClick={() => props.remCartItems(item)}>Remove From cart</button>
    </div>
  );
}

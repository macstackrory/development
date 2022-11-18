import "./App.css";
import { useState } from "react";
import foodData from "./data/food-data.json";
import FoodItem from "./food/FoodItem.js"

foodData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartPrice, setcartPrice] = useState(0);
  const [cartItems, setCartItems] = useState(new Array(0));
  var [currData, setData] = useState(foodData);
  function updateCart(item) {

    console.log(item);
    setCartItems(cartItems.concat([item.name+", "]));
    setcartPrice(cartPrice + item.price)
  }
  function remCart(item) {
    var i=0;
    var curCartItems = [];
    for (i = 0; i < cartItems.length; i++) {
        if(cartItems[i]==item.name+", " ){
          console.log(cartItems);
          delete cartItems[i];
          setCartItems(cartItems.concat());
          console.log(cartItems);
          setcartPrice(cartPrice - item.price)
          break;
      }
    }
  }
  function gluten(data) {
    var newarr = [];
    for (var i = 0; i < currData.length; i++) {
      if(currData[i].filter == "glutenfree"){
        newarr.push(currData[i])
      }
    }
    console.log(newarr);
    setData(currData = newarr);
  }
  function dairy(data) {
    var newarr = [];
    for (var i = 0; i < currData.length; i++) {
      if(currData[i].filter == "dairyfree"){
        newarr.push(currData[i])
      }
    }
    console.log(newarr);
    setData(currData = newarr);
  }
  function cakes(data) {
    var newarr = [];
    for (var i = 0; i < currData.length; i++) {
      if(currData[i].type == "cake"){
        newarr.push(currData[i])
      }
    }
    console.log(newarr);
    setData(currData = newarr);
  }
  function cookies(data) {
    var newarr = [];
    for (var i = 0; i < currData.length; i++) {
      if(currData[i].type == "cookie"){
        newarr.push(currData[i])
      }
    }
    console.log(newarr);
    setData(currData = newarr);
  }
  function none(data) {
    setData(currData = foodData);
  }
  function alphabetical(data) {
    var newarr = [];
    var curr = "";
    var lastarr = [];
    for (var i = 0; i < currData.length; i++) {
      newarr[i] = currData[i].name;
    }
    newarr.sort();
    for (var j = 0; j < currData.length; j++) {
      curr = newarr[j];
      for (var k = 0; k < currData.length; k++) {
        if(currData[k].name==curr) {
          lastarr[j] = currData[k];
          break;
        }
      }
    }
    setData(currData = lastarr);
  }
  function price(data) {
    var newarr = [];
    var curr = "";
    var lastarr = [];
    for (var i = 0; i < currData.length; i++) {
      newarr[i] = currData[i].price;
    }
    newarr.sort();
    for (var j = 0; j < currData.length; j++) {
      curr = newarr[j];
      for (var k = 0; k < currData.length; k++) {
        if(currData[k].price==curr) {
          lastarr[j] = currData[k];
          break;
        }
      }
    }
    setData(currData = lastarr);
  }
  return (
    <div className="App">
      <div className="banner">
      <h1>My Bakery</h1>
      <h2>Sort by:</h2>
      <button className="filters" onClick={() => alphabetical()}>Alphabetical(A-Z)</button>
      <button className="filters" onClick={() => price()}>Price</button>
      <h2>Allergies</h2>
      <button className="filters" onClick={() => none()}>Everything!</button>
      <button className="filters" onClick={() => gluten()}>Gluten Free</button>
      <button className="filters" onClick={() => dairy()}>Dairy Free</button>
      <h2>Type:</h2>
      <button className="filters" onClick={() => none()}>Everything!</button>
      <button className="filters" onClick={() => cakes()}>Cakes</button>
      <button className="filters" onClick={() => cookies()}>Cookies</button>
      </div>
      {currData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

          <FoodItem item={item} key={index} remCartItems={remCart} setCartItems={updateCart}/> // replace with BakeryItem component

      ))}

      <div className="cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p><b>items in cart:</b></p>{cartItems}
        <p><b>total price:</b></p>{cartPrice}
      </div>
    </div>
  );
}

export default App;

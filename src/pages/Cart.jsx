import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div>

            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="pl-12 py-6 outline rounded-xl mt-10 mx-10 flex flex-col gap-2">

              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span className="font-bold">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-bold">Total Amount: ${totalAmount}</p>
                <Link to="/">
                  <button className="outline rounded-xl px-2 py-2">CheckOut Now</button>
                </Link>
              </div>

            </div>

          </div>) 
          :
          (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;


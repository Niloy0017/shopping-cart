import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>
      <div className="pl-12 pt-6 outline rounded-xl mt-10 mx-10 flex flex-col gap-2">

        <div>
          <img src={item.image} className="h-48" />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <span className="font-bold">Product Name : </span>
            <span>{item.title}</span>
          </div>

          <div>
            <span className="font-bold">Product Description : </span>
            <span>{item.description}</span>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">Price : </span>
              <span>{item.price}</span>
            </div>

            <div>
              <span className="italic">Click on below to remove </span>

              <div onClick={removeFromCart}>
                <FcDeleteDatabase className="w-12 h-16" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;


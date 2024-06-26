import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
const CartItem = () => {
  return (
    <article className="flex items-center my-4">
      <img src="" alt="" height={124} width={124} />
      <div className="space-y-3 ml-4">
        <h4 className="capitalize">TITLE</h4>
        <h4>$ PRICE</h4>
        <button className="border rounded-md text-red-600 border-red-600 px-4 py-1">
          Remove
        </button>
      </div>
      <div className="flex flex-col items-center ml-auto mr-3">
        <button>
          <IoChevronUpOutline />
        </button>
        <span>AMOUNT</span>
        <button>
          <IoChevronDownOutline />
        </button>
      </div>
    </article>
  );
};
export default CartItem;

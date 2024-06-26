import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white flex">
      <div className="container flex items-center mx-auto justify-around h-24">
        <h3 className="text-3xl font-bold">Shop</h3>
        <div className="relative">
          <MdOutlineShoppingBag className="text-5xl" />
          <span className="absolute -top-2 -right-2 bg-purple-300 rounded-full px-2">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

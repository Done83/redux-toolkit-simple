const CartContainer = () => {
  return (
    <>
      <section className="container mx-auto w-[50%] mt-28">
        <header>
          <h2 className="text-center text-2xl font-semibold">Your Cart:</h2>
        </header>
        <div className="my-4"></div>
        <footer className="flex flex-col">
          <hr />
          <div>
            <h4 className="my-4 flex justify-between mx-3">
              Total: <span>$ Total</span>
            </h4>
          </div>
          <button className="uppercase text-red-600 border border-red-600 w-[30%] mx-auto">
            clear cart
          </button>
        </footer>
      </section>
    </>
  );
};
export default CartContainer;

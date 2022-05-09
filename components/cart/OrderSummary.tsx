import {useRouter} from "next/router";

export const OrderSummary = () => {
  const router = useRouter();

  const handleOrder = () => {
    router.push("/checkout/address");
  };

  return (
    <div className="p-3 divide-y-2 divide-primary md:flex-auto md:p-4 bg-tertiary/80 text-primary">
      <span className="text-lg font-semibold md:text-xl lg:text-2xl">
        Orden
      </span>
      <div className="mt-2 mb-2">
        <div className="flex justify-between mt-2">
          <span>No. Productos</span>
          <span>12 items</span>
        </div>
        <div className="flex justify-between">
          <span>SubTotal</span>
          <span>$12.00</span>
        </div>
        <div className="flex justify-between">
          <span>Impuestos (15%)</span>
          <span>$12.00</span>
        </div>
        <div className="flex justify-between mt-2 font-bold md:text-base lg:text-xl">
          <span>Total</span>
          <span>$24.00</span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className={`relative inline-flex items-center justify-start px-4 py-3
            overflow-hidden font-medium transition-all bg-primary rounded hover:bg-white group`}
            onClick={handleOrder}
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-quaternary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-sm text-left transition-colors duration-300 ease-in-out text-tertiary md:text-base xl:text-lg group-hover:text-primary">
              Confirmar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

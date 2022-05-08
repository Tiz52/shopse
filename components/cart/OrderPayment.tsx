import Link from "next/link";
import {useRouter} from "next/router";

export const OrderPayment = () => {
  const router = useRouter();

  const handleOrder = () => {
    router.push("/checkout/address");
  };

  return (
    <div className="p-3 divide-y-2 rounded-lg shadow-md divide-tertiary md:flex-auto md:p-4 bg-tertiary/10 shadow-primary/5 text-primary">
      <span className="text-lg font-semibold md:text-xl lg:text-2xl">
        Resumen (3 productos)
      </span>
      <div className="mt-2 mb-2">
        <div className="flex justify-between mt-2">
          <span>Estado</span>
          <span>Pagado</span>
        </div>
      </div>
      <div className="mt-2 mb-2">
        <div className="flex justify-between mt-2">
          <span className="font-bold">Dirección de entrega</span>
        </div>
        <div className="flex justify-between">
          <span>Carlos Murillo Zárate</span>
        </div>
        <div className="flex justify-between">
          <span>Jr. Inca 1139 Surquillo, Lima</span>
        </div>
        <div className="flex justify-between">
          <span>Lima 12</span>
        </div>
        <div className="flex justify-between">
          <span>Perú</span>
        </div>
        <div className="flex justify-between">
          <span>+51 934086904</span>
        </div>
      </div>
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
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-quinary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-sm text-left transition-colors duration-300 ease-in-out text-secondary md:text-base xl:text-lg group-hover:text-primary">
              PayPal
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

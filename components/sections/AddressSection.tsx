import {TransitionBox} from "../ui";

export const AddressSection = () => {
  return (
    <section className="px-[24px] pt-[72px] lg:px-12 text-primary">
      <TransitionBox />
      <div className="py-6 md:py-12">
        <h1 className="text-3xl capitalize text-primary">Dirección</h1>
      </div>

      <form className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 group">
        <div className="relative z-0 flex items-end w-full h-12 border-b-2 group rounded-t-md border-primary bg-tertiary">
          <input
            type="firstname"
            name="firstname"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="firstname"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Nombre
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="lastname"
            name="lastname"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="lastname"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Apellido
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="address"
            name="address"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="address"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Dirección
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="address2"
            name="address2"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="address2"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Dirección 2 (opcional)
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="zip"
            name="zip"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="zip"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Código Postal
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="country"
            name="country"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="country"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            País
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="city"
            name="city"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="city"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Ciudad
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>

        <div className="relative z-0 flex items-end w-full h-12 border-b-2 rounded-t-md border-primary bg-tertiary group">
          <input
            type="phone"
            name="phone"
            className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="phone"
            className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
            top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
          >
            Teléfono
          </label>
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Username already
                taken!
              </p> */}
        </div>
      </form>

      <div className="flex justify-center mt-8">
        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded bg-primary hover:bg-white group">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-quinary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-sm text-left transition-colors duration-300 ease-in-out text-secondary md:text-base xl:text-lg group-hover:text-primary">
            Revisar Pedido
          </span>
        </button>
      </div>
    </section>
  );
};

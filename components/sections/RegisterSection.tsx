import {motion} from "framer-motion";
import Link from "next/link";
import {useRouter} from "next/router";

const variants = {
  hidden: {
    opacity: 1,
    height: "100%",
  },
  show: {
    height: "2%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const RegisterSection = () => {
  const router = useRouter();

  const handleClick = () => {};

  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <div className="relative flex flex-col gap-6 overflow-hidden bg-secondary">
        <motion.div
          className="absolute z-[999] left-0 top-0 w-full bg-primary"
          initial="hidden"
          animate="show"
          variants={variants}
          exit="exit"
        />
        <div className="px-6 pt-20 pb-12 mb-6">
          <h1 className="text-3xl font-bold md:text-4xl font-headline text-primary">
            BIENVENIDO
          </h1>
          <h1 className="text-3xl font-bold md:text-4xl font-headline text-tertiary">
            A SHOPSE.
          </h1>
          <p className="mt-4 text-sm md:text-base text-primary">
            Registrate para continuar!
          </p>
        </div>

        <form className="flex flex-col gap-4 px-6 md:w-[420px]">
          <div className="relative z-0 flex items-end w-full h-12 border-b-2 border-primary bg-tertiary group">
            <input
              type="name"
              name="name"
              className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
          top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
            >
              Nombre Completo
            </label>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already
              taken!
            </p> */}
          </div>
          <div className="relative z-0 flex items-end w-full h-12 border-b-2 border-primary bg-tertiary group">
            <input
              type="email"
              name="email"
              className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
          top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
            >
              Correo
            </label>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already
              taken!
            </p> */}
          </div>
          <div className="relative z-0 flex items-end w-full h-12 border-b-2 border-primary bg-tertiary group">
            <input
              type="password"
              name="password"
              className="z-[100] block w-full h-full px-2 pt-2 text-sm bg-transparent appearance-none peer:bg-red-600 focus:outline-none peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="z-[99] left-2 peer-focus:font-medium absolute text-sm text-primary  
          top-4 origin-[0] peer-focus:left-2 peer-focus:text-primary"
            >
              Contraseña
            </label>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already
              taken!
            </p> */}
          </div>
          <div className="mx-auto mt-8">
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded bg-primary hover:bg-white group"
              onClick={handleClick}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-quaternary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-sm text-left transition-colors duration-300 ease-in-out text-tertiary md:text-base xl:text-lg group-hover:text-primary">
                Registrar
              </span>
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center mb-5">
          <p className="text-sm text-center text-tertiary">
            ¿Ya tienes una cuenta?
          </p>
          <Link href="/auth/login" passHref>
            <a className="text-primary">Loguéate</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

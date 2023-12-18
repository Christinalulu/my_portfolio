import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NavHeader = () => {
  const [open, setOpen] = useState(false);
  console.log('open state:', open); 

  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Home
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                About
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Projects
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen((open) => !open)}
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                {open ? <IoClose /> : <RiMenu4Fill />}
              </button>
            </div>
          </div>

          <div className="-m-1.5 p-1.5">
            <h1 className="h-8 w-auto">Welcome</h1>
          </div>

          <div className="flex flex-1 justify-end"></div>
        </nav>

        <div className={`lg:hidden ${!open ? '' : 'block'}`} role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-1">
                <button onClick={() => setOpen((open)=> !open) } type="button">
                  <span className="sr-only">Close menu</span>
                  <IoClose />
                </button>
              </div>

              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className="h-8 w-auto">Welcome</h1>
              </a>

              <div className="flex flex-1 justify-end"></div>
            </div>
            <div className="mt-6 space-y-2">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Product
              </a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Features
              </a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Company
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavHeader;
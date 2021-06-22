import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { WindowButtons } from "../containers/OS/WindowButtons";

export default function Modal({ isOpen, toggleModal, title, content }) {
  let closeButtonRef = useRef(null);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={closeButtonRef}
          as="div"
          className="fixed inset-0 z-10 "
          onClose={toggleModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full overflow-auto align-middle transition-all transform bg-white shadow-xl ext-left h-modal max-w-8xl rounded-2xl">
                <div className="sticky top-0 z-50 flex items-center justify-center w-full p-6 text-center border-gray-200 rounded-t-2xl">
                  <Dialog.Title
                    as="h3"
                    className="items-center invisible font-bold leading-6 text-gray-900 rounded-t-lg medium"
                  >
                    {title}
                  </Dialog.Title>

                  {/* <div className="mt-4">
                    <button
                      ref={closeButtonRef}
                      type="button"
                      className="absolute inline-flex justify-center px-2 py-0.5 text-sm font-medium text-red-50 bg-closeButton border border-transparent rounded-md rounded-full left-5 top-6 hover:bg-closeButtonHover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={toggleModal}
                    >
                      X
                    </button>
                  </div> */}
                  <WindowButtons
                    closeButtonRef={closeButtonRef}
                    toggleModal={toggleModal}
                  />
                </div>
                <div className="relative">
                  <div className="text-sm text-gray-500 ">{content}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

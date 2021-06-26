import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { WindowButtons } from "../containers/OS/WindowButtons";

export default function Modal({ isOpen, toggleModal, title, content }) {
  let closeButtonRef = useRef(null);
  const [isMax, setIsMax] = useState(false);

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
              <div
                className={`inline-block w-full overflow-auto align-middle transition-all transform bg-white ${
                  !isMax ? "h-modal max-w-8xl" : "h-screen"
                } shadow-xl rounded-2xl`}
              >
                <div className="sticky top-0 z-50 flex items-center justify-center w-full p-6 text-center border-gray-200 rounded-t-2xl">
                  <Dialog.Title
                    as="h3"
                    className="items-center invisible font-bold leading-6 text-gray-900 rounded-t-lg medium"
                  >
                    {title}
                  </Dialog.Title>

                  <WindowButtons
                    closeButtonRef={closeButtonRef}
                    toggleModal={toggleModal}
                    setIsMax={setIsMax}
                    isMax={isMax}
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

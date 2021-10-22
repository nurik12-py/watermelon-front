import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PhoneIncomingIcon, PhoneMissedCallIcon } from '@heroicons/react/outline';


const CallModal = ({ isOpen = false, onClose, onAccept, onReject, caller }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => { }}
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
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg flex items-center space-x-3 font-medium leading-6 text-gray-900"
                            >
                                <p>Video Call</p>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-base text-gray-500">
                                    {caller}
                                </p>
                            </div>

                            <div className="mt-4 flex space-x-2">
                                <button onClick={() => onReject()} className="flex items-center w-full space-x-2 bg-red-50 rounded-lg p-2">
                                    <div className="bg-red-100 p-2 rounded-lg">
                                        <PhoneMissedCallIcon className="h-4 w-4 text-red-600" />
                                    </div>
                                    <span className="text-red-600">Reject</span>
                                </button>
                                <button onClick={() => onAccept()} className="flex items-center w-full space-x-2 bg-green-50 rounded-lg p-2">
                                    <div className="bg-green-100 p-2 rounded-lg ">
                                        <PhoneIncomingIcon className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-green-600">Accept</span>
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CallModal;
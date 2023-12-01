import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormLabel from "./FormLabel";
import { ModalProps } from "../type/type";
import FormControl from "./FormControl";
import { useAddUserForm } from "../../module/users/hooks/useAddUserForm";
import FormError from "./FormError";
import useAddUser from "../../module/users/hooks/useAddUser";

const Modal = ({ setOpen, open, onCloseModal }: ModalProps) => {
  const cancelButtonRef = useRef(null);
  const { mutate: createUserFn } = useAddUser({ onCloseModal });
  const { handleSubmit, values, errors, handleChange } = useAddUserForm(
    {
      id: "",
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
    },
    () => createUserFn(values)
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FormLabel label="Id" />
                        <FormControl
                          onChange={handleChange}
                          name="id"
                          value={values.id}
                          placeholder="Enter Your Id"
                          className={errors.id ? "is-error" : ""}
                        />
                        <FormError error={errors.id} />
                      </div>
                      <div>
                        <FormLabel label="Name" />
                        <FormControl
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          placeholder="Enter Your First Name"
                          className={errors.firstname ? "is-error" : ""}
                        />
                        <FormError error={errors.firstname} />
                      </div>
                      <div>
                        <FormLabel label="Last Name" />
                        <FormControl
                          onChange={handleChange}
                          name="lastname"
                          value={values.lastname}
                          placeholder="Enter Last Name"
                          className={errors.lastname ? "is-error" : ""}
                        />
                        <FormError error={errors.lastname} />
                      </div>
                      <div>
                        <FormLabel label="Email" />
                        <FormControl
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email Id"
                          className={errors.email ? "is-error" : ""}
                        />
                        <FormError error={errors.email} />
                      </div>
                      <div>
                        <FormLabel label="Phone" />
                        <FormControl
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="Enter Your Phone Number"
                          className={errors.phone ? "is-error" : ""}
                        />
                        <FormError error={errors.phone} />
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                        // onClick={handleSaveForm}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default Modal;

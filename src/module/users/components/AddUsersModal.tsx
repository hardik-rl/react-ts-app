import { useRef } from "react";
import FormControl from "../../../shared/components/FormControl";
import FormError from "../../../shared/components/FormError";
import FormLabel from "../../../shared/components/FormLabel";
import useAddUser from "../hooks/useAddUser";
import { useAddUserForm } from "../hooks/useAddUserForm";
import { AddUsersModalProps } from "../types";

const AddUsersModal = ({ onCloseModal, setOpen, refetch }: AddUsersModalProps) => {
  const cancelButtonRef = useRef(null);
  const { mutate: createUserFn } = useAddUser({ onCloseModal, refetch });
  const { handleSubmit, values, errors, handleChange } = useAddUserForm(() =>
    createUserFn(values)
  );
  
  return (
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
  );
};

export default AddUsersModal;

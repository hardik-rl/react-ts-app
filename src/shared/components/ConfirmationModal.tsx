import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../module/users/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ConfirmationModalProps } from "../type/type";

const ConfirmationModal = ({ closeModal, selectedUser }: ConfirmationModalProps) => {
  const queryClient = useQueryClient();
  const { mutate: deleteAdminFn } = useMutation((id: any) => deleteUser(id), {
    onSuccess: () => {
      toast(
        `${
          selectedUser.firstname ? selectedUser.firstname : selectedUser.id
        } Users Deleted Successfully`,
        {
          type: "success",
        }
      );
      queryClient.setQueryData(["get-user"], (previousdata: any) => {
        const filterData = previousdata.data.filter((user: any) => {
          return user.id !== selectedUser.id;
        });
        previousdata.data = filterData;
        return previousdata;
      });
      closeModal();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message || "Something went wrong", {
        type: "error",
      });
    },
  });
  const deleteUserOnClick = () => {
    deleteAdminFn(selectedUser.id);
  };
  return (
    <div>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <TrashIcon className="w-5 h-5 text-red-500" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
          Delete User {selectedUser === null ? selectedUser.id : selectedUser.firstname}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to Delete User? All of your data will be
              permanently removed from our servers forever. This action cannot
              be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3">
        <Button
          variant="secondary"
          type="button"
          title="No"
          onClick={closeModal}
        />
        <Button
          variant="danger"
          type="button"
          title="Yes"
          onClick={deleteUserOnClick}
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;

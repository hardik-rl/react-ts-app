import { SetStateAction, useState } from "react";
import useUsers from "../hooks/useUsers";
import BackArrow from "../../../shared/components/BackArrow";
import Button from "../../../shared/components/Button";
import Modal from "../../../shared/components/Modal";
import CommonModal from "./CommonModal";
import ConfirmationModal from "../../../shared/components/ConfirmationModal";
import { useNavigate } from "react-router-dom";
import React from "react";
import Table from "../../../shared/components/Table";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

const Users = () => {
  const { data, isLoading } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const history = useNavigate();

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const editModalOnClick = (item: SetStateAction<null>) => {
    setSelectedUser(item);
    setIsModalOpen(true);
  };

  const deleteModalOnClick = (item: SetStateAction<null>) => {
    setSelectedUser(item);
    setDeleteModal(true);
  };
  const tableHeaders = ["Id", "Name", "Last Name", "Email", "Phone", "Actions"];
  return (
    <>
      <div>
        <Table
          tableHeaders={tableHeaders}
          tableBody={data?.data || []}
          onEdit={editModalOnClick}
          isAction={(item: any) => (
            <>
              <button onClick={() => editModalOnClick(item)}>
                <PencilSquareIcon className="w-5 h-5" />
              </button>
              <button className="mx-4" onClick={() => deleteModalOnClick(item)}>
                <TrashIcon className="w-5 h-5 text-red-500" />
              </button>
            </>
          )}
          deleteModalOnClick={deleteModalOnClick}
        />

        {/* <div className="flex justify-between">
          <BackArrow onClick={() => history("/")} />
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              type="button"
              variant="primary"
              title="+ Add User"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div> */}
      </div>
      <Modal open={isModalOpen} setOpen={closeModal}>
        <CommonModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedUser={selectedUser}
        />
      </Modal>
      <Modal open={deleteModal} setOpen={() => setDeleteModal(false)}>
        <ConfirmationModal
          selectedUser={selectedUser}
          closeModal={() => setDeleteModal(false)}
        />
      </Modal>
    </>
  );
};
export default Users;

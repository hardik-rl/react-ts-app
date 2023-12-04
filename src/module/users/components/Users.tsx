import { SetStateAction, useState } from "react";
import useUsers from "../hooks/useUsers";
import BackArrow from "../../../shared/components/BackArrow";
import Button from "../../../shared/components/Button";
import Modal from "../../../shared/components/Modal";
import CommonModal from "./CommonModal";
import UsersList from "./UsersList";

const Users = () => {
  const { data } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user: SetStateAction<null>) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <BackArrow />
      <div className="px-4 sm:px-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Users
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              type="button"
              variant="primary"
              title="+ Add User"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <UsersList openModal={openModal} data={data} />
      </div>
      <Modal open={isModalOpen} setOpen={closeModal}>
        <CommonModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedUser={selectedUser}
        />
      </Modal>
    </>
  );
};
export default Users;

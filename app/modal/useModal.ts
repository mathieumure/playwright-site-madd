type ModalManagement = {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: Ref<boolean>;
};

export const provideModal = (): void => {
  const isModalOpen = ref(false);
  const openModal = () => {
    document?.body.classList.add("modal-opened");
    isModalOpen.value = true;
  };
  const closeModal = () => {
    document?.body.classList.remove("modal-opened");
    isModalOpen.value = false;
  };

  provide("modal", { isModalOpen, openModal, closeModal });
};

export const useModal = (): ModalManagement => {
  return inject<ModalManagement>("modal", {
    isModalOpen: ref(false),
    openModal: () => {},
    closeModal: () => {},
  });
};

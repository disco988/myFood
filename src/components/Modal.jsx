import { useEffect, useRef } from "react";

const Modal = ({ children, open, className = "" }) => {
  useEffect(() => {
    const dialog = useRef();

    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => {};
  }, [open]);

  return (
    <dialog ref={dialog} className={`modal${className}`}>
      {children}
    </dialog>
  );
};

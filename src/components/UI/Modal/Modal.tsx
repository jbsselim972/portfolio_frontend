import { ReactNode } from "react";
import { createPortal } from "react-dom";

import "@/styles/Modal.css";

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Modal = ({ children, open, onClose, className = "" }: Props) => {
  if (!open) return null;
  return createPortal(
    <>
      <div className="app__overlay " onClick={onClose}></div>
      <div className={`app__modal ${className}`}>
        {children}
        <div className="app__modal-actions">
          <button onClick={onClose} className="app__modal-close">
            Close
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal") as Element
  );
};

export default Modal;

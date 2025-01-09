import style from "./Modal.module.css";
import { XCircleIcon } from "@heroicons/react/24/outline";

function Modal({ title, children, onOpen, open }) {
  if (!open) return null;
  return (
    <div>
      <div className={style.backdrop} onClick={() => onOpen(false)}></div>
      <div className={style.modal}>
        <div className={style.modal__header}>
          <h2 className={style.title}>{title}</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className={`${style.icon} ${style.close}`} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

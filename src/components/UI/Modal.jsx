import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      }
    };
  });
  return createPortal(
    <div>
      <dialog ref={dialog} className='h-44 w-80 rounded-md px-4 shadow-md backdrop:bg-black/50'>
        <div className='flex h-[63%] w-full  items-center justify-center overflow-auto text-sm'>{children}</div>
        <form className='flex h-[27%] w-full items-end' method='dialog'>
          <Button content={buttonCaption} size='fit'>
            {buttonCaption}
          </Button>
        </form>
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
});

export default Modal;
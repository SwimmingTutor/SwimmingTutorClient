import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

const ModalDeleteAccount = forwardRef(({ title, children, buttonCaption1, buttonCaption2 }, ref) => {
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
      <dialog ref={dialog} className='w-80 rounded-md px-8 py-6 shadow-md backdrop:bg-black/50'>
        <h2 className='mb-4 text-center text-lg font-bold'>{title}</h2>
        <div className='mb-6 text-center text-sm text-gray-600'>{children}</div>
        <form className='flex justify-around' method='dialog'>
          <Button content={buttonCaption1} size='w-1/4' type='cancel'>
            {buttonCaption1}
          </Button>
          <Button content={buttonCaption2} size='w-1/4' onClick={() => dialog.current.close()}>
            {buttonCaption2}
          </Button>
        </form>
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
});

export default ModalDeleteAccount;
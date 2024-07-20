import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from './UI/Button.jsx';

export const ModalTerms = forwardRef(({ children, buttonCaption }, ref) => {
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
      <dialog
        ref={dialog}
        className='relative max-h-80 min-h-44 w-80 rounded-md px-4 pt-4 shadow-md backdrop:bg-black/50'
      >
        <div className='flex w-full items-center justify-center overflow-auto text-sm'>{children}</div>
        <div className='sticky bottom-0 h-[50px] w-full bg-white'>
          <div className=''>
            <form className='flex w-full items-end bg-white' method='dialog'>
              <Button content={buttonCaption} size='fit'>
                {buttonCaption}
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
});

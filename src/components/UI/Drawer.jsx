import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

const Drawer = forwardRef(({ children, title }, ref) => {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  useImperativeHandle(ref, () => {
    return {
      draw() {
        toggleDrawer();
      }
    };
  });
  return createPortal(
    <div className='relative'>
      <div
        className={`duration-400 fixed bottom-0 left-0 z-[60] h-fit max-h-60 min-h-60 w-full bg-transparent shadow-lg transition-transform ${
          isDrawerOpen ? 'translate-y-0 transform' : 'translate-y-full transform'
        }`}
      >
        <div
          className='container relative flex h-full w-1/3 
                                flex-col justify-start rounded-t-lg
                                shadow-lg lg:w-app'
        >
          <div
            className='sticky top-0 
                                        h-full w-1/3 rounded-t-lg bg-white px-4 py-3 text-center
                                        text-base font-semibold text-primary lg:w-app'
          >
            {title}
          </div>
          {/* Drawer content */}
          {children}
        </div>
      </div>

      {isDrawerOpen && (
        <div className='fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-50' onClick={toggleDrawer} />
      )}
    </div>,
    document.getElementById('drawer-root')
  );
});

export default Drawer;
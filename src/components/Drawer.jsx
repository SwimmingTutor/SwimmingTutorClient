import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

export const Drawer = forwardRef(({ children, title }, ref) => {
    let [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen((prevState) => !prevState);
      };

    useImperativeHandle(ref, ()=>{
        return {
            draw(){
                toggleDrawer();
            }
        }
    })
    return createPortal(
        (<div className="relative">
            <div
                className={`fixed bottom-0 left-0 w-full h-fit min-h-60 max-h-60 bg-transparent shadow-lg z-[60] transition-transform duration-400 ${isDrawerOpen ? 'transform translate-y-0' : 'transform translate-y-full'
                    }`}
            >
                <div className="container relative w-app h-full 
                                flex flex-col justify-start
                                rounded-t-lg shadow-lg">
                    <div className='sticky top-0 
                                        w-app h-full px-4 py-3 bg-white rounded-t-lg
                                        text-center text-base font-semibold text-primary'>{title}</div>
                    {/* Drawer content */}
                    {children}

                </div>
            </div>

            {isDrawerOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                    onClick={toggleDrawer}
                />
            )}
        </div>), document.getElementById('drawer-root')
    );
});
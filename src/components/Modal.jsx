import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"
import { Button } from "./Button.jsx";

export const Modal = forwardRef(({ children, buttonCaption }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <div>
            <dialog
                ref={dialog}
                className="w-80 h-44 backdrop:bg-black/50 px-4 rounded-md shadow-md"
            >
                <div className="w-full h-[63%] flex items-center justify-center text-sm">
                    {children}
                </div>
                <form className="w-full h-[27%] flex items-end" method="dialog">
                    <Button
                        content={buttonCaption}
                        size='fit'
                    >{buttonCaption}</Button>
                </form>
            </dialog>
        </div>,
        document.getElementById('modal-root')
    )
});
import { useState } from "react";

export const SelectDrawerOption = ({content}) => {
    const [ringStyle, setRingStyle] = useState("");
    function handleClickDiv(){
        setRingStyle(preRingStyle => "ring-2 ring-inset ring-primary-800");        
    }
    return (
        <div className="w-10/12 col-span-full" onClick={handleClickDiv}>
            <div className="mb-4">
                <span
                    type="text"
                    className={`block w-full rounded-md border-0 px-3 py-2.5
                    text-zinc-500 sm:text-sm sm:leading-6 text-center
                    shadow-sm ring-1 ring-inset ring-gray-300 cursor-pointer ${ringStyle}`}
               >{content}</span>
            </div>
        </div>
    )
}
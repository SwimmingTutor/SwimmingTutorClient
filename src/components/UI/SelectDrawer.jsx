import { forwardRef, useState } from "react"
import Drawer from "./Drawer.jsx"
import SelectDrawerOption from "./SelectDrawerOption.jsx"

const SelectDrawer = forwardRef((props, ref) => {
    const [selectedDrawOption, setSelectedDrawOption] = useState(-1);
    const selectOptions = [...props.options]

    function handleSelect(selectedOption){
        console.log(selectedOption);
        setSelectedDrawOption(selectedOption);
    }
    return (
        <Drawer {...props} ref={ref}>
            <div className="w-full h-52 overflow-auto pb-4 bg-white flex flex-col justify-between items-center">
                {
                    selectOptions.map((item, index)=>(
                        <SelectDrawerOption 
                            key={index} 
                            content={item}
                            optionIndex={index}
                            isActive={selectedDrawOption === index}
                            onSelect={handleSelect}    
                        />
                    ))
                }
            </div>
        </Drawer>
    )
})
export default SelectDrawer;
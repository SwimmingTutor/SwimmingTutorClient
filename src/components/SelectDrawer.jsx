import { Drawer } from "./Drawer.jsx"
import { SelectDrawerOption } from "./SelectDrawerOption.jsx"

export const SelectDrawer = (props) => {
    const selectOptions = [...props.options]
    return (
        <Drawer {...props}>
            <div className="w-full h-52 overflow-auto pb-4 bg-white flex flex-col justify-between items-center">
                {
                    selectOptions.map((item, index)=>(
                        <SelectDrawerOption key={index} content={item}/>
                    ))
                }
            </div>
        </Drawer>
    )
}
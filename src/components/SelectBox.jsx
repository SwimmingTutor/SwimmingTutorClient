import { SelectOption } from "./SelectOption.jsx"
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

export const SelectBox = ({ label="label", selectOption=["option1","option2","option3","option4","option5"] }) => { // TODO: label, selectOption의 default 삭제
  const [selected, setSelected] = useState(selectOption[0]);

      return (
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Label className="block text-sm font-semibold leading-6 ">{label}</Label>
              <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate text-zinc-700">{selected}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </ListboxButton>
    
                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {selectOption.map((item, index) => (
                    <SelectOption
                      key={item} 
                      value={selectOption[index]}/>
                  ))}
                </ListboxOptions>
              </div>
            </>
          )}
        </Listbox>
      )
    }
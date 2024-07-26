import SelectOption from './SelectOption.jsx';
import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const SelectBox = ({
  label = 'label',
  selectOption = ['option1', 'option2', 'option3', 'option4', 'option5'],
  onChange
}) => {
  // TODO: label, selectOption의 default 삭제
  const [selected, setSelected] = useState(selectOption[0]);

  const handleChange = value => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className='w-full'>
      <Listbox value={selected} onChange={handleChange}>
        {({ open }) => (
          <>
            <Label className='block text-sm font-semibold leading-6'>{label}</Label>
            <div className='relative mt-2'>
              <ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6'>
                <span className='flex items-center'>
                  <span className='ml-3 block truncate text-zinc-700'>{selected}</span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
                </span>
              </ListboxButton>

              {open && (
                <ListboxOptions
                  className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm'
                  transition
                >
                  {selectOption.map((item, index) => (
                    <SelectOption key={item} value={selectOption[index]} onChange={() => handleChange(item)} />
                  ))}
                </ListboxOptions>
              )}
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SelectBox;

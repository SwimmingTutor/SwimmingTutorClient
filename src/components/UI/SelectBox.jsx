import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Label, placeholder } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const SelectBox = ({ label, selectOption, onChange, value }) => {
  const defaultValue = value || selectOption[0];
  const [selected, setSelected] = useState(defaultValue);
  const placeholder = placeholder || '선택해주세요';
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
              <ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6'>
                <span className='flex items-center'>
                  <span className='ml-3 block truncate text-zinc-700'>
                    {selected || placeholder}
                  </span>
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
                    <ListboxOption
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? 'bg-primary-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item}</span>
                          {selected ? (
                            <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
                              <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
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

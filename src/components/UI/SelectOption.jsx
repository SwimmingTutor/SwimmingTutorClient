import { ListboxOption } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/20/solid"

const SelectOption = ({value}) => {
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    return (
        <ListboxOption
            className={({ focus }) =>
                classNames(
                    focus ? 'bg-primary-400 text-white' : '',
                    !focus ? 'text-gray-900' : '',
                    'relative cursor-default select-none py-2 pl-1 pr-9',
                )
            }
            value={value}
        >
            {({ selected, focus }) => (
                <>
                    <div className="flex items-center">
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                            {value}
                        </span>
                    </div>

                    {selected ? (
                        <span
                            className={classNames(
                                focus ? 'text-white' : 'text-primary',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                        >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                    ) : null}
                </>
            )}
        </ListboxOption>
    )
}
export default SelectOption;
import { CheckIcon } from "@heroicons/react/20/solid";

const SelectOptions = ({ value, isSelected, onClick, children }) => {
  return (
    <div
      className={`relative cursor-default select-none py-2 pl-10 pr-4 ${
        isSelected ? 'bg-primary-400 text-white' : 'text-gray-900 hover:bg-primary-400 hover:text-white'
      }`}
      onClick={onClick}
    >
      <span className={`block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>{children}</span>

      {isSelected ? (
        <span className={'text-white absolute inset-y-0 right-0 flex items-center pr-4'}>
          <CheckIcon className='h-5 w-5' aria-hidden='true' />
        </span>
      ) : null}
    </div>
  );
};

export default SelectOptions;

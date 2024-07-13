// label 도 같이
export const InputText = ({ label="label", placeholder="placeholder", defaultValue=undefined }) => { // TODO: default 제거
    return (
        <div className="col-span-full">
            <label htmlFor={label} className="block text-sm font-semibold leading-6">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name={label}
                    id={label}
                    autoComplete={label}
                    placeholder={placeholder}
                    defaultValue={defaultValue&&defaultValue}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-zinc-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-300 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}